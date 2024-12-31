import readline from 'readline';

class Drink {
  constructor(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }
}

export class VendingMachine {
  constructor() {
    this.money = 0;
    this.maxNum = 2;
    this.drinks = [new Drink('콜라', 1200, 10), new Drink('생수', 500, 10)];
  }

  getMoney() {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      console.log('돈을 넣으세요. 10, 50, 100, 500, 1000만 가능 : ');
      rl.on('line', (line) => {
        const money = parseInt(line);
        if (
          money === 10 ||
          money === 50 ||
          money === 100 ||
          money === 500 ||
          money === 1000
        ) {
          this.money += money;
        } else {
          console.log('10, 50, 100, 500, 1000만 가능합니다. 다시 시작해주세요');
        }
        console.log(`${this.money}원이 있습니다`);
        rl.close();
      }).on('close', () => {
        resolve();
      });
    });
  }

  buy() {
    return new Promise((reslove) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      console.log('음료수\t\t가격\t수량');
      console.log('----------------------------------');
      for (let i = 0; i < this.maxNum; i++) {
        console.log(
          `${i + 1}.${this.drinks[i].name}\t\t${this.drinks[i].price}\t${this.drinks[i].amount}`
        );
      }
      console.log(`현재 ${this.money}원이 있어요`);
      console.log('원하는 음료수를 선택하세요 :');
      rl.on('line', (line) => {
        const selectDrink = parseInt(line);
        if (
          this.money - this.drinks[selectDrink - 1].price >= 0 &&
          this.drinks[selectDrink - 1].amount >= 1
        ) {
          this.drinks[selectDrink - 1].amount--;
          this.money -= this.drinks[selectDrink - 1].price;
        } else {
          console.log('잔액이 부족하거나 수량이 부족해요');
        }
        console.log(`${this.money}원이 남았어요`);
        rl.close();
      }).on('close', () => {
        reslove();
      });
    });
  }

  takeBackMoney() {
    console.log(`거스름돈${this.money}원을 돌려드립니다`);
    this.money = 0;
  }
}
