export const getAttribute = async() => {
    const response = await fetch(`http://localhost:5000/attribute`, {
        method : "GET"
    })

    const data = await response.json();
    return data;
}

// export const getAttributeById = async(id) => {
//     const response = await fetch(`http://localhost:5000/attribute/${id}`, {
//         method : "GET"
//     })

//     const data = await response.json();
//     return data;
// }

export const createAttribute = async (value,id) => {
    const request = {
        method : "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({lable: value, type_id: id})
    }
    const data = await fetch(`http://localhost:5000/attribute/posts/item`, request)
            .then(response => response.json())

    return data;
}

export const getDeleteAttribute = async(id) => {
    const response = await fetch(`http://localhost:5000/attribute/${id}`, {
        method : "DELETE"
    })

    const data = await response.json();
    return data;
}
