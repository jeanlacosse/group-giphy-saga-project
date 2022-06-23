import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Favorites () {
    const dispatch = useDispatch()
    const favoriteList = useSelector(store => store.favoriteList)
    const categoryList = useSelector(store => store.categoryList)


    useEffect(() => {
        fetchFavorites();
        fetchCategories();
    }, []);

    const fetchFavorites = () => {
        dispatch({
            type: 'FETCH_FAVORITES'
        })
    }
    const fetchCategories = () => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }


    return (
        <div>
            <h3>FAVORITES LIST</h3>
            {/* <ul>
                {favoriteList.map(favorite => (
                    <li
                    key={favorite.id}
                    url={favorite.url}
                    >
                        {favorite.data && <img src={favorite.data.images.original.url} />}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default Favorites