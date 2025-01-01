class Counter {
  constructor() {
    this.money = 0;
  }

  getCurrentMoney() {
    return this.money;
  }

  insertMoney(money) {
    if (
      money === 10 ||
      money === 50 ||
      money === 100 ||
      money === 500 ||
      money === 1000
    ) {
      this.money += money;
    }
  }

  takeBackMoney() {
    const money = this.money;
    this.money = 0;
    return money;
  }
}

class DrinkContainer {}

export class VendingMachine {
  /**
   *
   * @type {Counter}
   */
  #counter;

  /**
   *
   * @type {DrinkContainer}
   */
  #drinkContainer;
  constructor() {
    this.#counter = new Counter();
    this.#drinkContainer = new DrinkContainer();
  }

  isBuyable(selectedDrink) {
    return this.#drinkContainer.isBuyable(
      this.#counter.getCurrentMoney(),
      selectedDrink
    );
  }

  decDrink(drinkType) {
    this.#drinkContainer.decDrink(drinkType);
  }

  chargeDrink(selectedDrink, amount) {
    this.#drinkContainer.chargeDrink(selectedDrink, amount);
  }

  insertMoney(money) {
    this.#counter.insertMoney(money);
  }

  takeBackMoney() {
    return this.#counter.takeBackMoney();
  }

  get currentMoney() {
    return this.#counter.getCurrentMoney();
  }

  isValidMoneyType(moneyType) {
    return this.#counter.isValidMoneyType(moneyType);
  }
}

export class VendingMachinePanel {
  /**
   *
   * @type {VendingMachine}
   */
  #vendingMachine;
  constructor() {
    this.vendingMachine = new VendingMachine();

    this.moneyPanel = document.createElement('input');
    this.takeBackPanel = document.createElement('input');
    this.buttonTakeBack = document.createElement('button');
    this.buttonInsertMoney = document.createElement('button');

    this.moneyPanel.value = '0';
    this.takeBackPanel.value = '0';
    this.buttonTakeBack.textContent = 'takeback';
    this.buttonInsertMoney.textContent = 'insertmoney';

    this.moneyPanel.placeholder = 'Money';
    this.takeBackPanel.placeholder = 'Take Back Money';

    this.buttonInsertMoney.onclick = () => {
      this.vendingMachine.insertMoney(Number(this.moneyPanel.value));
    };

    this.buttonTakeBack.onclick = () => {
      const money = this.vendingMachine.takeBackMoney();
      this.takeBackPanel.value = money.toString();
    };

    document.body.appendChild(this.moneyPanel);
    document.body.appendChild(this.takeBackPanel);
    document.body.appendChild(this.buttonTakeBack);
    document.body.appendChild(this.buttonInsertMoney);
  }

  set vendingMachine(vendingMachine) {
    this.#vendingMachine = vendingMachine;
  }

  get vendingMachine() {
    return this.#vendingMachine;
  }

  get currentMoney() {
    return this.#vendingMachine.getCurrentMoney();
  }
}
