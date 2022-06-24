import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CategoryDropDown from '../CategoryDropDown/CategoryDropDown';
function Favorites() {
    const dispatch = useDispatch()
    const favoriteList = useSelector(store => store.favoriteList);
    const categoryList = useSelector(store => store.categoryList);


    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = () => {
        dispatch({
            type: 'FETCH_FAVORITES'
        })
    }



    return (
        <div>
            <h3>FAVORITES LIST</h3>
            {
                <ul>
                    {/* looping through the favorited gifs
                    it will append the gif and the drop down component
                    and it's passing the gif.id in a prop */}
                    {favoriteList.map(gif =>
                        <li key={gif.id}>
                            <img src={gif.url} />
                            {gif.category_id ?
                                 categoryList.map(category =>  {category.id === gif.category_id && <p>{category.name}</p>  })
                                :
                                <CategoryDropDown gifId={gif.id} />}

                        </li>)}
                </ul>
            }
        </div>
    )
}

export default Favorites