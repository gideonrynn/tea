import './App.css';
import AddNewTea from './components/AddNewTea/AddNewTea';
import ViewTea from './components/ViewTea/ViewTea'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          {/* <h1>This is a test</h1> */}
          <div>
               
          </div>
        </header>
        <div className="home">
          <h1>Tea</h1>

          <AddNewTea/>
          <ViewTea/>
        </div>
      </div>
    </div>
  );
}

export default App;
