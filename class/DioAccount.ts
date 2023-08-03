export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    private balance: number =0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    public setName = (name: string): void => {
        this.name = name    
        console.log('Nome alterado com sucesso!');
        
    }

    public getName = (): string => {
        return this.name
    }

    public deposit = (valor: number): void => {
        if (this.validadeStatus()) {
            this.balance += valor
            console.log('Você depositou');
        }
    }

    public withdraw = (valor:number): void => {
        if (this.balance>valor) {
            console.log('Você sacou R$'+valor+',00');
            this.balance-=valor
        } else {
            console.log('Saldo indisponível');
        }
        
    }

    public getBalance= (): void => {
        console.log(this.balance);
    }

    private validadeStatus = () => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta invalida')
    }
    
}