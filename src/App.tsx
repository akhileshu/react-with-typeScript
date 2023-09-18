import {useState} from 'react'
import Box from "./Box";

function App() {
  const [value,setValue]=useState<string>("")
  return (
    <>
      <Box label="name" value={value} setter={setValue} />
    </>
  );
}

export default App;
