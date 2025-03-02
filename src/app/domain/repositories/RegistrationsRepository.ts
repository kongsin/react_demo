import AccountRegistrationModel from "../entiry/AccountRegistrationModel";

interface RegistrationsRepository {
   getRegistrations(): Promise<AccountRegistrationModel[]>
}

export default RegistrationsRepository