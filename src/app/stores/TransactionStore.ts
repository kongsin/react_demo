import { create } from 'zustand';

import container from '../di/inversify.config';
import TransactionModel from '../domain/entiry/TransactionModel';
import { GetTransactionsUseCase } from '../domain/usecase/GetTransactionsUseCase';

interface TransactionsState {
    transactionItems: TransactionModel[],
    fetchTransactionItem: () => void
}

export const TransactionsStore = create<TransactionsState>((set) => ({
    transactionItems:[],
    fetchTransactionItem: async () => {
        const usecase = container.get<GetTransactionsUseCase>(GetTransactionsUseCase)
        usecase.execute().then((data) => {
            set({transactionItems: data})
        })
    }
}))