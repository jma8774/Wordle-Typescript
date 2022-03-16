import { useState, useEffect, useRef } from 'react';
import useArray from './useArray';
import useAlphabet from './useAlphabet';
import useLog from './useLog';

const MAX_GUESSES = 6
const WORDLE_LEN = 5
const initHistory = (): CharColor[][] => {
  let history: CharColor[][] = []
  for(let i = 0; i < MAX_GUESSES; i ++) {
    history.push([])
    for(let j = 0; j < WORDLE_LEN; j ++) {
      history[i].push( {ch: '_', color: 'init'} )
    }
  }
  return history
}

// Returns random integer from [a, b]
const randomInt = (start: number, end: number): number => {
  return start + Math.floor(Math.random() * (end - start + 1))
}


interface CharColor {
  ch: string
  color: string
}

const useGame = () => {
  console.log("log: render useGame")
  const [row, setRow] = useState<number>(0)
  const [col, setCol] = useState<number>(0)
  const [wordle, setWordle] = useState<string>('')
  const alphabet = useAlphabet()
  const history = useArray<CharColor[]>(initHistory())
  const [status, setStatus] = useState<string>('ongoing')
  const answers = useRef<string[]>([])
  const words = useRef<Set<string>>(new Set())

  useLog('log: history: ', history.data)
  useLog('log: alphabet: ', alphabet.alphabet)

  useEffect(() => {
    // Function to read my text file from the 'public' folder
    const parseTextFile = (filename: string): Promise<string[]> => {
      return fetch(`${process.env.PUBLIC_URL}/${filename}`)
      .then((res) => res.text())
      .then((text) => {
        return text.split(/\r?\n/)  // Split by /r/n on windows or /n on Unix using regex
      })
    }

    // Parse 2 textfiles for possible answers + possible word guesses
    const fetchWords = async (): Promise<void> => {
      const answersArr = await parseTextFile('answers.txt')
      const wordsArr = await parseTextFile('words.txt')
      answers.current = answersArr
      words.current = new Set(wordsArr.concat(answersArr))
    }

    // Pick a random wordle after fetching our words + answers
    fetchWords()
    .then(() => {
      const index = randomInt(0, answers.current.length)
      setWordle(answers.current[index])
    })
  }, [])
  
  const newGame = (): void => {
    console.log("started new game")
    const index = randomInt(0, answers.current.length)  // Get a random index
    setWordle(answers.current[index]) // Pick a random wordle
    setCol(0) // Reset col
    setRow(0) // Reset row
    history.setData(initHistory()) // Reset history
    alphabet.reset() // Reset alphabet
    setStatus('ongoing')  // Reset status
  }

  const submitGuess = (): void => {
    if(status !== 'ongoing')
      return
    const curWord = history.data[row].map(x => x.ch).join('')
    if(words.current.has(curWord)) {
      history.update(row, getCharColors(curWord))  // Update row { guesses } of our history with new guess
      setRow(row + 1) // Increment guess count
      setCol(0) // New row, reset col back to 0
      if(curWord === wordle) // Check if game is over
        setStatus('win')
      else if(row+1 === MAX_GUESSES)
        setStatus('lose')
    }
  }

  const handleBackspace = (): void => {
    if(status !== 'ongoing' || col === 0)
      return
    const newRow = history.data[row].slice()
    newRow[col-1] = { ch: '_', color: 'init'}
    history.update(row, newRow)
    setCol(col - 1)
  }

  const handleChar = (ch: string): void => {
    if(status !== 'ongoing' || col >= WORDLE_LEN)
      return
    const newRow = history.data[row].slice()
    newRow[col] = { ch: ch, color: 'init'}
    history.update(row, newRow)
    setCol(col + 1)
  }

  // Input is the current guess
  // Will update the alphabet with green/yellow/black colors and display the new word after
  const getCharColors = (guess: string): CharColor[] => {
    let wordColors: CharColor[] = []
    let wordleSet = new Set(wordle)

    // Iterate through each character of the guess word
    for(let i = 0; i < guess.length; i ++) {
      const ch: string = guess[i]
      if(ch === wordle[i]) {  // Character at index i of guess is same as character of wordle
        wordColors.push( { ch: ch, color: 'success' } )
        alphabet.updateSuccess(ch)
      }
      else if(wordleSet.has(ch)) {  // Otherwise, check if guess char is a char in the wordle
        wordColors.push( { ch: ch, color: 'almost' } )
        alphabet.updateAlmost(ch)
      }
      else {  // Otherwise, mark the character as 'never' possible
        wordColors.push( { ch: ch, color: 'never' } )
        alphabet.updateNever(ch)
      }
    }
    return wordColors
  }

  return { row, wordle, history, alphabet, status, newGame, submitGuess, handleBackspace, handleChar } as const
}

export default useGame;