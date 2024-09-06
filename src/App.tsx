import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

import './styles/global.css'

import { TasksProvider } from './context/TasksContext';

function App() {
  return (
    <TasksProvider>
      <Header/>
      <Tasks/>
    </TasksProvider>
  )
}

export default App;
