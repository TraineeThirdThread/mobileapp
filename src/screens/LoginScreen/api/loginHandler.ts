import axios from 'axios';

export async function loginHandler(login: string, pass: string) {
    const data = {
        identifier: login,
        password: pass,
    };
    return await axios.post('http://192.168.0.107:3000/auth/login', data)
        .then(function (res) {
            return res.data;
        }).catch(function (error) {
            console.log(error);
        });

}
