"use client";
import { BankAccount } from "@/app/domain/entiry/BankAccount";
import Card from "../components/Card"
import CustomNavigationLeftButton from "../components/CustomNavigationLeftButton"
import CustomNavigationRightButton from "../components/CustomNavigationRightButton"
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

interface DataProps {
    items: BankAccount[]
}

const CorrespondentAccount = ({items}: DataProps) => {

    const displayCount = 4;
    const [pageItems, setPageItems] = useState<BankAccount[]>([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        setPageItems(items.slice(page, page + displayCount))
    }, [items, page])

    const nextPage = () => {
        let newPage = page + displayCount
        if (newPage >= items.length ) {
            newPage = items.length - 1
        }
        setPage(newPage)
    }
    const previousPage = () => {
        let newPage = page - displayCount
        if (newPage < 0) {
            newPage = 0
        }
        setPage(newPage)
    }
    
    
    return (
        <div className="mt-5">
            <div className="flex flex-row p-1 gap-2">
                <h3 className="flex flex-row text-black font-semibold text-l mr-1">
                    Corespondent Account
                </h3>
                <CustomNavigationLeftButton disabled={(page <= 0)}  onClick={previousPage} />
                <CustomNavigationRightButton disabled={(page >= items.length - 1)} onClick={nextPage} />
                <div className="flex flex-grow" />
                <a className="flex text-cyan-500 text-pretty items-center">See All {items.length}
                    <span className="ml-1.5">
                        <FaArrowRight/>
                    </span>
                </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
            {pageItems.map((item) => (
                    <Card key={item.id} transactionId={item.transaction_id} countryCode={item.countryCode} title={item.bank} value={item.balance} bgColor={item.background_color} fontColor={item.font_color} />
                ))}
            </div>
        </div>
    )
}

export default CorrespondentAccount