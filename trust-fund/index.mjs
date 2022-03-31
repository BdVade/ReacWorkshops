import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const [Funder, Reciever, ByStander] = makeEnum(3);

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const interact = {}

console.log('Hello, Alice and Bob!');

user = await ask.ask('Enter 1 to create a trust 2 to claim an active trust and 3 to claim a dormant trust', 
  ((entered)=>{
    const options = [1, 2, 3]
    while (!options.includes(entered)){
      entered = await ask.ask('Enter 1 to create a trust 2 to claim an active trust and 3 to claim a dormant trust', (e=>e));
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
    let ctc = null;
  if (user == 'Funder'){
      const acc = await stdlib.newTestAccount(startingBalance);
      amount = await ask.ask('Enter the Amount to commit to the trust', (amt)=> {return stdlib.parseCurrency(amt)})
      interact.amount = amount;
      waiting_time = await ask.ask('Enter the amount of time for the to wait before the trustfund is active', ((x)=>{return x}))
      interact.waitingTime = waiting_time;
      recieverAddress = await ask.ask('Enter the address of the reciever', ((x)=>{return x}));
      interact.Reciever = recieverAddress;
      refundTime = await ask.ask('Enter the time To wait till you can reclaim the trust fund if the reciepient doesn\'t claim it', ((x)=>{return x}));
      interact.refund = refundTime;
      dormantTime = await ask.ask('Enter the time to wait before anyone can claim it', ((x)=>{return x}));
      ctc = acc.contract(backend)
      ctc.getInfo().then((info)=>{
        console.log(`This contract is deployed as ${JSON.stringify(info)}`)
      })
      }
  else if (user == 'Reciever'){
    const ctcInfo = await ask.ask('Enter the contract information of the contract you want to connect to', JSON.parse)
    
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
