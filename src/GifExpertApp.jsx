import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


import React from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        // console.log(newCategory);
        
        // categories.push(newCategory);

        if(categories.includes(newCategory))return;

       setCategories( [newCategory,...categories] );
        // setCategories( cat => [...cat, 'Valorant' ]);
    }

    return (
        <>

            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
            
            // setCategories={ setCategories}
            onNewCategory={ (value)=> onAddCategory(value) }
             />  

            {/* listado de gif */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
           
                {
                categories.map( ( category ) => (
                            <GifGrid 
                            key={ category } category={ category }/>
                        ))
                }
                
         
            {/* gif item */}

        </>
    )
}
