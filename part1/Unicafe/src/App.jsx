//unicafe part1

import { useState } from 'react'

const Header=props=><h1>{props.name}</h1>

const StatisticsLine=(props)=>{
  if(props.text === 'Positive')
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} %</td>
    </tr>
  )
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} </td>
    </tr>
  )
}

const Statistics=(props)=>{
  const average = props.feedback/props.total
  const positive = (props.good/props.total)*100
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral
  const total= props.total
  if(props.total === 0){
    return(
      <div>No feedback given</div>
    )
    }
  return(
      <table>
        <tbody>
          <StatisticsLine text='Good' value = {good}/>
          <StatisticsLine text='Neutral' value = {neutral}/>
          <StatisticsLine text='Bad' value = {bad}/>
          <StatisticsLine text='All' value={total}/>
          <StatisticsLine text='Average' value = {average}/>
          <StatisticsLine text='Positive' value = {positive}/>
        </tbody>
    </table>

  )
  
}



const Button=(props)=>{
  return(
    <button onClick={props.click}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedback,setFeedback] = useState(0)
  const [total,setTotal]=useState(0)
  const [selected,setSelect]=useState(0)

  

const updateGood=()=>{
  const updateGood=good+1
  setGood(updateGood)
  const updateFeedback = feedback+1
  setFeedback(updateFeedback)
  setTotal(total+1)
}
    
const updateNeutral=()=>{
  const updateNeutral=neutral+1
  setNeutral(updateNeutral)
  setTotal(total+1)
}

const updateBad=()=>{
  const updateBad=bad+1
  setBad(updateBad)
  const updateFeedback = feedback-1
  setFeedback(updateFeedback)
  setTotal(total+1)
}

const Zero=()=>{
  setFeedback(0)
  setGood(0)
  setBad(0)
  setNeutral(0)
  setTotal(0)
}

  return (
    <div>
      <Header name='Give Feedback'/>
      <Button click = {updateGood} text='Good'/>
      <Button click = {updateNeutral} text='Neutral'/>
      <Button click = {updateBad} text='Bad'/>
      
      <Header name='Statistics'/>
      <Statistics feedback={feedback} total={total} good={good} bad={bad} neutral={neutral}/>
      
      <p><button onClick={Zero}>Reset</button></p>

   


    </div>
  )
}

export default App