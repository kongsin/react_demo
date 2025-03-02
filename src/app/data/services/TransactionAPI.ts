import TransactionModel from "@/app/domain/entiry/TransactionModel";
import { HttpClient } from "./HttpClient";
import { handleError } from "@/app/utils/HandleErrorUtil";

export class TransactionAPI extends HttpClient {
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

    async fetchTransactions(): Promise<TransactionModel[]> {
        try {
            return await super.get("/transactions")
        } catch (error) {
            throw handleError(error)
        }
    }
}