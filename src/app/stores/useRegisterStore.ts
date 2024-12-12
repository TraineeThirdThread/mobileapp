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
    setLogin: (login: string) => set((state) =>({login: login})),
    setEmail:(email: string) => set((state) =>({email: email})),
    setPass: (pass: string) => set((state) =>({pass: pass})),
    setPass2: (pass2: string) => set((state) =>({pass2: pass2})),
    setStatus: (status) => set((state) => ({status: status})),
}));

export default useRegisterStore;
