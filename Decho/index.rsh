'reach 0.1';

export const main = Reach.App(() => {
  const creator = Participant('Creator', {
    approvalLimit: UInt,
    donationLimit: UInt,
    state: UInt,
    name: Bytes[16],
    url: Bytes,
    approvalRxpiryDate: UInt,
    donationExpiryDate: Uint,
    causeAccount: Address
  });
  const voter = Participant('Voter', {
    amount: UInt,
    assetID: UInt,
  });
   const checker = Participant('Checker', {
    
   })
   let approvalAsset = None
 let approvals = Map(Address, UInt)
 let donations = Map(Address, UInt)
  init();
  const approvalLimit = declassify(interact.approvalLimit)
  const donationLimit = declassify(interact.donationLimit)
  const state = declassify(interact.state)
  const name = declassify(interact.name)
  const url = declassify(interact.url)
  const expiryDate = declassify(interact.expiryDate)
  creator.publish(approvalLimit, donationLimit,state, name, url, expiryDate);
  checker.set(None) // An address/account. To be determined later
  commit();
  // The second one to publish always attaches
  voter.only(()=>{
    const amount =  interact.amount
    const asset =  interact.asset
  })
  if (asset == 0){
    voter.publish().pay(amount)
    donations[this]= amount
  } else{
    voter.publish.pay([amount, asset])
    approvals[this] = amount
  }

  voter.publish();
  commit();
  // write your program here
  exit();
});
