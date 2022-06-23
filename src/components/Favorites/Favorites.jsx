import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CategoryDropDown from '../CategoryDropDown/CategoryDropDown';
function Favorites () {
    const dispatch = useDispatch()
    const favoriteList = useSelector(store => store.favoriteList)


    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = () => {
        dispatch({
            type: 'FETCH_FAVORITES'
        })
    }
    let key = 0;


    return (
        <div>
            <h3>FAVORITES LIST</h3>
            {
                <ul>
                    {favoriteList.map(gif => 
                    <li key={gif.id}>
                    <img src={gif.url}/>
                    <CategoryDropDown /> 
                    <button>Submit Category</button>
                    </li>)}
                </ul>
            }
        </div>
    )
}

export default Favorites