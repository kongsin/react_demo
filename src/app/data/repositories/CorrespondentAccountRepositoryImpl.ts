import { BankAccount } from "@/app/domain/entiry/BankAccount";
import { CorrespondentAccountRepository } from "@/app/domain/repositories/CorrespondentAccountRepository";
import container from '../../di/inversify.config'
import { CorrespondentAccountAPI } from "../services/CorrespondentAccountAPI";
import { handleError } from "@/app/utils/HandleErrorUtil";

export class CorrespondentAccountRepositoryImpl implements CorrespondentAccountRepository {

    async getCorrespondentAccountList(): Promise<BankAccount[]> {
        try {
            const api = container.get(CorrespondentAccountAPI)
            const response = api.fetchCorrespondents()
            return response
        } catch (error) {
            throw handleError(error)
        }
    }

}