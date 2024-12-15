import { create } from 'zustand';

const useLoginStore = create((set) => ({
    login: '',
    pass: '',
    setLogin: (login: string) => set(({login})),
    setPass: (pass: string) => set(({pass})),
}));

export default useLoginStore;
