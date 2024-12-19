import axios from 'axios';

export async function registerHandler(props) {

    return await axios.post('http://192.168.0.107:3000/users', props)
        .then(function (res) {
            return res.data;
        }).catch(function (error) {
            console.log(error);
        });
};
