import { create } from 'zustand';

import { BankAccount } from "../domain/entiry/BankAccount";
import container from '../di/inversify.config';
import { GetCorrespondentUseCase } from '../domain/usecase/GetCorrespondentUseCase';

interface CorrespondentAccountState {
    items: BankAccount[],
    fetchItems: () => void
}

export const CorrespondentAccountStore = create<CorrespondentAccountState>((set) => ({
    items:[],
    fetchItems: async () => {
        const usecase = container.get<GetCorrespondentUseCase>(GetCorrespondentUseCase)
        usecase.execute().then((data) => {
            set({items: data})
        })
    }
}))