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
    const optionValues = categories.map(category => category.name)
    console.log(optionValues,'options')

    return(
        <select>
        {optionValues.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    )

}


export default CategoryDropDown;