import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/useCallback/ParentComponent';
import Counter from './components/useMemo/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent />
        <Counter />
      </header>
    </div>
  );
}

export default App;
