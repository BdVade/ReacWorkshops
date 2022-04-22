'reach 0.1';

export const main = Reach.App(() => {
  const creator = Participant('Creator', {
    approvalLimit: UInt,
    donationLimit: UInt,
    state: UInt,
    name: UInt, // place holder. figure out how to return Bytes
    url: UInt,
    approvalRxpiryDate: UInt,
    donationExpiryDate: UInt,
    causeAccount: Address
  });
  const voter = Participant('Voter', {
    amount: UInt,
    assetID: UInt,
    claim:Fun([], Null)
  });
   const checker = Participant('Checker', {
    
   })
 const approvals = new Map(Address, UInt)
 const donations = new Map(Address, UInt)
  init();
  const approvalLimit = declassify(interact.approvalLimit)
  const donationLimit = declassify(interact.donationLimit)
  const state = declassify(interact.state)
  const name = declassify(interact.name)
  const url = declassify(interact.url)
  const expiryDate = declassify(interact.expiryDate)
  const causeAccount = declassify(interact.causeAccount)
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
    if (donations.has(this)){
      approvals[this]+=amount
    } else{
      donations[this] = amount
    }
  } else{
    voter.publish.pay([amount, asset])
    
    if (approvals.has(this)){
      approvals[this]+=amount
    } else{
      approvals[this] = amount
    }
  }

  voter.publish();
  commit();
  // write your program here
  //when deadline passes or balance is completed.
  transfer(donationLimit).to(causeAccount)

  // use map.forEach() to return modey to voters and donating people
  
  exit();
});
