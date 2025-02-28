import TransactionModel from "../domain/entiry/TransactionModel";
import StyleableProps from "./StyleableProbs";

interface TransactionItemsProps extends StyleableProps {
    transactions: TransactionModel[]
}

export default TransactionItemsProps