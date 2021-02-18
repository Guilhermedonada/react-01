import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIF'
import Card from './components/layout/Card'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import './App.css'

export default (props) => {
  return (
    <div className="App">
       <Card titulo="08 - Comunicação indireta (passando paramentros filho pro pai)" color="#FH2900">
        <Super></Super>
      </Card>
       <Card titulo="07 - Comunicação direta (passando parametros pai pro filho)" color="#FB2900">
        <Pai  sobrenome="Silva"></Pai>
      </Card>
       <Card titulo="06 - Condicional com IF" color="#FA6900">
        <CondicionalComIf numero={10}></CondicionalComIf>
      </Card>
      <Card titulo="05 - Condicional"  color="#E9466F">
        <Condicional numero={11}></Condicional>
      </Card>
       <Card titulo="04 - Repetição" color="#E9426F">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="03 - Componente com parametro" color="#E9412F"> 
        <ComFilhos>
          <ul>
            <li>Actus</li>
            <li>Poctuis</li>
            <li>Aramis</li>
            <li>Dartanha</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="02 - Componente com parametro" color="#E9466F">
        <ComParametro titulo="opa" subtitulo="epa"></ComParametro>
      </Card>
      <Card titulo="01 - Primeiro Componente" color="#E5666F">
        <Primeiro></Primeiro>
      </Card>
  </div>
  )
}