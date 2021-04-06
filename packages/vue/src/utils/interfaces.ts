export interface Account {
	address: string
	pathIncrement: number
}
export type Wallet = {
	name: string
	mnemonic: string | null
	HDpath: string | null
	password: string | null
	prefix: string
	pathIncrement: number
	accounts: IAccount[]
}
