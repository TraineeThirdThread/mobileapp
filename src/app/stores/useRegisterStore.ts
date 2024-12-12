import { create } from 'zustand';

const useRegisterStore = create((set) => ({
    login: '',
    email: '',
    pass: '',
    pass2:'',
    secureTextEntry: true,
    setLogin: (login: string) => set((state) =>({login: login})),
    setEmail:(email: string) => set((state) =>({email: email})),
    setPass: (pass: string) => set((state) =>({pass: pass})),    
    setPass2: (pass2: string) => set((state) =>({pass2: pass2})),
    setSecureTextEntry: () => set((state) => ({secureTextEntry: !state.secureTextEntry})),
}));

export default useRegisterStore;
