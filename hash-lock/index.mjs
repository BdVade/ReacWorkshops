import { loadStdlib,ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(1000);

const interact = {...stdlib.hasRandom}

const isSender = await ask.ask('Are you The Sender?', ask.yesno)

if (isSender) {
  console.log('Hello, Sender')
  const accSender = await stdlib.newTestAccounts(startingBalance)
  console.log(accSender);
  const amt = await ask.ask('Enter amount to transfer: ', (amount)=>{return amount});
  interact.amt = amt
  const password = await ask.ask('Enter your a password with 16 characters for this: ', (pw)=>{return pw});
  while (password.length !=16){
    const password = await ask.ask('Enter your a password with 16 characters for this: ', (pw)=>{return pw});
  }
  interact.passWord = password
  const ctc = accSender.contract(backend)
  const info =  ctc.getInfo()
  console.log('Launching...');
  console.log(`The contract is deployed as ${JSON.stringify(info)}`)
} else{
  console.log('Hello Reciever')
  const accReciever = await stdlib.newTestAccounts(startingBalance)
  comsole.log(accReciever)
  const info = await ask.ask('Paste the Contract Address:', JSON.parse)
  const ctc = accReciever.contract(backend, info);
  interact.getPass = async () => await ask.ask('Enter the password?', (pass)=> {return pass;})
  
};

console.log('Launching...');
console.log('Starting backends...');
// await Promise.all([
//   backend.Alice(ctcAlice, {
    
//     // implement Alice's interact 
//   }),
//   backend.Bob(ctcBob, {
//     getPass: async () =>{
//       return passWord
//     }
//     ...stdlib.hasRandom,
//     // implement Bob's interact object here
//   }),
// ]);

user = isSender ? 'Sender': 'Reciever'
console.log(`${user}`);

part = isSender ? ctc.p.Alice: ctc.p.Bob;

await part(interact)
