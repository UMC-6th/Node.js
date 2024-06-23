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