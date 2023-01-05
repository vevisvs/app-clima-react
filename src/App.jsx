import Home from './componentes/Home'
import {ClimaProvider} from './context/ClimaContext'
import Header from './componentes/Header'

function App() {

  return (
    <div className="App">
      <ClimaProvider>
        <Header />
        <Home />
      </ClimaProvider>
    </div>
  )
}

export default App
