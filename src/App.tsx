import { ThemeProvider } from "./components/ui/theme-provider"
import About from "./webComponents/About"
import Contact from "./webComponents/Contact"
import Header from "./webComponents/Header"
import Introduction from "./webComponents/Introduction"
import Work from "./webComponents/Work"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="m-5">
        <Header/>
        <Introduction/>
        <div id="work">
          <Work/>
        </div>
        <div id="about" >
          <About/>
        </div>
        <div id="contact" >
          <Contact/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;