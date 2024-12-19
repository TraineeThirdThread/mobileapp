import axios from "axios";

export async function getUserData(id:string) {
    return await axios.get(`http://192.168.0.107:3000/users/${id}`)
        .then((res) => res.data)
        .catch(err => console.log(err));
}
