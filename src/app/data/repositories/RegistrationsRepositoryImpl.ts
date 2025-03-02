import container from '../../di/inversify.config'
import { handleError } from "@/app/utils/HandleErrorUtil";
import RegistrationsRepository from '@/app/domain/repositories/RegistrationsRepository';
import AccountRegistrationModel from '@/app/domain/entiry/AccountRegistrationModel';
import { RegistrationAPI } from '../services/RegistrationAPI';

export class RegistrationsRepositoryImpl implements RegistrationsRepository {
    async getRegistrations(): Promise<AccountRegistrationModel[]> {
        try {
            const api = container.get(RegistrationAPI)
            const response = api.fetchRegistrations()
            return response
        } catch (error) {
            throw handleError(error)
        }
    }
}