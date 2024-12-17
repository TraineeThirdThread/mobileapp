
export async function getUserData(id) {
    return await fetch(`http://192.168.0.107:3000/users/${id}`)
        .then(async (res) => await res.json())
        .catch(err => console.log(err));
};
