import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='w-screen h-screen'>
        <Header name='Jiro Delfino'/>
        <Footer name='Jiro Delfino'/>
      </div>
    </ThemeProvider>
  )
}

export default App
