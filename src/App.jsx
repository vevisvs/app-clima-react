import Home from './componentes/Home'
import {ClimaProvider} from './context/ClimaContext'
import Header from './componentes/Header'

function App() {

  return (
    <ClimaProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </ClimaProvider>
  )
}

export default App
