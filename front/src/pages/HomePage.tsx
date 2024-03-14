import { ChangeEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'

export const HomePage = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(false)
  const [helperText, setHelperText] = useState<null | string>(null)
  const [isFocus, setIsFocus] = useState(false)

  console.log(isFocus)
  const handleClick = () => {
    console.log(inputValue)
    setHelperText('Min of characters is 6')
    setInputError(!inputError)
  }

  return (
    <div>
      <h1>HomePage</h1>
      <TextField
        type='password'
        label='Your password'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        error={inputError}
        // onFocus={handleFocus}
        onFocus={(e) => setIsFocus(true)}
        helperText={helperText}
      />
      <Button onClick={handleClick}>Send</Button>
    </div>
  )
}
