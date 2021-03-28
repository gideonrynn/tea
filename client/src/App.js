import './App.css';
import React, { useState } from 'react';
import AddNewTea from './components/AddNewTea/AddNewTea';
import ViewTea from './components/ViewTea/ViewTea'
// import { FaPlus, FaMinus } from "react-icons/fa";

function App() {

  // const [showComponent, setShowComponent] = useState(false);
  const [renderComponent, setRenderComponent] = useState();

  const setComponentAdd = () => {
    console.log("You clicked add new tea")
    setRenderComponent(<AddNewTea/>)
  }

  const setComponentView = () => {
    setRenderComponent(<ViewTea/>)
  }

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          {/* <h1>This is a test</h1> */}
          <div>
               
          </div>
        </header>
        <div className="home">
          
          <header className="headers">
            <h1 className="home-header-pre">The Moment for</h1>
            <h1 className="home-header-core">Tea</h1>
          </header>

          <div>
            <span className="home-add-tea" onClick={setComponentAdd}>Add Tea
                {/* <FaPlus className="plusSign" /> */}
            </span>
            <span className="home-view-selections" onClick={setComponentView}>View Selections
            {/* <FaMinus className="plusSign" onClick={removeTea} /> */}
            </span>
                <span className="home-manage-tea">Manage Tea
            </span>
          </div>

          <div>
            {renderComponent}
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
