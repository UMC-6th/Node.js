import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertReviewSql, getReviewID, getStoreToReviewID, getUserToReviewID } from "./review.sql.js";

// review 데이터 삽입
export const addReview = async (data) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertReviewSql, [data.content, data.score, data.store, data.user]);
        conn.release();

        return result[0].insertId;

    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// review 정보 얻기
export const getReview = async (reviewId) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewID, reviewId);

        console.log(review);

        if(review.length == 0){
            return -1;
        }

        conn.release();
        return review;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// store 반환
export const getStoreNameToReviewID = async (reviewId) => {
    try {
        const conn = await pool.getConnection();
        const store = await pool.query(getStoreToReviewID, reviewId);

        conn.release();

        return store;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// user 반환
export const getUserNameToReviewID = async (reviewId) => {
    try {
        const conn = await pool.getConnection();
        const user = await pool.query(getUserToReviewID, reviewId);

        conn.release();

        return user;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}