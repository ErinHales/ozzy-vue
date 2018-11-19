SELECT * FROM Users
WHERE id IN (
    SELECT user_id FROM Messages
    WHERE care_provider_id = $1 AND user_id = $2;
);