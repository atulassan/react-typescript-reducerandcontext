import React, {FormEvent, useState} from 'react';
import { interfaceCategories } from '../Actions/actions';


interface props {
    addTaskfns: (task:interfaceCategories) => void
}

const CategoriesForm: React.FC<props | undefined> = ({addTaskfns})=> {
    const [formData, setFormData] = useState<interfaceCategories | {}>();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData(() => ({
            ...formData,
            [name]: value,
        }))
        console.log(formData);
    }

    const handleSubmit = (event:FormEvent) => {
        const finalData = {
            categoryID: +new Date(), ...formData
        }
        console.log(finalData);
        addTaskfns(finalData);
        setFormData({
            categoryName:"", 
            categoryDesc:""
        })
        event.preventDefault();
    };

    return (
        <>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <p><span>Category Name</span><input type='text' name='categoryName' placeholder='Add Task Category' onChange={handleNameChange}  /></p>
                <p><span>Category Desc</span><input type='text' name='categoryDesc' placeholder='Add Category Desc' onChange={handleNameChange} /></p>
                <button>Submit</button>
            </form>
        </>
    )
}

export default CategoriesForm;
