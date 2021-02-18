import React from 'react'

export default (props) => {
  return(
    <>
      <h2>Os filhos</h2>
      <div>
        {props.children}
      </div>
    </>
  )
}