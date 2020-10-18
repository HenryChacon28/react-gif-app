import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <div class="row justify-content-md-center">
                    <h1 class="display">Gif divertidos</h1>
            </div>
            <AddCategory setCategories={ setCategories } />
            
            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
}
