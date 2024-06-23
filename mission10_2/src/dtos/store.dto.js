// sign in response DTO
export const signinResponseDTO = (store, region) => {
    const regionName = [];
    regionName.push(region[0][0].region_name);
    return {"name": store[0].store_name, "phone": store[0].store_phone, "region": regionName};
}

// review response DTO
export const reviewResponseDTO = (review, store, user) => {
    const storeName = [];
    const userName = [];
    storeName.push(store[0][0].store_name);
    userName.push(user[0][0].user_name);
    return {"score": review[0].score, "store": storeName, "user": userName};
}

// mission response DTO
export const MissionResponseDTO = (mission, store) => {
    const storeName = [];
    storeName.push(store[0][0].store_name);
    return {"store": storeName, "reward": mission[0].reward};
}

export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length-1].review_id};
}

export const previewMissionResponseDTO = (data) => {

    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
            "store_name": data[i].user_name,
            "reward": data[i].reward,
            "mission": data[i].mission_spec
        })
    }
    return {"missionData": missions, "cursorId": data[data.length-1].mission_id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}