import React from 'react'

const InputComponent = (props) => {
  return (
    <input required className={props.className}  value={props.value} name={props.name} onChange={props.onChanged} type={props.type} placeholder={props.placeholder}></input>
  )
}

export default InputComponent