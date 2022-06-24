const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images from DB
router.get('/', (req, res) => {
  const queryText = `
  SELECT * category.name 
  FROM favorited_gifs
  JOIN category
	ON category.id = favorited_gifs.category_id 
  ORDER BY
	category.name DESC;
  `;
  pool.query(queryText)
  .then((result) => { res.send(result.rows)})
  .catch((err) => {
    console.log('Err completeing select favorites', err)
    res.sendStatus(500)
    });
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorited_gifs ("url")
                    VALUES ($1)`;
  const queryValues = [
    newFavorite.url
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing favorite', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const sqlQuery = `
  UPDATE "favorited_gifs"
  SET category_id = $1
  WHERE id = $2
  `;
  pool.query(sqlQuery, [req.body.categoryId, req.params.id])
  .then(() => 
    { res.sendStatus(200)})
  .catch((err) => {
    console.log('Err category PUT', err)
    res.sendStatus(500)
    });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
