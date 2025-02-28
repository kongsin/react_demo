import StyleableProps from "@/app/interfaces/StyleableProbs"

interface TransactionCollumnProps extends StyleableProps {
   text: string
}

const TransactionCollumn = ({className, text}:TransactionCollumnProps) => {
    return (
        <td className={`py-3 px-4 text-gray-700 text-sm ${className}`}>{text}</td>
    )
}   

export default TransactionCollumn