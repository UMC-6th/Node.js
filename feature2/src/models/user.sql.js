export const insertUserSql = "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE user_id = ?";

export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
+ "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
+ "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";

export const insertMissionSql = "INSERT INTO user_mission (user_id, mission_id, status) VALUES (?, ?, ?);";

export const getMissionID = "SELECT * FROM user_mission WHERE id = ?";

export const getUserToMissionID =
"SELECT user.user_name, mission.reward "
+ "FROM user_mission um JOIN user on um.user_id = user.user_id "
+ " JOIN mission on um.mission_id = mission.id "
+ "WHERE user_mission.id = ?;";


export const getReviewByReviewIdAtFirst = 
"SELECT s.store_name, s.store_id, r.review_id, r.score, r.content, r.created_at "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByReviewId = 
"SELECT s.store_name, s.store_id, r.review_id, r.score, r.content, r.created_at "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"