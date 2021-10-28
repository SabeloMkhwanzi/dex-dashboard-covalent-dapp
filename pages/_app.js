import { ChakraProvider } from "@chakra-ui/react"
import  store  from "../app/store"
import { Provider } from "react-redux"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp