import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { confirmPhone, insertStoreSql, getRegionToStoreID, getStoreID,  } from "./store.sql.js";
import { getReviewByReviewIdAtFirst, getReviewByReviewId, getMissionByMissionIdAtFirst, getMissionByMissionId } from "./store.sql.js";

// Store 데이터 삽입
export const addStore = async (data) => {
    try{
        const conn = await pool.getConnection();

        const [confirm] = await pool.query(confirmPhone, data.phone);
        if(confirm[0].isExistPhone){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertStoreSql, [data.name, data.addr, data.specAddr, data.phone, data.region]);
        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// Store 정보 얻기
export const getStore = async (storeId) => {
    try {
        const conn = await pool.getConnection();
        const [store] = await pool.query(getStoreID, storeId);

        console.log(store);

        if(store.length == 0){
            return -1;
        }

        conn.release();
        return store;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// region 반환
export const getStoreRegionToStoreID = async (storeId) => {
    try {
        const conn = await pool.getConnection();
        const region = await pool.query(getRegionToStoreID, storeId);

        conn.release();

        return region;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}


export const getPreviewReview = async (cursorId, size, storeId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getReviewByReviewId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getPreviewMission = async (cursorId, size, storeId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [missions] = await pool.query(getMissionByMissionIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return missions;
    
        }else{
            const [missions] = await pool.query(getMissionByMissionId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return missions;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}