export async function getAddresses() {
    const set = new Set();
    let availibleAddresses:string[] = [];
    return await fetch(`http://192.168.0.107:3000/users`)
        .then(async (res) => await res.json())
        .then(async (data) => await data.filter((user) => {
            if ((user.role === 'seller') && user.deliveryAddress) {
                return user;
            }
        }).map((user) => user.deliveryAddress).join(';').split(';'))
        .then(async (address) => {
            await address.forEach(item => set.add(item));
            set.forEach((item) => {
                availibleAddresses.push(item);
            });
            return availibleAddresses;
        })
        .catch(err => console.log(err));
}
