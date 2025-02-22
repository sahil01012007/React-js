import { useState } from "react"

function App() {
  const [colour, setColour] = useState("olive")

  // onClick either expects a function or a reference to a function i.e 
  // onClick={setColour} or onClick{() => setColour("red")} 
  // in the first method we can't pass parameter so 2nd method is choosen
  // onClick={setColour("red")}, this is inncorrect becz it pass the returned value of the function(setColour) to the onClick but it wants a function or a reference to a function


  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: colour}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-amber-200 px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColour("red")}
           className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xl"
          style={{backgroundColor: "red"}}>
            Red
          </button>
          <button
          onClick={() => setColour("green")}
           className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xl"
          style={{backgroundColor: "green"}}>
            Green
          </button>
          <button 
          onClick={() => setColour("blue")}
          className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xl"
          style={{backgroundColor: "blue"}}>
            blue
          </button>
          <button 
          onClick={() => setColour("yellow")}
          className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xl"
          style={{backgroundColor: "yellow"}}>
            yellow
          </button>
          <button 
          onClick={() => setColour("black")}
          className="outline-none px-4 py-1 rounded-full text-amber-50 shadow-2xl"
          style={{backgroundColor: "black"}}>
            black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
