import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext({} as TasksContextData)

export interface Task{
    title: string
    done: boolean
    id: number 
}

interface TasksContextData{
tasks: Task[],
setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

interface TasksProviderProps{
    children: React.ReactNode
}

export const TasksProvider: React.FC<TasksProviderProps> = ({children})=>{
    const [tasks, setTasks] = useState([] as Task[])
    useEffect(()=>{//assim que o componente é montado em tela, essa função é chamada
        const tasksOnLocalstorage = localStorage.getItem('tasks')
        if(tasksOnLocalstorage){
            setTasks(JSON.parse(tasksOnLocalstorage))
        }
    },[])
    return(
        <TasksContext.Provider value={{
            tasks,
            setTasks
        }}>
            {children}
        </TasksContext.Provider>
    )
}