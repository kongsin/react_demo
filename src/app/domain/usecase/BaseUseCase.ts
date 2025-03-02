export interface ExecuteParam { 
    body?:unknown, 
    query?:[{key: string, value: unknown}]
    path?:[{key: string, value: unknown}]
}
export interface BaseUseCase<T> {
    execute({body, query, path}: ExecuteParam): T;
}