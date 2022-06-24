import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// const dotenv = require('dotenv')
// dotenv.config()

function Search() {
    const dispatch = useDispatch();

    let [searchQuery, setSearchQuery] = useState('');
    let [listOfGifs, setListOfGifs] = useState([]);

    const fetchGif = (evt) => {
        evt.preventDefault();

        console.log('search query is', searchQuery)
        axios({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search',
            params: {
                key: 'DiRKLAuSjVHHIa1TMW7QqTP772sVKFdX',
                q: searchQuery,
                limit: 5
            }
        })
            .then(apiRes => {
                console.log('here is api res', apiRes);
                setListOfGifs(
                    apiRes.data.data
                )
            })
            .catch(err => {
                console.log('err is ', err)
            });
    }

    return (
        <>
            <form onSubmit={fetchGif}>
                <input
                    type='text'
                    placeholder='Search for a gif!'
                    // value={} 
                    onChange={(event) => { setSearchQuery(event.target.value) }
                    }
                />
                <input type='submit' value='Search' />
            </form>
            {/* create search bar
        send search to API as params
        add result to state 
        Display state of 5 gifs */}
            {/* need to map over the listOF Gifs and append */}
            <ul>
                {listOfGifs.map(gif => (
                    <li>
                        <img src={gif.images.fixed_height.url} alt="" />
                        <button onClick={() => {
                            dispatch({
                                type: 'ADD_FAVORITE',
                                payload: {
                                    url: gif.images.fixed_height.url
                                }
                            })
                        }}>
                            Favorite this
                        </button>
                    </li>
                ))}

            </ul>
        </>
    )
}



export default Search