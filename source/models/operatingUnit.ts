export default class OperatingUnit 
{
    private _id: number;
    private _cnpj: string;
    private _socialReason: string;
    private _cep: number;
    private _contractId: number;


    constructor(cnpj:string, socialReason:string, cep:number, contractId:number)
    {
        this._id = 0;
        this._cnpj = cnpj;
        this._socialReason = socialReason;
        this._cep = cep;
        this._contractId = contractId
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get cnpj(): string {
        return this._cnpj;
    }

    public get socialReason(): string {
        return this._socialReason;
    }

    public get cep(): number {
        return this._cep;
    }

    public get contractId(): number {
        return this._contractId;
    }

}
