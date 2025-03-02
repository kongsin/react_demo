import { AiOutlineMore, AiOutlineSetting } from "react-icons/ai";
import CustomTableCell from "../components/CustomTableCell";
import AccountRegistrationStatusComponent from "./AccountRegistrationStatusComponent";
import AccountRegistrationTableProps from "@/app/interfaces/AccountRegistrationTableProps";

const AccountRegistrationTable = ({ transactions, className }: AccountRegistrationTableProps) => {
    const hiddenCell = ["Business Date"]
    return (
        <div className="w-full overflow-x-auto">
            <table className={`min-w-full table-auto bg-white shadow-md rounded-lg ${className}`}>
                <thead>
                    <tr className="bg-white text-gray-700">
                        {[
                            "Business Date",
                            "Record ID",
                            "Name",
                            "Email",
                            "Status",
                            "Type"
                        ].map((heading) => (
                            <th key={heading} className={`py-3 px-4 text-left text-sm font-semibold text-ellipsis whitespace-nowrap ${hiddenCell.includes(heading) ? 'hidden lg:table-cell' : ''}`}>
                                {heading}
                            </th>
                        ))}
                        <th className="py-1 px-1">
                            <AiOutlineSetting size={18} className="text-black w-full min-w-8" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, index) => (
                        <tr key={index} className="border-b border-b-gray-100 hover:bg-gray-50">
                            <CustomTableCell className="hidden lg:table-cell" text={tx.businessDate} />
                            <CustomTableCell text={tx.recordId} />
                            <CustomTableCell text={tx.name} />
                            <CustomTableCell text={tx.email} />
                            <td className="py-3">
                                <div className="flex">
                                    <AccountRegistrationStatusComponent transaction={tx} />
                                </div>
                            </td>
                            <CustomTableCell text={tx.type} f />
                            <td>
                                <AiOutlineMore size={18} className="text-black w-full min-w-8" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountRegistrationTable;
