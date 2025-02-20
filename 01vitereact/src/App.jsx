
import Chai from "./chai"

function App() {
  const usename = "CAC"
  return (
    <>
    <Chai/>
    <h1>heelooo world {usename} </h1>  {/*we cannot do any expression or calculation in the { }, only the evaluated expression will come inside it */}
    </>
  )
}

export default App
