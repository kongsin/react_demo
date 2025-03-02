import TransactionModel from "../entiry/TransactionModel";

interface TransactionsRepository {
   getTransactionst(): Promise<TransactionModel[]>
}

export default TransactionsRepository