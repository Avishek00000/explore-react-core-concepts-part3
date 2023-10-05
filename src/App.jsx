import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert( "button clicked" )
  }
  const handleClick2 = () =>{
    alert("button clicked 2")
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert ("button Clicked 3")}}>Click3</button>
    </>
  )
}

export default App
