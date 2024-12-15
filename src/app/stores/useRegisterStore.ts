import { create } from 'zustand';

const useRegisterStore = create((set) => ({
    login: '',
    email: '',
    pass: '',
    pass2:'',
    status:{
        loginStatus: 'basic',
        emailStatus: 'basic',
        passStatus: 'basic',
        loginCaption: '',
        emailCaption: '',
        passCaption: '',
        formIsValid: false,
    },
    setLogin: (login: string) => set(({login})),
    setEmail:(email: string) => set(({email})),
    setPass: (pass: string) => set(({pass})),
    setPass2: (pass2: string) => set(({pass2})),
    setStatus: (status) => set(({status})),
}));

export default useRegisterStore;
