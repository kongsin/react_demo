import StyleableProps from "@/app/interfaces/StyleableProbs"
import BadgeComponent from "../components/BadgeComponent"
import AccountRegistrationModel from "@/app/domain/entiry/AccountRegistrationModel"
import RegistrationStatus from "@/app/enums/RegistrationStatus"

interface AccountRegistrationStatusProps extends StyleableProps {
    transaction: AccountRegistrationModel
}

const AccountRegistrationStatusComponent = ({className, transaction}:AccountRegistrationStatusProps) => {
    const { fontColor, bgColor, text} = getStatus(transaction)
    return (
        <BadgeComponent className={`${className}`} text={text} backgroundColor={bgColor} fontColor={fontColor} />
    )
}

function getStatus(transaction: AccountRegistrationModel) {
    switch (transaction.status) {
        case RegistrationStatus.Completed: {
            return { fontColor: "text-customs-fg-status-complete", bgColor: "bg-customs-bg-status-complete", text: transaction.status}
        }
        case RegistrationStatus.Pending: {
            return { fontColor: "text-customs-fg-status-pending", bgColor: "bg-customs-bg-status-pending", text: transaction.status}
        }
        case RegistrationStatus.Registration: {
            return { fontColor: "text-customs-fg-status-registration", bgColor: "bg-customs-bg-status-registration", text: transaction.status}
        }
        default: {
            return { fontColor: "text-customs-fg-status-registration", bgColor: "bg-customs-bg-status-registration", text: transaction.status}
        }
    }
}

export default AccountRegistrationStatusComponent