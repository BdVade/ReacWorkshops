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
//  use UInt to store 
// Users to claim
  // let highestBid = 0
  // let highestBidder = Null
  const [keepGoing, highestBid, highestBidder] = 
  parallelReduce([true, 0, this])
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
        if(amount>highestBid){
          setResponse(true)
          return [true, amount, this]
        }
        else{
        setResponse(false)
        return[true, highestBid, highestBidder]
    }
  })
      
    )
     .timeout(relativeSecs(deadline), () => {
       const winner = highestBidder
       highestBidder.pay(highestBid)
       return false;
       });
  commit();
  // The second one to publish always attaches
  // commit();
  // write your program here
  exit();
});
