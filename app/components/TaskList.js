'use client';

export default function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.completed ? "Completed" : "Incomplete"}</p>
                </li>
            ))}
        </ul>
    )
}