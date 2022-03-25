'reach 0.1';

/* Who is involved in this application? The person locking the funds and the person drawing the funds
What information do they know at the start of the program?
Locker - Nothing?
Drawer - SecretPass
What information are they going to discover and use in the program?
Nothing
Drawer - The amount of funds locked
What funds change ownership during the application and how?
- The locked funds. To the contract and from the contract
*/

export const main = Reach.App(() => {
  const A = Participant('Alice', {amt:UInt,
                                  passWord: Bytes(16)});
  const B = Participant('Bob', {getPass: Fun([], Bytes(16))
  });
  init();
  // The first one to publish deploys the contract
  A.only(() =>{
      const amt = declassify(interact.amt)
      const passDigest = declassify(digest(interact.passWord))
  });
    A.publish(amt, passDigest)
    .pay(amt);
  commit();
  // The second one to publish always attaches

  B.only(() =>{
      const pass = declassify(interact.getPass())
      assume( passDigest == digest(pass));
  })
  B.publish(pass);


  require( passDigest == digest(pass));
  transfer(amt).to(B);
  commit();
  
  // write your program here
  exit();
});
