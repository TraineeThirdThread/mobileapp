
import { create } from 'zustand';

interface IAvailibleAddressesState {
    availibleAddresses: string[],
    setAvailibleAddresses: (availibleAddresses: string[]) => void,
}

const useAvailibleAddressesStore = create<IAvailibleAddressesState>((set) => ({
    availibleAddresses: [''],
    setAvailibleAddresses: (availibleAddresses: string[]) => set(({ availibleAddresses })),
}));

export default useAvailibleAddressesStore;
