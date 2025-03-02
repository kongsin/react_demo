interface TransactionModel {
    date: string,
    recordId: string,
    from: string,
    to: string,
    direction: string,
    type: string,
    status: string,
    amount: string,
    currency: string,
    statusColor: string,
}

export default TransactionModel