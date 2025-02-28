import TransactionModel from "@/app/domain/entiry/TransactionModel";
import StyleableProps from "@/app/interfaces/StyleableProbs";
import TransfersStatusComponent from "./TransfersStatusComponent";
import TransactionCollumn from "./TransactionCollumn";

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
                            <th key={heading} className={`py-3 px-4 text-left text-sm font-semibold ${ hiddenCell.includes(heading) ? 'hidden lg:table-cell' : '' }`}>
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <TransactionCollumn className="hidden lg:table-cell" text={tx.date} />
                            <TransactionCollumn className="hidden lg:table-cell" text={tx.recordId} />
                            <TransactionCollumn text={tx.from} />
                            <TransactionCollumn text={tx.to} />
                            <TransactionCollumn text={tx.direction} />
                            <TransactionCollumn text={tx.type} />
                            <td className="py-3 px-4">
                                <div className="flex">
                                    <TransfersStatusComponent transaction={tx} />
                                </div>
                            </td>
                            <TransactionCollumn text={tx.amount} f />
                            <TransactionCollumn text={tx.currency} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;
