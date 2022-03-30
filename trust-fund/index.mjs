import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const [Funder, Reciever, ByStander] = makeEnum(3);

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const interact = {}

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

user = await ask.ask('Enter 1 to create a trust 2 to claim an active trust and 3 to claim a dormant trust', 
  ((entered)=>{
    const options = [1, 2, 3]
    while (!options.includes(entered)){
      entered = ask.ask('Enter 1 to create a trust 2 to claim an active trust and 3 to claim a dormant trust', (e=>e));
      if(options.includes(entered)){
        break;
      }
    }
    if (entered == 1){
      return 'Funder'
    }
    else if(entered == 2){
      return 'Reciever'
    }
    else if (entered == 3){
      return 'Bystander'
    };
    
  }));

  if (user == 'Funder'){
      amount = ask.ask('Enter the Amount to commit to the trust', (amt)=> {return stdlib.parseCurrency(amt)})
      interact.amount = amount;
      waiting_time = ask.ask('Enter the amount of time for the reciever to wait', ((x)=>{return x}))
      interact.wa
  }

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    // implement Alice's interact object here
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');
