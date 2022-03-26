import './App.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

function App() {
  return (
    <div className="container">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Content />
      </div>
    </div>
  );
}

export default App;
