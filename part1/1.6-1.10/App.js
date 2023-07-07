import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState} from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () =>{
    setGood(good + 1)
  }
  const incrementNeutral = () =>{
    setNeutral(neutral + 1)
  }
  const incrementBad = () =>{
    setBad(bad + 1)
  }

  return(
    <div>
      <Title name = "give feedback" />
      <button onClick={incrementGood}>good</button>
      <button onClick={incrementNeutral}>neutral</button>
      <button onClick={incrementBad}>bad</button>
      <Title name = "statistics" />
      <Statistics good = {good} neutral = { neutral} bad = {bad} />
    </div>
  )
}

const Statistics = (props) => {
  if ((props.good + props.neutral + props.bad) == 0){
    return(
      <div>No feedback given</div>
    )
  }else{
    var total = (props.good + props.neutral + props.bad)
    var value = (props.good) / total + "%"
    return(
      <div>
      <StatisticLine text = "good" value = {props.good} />
      <StatisticLine text = "neutral" value = { props.neutral} />
      <StatisticLine text = "bad" value = {props.bad} />
      <StatisticLine text = "all" value = {total} />
      <StatisticLine text = "positive" value = {value} />
      </div>
      )
  }
}


const Title = (props) => {
  return(
    <h1>{props.name}</h1>
  )
}



const StatisticLine = (props) => {
  return(
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
  )
}

export default App