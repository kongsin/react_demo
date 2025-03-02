import { create } from 'zustand';

import { BankAccount } from "../domain/entiry/BankAccount";
import container from '../di/inversify.config';
import { GetCorrespondentUseCase } from '../domain/usecase/GetCorrespondentUseCase';

interface CorrespondentAccountState {
    correspondentItems: BankAccount[],
    fetchCorrespondentItems: () => void
}

export const CorrespondentAccountStore = create<CorrespondentAccountState>((set) => ({
    correspondentItems:[],
    fetchCorrespondentItems: async () => {
        const usecase = container.get<GetCorrespondentUseCase>(GetCorrespondentUseCase)
        usecase.execute().then((data) => {
            set({correspondentItems: data})
        })
    }
}))