'reach 0.1';

export const main = Reach.App(() => {
  const D = Participant('Deployer', {
    deadline: UInt,
    ticketPrice: UInt
  });
  const B = Participant('Buyer', {
    buy: Fun([UInt], Bool)
  });
  init();
  // The first one to publish deploys the contract 
  D.only(()=>{
    const deadline = declassify(interact.deadline)
    const ticketPrice = declassify(interact.ticketPrice)
  })
  D.publish(deadline, ticketPrice);
  // The second one to publish always attaches
  const [keepGoing, winner,voters ] = 
  parallelReduce([ true, D, 0 ])
    .invariant(balance() == voters*ticketPrice)
    .while(keepGoing)
    .case(B,
      (() => ({
              when: declassify(interact.buy),
      })),
      (() => {race(B).pay(ticketPrice)}),
      (() => {
        // CONSENSUS_EXPR
        const buyer = this
        return [true, buyer, voters+1]
      }))
    // .paySpec(
    //   race(B).publish().pay(ticketPrice)
    //   // return [true, voters+1]
    // )
     .timeout(deadline, () => {
       return [false, winner, voters]
     });
  commit();

  B.publish();
  commit();
  // write your program here
  exit();
});
