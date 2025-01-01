/**
 * @jest-environment jsdom
 */

import {
  VendingMachine,
  VendingMachinePanel,
} from '../src/VendingMachinePanel';

describe('Vending Machine Test', () => {
  /**
   * @type {VendingMachine}
   */
  let vendingMachine;
  beforeEach(() => {
    vendingMachine = new VendingMachine();
  });

  test('Test Insert Money', () => {
    const money = 100;
    vendingMachine.insertMoney(money);
    expect(vendingMachine.currentMoney).toEqual(money);
  });

  test('Test Take Back Money', () => {
    const money = 100;
    vendingMachine.insertMoney(money);
    expect(vendingMachine.takeBackMoney()).toEqual(money);
  });
});

describe('Vending GUI Test', () => {
  /**
   * @type {VendingMachinePanel}
   */
  let vendingMachinePanel;

  /**
   * @type {VendingMachine}
   */
  let vendingMachine;
  beforeEach(() => {
    vendingMachinePanel = new VendingMachinePanel();
    vendingMachine = new VendingMachine();
  });

  test('Test Presentation', () => {
    expect(vendingMachinePanel.moneyPanel).toBeDefined();
    expect(vendingMachinePanel.takeBackPanel).toBeDefined();
    expect(vendingMachinePanel.buttonTakeBack).toBeDefined();
    expect(vendingMachinePanel.buttonInsertMoney).toBeDefined();
  });

  test('Test Presentation Text', () => {
    expect(vendingMachinePanel.moneyPanel.value).toEqual('0');
    expect(vendingMachinePanel.takeBackPanel.value).toEqual('0');
    expect(vendingMachinePanel.buttonTakeBack.textContent).toEqual('takeback');
    expect(vendingMachinePanel.buttonInsertMoney.textContent).toEqual(
      'insertmoney'
    );
  });

  test('Test Set Vending Machine', () => {
    vendingMachinePanel.vendingMachine = vendingMachine;
    expect(vendingMachinePanel.vendingMachine).toBeDefined();
  });

  test('Test Insert Money', () => {
    vendingMachinePanel.vendingMachine = vendingMachine;
    const money = 500;
    vendingMachinePanel.moneyPanel.value = Number(money).toString();
    vendingMachinePanel.buttonInsertMoney.click();
    expect(vendingMachine.currentMoney).toEqual(money);
  });

  test('Test Take Back Money', () => {
    vendingMachinePanel.vendingMachine = vendingMachine;
    const money = 500;
    vendingMachinePanel.moneyPanel.value = Number(money).toString();
    vendingMachinePanel.buttonInsertMoney.click();
    vendingMachinePanel.buttonTakeBack.click();
    expect(vendingMachine.currentMoney).toEqual(0);
    expect(vendingMachinePanel.takeBackPanel.value).toEqual(money.toString());
  });
});
