import React from 'react';
import { interfaceTasks } from '../Actions/actions';

interface props {
    tasks: interfaceTasks[];
}

const ListTasks: React.FC<props | undefined> = ({tasks})=> {
    return (
        <>
            { tasks && tasks.map((task, index)=> (
                <div className="listTasks" key={index}>
                    <h1>{task.taskName}</h1>
                    <p>{task.taskDesc}</p>
                    <p>{task.startDateTime}</p>
                    <p>{task.endDateTime}</p>
                </div>
            ))}
        </>
    )
}

export default ListTasks;
