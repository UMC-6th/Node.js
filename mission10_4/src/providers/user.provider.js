import { previewReviewResponseDTO, previewMissionResponseDTO, completeMissionResponseDTO } from "../dtos/user.dto.js"
import { getPreviewReview, getPreviewMission, getCompleteMission } from "../models/user.dao.js"

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, userId));
}

export const getMission = async (userId, query) => {
    const {missionId, size = 3} = query;
    return previewMissionResponseDTO(await getPreviewMission(missionId, size, userId));
}

export const completeMission = async (userId, query) => {
    const {missionId, size = 3} = query;
    return completeMissionResponseDTO(await getCompleteMission(missionId, size, userId));
}