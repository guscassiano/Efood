import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'

import { EstiloGlobal } from './styles'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
