export const getEntity = async() => {
    const response = await fetch(`http://localhost:5000/entyties`, {
        method : "GET"
    })

    const data = await response.json();
    return data;
}