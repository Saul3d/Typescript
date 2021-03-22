export class AccountingDept {
  constructor(public id: number, public employees?: number) {
  }

  get getPeople () {
    return this.employees;
  }

  set setPeople (num: number) {
    this.employees = num;
  }
}