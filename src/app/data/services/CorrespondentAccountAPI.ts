import { BankAccount } from "@/app/domain/entiry/BankAccount";
import { HttpClient } from "./HttpClient";

export class CorrespondentAccountAPI extends HttpClient {
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

    async fetchCorrespondents(): Promise<BankAccount[]> {
        try {
            return await super.get("/correspondents")
        } catch (error) {
            throw Error(`${error}`)
        }
    }
}