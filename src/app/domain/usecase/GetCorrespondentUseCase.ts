import container from "@/app/di/inversify.config";
import { BaseUseCase } from "./BaseUseCase";
import { CorrespondentAccountRepository } from "../repositories/CorrespondentAccountRepository";
import { BankAccount } from "../entiry/BankAccount";
import { injectable } from "inversify";
import { TYPE } from "@/app/di/Type";

@injectable()
export class GetCorrespondentUseCase implements BaseUseCase<Promise<BankAccount[]>> {

    execute(): Promise<BankAccount[]> {
        return new Promise<BankAccount[]>( async (resolve, rejects) => {
            try {
                const repository = container.get<CorrespondentAccountRepository>(TYPE.CorrespondentAccountRepository)
                resolve(await repository.getCorrespondentAccountList())
            } catch (error) {
                console.log(error)
                rejects(error)
            }
        });
    }
}