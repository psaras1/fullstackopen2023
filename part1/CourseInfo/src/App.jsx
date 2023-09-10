const App = () => {
  const Header =(props)=>{
    return(
      <div><p>{props.course}</p></div>
    )
  }
  const Contnet=(props)=>{
    return(
      <div>
        <p>{props.part}{props.exercises}</p>
      </div>
    )
  }
  const Total=(props)=>{
    return(
      <div>
        <p>{props.total}</p>
      </div>
    )
  }
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      
      <Contnet part={part1} exercises={exercises1}/>
      <Contnet part={part2} exercises={exercises2}/>
      <Contnet part={part3} exercises={exercises3}/>

      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App