'use client';

import { useEffect, useState } from "react";
import TaskForm from "@/app/components/TaskForm";
import TaskList from "@/app/components/TaskList";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await fetch('/api/tasks');
        const data = await res.json();
        setTasks(data.data);
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Task manager</h1>
            <TaskForm refreshTasks={fetchTasks} />
            <TaskList tasks={tasks} />
        </div>
    )
}