import { create } from 'zustand';

const useLoginStore = create((set) => ({
    login: '',
    pass: '',
    setLogin: (login: string) => set(() =>({login: login})),
    setPass: (pass: string) => set(() =>({pass: pass})),
}));

export default useLoginStore;
