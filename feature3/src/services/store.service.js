import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO, reviewResponseDTO, MissionResponseDTO } from "../dtos/store.dto.js"
import { addStore, getStore, getStoreRegionToStoreID } from "../models/store.dao.js";
import { addReview, getReview, getStoreNameToReviewID, getUserNameToReviewID } from "../models/review.dao.js";
import { addMission, getMission, getStoreNameToMissionID } from "../models/mission.dao.js";

export const joinStore = async (body) => {

    const joinStoreData = await addStore({
        'name': body.name,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone,
        'region': body.region
    });

    if(joinStoreData == -1){
        throw new BaseError(status.STORE_ALREADY_EXIST);
    }else{
        return signinResponseDTO(await getStore(joinStoreData), await getStoreRegionToStoreID(joinStoreData));
    }
}

export const addStoreReview = async (body) => {

    const addStoreReviewData = await addReview({
        'content': body.content,
        'score': body.score,
        'store': body.store,
        'user': body.user
    });
    return reviewResponseDTO(await getReview(addStoreReviewData), await getStoreNameToReviewID(addStoreReviewData), await getUserNameToReviewID(addStoreReviewData));
}

export const addStoreMission = async (body) => {

    const addStoreMissionData = await addMission({
        'store': body.store,
        'reward': body.reward,
        'content': body.content
    });
    return MissionResponseDTO(await getMission(addStoreMissionData), await getStoreNameToMissionID(addStoreMissionData));
}