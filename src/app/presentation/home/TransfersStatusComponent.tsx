import TransactionModel from "@/app/domain/entiry/TransactionModel"
import StyleableProps from "@/app/interfaces/StyleableProbs"
import BadgeComponent from "../components/BadgeComponent"
import TransactionStatus from "@/app/enums/TransactionStatus"

interface TransfersStatusProps extends StyleableProps {
    transaction: TransactionModel
}

const TransfersStatusComponent = ({className, transaction}:TransfersStatusProps) => {
    const { fontColor, bgColor, text} = getStatus(transaction)
    return (
        <BadgeComponent className={`${className}`} text={text} backgroundColor={bgColor} fontColor={fontColor} />
    )
}

function getStatus(transaction: TransactionModel) {
    switch (transaction.status) {
        case TransactionStatus.Accepted: {
            return { fontColor: "text-customs-fg-status-accept", bgColor: "bg-customs-bg-status-accept", text: transaction.status}
        }
        case TransactionStatus.ReadyToSend: {
            return { fontColor: "text-customs-fg-status-ready-to-send", bgColor: "bg-customs-bg-status-ready-to-send", text: transaction.status}
        }
        case TransactionStatus.AwaitingAML: {
            return { fontColor: "text-customs-fg-status-awaiting-aml", bgColor: "bg-customs-bg-status-awaiting-aml", text: transaction.status}
        }
        case TransactionStatus.Void: {
            return { fontColor: "text-customs-fg-status-void", bgColor: "bg-customs-bg-status-void", text: transaction.status}
        }
        default: {
            return { fontColor: "text-customs-fg-status-void", bgColor: "bg-customs-bg-status-void", text: transaction.status}
        }
    }
}

export default TransfersStatusComponent