export default class User
{
    private _name: string;
    private _cpf: number;
    private _operatingUnitId: number;

    constructor(name:string, cpf:number, operatingUnitId:number)
    {
        this._name = name;
        this._cpf = cpf;
        this._operatingUnitId = operatingUnitId
    }

    public get name(): string {
        return this._name;
    }

    public get cpf(): number {
        return this._cpf;
    }

    public get operatingUnitId(): number {
        return this._operatingUnitId;
    }
}