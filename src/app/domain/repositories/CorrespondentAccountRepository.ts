import { BankAccount } from "../entiry/BankAccount";

interface CorrespondentAccountRepository {
   getCorrespondentAccountList(): Promise<BankAccount[]>
}

export default CorrespondentAccountRepository