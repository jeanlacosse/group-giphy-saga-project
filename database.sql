CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

CREATE TABLE "favorited_gifs" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR NOT NULL,
    "category_id" INT REFERENCES category.id
);

SELECT *,
	category.name 
FROM favorited_gifs
JOIN category
	ON category.id = favorited_gifs.category_id 
ORDER BY
	category.name DESC;