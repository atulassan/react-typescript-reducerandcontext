import React, {FormEvent, useContext, useState} from 'react';
import { interfaceTasks, addTask, taskContext, listStatus } from './Actions/actions';
import ListTasks from './Modules/ListTasks'

console.log("Get Enum Values: ", listStatus);

const Tasks: React.FC = () => {
    const {state, dispatch } = useContext(taskContext)
    const [formData, setFormData] = useState<interfaceTasks | {}>();
    
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target
        setFormData(() => ({
            ...formData,
            [name]: value,
        }))
        console.log(formData);
    }

    const handleSubmit = (event:FormEvent) => {
        const finalData:interfaceTasks  = {
            taskID: +new Date(), ...formData
        }
        console.log(finalData);
        dispatch(addTask(finalData));
        setFormData({})
        event.preventDefault();
    };    

    return (
        <>  
            <h1>Task Page</h1>
            <form onSubmit={handleSubmit}>
                <p><span>Category Name</span>
                <select name='categoryID' onChange={handleNameChange}>
                    <option>Select Category</option>
                        { state.categories && state.categories.map((category, index)=> (
                            <option value={category.categoryID} key={index}>{category.categoryName}</option>
                        ))}
                    </select>
                </p>
                <p><span>Task Name</span><input type='text' name='taskName' placeholder='Add Task' onChange={handleNameChange} /></p>
                <p><span>Task Desc</span><input type='text' name='taskDesc' placeholder='Add Task Desc' onChange={handleNameChange} /></p>
                <p><span>Start Time</span><input type='date' name='startDateTime' placeholder="dd-mm-yyyy" 
           value={formData && formData.hasOwnProperty('startDateTime') ? formData.startDateTime : ''} min="1997-01-01" max="2030-12-31" onChange={handleNameChange} /></p>
                <p><span>End Time</span><input type='date' name='endDateTime' placeholder="dd-mm-yyyy" 
           value={formData && formData.hasOwnProperty('endDateTime') ? formData.endDateTime : ''} min="1997-01-01" max="2030-12-31" onChange={handleNameChange} /></p>
                <p><span>Status</span>
                    <select name='status' onChange={handleNameChange}>
                    <option>Select Status</option>
                        { listStatus && listStatus.map((status, index)=> (
                            <option value={status[0]} key={index}>{status[1]}</option>
                        ))}
                    </select>
                </p>
                <button>Submit</button>
            </form>
            <div>
                <ListTasks tasks={state.tasks} />
            </div>
        </>
    )
}

export default Tasks;