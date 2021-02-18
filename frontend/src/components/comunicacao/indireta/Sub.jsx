import React from 'react'

export default (props) => {

  function botaoClicado(){
    props.onClicar(Math.random())
  }

  return(
    <div>
        <button onClick={botaoClicado}>Alterar</button>   
    </div>
  )
}