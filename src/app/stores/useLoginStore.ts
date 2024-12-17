import { create } from 'zustand';

const useLoginStore = create((set) => ({
    login: '',
    pass: '',
    isSignedIn: false,
    setLogin: (login: string) => set(({login})),
    setPass: (pass: string) => set(({pass})),
    setIsSignedIn: (isSignedIn: boolean) => set(({isSignedIn}))
}));

export default useLoginStore;
