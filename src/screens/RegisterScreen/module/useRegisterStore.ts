import { create } from 'zustand';
interface IStatusArgs {
    loginStatus: string,
    emailStatus: string,
    passStatus: string,
    loginCaption: string,
    emailCaption: string,
    passCaption: string,
    formIsValid: boolean,
}
interface IRegisterState {
    login: string,
    email: string,
    pass: string,
    pass2: string,
    status: IStatusArgs,
    setLogin: (login: string) => void,
    setEmail: (email: string) => void,
    setPass: (pass: string) => void,
    setPass2: (pass2: string) => void,
    setStatus: (status: IStatusArgs) => void,
}
const useRegisterStore = create<IRegisterState>((set) => ({
    login: '',
    email: '',
    pass: '',
    pass2: '',
    status: {
        loginStatus: 'basic',
        emailStatus: 'basic',
        passStatus: 'basic',
        loginCaption: '',
        emailCaption: '',
        passCaption: '',
        formIsValid: false,
    },
    setLogin: (login: string) => set(({ login })),
    setEmail: (email: string) => set(({ email })),
    setPass: (pass: string) => set(({ pass })),
    setPass2: (pass2: string) => set(({ pass2 })),
    setStatus: (status: IStatusArgs) => set(({ status })),
}));

export default useRegisterStore;
