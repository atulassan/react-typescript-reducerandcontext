import React, {useContext} from 'react';
import CategoriesForm from './Modules/CatgoriesForm'
import ListTaskCategories from './Modules/ListTaskCategories'
import { taskContext, interfaceCategories, addCategories } from './Actions/actions';

const Categories: React.FC = () => {
    const { state, dispatch } = useContext(taskContext)
    console.log('State Values:', state);
    const addTaskfns = (categories: interfaceCategories) => {
        dispatch(addCategories(categories));
        console.log(state);    
    }

    return (
        <>
            <h1>Categories Page</h1>
            <CategoriesForm addTaskfns={addTaskfns} />
            <ListTaskCategories categories={state.categories} />
        </>
    )
}

export default Categories;