import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function CategoryDropDown({gifId}) {
    const categories = useSelector(store => store.categoryList)
    // these are the categories that are in the drop  down
    const optionValues = categories.map(category => category.name)
    console.log(optionValues,'options')
    const dispatch = useDispatch();
    const [category, setCategory] = useState('')
    
    
    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }, [])
// categories are being set in state above
// those will then be the drop down options
    function handleCategory() {
        dispatch({
            type: 'ADD_CATEGORY',
            payload: {id: gifId, category: category}
        })
    }
// local state is now holding the selected category / category
// on click, we dispatch to the addCategory saga with a payload of the id of the gif and the selected category (down below in the return)

    return(
        <select>
            {/* this first value is always going to be here and then we will map through it to show the rest */}
            <option value="none" >Select A Category</option>
        {optionValues.map((value) => (
          <option onChange={( e => setCategory(e.target.value))} key={value} value={value}>{value}
          <button onClick={handleCategory}>Submit Category</button>
          </option>
        ))}
      </select>
    )
}

export default CategoryDropDown;