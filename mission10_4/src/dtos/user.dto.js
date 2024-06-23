// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

// mission response DTO
export const MissionResponseDTO = (mission, user_mission) => {
    const userName = [];
    const reward = [];
    userName.push(user_mission[0][0].user_name);
    reward.push(user_mission[0][0].reward);
    return {"user": userName, "mission": mission[0].mission_id, "reward": reward, "status":mission[0].status};
}

export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "store_name": data[i].store_name,
            "score": data[i].score,
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
            "store_name": data[i].store_name,
            "reward": data[i].reward,
            "mission": data[i].mission_spec
        })
    }
    return {"missionData": missions, "cursorId": data[data.length-1].mission_id};
}

export const completeMissionResponseDTO = (data) => {

    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
            "store_name": data[i].store_name,
            "reward": data[i].reward,
            "mission": data[i].mission_spec
        })
    }
    return {"missionData": missions, "cursorId": data[data.length-1].mission_id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}