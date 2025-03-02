
import "reflect-metadata";
import { Container } from "inversify";
import { GetCorrespondentUseCase } from "../domain/usecase/GetCorrespondentUseCase";
import { CorrespondentAccountRepositoryImpl } from "../data/repositories/CorrespondentAccountRepositoryImpl";
import { CorrespondentAccountAPI } from "../data/services/CorrespondentAccountAPI";
import { TYPE } from "./Type";

const container = new Container();
container.bind<GetCorrespondentUseCase>(GetCorrespondentUseCase).toSelf()
container.bind<CorrespondentAccountRepositoryImpl>(TYPE.CorrespondentAccountRepository).to(CorrespondentAccountRepositoryImpl)
container.bind<CorrespondentAccountAPI>(CorrespondentAccountAPI).toSelf()

export default container;