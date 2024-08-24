import reactLogo from '/react.svg'
import './App.scss'
import ReactVLibras from './components/ReactVLibras'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <ReactVLibras />
    </>
  )
}

export default App
