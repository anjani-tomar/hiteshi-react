import './index.css'
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App text-white">
<AddTodo/>
<Todos/>
    </div>
  );
}

export default App;
