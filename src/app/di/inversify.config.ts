
import "reflect-metadata";
import { Container } from "inversify";
import { GetCorrespondentUseCase } from "../domain/usecase/GetCorrespondentUseCase";
import { CorrespondentAccountRepositoryImpl } from "../data/repositories/CorrespondentAccountRepositoryImpl";
import { CorrespondentAccountAPI } from "../data/services/CorrespondentAccountAPI";
import { TYPE } from "./Type";
import { TransactionsRepositoryImpl } from "../data/repositories/TransactionsRepositoryImpl";
import { GetTransactionsUseCase } from "../domain/usecase/GetTransactionsUseCase";
import { TransactionAPI } from "../data/services/TransactionAPI";

const container = new Container();
container.bind<GetCorrespondentUseCase>(GetCorrespondentUseCase).toSelf()
container.bind<GetTransactionsUseCase>(GetTransactionsUseCase).toSelf()
container.bind<CorrespondentAccountRepositoryImpl>(TYPE.CorrespondentAccountRepository).to(CorrespondentAccountRepositoryImpl)
container.bind<TransactionsRepositoryImpl>(TYPE.TransactionRepository).to(TransactionsRepositoryImpl)
container.bind<CorrespondentAccountAPI>(CorrespondentAccountAPI).toSelf()
container.bind<TransactionAPI>(TransactionAPI).toSelf()

export default container;