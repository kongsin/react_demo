import CustomTableCell from "../components/CustomTableCell";
import AccountRegistrationStatusComponent from "./AccountRegistrationStatusComponent";
import AccountRegistrationTableProps from "@/app/interfaces/AccountRegistrationTableProps";

const AccountRegistrationTable = ({ transactions, className }: AccountRegistrationTableProps) => {
    const hiddenCell = ["Last Status", "Record ID"]
    return (
        <div className="w-full overflow-x-auto">
            <table className={`min-w-full bg-white shadow-md rounded-lg ${className}`}>
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        {[
                            "Business Date", 
                            "Record ID", 
                            "Name", 
                            "Email", 
                            "Status", 
                            "Type"
                        ].map((heading) => (
                            <th key={heading} className={`py-3 px-4 text-left text-sm font-semibold ${ hiddenCell.includes(heading) ? 'hidden lg:table-cell' : '' }`}>
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <CustomTableCell text={tx.businessDate} />
                            <CustomTableCell text={tx.recordId} />
                            <CustomTableCell text={tx.name} />
                            <CustomTableCell text={tx.email} />
                            <td className="py-3">
                                <div className="flex">
                                    <AccountRegistrationStatusComponent transaction={tx} />
                                </div>
                            </td>
                            <CustomTableCell text={tx.type} f />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountRegistrationTable;
