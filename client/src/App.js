import './App.css';
// import AddNewTea from './components/AddNewTea/AddNewTea';
import ViewTea from './components/ViewTea/ViewTea'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <div className="home">
            <ViewTea/>
            {/* <AddNewTea/> */}
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
