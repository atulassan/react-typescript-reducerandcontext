import React from 'react';
import { interfaceCategories } from '../Actions/actions';

interface props {
    categories: interfaceCategories[];
}

const ListTaskCategories: React.FC<props | undefined> = ({categories})=> {
    return (
        <>
            { categories && categories.map((category, index)=> (
                <div className="listTaskCategories" key={index}>
                    <h1>{category.categoryName}</h1>
                    <p>{category.categoryDesc}</p>
                </div>
            ))}
        </>
    )
}

export default ListTaskCategories;
