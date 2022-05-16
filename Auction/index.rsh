'reach 0.1';
const ProjectDetails = Object({
  name:Bytes(32),
  nftId: Token,
  biddingFloor: UInt,
  deadline: UInt
})
export const main = Reach.App(() => {
  const Creator = Participant('Creator', {
    details: ProjectDetails,
    declareWinner: Fun([Address, UInt], Null),
    topBid: Fun([Address, UInt], Null),
    // withdrawFunds: Fun([Address], Null) Send to to wallet
    })
    
  const Bidder = API('Bidder', {
    bid: Fun([UInt], Bool)
  });

  
  init();
  // The first one to publish deploys the contract
  Creator.only(()=>{
    const {
      name,
      nftId,
      biddingFloor,
      deadline
    }  = declassify(interact.details)
  })
  Creator.publish(name, nftId, biddingFloor, deadline);

  commit();
//  use UInt to store 
// Users to claim
  // let highestBid = 0
  // let highestBidder = Null
  const amt = 1;
  Creator.pay([[amt, nftId]]);
  check(balance(nftId) == amt, "balance of NFT is wrong");

  const [keepGoing, highestBid, highestBidder, isFirstBid] = 
  parallelReduce([true, biddingFloor, this, true])
    .invariant(balance(nftId)== amt && balance() == (isFirstBid ?0 : highestBid))
    .while(keepGoing)
    .api(Bidder.bid,
      ((amount)=> {
        
        assume(amount>highestBid, "bid is too low")
        // assume(balance(this)>=biddingFloor)
      }),
      ((amount)=> amount),
      ((amount, setResponse)=>{
          if (!isFirstBid){
            transfer(highestBid).to(highestBidder)
          }
          Creator.interact.topBid(this, amount)
          setResponse(true)
          return [true, amount, this, false]

     
  })
      
    )
     .timeout(relativeSecs(deadline), () => {
       Creator.publish();
       return [false, highestBid, highestBidder, isFirstBid]
       
       });
       transfer(amt, nftId).to(highestBidder);
       if(!isFirstBid){ transfer(highestBid).to(Creator); }
       Creator.interact.declareWinner(highestBidder, highestBid);
  commit();
  exit();
});
