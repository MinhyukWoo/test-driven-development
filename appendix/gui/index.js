import { VendingMachine } from './src/orgVendingMachine.js';

const vendingMachine = new VendingMachine();

await vendingMachine.getMoney();
await vendingMachine.getMoney();
await vendingMachine.getMoney();
await vendingMachine.buy();
vendingMachine.takeBackMoney();
