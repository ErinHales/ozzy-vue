INSERT INTO Users
(name, email, hash)
VALUES ($1,$2,$3)
RETURNING *;