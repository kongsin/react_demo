import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CorrespondentAccount from "./CorrespondentAccount"
import items from "../../../assets/mockup_bank.json";
import transactions from '../../../assets/transfer_list.json'
import TransactionList from "./TransactionSection";

const HomePage = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <Header />
                <CorrespondentAccount items={items} />
                <TransactionList className="mt-9" transactions={transactions} />
            </div>
        </div>
    )
}

export default HomePage