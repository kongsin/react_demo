
import "reflect-metadata";
import { Container } from "inversify";
import { GetCorrespondentUseCase } from "../domain/usecase/GetCorrespondentUseCase";
import { CorrespondentAccountRepositoryImpl } from "../data/repositories/CorrespondentAccountRepositoryImpl";
import { CorrespondentAccountAPI } from "../data/services/CorrespondentAccountAPI";
import { TYPE } from "./Type";
import { TransactionsRepositoryImpl } from "../data/repositories/TransactionsRepositoryImpl";
import { GetTransactionsUseCase } from "../domain/usecase/GetTransactionsUseCase";
import { TransactionAPI } from "../data/services/TransactionAPI";
import { GetRegistrationsUseCase } from "../domain/usecase/GetRegistrationsUseCase";
import { RegistrationsRepositoryImpl } from "../data/repositories/RegistrationsRepositoryImpl";
import { RegistrationAPI } from "../data/services/RegistrationAPI";

const container = new Container();
container.bind<GetCorrespondentUseCase>(GetCorrespondentUseCase).toSelf()
container.bind<GetTransactionsUseCase>(GetTransactionsUseCase).toSelf()
container.bind<GetRegistrationsUseCase>(GetRegistrationsUseCase).toSelf()
container.bind<CorrespondentAccountRepositoryImpl>(TYPE.CorrespondentAccountRepository).to(CorrespondentAccountRepositoryImpl)
container.bind<TransactionsRepositoryImpl>(TYPE.TransactionRepository).to(TransactionsRepositoryImpl)
container.bind<RegistrationsRepositoryImpl>(TYPE.RegistrationsRepository).to(RegistrationsRepositoryImpl)
container.bind<CorrespondentAccountAPI>(CorrespondentAccountAPI).toSelf()
container.bind<TransactionAPI>(TransactionAPI).toSelf()
container.bind<RegistrationAPI>(RegistrationAPI).toSelf()

export default container;