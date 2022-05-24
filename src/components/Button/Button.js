import React from 'react'

const Button=(props)=> {

  console.log('Button '+props.children+' running');
  return (
    <button type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
  )
}

export default React.memo(Button);