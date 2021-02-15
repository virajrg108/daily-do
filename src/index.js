import * as React from "react"
import './style';
import Appx from './components/app';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Appx />
    </ChakraProvider>
  )
}

export default App;
