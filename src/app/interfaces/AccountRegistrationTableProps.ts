import AccountRegistrationModel from "../domain/entiry/AccountRegistrationModel";
import StyleableProps from "./StyleableProbs";

interface AccountRegistrationTableProps extends StyleableProps {
    transactions: AccountRegistrationModel[]
}

export default AccountRegistrationTableProps