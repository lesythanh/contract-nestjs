export const getAllUser = async() => {
    const response = await fetch(`http://localhost:5000/user`, {
        method : "GET"
    })

    const data = await response.json();
    return data;
}

export const getAllUserById = async(id) => {
    const response = await fetch(`http://localhost:5000/user/${id}`, {
        method : "GET"
    })

    const data = await response.json();
    return data;
}
