import { loadStdlib,ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(1000);

const interact = {...stdlib.hasRandom}

const isSender = await ask.ask('Are you The Sender?', ask.yesno);
let acc = null;
let ctc = null;
if (isSender) {
  console.log('Hello, Sender')
  acc = await stdlib.newTestAccount(startingBalance)
  const before  = await stdlib.balanceOf(acc)
  const amt = await ask.ask('Enter amount to transfer: ', (amount)=>{return stdlib.parseCurrency(amount)});
  interact.amt = amt
  let password = await ask.ask('Enter your a password with 16 characters for this: ', (pw)=>{return pw});
  while (password.length != 16){
    password = await ask.ask('Enter your a password with 16 characters for this: ', (pw)=>{return pw});

    console.log(password);
    console.log(password.length);
    if(password.length==16) break;
  }
  interact.passWord = password
 ctc = acc.contract(backend)
  ctc.getInfo().then((info)=>{
    console.log(`The contract is deployed as ${JSON.stringify(info)}`);
  });
  console.log('Launching...');
} else{
  console.log('Hello Reciever')
  acc = await stdlib.newTestAccount(startingBalance)
  console.log(acc)
  const info = await ask.ask('Paste the Contract Address:', JSON.parse)
  ctc = acc.contract(backend, info);
  interact.getPass = async () => await ask.ask('Enter the password?', (pass)=> {return pass;})
  
};
const before  = await stdlib.parseCurrency(await stdlib.balanceOf(acc));

console.log('Launching...');
console.log('Starting backends...');

const user = isSender ? 'Sender': 'Reciever'
console.log(`${user}`);

const part = isSender ? ctc.p.Alice: ctc.p.Bob;

await part(interact);
const after  = await stdlib.parseCurrency(await stdlib.balanceOf(acc));

console.log(`Your balance went from ${before} to ${after}`);
ask.done();