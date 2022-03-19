import LeftSideMenu from './Components/LeftSideMenu';
import RightSideMenu from './Components/RightSideMenu';

// stylings
import './App.css';

function App() {
  const containerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    display: 'flex',
  };

  const leftStyle = {
    width: '25%',
    height: '100%',
    backgroundColor: 'green',
  };

  const rightStyle = {
    width: '75%',
    height: '100%',
    backgroundColor: 'purple',
  };

  return (
    <div className="App">
      <div className="app-container" style={containerStyle}>
        <div className="left" style={leftStyle}>
          <LeftSideMenu />
        </div>
        <div className="right" style={rightStyle}>
          <RightSideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
