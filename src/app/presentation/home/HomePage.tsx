'use client';
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CorrespondentAccount from "./CorrespondentAccount"
import transactions from '../../../assets/transfer_list.json'
import TransactionList from "./TransactionSection";
import AccountRegistration from "./AccountRegistration";
import registration from "../../../assets/mockup_registration.json"
import { useEffect } from "react";
import { CorrespondentAccountStore } from "@/app/stores/CorrespondentAccountStore";


const HomePage = () => {

    const { items, fetchItems } = CorrespondentAccountStore()

    useEffect(() => {
        fetchItems()
    },[])

    return (



        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6">
                <Header />
                <CorrespondentAccount items={items} />
                <TransactionList className="mt-9" transactions={transactions.slice(0, 5)} />
                <AccountRegistration transactions={registration.slice(0, 5)} />
            </div>
        </div>
    )
}

export default HomePage