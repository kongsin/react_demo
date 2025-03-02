import StyleableProps from "@/app/interfaces/StyleableProbs"

interface CustomTableCellProps extends StyleableProps {
   text: string
}

const CustomTableCell = ({className, text}:CustomTableCellProps) => {
    return (
        <td className={`py-3 px-4 text-gray-700 text-xs font-bold max-w-xs ${className}`}>{text}</td>
    )
}   

export default CustomTableCell