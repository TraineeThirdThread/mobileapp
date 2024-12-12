import { create } from 'zustand';

const useLoginStore = create((set) => ({
    login: '',
    pass: '',
    secureTextEntry: true,
    setLogin: (login: string) => set(() =>({login: login})),
    setPass: (pass: string) => set(() =>({pass: pass})),
    setSecureTextEntry: () => set((state) => ({secureTextEntry: !state.secureTextEntry})),
}));

export default useLoginStore;
