import { create } from 'zustand';

import container from '../di/inversify.config';
import AccountRegistrationModel from '../domain/entiry/AccountRegistrationModel';
import { GetRegistrationsUseCase } from '../domain/usecase/GetRegistrationsUseCase';

interface RegistrationState {
    registrationsItems: AccountRegistrationModel[],
    fetchRegistrationItems: () => void
}

export const RegistrationStore = create<RegistrationState>((set) => ({
    registrationsItems:[],
    fetchRegistrationItems: async () => {
        const usecase = container.get<GetRegistrationsUseCase>(GetRegistrationsUseCase)
        usecase.execute().then((data) => {
            set({registrationsItems: data})
        })
    }
}))