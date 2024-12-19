import axios from "axios";

export async function getAddresses() {
    const set = new Set();
    let availibleAddresses: string[] = [];
    return await axios.get(`http://192.168.0.107:3000/users`)
        .then((res) => res.data.filter((user) => {
            if ((user.role === 'seller') && user.deliveryAddress) {
                return user;
            }
        }).map((user) => user.deliveryAddress).join(';').split(';'))
        .then((address) => {
            address.forEach(item => set.add(item));
            set.forEach((item) => {
                availibleAddresses.push(item);
            });
            return availibleAddresses;
        })
        .catch(err => console.log(err));
}
