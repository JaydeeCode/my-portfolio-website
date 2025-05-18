import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from "@/components/theme-provider"
import { ProfileForm } from '@/components/ContactForm'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='w-screen h-screen'>
        <Header name='Jiro Delfino'/>
        <ProfileForm />
        <Footer name='Jiro Delfino'/>
      </div>
    </ThemeProvider>
  )
}

export default App
