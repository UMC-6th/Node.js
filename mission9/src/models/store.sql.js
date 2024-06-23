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