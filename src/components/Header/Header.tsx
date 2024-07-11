import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import { StatsCard } from '../StatsCard/StatsCard'
import styles from './Header.module.scss'

// import { useState } from 'react'

export const Header: React.FC = ()=>{
    // const [estado, funcaoParaAlterarOEstado] = useState('')
    const {tasks} = useContext(TasksContext)

    const totalTasks = tasks.length
    const totalPending = tasks.reduce((total, task)=>{
        if(!task.done) return total +1
        return total 
    }, 0)
    const totalDone = totalTasks - totalPending


    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My todo</h1>

                    <span>Welcome, Samara</span>
                </div>
                <div>
                    <StatsCard title='Total tasks' value={totalTasks}/>
                    <StatsCard title='Pending Tasks' value={totalPending}/>
                    <StatsCard title='Done Tasks' value={totalDone}/>
                </div>
            </div>
            
        </header>
    )
}