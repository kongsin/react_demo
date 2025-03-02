import container from '../../di/inversify.config'
import { handleError } from "@/app/utils/HandleErrorUtil";
import TransactionsRepository from "@/app/domain/repositories/TransactionsRepository";
import TransactionModel from "@/app/domain/entiry/TransactionModel";
import { TransactionAPI } from '../services/TransactionAPI';

export class TransactionsRepositoryImpl implements TransactionsRepository {
    async getTransactionst(): Promise<TransactionModel[]> {
        try {
            const api = container.get(TransactionAPI)
            const response = api.fetchTransactions()
            return response
        } catch (error) {
            throw handleError(error)
        }
    }

}