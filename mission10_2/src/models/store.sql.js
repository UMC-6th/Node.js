export const insertStoreSql = "INSERT INTO store (store_name, store_address, store_spec_address, store_phone, region_id) VALUES (?, ?, ?, ?, ?);";

export const getStoreID = "SELECT * FROM store WHERE store_id = ?";

export const connectUser = "INSERT INTO review (store_id, user_id) VALUES (?, ?);";

export const confirmPhone = "SELECT EXISTS(SELECT 1 FROM store WHERE store_phone = ?) as isExistPhone";

export const getRegionToStoreID =
"SELECT region.region_name "
+ "FROM store JOIN region on store.region_id = region.region_id "
+ "WHERE store.store_id = ?;";

export const getStoreToReviewID =
"SELECT store.store_name "
+ "FROM review JOIN store on review.store_id = store.store_id "
+ "WHERE review.review_id = ?;";

export const getReviewToStoreID =
"SELECT review.id, review.user_id, review.store_id, user.user_name "
+ "FROM review JOIN user using review.user_id = user.user_id "
+ "WHERE review.store_id = ? ORDER BY review.user_id ASC;";

export const getReviewByReviewId = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.restaurant_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.restaurant_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getMissionByMissionId = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM mission JOIN user on mission.store_id = store.store_id "
+ "WHERE store.store_id = ? AND mission.id < ? "
+ "ORDER BY mission.id DESC LIMIT ? ;"

export const getMissionByMissionIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM mission JOIN user on mission.store_id = store.store_id "
+ "WHERE store.store_id = ? "
+ "ORDER BY mission.id DESC LIMIT ? ;"