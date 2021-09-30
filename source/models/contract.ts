export default class Contract
{
  private _contractNumber: number;

  private _startDate: Date;

  private _endDate: Date;

  private _value: number;

  constructor(contractNumber:number, startDate:Date, endDate:Date, value:number) 
  {
    this._contractNumber = contractNumber;
    this._startDate = startDate;
    this._endDate = endDate;
    this._value = value;
  }

  public get contractNumber(): number {
    return this._contractNumber;
  }

  public get startDate(): Date {
    return this._startDate;
  }

  public get endDate(): Date {
    return this._endDate;
  }

  public get value(): number {
    return this._value;
  }

}