import { useState } from 'react'
import './App.css'

const paragragh = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reprehenderit velit molestias ducimus laboriosam impedit dolorem, commodi excepturi similique sapiente eligendi, accusamus numquam quia a, consequuntur iure eos. Neque, perspiciatis!" 

function App() {
  const [expand, setExpand] = useState<boolean>(false);
  // const [text, setText] = useState<string>(() => {
  //     if(paragragh.length > 20){
  //       return paragragh.slice(0, 20);
  //     } else{
  //       return paragragh;
  //     }
  // })
  const handleExpand = () => {
    setExpand((prev) => !prev);
  }
  
  return (
    <div>
      <h1>Lets check toggle visibility!</h1>
      <div>
        {!expand ? `${paragragh.slice(0, 20)}...` : paragragh}
        <button onClick={handleExpand} style={{border: "none", cursor: "pointer", background: "none", fontWeight: "bold"}}>{!expand ? "show more" : "show less"}</button>
      </div>
    </div>
  )
}

export default App
