import { create } from 'zustand';

const useUserStore = create((set) => ({
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
