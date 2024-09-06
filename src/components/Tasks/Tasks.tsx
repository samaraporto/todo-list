import { TasksContext } from '../../context/TasksContext'
import styles from './Tasks.module.scss'
import { FormEvent, useEffect, useState, useContext } from 'react'


export const Tasks: React.FC = ()=>{
    const [taskTitle, setTaskTitle] = useState('')
    const {tasks, setTasks} = useContext(TasksContext)

    function handleSubmitAddTask(e: FormEvent){
        e.preventDefault()

        if(taskTitle.length <= 2){
            alert('Não é possivel adicionar uma tarefa tão curta')
            return
        }
        //adicionar a tarefa
        const newTasks = [
            ...tasks, 
            { title: taskTitle, done: false, id: new Date().getTime() }
        ]
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        setTaskTitle('')
    }

    function handleToggleTasksStatus(taskId: number){
        const newTasks  =  tasks.map((task)=>{
            if(taskId === task.id){
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task
        })
        setTasks(newTasks)
    }

    function handleRemoveTask(taskId: number){
        const newTasks = tasks.filter(task =>{
            return task.id !== taskId
        })
        setTasks(newTasks)
        localStorage.setItem('tasks', JSON.stringify(newTasks))
        setTaskTitle('')
    }

    return(
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask} autoComplete='off'>
                <div>
                    <label htmlFor="task-title">Add new task</label>
                    <input value={taskTitle} 
                    onChange={(event) => setTaskTitle(event.target.value)}
                    type="text" id='task-title' placeholder='Task Title' />
                </div>

                <button type="submit">Adicionar</button>
            </form>

            <ul>
                {tasks.map(task => {
                    return (
                        <li>
                            <div>
                                <input type="checkbox" id={`task-${task.id}`} onChange={()=>{
                                    handleToggleTasksStatus(task.id)
                                }} />
                                <label  className={task.done ? styles.done : ""} htmlFor={`task-${task.id}`}>{task.title}</label>
                            </div>

                            <button onClick={()=>handleRemoveTask(task.id)}>Remove</button>
                        </li>

                    )
                })}
            </ul>
        </section>
    )
}