'reach 0.1';
const ProjectDetails = Object({
  name:Bytes(32),
  url:Bytes(32),
  biddingFloor: UInt,
  deadline: UInt
})
export const main = Reach.App(() => {
  const Creator = Participant('Creator', {
    details: ProjectDetails,
    // withdrawFunds: Fun([Address], Null) Send to to wallets
    })
    
  const Bidder = API('Bidder', {
    bid: Fun([UInt], Bool)
  });
  
  init();
  // The first one to publish deploys the contract
  Creator.only(()=>{
    const projectDetails = declassify(interact.details)
  })
  Creator.publish(projectDetails);
  const{
    name,
    url,
    biddingFloor,
    deadline
  } = projectDetails

  const Bids = new Map(UInt)
  const keepGoing = 
  parallelReduce(true)
    .invariant(balance()>=0)
    .while(keepGoing)
    .api(Bidder.bid,
      ((amount)=> {
        assume(amount>0)
        assume(amount>=biddingFloor)
      }),
      ((amount)=> 0),
      ((amount)=>{
        
      })

    )
     .timeout(deadline, () => {
       Anybody.publish(Map.max(Bids))
       return false;
       });
  commit();
  // The second one to publish always attaches
  // commit();
  // write your program here
  exit();
});
