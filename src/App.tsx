import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'

import { EstiloGlobal } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
