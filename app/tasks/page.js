import { useEffect, useState } from "react/cjs/react.production.min";


const TasksPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);
    
    return (
        <>  
            <h1>Your Tasks</h1>

            <ul>
                {tasks.map(task => {
                    <li key={task.id}>{task.title} - {task.description}</li>
                })}
            </ul>
        </>
    )
}

export default TasksPage;