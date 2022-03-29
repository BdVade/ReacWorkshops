'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Funder', {
    // Specify Alice's interact interface here
    getReciever: Fun([], Address),
    amount: UInt,
    waiting_time: UInt,
    refund: UInt,
    dormant: UInt
  });
  const B = Participant('Reciever', {
    // Specify Bob's interact interface here

  });
  init();
  // The first one to publish deploys the contract

  A.only(()=>{
     const amt = declassify(interact.amount)
     const waiting_time = declassify(interact.waiting_time)
     const refund = declassify(interact.refund)
     const dormant = declassify(interact.dormant)
  })
  A.publish(amt, waiting_time, refund, dormant).pay(amt);
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here
  exit();
});
