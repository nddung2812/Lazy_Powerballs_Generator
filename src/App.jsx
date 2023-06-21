import './App.css'
import MyForm from './components/Form.jsx';

function App() {

  return (
    <div className="main-ctn">
      <h1>Powerballs number combination generator</h1>
      <div className="combination">
        <h2>Enter number of combinations</h2>
        <MyForm />
      </div>
    </div>
  )
}

export default App
