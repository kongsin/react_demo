import container from "@/app/di/inversify.config";
import { BaseUseCase } from "./BaseUseCase";
import { injectable } from "inversify";
import { TYPE } from "@/app/di/Type";
import AccountRegistrationModel from "../entiry/AccountRegistrationModel";
import RegistrationsRepository from "../repositories/RegistrationsRepository";

@injectable()
export class GetRegistrationsUseCase implements BaseUseCase<Promise<AccountRegistrationModel[]>> {

    execute(): Promise<AccountRegistrationModel[]> {
        return new Promise<AccountRegistrationModel[]>( async (resolve, rejects) => {
            try {
                const repository = container.get<RegistrationsRepository>(TYPE.RegistrationsRepository)
                resolve(await repository.getRegistrations())
            } catch (error) {
                console.log(error)
                rejects(error)
            }
        });
    }
}