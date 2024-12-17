import { create } from 'zustand';

interface ILoginState {
    login: string;
    pass: string;
    setLogin: (login: string) => void;
    setPass: (pass: string) => void;
}

const useLoginStore = create<ILoginState>((set) => ({
    login: '',
    pass: '',
    setLogin: (login: string) => set(({ login })),
    setPass: (pass: string) => set(({ pass })),
}));

export default useLoginStore;
