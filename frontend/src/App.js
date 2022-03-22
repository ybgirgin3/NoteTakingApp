import LeftSideMenu from './Components/LeftSideMenu';
import RightSideMenu from './Components/RightSideMenu';

// stylings
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="left">
          <LeftSideMenu />
        </div>
        <div className="right">
          <RightSideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
