interface IUpdateUserDataProps {
id: string,
firstname: string,
lastname: string,
phoneNumber: string,
photoUrl: string,
deliveryAddress: string,
}
export async function updateUserData(props:IUpdateUserDataProps) {
    const {id, firstname, lastname, phoneNumber, photoUrl, deliveryAddress } = props;
    try {
        const res = await fetch(`http://192.168.0.107:3000/users/${id}/profile`, {
            method: 'PUT',
            body: JSON.stringify({ firstname, lastname, phoneNumber, photoUrl, deliveryAddress }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return res.json();
    } catch (err) {
        return console.log(err);
    }
}
