'use client';
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CorrespondentAccount from "./CorrespondentAccount"
import TransactionList from "./TransactionSection";
import AccountRegistration from "./AccountRegistration";
import registration from "../../../assets/mockup_registration.json"
import { useEffect } from "react";
import { CorrespondentAccountStore } from "@/app/stores/CorrespondentAccountStore";
import { TransactionsStore } from "@/app/stores/TransactionStore";
import { RegistrationStore } from "@/app/stores/RegistrationStore";


const HomePage = () => {

    const { correspondentItems, fetchCorrespondentItems } = CorrespondentAccountStore()
    const { transactionItems, fetchTransactionItem } = TransactionsStore()
    const { registrationsItems, fetchRegistrationItems } = RegistrationStore()

    useEffect(() => {
        fetchCorrespondentItems()
        fetchTransactionItem()
        fetchRegistrationItems()
    },[])

    return (



        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <Header />
                <CorrespondentAccount items={correspondentItems} />
                <TransactionList className="mt-9" transactions={transactionItems} />
                <AccountRegistration transactions={registrationsItems} />
            </div>
        </div>
    )
}

export default HomePage