import React, { useState } from "react";
import { AdddCategory, GifGrid } from './components'



export const GitExpertApp = ()  =>  {

    const [categories, setCategories] = useState([ 'One Puch' ]);

    const  onAddCategory  = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //console.log(newCategory)
        //categorias.push('Valorant');
        setCategories([  newCategory , ...categories])
        //setCategorias(cat =>[...cat,  'Valorant' ])
    }

    return (
        <>
        {/* Titulo */}
        <h1>GitExpertApp</h1>

        {/* Input */}
        <AdddCategory 
        // setCategories= {setCategories}
        onNewCategory = {  (value) => onAddCategory(value)}
        //currentCategories = { categories}
        />
        {/* Listado de gif */}
        {/* <button onClick={onAddCategory}>Agregar</button> */}
            {
            categories.map( (category)  => 
                // return  (<li key={category}>{category}</li>)
                <GifGrid 
                key={ category }
                category={category}
                />
            )}
        </>
    )
}