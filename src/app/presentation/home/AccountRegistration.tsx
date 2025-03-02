import AccountRegistrationTableProps from "@/app/interfaces/AccountRegistrationTableProps"
import BadgeComponent from "../components/BadgeComponent"
import SectionNameText from "../components/SectionNameText"
import AccountRegistrationTable from "./AccountRegistrationTable"
import FlexSpace from "../components/FlexSpace"
import SeeAllButton from "../components/SeeAllButton"

const AccountRegistration = ({transactions, className}: AccountRegistrationTableProps) => {

    return (
        <div className="flex flex-col mt-9">
            <div className="flex flex-row items-center">
                <SectionNameText text="Account Registration" />
                <BadgeComponent text="Pending" />
                <FlexSpace />
                <SeeAllButton itemCount={transactions.length} />
            </div>
            <AccountRegistrationTable className={`mt-4 ${className}`} transactions={transactions.slice(0,5)} />
        </div>
    )
}

export default AccountRegistration