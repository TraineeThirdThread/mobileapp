export async function registerHandler(props) {
    return await fetch('http://192.168.0.107:3000/users', {
                method: 'POST',
                body: JSON.stringify(props),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(async (res) => await res.json())
            .catch(err => console.log(err));
};
