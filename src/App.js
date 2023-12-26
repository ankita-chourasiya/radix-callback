import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/useCallback/ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
