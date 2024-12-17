import { create } from 'zustand';

interface ILoginState {
    login: string;
    pass: string;
    isSignedIn: boolean;
    setLogin: (login: string) => void;
    setPass: (pass: string) => void;
    setIsSignedIn: (isSignedIn: boolean) => void;
}

const useLoginStore = create<ILoginState>((set) => ({
    login: '',
    pass: '',
    isSignedIn: false,
    setLogin: (login: string) => set(({ login })),
    setPass: (pass: string) => set(({ pass })),
    setIsSignedIn: (isSignedIn: boolean) => set(({ isSignedIn })),
}));

export default useLoginStore;
