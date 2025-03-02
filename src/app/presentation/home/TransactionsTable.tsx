'use client';
import TransactionModel from "@/app/domain/entiry/TransactionModel";
import StyleableProps from "@/app/interfaces/StyleableProbs";
import TransfersStatusComponent from "./TransfersStatusComponent";
import CustomTableCell from "../components/CustomTableCell";
import { AiFillSetting, AiOutlineMore, AiOutlineSetting } from "react-icons/ai";

interface TransactionTableProps extends StyleableProps {
    transactions: TransactionModel[]
}

const TransactionTable = ({ transactions, className }: TransactionTableProps) => {
    const hiddenCell = ["Last Status", "Record ID"]
    return (
        <div className="w-full overflow-x-auto">
            <table className={`min-w-full bg-white shadow-md rounded-lg ${className}`}>
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        {[
                            "Last Status",
                            "Record ID",
                            "From",
                            "To",
                            "Direction",
                            "Type",
                            "Status",
                            "Amount",
                            "Currency",
                        ].map((heading) => (
                            <th key={heading} className={`py-3 px-4 text-left text-sm font-semibold ${hiddenCell.includes(heading) ? 'hidden lg:table-cell' : ''}`}>
                                {heading}
                            </th>
                        ))}
                        <th className="py-1 px-2">
                            <AiOutlineSetting size={18} className="text-black w-full min-w-8" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <CustomTableCell className="hidden lg:table-cell" text={tx.date} />
                            <CustomTableCell className="hidden lg:table-cell" text={tx.recordId} />
                            <CustomTableCell text={tx.from} />
                            <CustomTableCell text={tx.to} />
                            <CustomTableCell text={tx.direction} />
                            <CustomTableCell text={tx.type} />
                            <td className="py-3">
                                <div className="flex">
                                    <TransfersStatusComponent transaction={tx} />
                                </div>
                            </td>
                            <CustomTableCell text={tx.amount} f />
                            <CustomTableCell text={tx.currency} />
                            <td className="py-3">
                                <AiOutlineMore size={18} className="text-black w-full min-w-8" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
