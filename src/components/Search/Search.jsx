import React, {useState}from 'react';
require('dotenv').config();

function Search() {

    let [listOfGifs, setListOfGifs] = useState({})

    const fetchGif = () => {
        axios({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search',
            
            params: {
                key: process.env.GIPHY_API_KEY,
                // q:, this needs to equal the search box input from below
            }
        })
            .then(apiRes => {
                console.log(apiRes);
                setListOfGifs ({
                    url: apiRes.data.data.images.original.url
                })
            })
            .catch(err => {
                console.log('err is ', err)
            });
    }

    return (
        <>
            {/* create search bar
        send search to API as params
        add result to state 
        Display state of 5 gifs */}
        </>
    )
}



export default Search