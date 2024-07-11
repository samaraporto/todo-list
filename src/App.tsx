import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import {Refs} from './components/Concepts/Refs'

import './styles/global.css'
import { Weather } from './components/Weather/Weather';
import { Memorization } from './components/Concepts/Memorization';
import { TasksProvider } from './context/TasksContext';

function App() {
  return (
    <TasksProvider>
      <Header/>
      <Tasks/> */

    </TasksProvider>
  )
}

export default App;
