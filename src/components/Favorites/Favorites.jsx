import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Favorites () {
    const dispatch = useDispatch()
    const favoriteList = useSelector(store => store.favoriteList)

    useEffect(() => {
        fetchFavorites()
    }, []);

    const fetchFavorites = () => {
        dispatch({
            type: 'FETCH_FAVORITES'
        })
    }

    return (
        <div>
            <h3>FAVORITES LIST</h3>
            <ul>
                {favoriteList.map(favorite => (
                    <li
                    key={favorite.id}
                    url={favorite.url}
                    >
                        {favorite.data && <img src={favorite.data.images.original.url} />}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites