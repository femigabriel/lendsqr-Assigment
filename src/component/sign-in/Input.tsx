import React from 'react'
type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  className: string
}
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event)
}
export const Input = ({value, className, placeholder}: InputProps) => {
  return (
    <div>
      <input className={className} type="text" value={value}  placeholder={placeholder}  onChange={handleInputChange} />
    </div>
  )
}
