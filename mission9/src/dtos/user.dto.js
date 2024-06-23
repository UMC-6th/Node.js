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