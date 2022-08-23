select "filmId", "title"
  from "films"
  where "rentalRate" < 1
  limit 50;

-- Get the filmId and title of 50 films that cost less than 1 dollar to rent.
