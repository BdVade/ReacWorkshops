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
    declareWinner: Fun([Address], Null)
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
        // assume(balance(this)>=biddingFloor)
      }),
      ((amount)=> 0),
      ((amount, setResponse)=>{
        Bids[this]= amount
        setResponse(true)
        return true
      })
      
    )
     .timeout(relativeSecs(deadline), () => {
       const winner = Map.max(Bids)
       Anybody.publish(winner)
       return false;
       });
  commit();
  // The second one to publish always attaches
  // commit();
  // write your program here
  exit();
});
