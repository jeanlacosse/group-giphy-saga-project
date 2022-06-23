import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function CategoryDropDown() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }, [])
    const categories = useSelector(store => store.categoryList)
    // these are the categories that are in the drop  down
    const optionValues = categories.map(category => category.name)
    console.log(optionValues,'options')

    return(
        <select>
            {/* this first value is always going to be here and then we will map through it to show the rest */}
            <option value="none" >Select A Category</option>
        {optionValues.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    )
}

export default CategoryDropDown;