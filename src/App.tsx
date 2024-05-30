import { ThemeProvider } from "./components/ui/theme-provider";
import About from "./webComponents/About";
import Contact from "./webComponents/Contact";
import Header from "./webComponents/Header";
import Introduction from "./webComponents/Introduction";
import Work from "./webComponents/Work";
import { Routes, Route } from "react-router-dom";
import PDFViewer from "./webComponents/myResume";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={
              <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <div className="m-5">
                  <Header />
                  <Introduction />
                  <div id="work">
                    <Work />
                  </div>
                  <div id="about">
                    <About />
                  </div>
                  <div id="contact">
                    <Contact />
                  </div>
                </div>
              </ThemeProvider>
           }
          />
          <Route path="/pdf-viewer" element={<PDFViewer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
