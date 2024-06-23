export const insertReviewSql = "INSERT INTO review (content, score, store_id, user_id) VALUES (?, ?, ?, ?);";

export const getReviewID = "SELECT * FROM review WHERE id = ?";

export const getStoreToReviewID =
"SELECT store.store_name "
+ "FROM review JOIN store on review.store_id = store.store_id "
+ "WHERE review.id = ?;";

export const getUserToReviewID =
"SELECT user.user_name "
+ "FROM review JOIN user on review.user_id = user.user_id "
+ "WHERE review.id = ?;";