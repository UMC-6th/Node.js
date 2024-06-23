import { previewReviewResponseDTO } from "../dtos/user.dto.js"
import { getPreviewReview } from "../models/user.dao.js"

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}