import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(10))

  const getMax = () =>{
    return votes.indexOf(Math.max(...votes));
  }

  const generateNum = () => {
    var num = Math.floor(Math.random() * 8);
    console.log(num);

    setSelected(num);
  }
  const castVote = () => {
    const newArr = [...votes];
    newArr[selected] = newArr[selected] + 1;
    setVotes(newArr);
  }

  const Title = (props) => {
    return(
      <h1>{props.name}</h1>
    )
  }



  return (
    <div>
      <Title name="Anecdote of the day"/>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={castVote}>vote</button>
      <button onClick={generateNum}>next anecdote</button>
      <Title name="Anecdote with most votes"/>
      {anecdotes[getMax()]}
    </div>
  )
  }





export default App