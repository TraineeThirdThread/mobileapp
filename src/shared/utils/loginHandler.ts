
export async function loginHandler(login, pass) {
    try {
        const res = await fetch('http://192.168.0.107:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify({ identifier: login, password: pass }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return res.json();
    } catch (err) {
        return console.log(err);
    }
}
