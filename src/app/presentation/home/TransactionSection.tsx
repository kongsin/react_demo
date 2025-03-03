import BadgeComponent from "../components/BadgeComponent"
import SectionNameText from "../components/SectionNameText"
import SeeAllButton from "../components/SeeAllButton"
import Space from "../components/FlexSpace"
import TransactionTable from "./TransactionsTable"
import TransactionItemsProps from "@/app/interfaces/TransactionItem"


const TransactionList = ({className, transactions}: TransactionItemsProps) => {
    const transactionCount = 12
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="flex flex-row items-center">
                <SectionNameText text="Transfers"/>
                <BadgeComponent text="Pendding" />
                <Space />
                <SeeAllButton itemCount={transactionCount} page="/" />
            </div>
            <TransactionTable className="mt-4" transactions={transactions.slice(0, 5)}/>
        </div>
    )
}

export default TransactionList