import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function CategoryDropDown({ gifId }) {
    const categories = useSelector(store => store.categoryList)
    // these are the categories that are in the drop  down
    const optionValues = categories.map(category => category.name)
    console.log('categories', categories)
    const dispatch = useDispatch();
    const [categoryId, setCategoryId] = useState(1)


    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
      
    }, [])
    // categories are being set in state above
    // those will then be the drop down options
    function handleCategory() {
        console.log('gifId', gifId, 'categoryid', categoryId)
        dispatch({
            type: 'ADD_CATEGORY',
            payload: { gifId: gifId, categoryId: categoryId }
        })
    }
    // local state is now holding the selected category / category
    // on click, we dispatch to the addCategory saga with a payload of the id of the gif and the selected category (down below in the return)

    return (
        <>
            <select onChange={
                    (e => setCategoryId(e.target.value))}> 
                        
                {/* this first value is always going to be here and then we will map through it to show the rest */}
                {/* <option value="none" >Select A Category</option> */}
                <option>Select Category</option>
                {categories.map((value) => (
                    //favorite the input from the drop down is the id and not the name so you need to select the id
                    <option 
                    key={value.id} value={value.id}>{value.name}
                    </option>
                ))}
            </select>

            <button onClick={handleCategory}>Submit Category</button>
        </>
    )
}

export default CategoryDropDown;