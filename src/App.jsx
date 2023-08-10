import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Professional } from './Professional/Professional'
import { Personal } from './Personal/Personal'
import { createContext, useState } from 'react'
import { Footer } from './Footer/Footer'

export const InterchangeContext = createContext()

function App() {
  const [pro, setPro] = useState(true)

  return (
    <>
      <div>
        <InterchangeContext.Provider value={{pro, setPro}}>
          <Navbar />
          { 
            pro ?
              <Professional />
            :
              <Personal />
          }
      </InterchangeContext.Provider>
      <Footer />
      </div>
    </>
  )
}

export default App

