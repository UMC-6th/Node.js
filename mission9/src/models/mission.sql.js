export const insertMissionSql = "INSERT INTO mission (store_id, reward, mission_spec) VALUES (?, ?, ?);";

export const getMissionID = "SELECT * FROM mission WHERE id = ?";

export const getStoreToMissionID =
"SELECT store.store_name "
+ "FROM mission JOIN store on mission.store_id = store.store_id "
+ "WHERE mission.id = ?;";