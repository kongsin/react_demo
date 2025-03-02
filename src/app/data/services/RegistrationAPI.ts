import { HttpClient } from "./HttpClient";
import { handleError } from "@/app/utils/HandleErrorUtil";
import AccountRegistrationModel from "@/app/domain/entiry/AccountRegistrationModel";

export class RegistrationAPI extends HttpClient {
    constructor() {
        super(
            "http://localhost:8080",
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Connection": "keep-alive",
            }
        )
    }

    async fetchRegistrations(): Promise<AccountRegistrationModel[]> {
        try {
            return await super.get("/registrations")
        } catch (error) {
            throw handleError(error)
        }
    }
}