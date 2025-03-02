import container from "@/app/di/inversify.config";
import { BaseUseCase } from "./BaseUseCase";
import { injectable } from "inversify";
import { TYPE } from "@/app/di/Type";
import TransactionModel from "../entiry/TransactionModel";
import TransactionsRepository from "../repositories/TransactionsRepository";

@injectable()
export class GetTransactionsUseCase implements BaseUseCase<Promise<TransactionModel[]>> {

    execute(): Promise<TransactionModel[]> {
        return new Promise<TransactionModel[]>( async (resolve, rejects) => {
            try {
                const repository = container.get<TransactionsRepository>(TYPE.TransactionRepository)
                resolve(await repository.getTransactionst())
            } catch (error) {
                console.log(error)
                rejects(error)
            }
        });
    }
}