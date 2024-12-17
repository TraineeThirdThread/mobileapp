import { create } from 'zustand';

interface IUserState {
    id: string,
    email: string,
    username: string,
    role: string,
    firstname: string,
    lastname: string,
    phoneNumber: string,
    photoUrl: string,
    deliveryAddress: string,
    setId: (id: string) => void,
    setEmail: (email: string) => void,
    setUsername: (username: string) => void,
    setRole: (role: string) => void,
    setFirstname: (firstname: string) => void,
    setLastname: (lastname: string) => void,
    setPhoneNumber: (phoneNumber: string) => void,
    setPhotoUrl: (photoUrl: string) => void,
    setDeliveryAddress: (deliveryAddress: string) => void,
}

const useUserStore = create<IUserState>((set) => ({
    id: '',
    email: '',
    username: '',
    role: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    photoUrl: '',
    deliveryAddress: '',
    setId: (id: string) => set(({ id })),
    setEmail: (email: string) => set(({email})),
    setUsername: (username: string) => set(({username})),
    setRole: (role: string) => set(({role})),
    setFirstname: (firstname: string) => set(({firstname})),
    setLastname: (lastname: string) => set(({lastname})),
    setPhoneNumber: (phoneNumber: string) => set(({phoneNumber})),
    setPhotoUrl: (photoUrl: string) => set(({photoUrl})),
    setDeliveryAddress: (deliveryAddress: string) => set(({deliveryAddress})),
}));

export default useUserStore;
