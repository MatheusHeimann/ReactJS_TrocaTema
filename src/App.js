import './App.css';
import Tema from './Components/Tema';
import { ThemeProvider } from './Components/Context'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          <Tema />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
