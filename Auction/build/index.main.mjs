// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc5],
      5: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Null;
  
  
  const [v210, v212, v214, v240, v241, v242, v265] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2]);
  const v269 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:7:function exp)', 'at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:7:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v270 = v269[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v273 = stdlib.gt(v270, v240);
  stdlib.assert(v273, {
    at: './index.rsh:49:15:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:16:function exp)', 'at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:7:function exp)', 'at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:7:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v210, v212, v214, v240, v241, v242, v265, v269],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v270, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v277], secs: v279, time: v278, didSend: v97, from: v276 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v281 = v277[stdlib.checkedBigNumberify('./index.rsh:46:9:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v281,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      if (v242) {
        const v300 = true;
        const v301 = await txn1.getOutput('Bidder_bid', 'v300', ctc3, v300);
        
        const v495 = v281;
        const v496 = v276;
        const v497 = false;
        const v501 = stdlib.add(v279, v214);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v240,
          kind: 'from',
          to: v241,
          tok: undefined /* Nothing */
          });
        const v291 = true;
        const v292 = await txn1.getOutput('Bidder_bid', 'v291', ctc3, v291);
        
        const v502 = v281;
        const v503 = v276;
        const v504 = false;
        const v508 = stdlib.add(v279, v214);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v277], secs: v279, time: v278, didSend: v97, from: v276 } = txn1;
  undefined /* setApiDetails */;
  const v281 = v277[stdlib.checkedBigNumberify('./index.rsh:46:9:spread', stdlib.UInt_max, '0')];
  ;
  if (v242) {
    const v300 = true;
    const v301 = await txn1.getOutput('Bidder_bid', 'v300', ctc3, v300);
    if (v97) {
      stdlib.protect(ctc5, await interact.out(v277, v301), {
        at: './index.rsh:46:10:application',
        fs: ['at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:58:22:application call to "setResponse" (defined at: ./index.rsh:53:7:function exp)', 'at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:7:function exp)'],
        msg: 'out',
        who: 'Bidder_bid'
        });
      }
    else {
      }
    
    const v495 = v281;
    const v496 = v276;
    const v497 = false;
    const v501 = stdlib.add(v279, v214);
    return;
    }
  else {
    ;
    const v291 = true;
    const v292 = await txn1.getOutput('Bidder_bid', 'v291', ctc3, v291);
    if (v97) {
      stdlib.protect(ctc5, await interact.out(v277, v292), {
        at: './index.rsh:46:10:application',
        fs: ['at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:58:22:application call to "setResponse" (defined at: ./index.rsh:53:7:function exp)', 'at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:7:function exp)'],
        msg: 'out',
        who: 'Bidder_bid'
        });
      }
    else {
      }
    
    const v502 = v281;
    const v503 = v276;
    const v504 = false;
    const v508 = stdlib.add(v279, v214);
    return;
    }
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    biddingFloor: ctc0,
    deadline: ctc0,
    name: ctc1,
    nftId: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc6]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v194 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v195 = [v194];
  const v199 = stdlib.protect(ctc3, interact.details, 'for Creator\'s interact field details');
  const v200 = v199.biddingFloor;
  const v201 = v199.deadline;
  const v202 = v199.name;
  const v203 = v199.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v202, v203, v200, v201],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc2, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v211, v212, v213, v214], secs: v216, time: v215, didSend: v38, from: v210 } = txn1;
      
      const v217 = v195[stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '0')];
      const v219 = v217[stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '1')];
      const v220 = v217[stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '2')];
      const v221 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v219, v220];
      const v222 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '0'), v221);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v212
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v211, v212, v213, v214], secs: v216, time: v215, didSend: v38, from: v210 } = txn1;
  const v217 = v195[stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '0')];
  const v219 = v217[stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '1')];
  const v220 = v217[stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '2')];
  const v221 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v219, v220];
  const v222 = stdlib.Array_set(v195, stdlib.checkedBigNumberify('./index.rsh:31:11:dot', stdlib.UInt_max, '0'), v221);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v210, v212, v213, v214, v222],
    evt_cnt: 0,
    funcNum: 1,
    lct: v215,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'), v212]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v226, time: v225, didSend: v45, from: v224 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v212
        });
      const v240 = v213;
      const v241 = v224;
      const v242 = true;
      const v243 = true;
      const v244 = v225;
      const v247 = v226;
      
      if (await (async () => {
        
        return v243;})()) {
        const v265 = stdlib.add(v247, v214);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'),
          kind: 'from',
          to: v241,
          tok: v212
          });
        if (v242) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v212
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            amt: v240,
            kind: 'from',
            to: v210,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v212
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc0, ctc0, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v226, time: v225, didSend: v45, from: v224 } = txn2;
  ;
  const v227 = v222[stdlib.checkedBigNumberify('./index.rsh:39:11:dot', stdlib.UInt_max, '0')];
  const v228 = v227[stdlib.checkedBigNumberify('./index.rsh:39:11:dot', stdlib.UInt_max, '0')];
  const v229 = stdlib.add(v228, stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'));
  const v232 = v227[stdlib.checkedBigNumberify('./index.rsh:39:11:dot', stdlib.UInt_max, '1')];
  const v233 = v227[stdlib.checkedBigNumberify('./index.rsh:39:11:dot', stdlib.UInt_max, '2')];
  const v234 = [v229, v232, v233];
  const v235 = stdlib.Array_set(v222, stdlib.checkedBigNumberify('./index.rsh:39:11:dot', stdlib.UInt_max, '0'), v234);
  ;
  const v236 = stdlib.addressEq(v210, v224);
  stdlib.assert(v236, {
    at: './index.rsh:39:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v237 = v235[stdlib.checkedBigNumberify('./index.rsh:40:16:application', stdlib.UInt_max, '0')];
  const v238 = v237[stdlib.checkedBigNumberify('./index.rsh:40:16:application', stdlib.UInt_max, '0')];
  const v239 = stdlib.eq(v238, stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v239, {
    at: './index.rsh:40:8:application',
    fs: [],
    msg: 'balance of NFT is wrong',
    who: 'Creator'
    });
  let v240 = v213;
  let v241 = v224;
  let v242 = true;
  let v243 = true;
  let v244 = v225;
  let v247 = v226;
  
  while (await (async () => {
    
    return v243;})()) {
    const v265 = stdlib.add(v247, v214);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['secs', v265],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v210, v212, v214, v240, v241, v242, v265],
        evt_cnt: 0,
        funcNum: 4,
        lct: v244,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:66:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v310, time: v309, didSend: v136, from: v308 } = txn4;
          
          ;
          const cv240 = v240;
          const cv241 = v241;
          const cv242 = v242;
          const cv243 = false;
          const cv244 = v309;
          const cv247 = v310;
          
          await (async () => {
            const v240 = cv240;
            const v241 = cv241;
            const v242 = cv242;
            const v243 = cv243;
            const v244 = cv244;
            const v247 = cv247;
            
            if (await (async () => {
              
              return v243;})()) {
              const v265 = stdlib.add(v247, v214);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'),
                kind: 'from',
                to: v241,
                tok: v212
                });
              if (v242) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v212
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  amt: v240,
                  kind: 'from',
                  to: v210,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v212
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc2, ctc0, ctc0, ctc7, ctc6, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v310, time: v309, didSend: v136, from: v308 } = txn4;
      ;
      const v311 = stdlib.addressEq(v210, v308);
      stdlib.assert(v311, {
        at: './index.rsh:66:16:dot',
        fs: ['at ./index.rsh:65:42:application call to [unknown function] (defined at: ./index.rsh:65:42:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv240 = v240;
      const cv241 = v241;
      const cv242 = v242;
      const cv243 = false;
      const cv244 = v309;
      const cv247 = v310;
      
      v240 = cv240;
      v241 = cv241;
      v242 = cv242;
      v243 = cv243;
      v244 = cv244;
      v247 = cv247;
      
      continue;
      }
    else {
      const {data: [v277], secs: v279, time: v278, didSend: v97, from: v276 } = txn3;
      undefined /* setApiDetails */;
      const v281 = v277[stdlib.checkedBigNumberify('./index.rsh:46:9:spread', stdlib.UInt_max, '0')];
      ;
      if (v242) {
        stdlib.protect(ctc5, await interact.topBid(v276, v281), {
          at: './index.rsh:57:34:application',
          fs: ['at ./index.rsh:57:34:application call to [unknown function] (defined at: ./index.rsh:57:34:function exp)', 'at ./index.rsh:57:34:application call to "liftedInteract" (defined at: ./index.rsh:57:34:application)', 'at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:7:function exp)'],
          msg: 'topBid',
          who: 'Creator'
          });
        
        const v300 = true;
        await txn3.getOutput('Bidder_bid', 'v300', ctc6, v300);
        const cv240 = v281;
        const cv241 = v276;
        const cv242 = false;
        const cv243 = true;
        const cv244 = v278;
        const cv247 = v279;
        
        v240 = cv240;
        v241 = cv241;
        v242 = cv242;
        v243 = cv243;
        v244 = cv244;
        v247 = cv247;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc5, await interact.topBid(v276, v281), {
          at: './index.rsh:57:34:application',
          fs: ['at ./index.rsh:57:34:application call to [unknown function] (defined at: ./index.rsh:57:34:function exp)', 'at ./index.rsh:57:34:application call to "liftedInteract" (defined at: ./index.rsh:57:34:application)', 'at ./index.rsh:53:7:application call to [unknown function] (defined at: ./index.rsh:53:7:function exp)'],
          msg: 'topBid',
          who: 'Creator'
          });
        
        const v291 = true;
        await txn3.getOutput('Bidder_bid', 'v291', ctc6, v291);
        const cv240 = v281;
        const cv241 = v276;
        const cv242 = false;
        const cv243 = true;
        const cv244 = v278;
        const cv247 = v279;
        
        v240 = cv240;
        v241 = cv241;
        v242 = cv242;
        v243 = cv243;
        v244 = cv244;
        v247 = cv247;
        
        continue;}}
    
    }
  ;
  if (v242) {
    stdlib.protect(ctc5, await interact.declareWinner(v241, v240), {
      at: './index.rsh:72:38:application',
      fs: ['at ./index.rsh:72:38:application call to [unknown function] (defined at: ./index.rsh:72:38:function exp)', 'at ./index.rsh:72:38:application call to "liftedInteract" (defined at: ./index.rsh:72:38:application)'],
      msg: 'declareWinner',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc5, await interact.declareWinner(v241, v240), {
      at: './index.rsh:72:38:application',
      fs: ['at ./index.rsh:72:38:application call to [unknown function] (defined at: ./index.rsh:72:38:function exp)', 'at ./index.rsh:72:38:application call to "liftedInteract" (defined at: ./index.rsh:72:38:application)'],
      msg: 'declareWinner',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)byte`],
    pure: [],
    sigs: [`Bidder_bid(uint64)byte`]
    },
  appApproval: `BiAKAAEEBSAoMAhZoI0GJgMBAAABASI1ADEYQQNVKWRJIls1ASEHWzUCNhoAF0lBABQiNQQjNQaB3uyw1gISRDYaAUIAcjYaAhc1BDYaAzYaARdJgQMMQAEJSSQMQABXJBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJEnNPOwMgc0AyEIWw9ENP8xABJENP80AyEEWzQDIQVbNAMhBls0A1c4IDQDV1gBFyIyBjIHQgHFSCU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/iEFWzX9STUFNfyABNeQtN00/FCwMgc0AyEIWwxENPwXNfs0+4gCfDQDV1gBF0EAIoAJAAAAAAAAASwBsCo1BzT/NP40/TT7MQAiIzIGMgdCAVGxIrIBNAMhBluyCCOyEDQDVzggsgezgAkAAAAAAAABIwGwKjUHNP80/jT9NPsxACIjMgYyB0IBGUkjDEAAdyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lc4ETX9gASai5F0sDT9VwARNfwjNP6IAe40/zEAEkQ0/CJbIwgWNPxXCAhQNPxXEAFQVwARIlsjEkQ0/zT+NAMhBls0AyEFWzEAIyMyBjIHQgCcSCI0ARJENARJIhJMNAISEURJNQVJSlcAIDX/IQRbNf4hBVs1/SEGWzX8gAT1NYu0NP9QNP4WUDT9FlA0/BZQsCEJiAFXgRGvSTX7VwARNfohB680+lcICFA0+lcQAVA1+SEJiAE2sSKyASKyEiSyEDIKshQ0/rIRszEANP4WUDT9FlA0/BZQNPlQKEsBVwBJZ0gjNQEyBjUCQgDDNf81/jX9Nfw1+zX6Nfk1+DX3NP1BADU0/zT5CDX2NPc0+BZQNPkWUDT6FlA0+1A0/BZRBwhQNPYWUChLAVcAYWdIJTUBMgY1AkIAd7EisgEjshIkshA0+7IUNPiyEbM0/EEAGrEisgEishIkshAyCbIVMgqyFDT4shGzQgAqsSKyATT6sggjshA097IHs7EisgEishIkshAyCbIVMgqyFDT4shGzQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v211",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v212",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v211",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v212",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v277",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v291",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v300",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v277",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a3c38038062001a3c833981016040819052620000269162000488565b60008055436003556200003862000252565b6040805133815283516020808301919091528085015180515183850152908101516001600160a01b0316606080840191909152818401516080840152015160a082015290517f50c3e22045dded345906b9a2a5ac78ed9b955e5b8498551ee02621dc01b417bd9181900360c00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001059290620001a5565b6060820152620001183415600762000228565b62000122620002b9565b338152602080840180518201516001600160a01b0316828401528051604090810151818501529051606090810151818501528401516080840152600160008190554390555162000175918391016200054b565b604051602081830303815290604052600290805190602001906200019b929190620002fc565b5050505062000632565b620001af6200038b565b60005b60018110156200020557848160018110620001d157620001d162000535565b6020020151828260018110620001eb57620001eb62000535565b602002015280620001fc81620005cb565b915050620001b2565b50818184600181106200021c576200021c62000535565b60200201529392505050565b816200024e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002856200038b565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b46200038b565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002b46200038b565b8280546200030a90620005f5565b90600052602060002090601f0160209004810192826200032e576000855562000379565b82601f106200034957805160ff191683800117855562000379565b8280016001018555821562000379579182015b82811115620003795782518255916020019190600101906200035c565b5062000387929150620003d8565b5090565b60405180602001604052806001905b620003c1604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200039a5790505090565b5b80821115620003875760008155600101620003d9565b604080519081016001600160401b03811182821017156200042057634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200042057634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200042057634e487b7160e01b600052604160045260246000fd5b600081830360a08112156200049c57600080fd5b620004a6620003ef565b83518152601f19820191506080821215620004c057600080fd5b620004ca62000426565b6020831215620004d957600080fd5b620004e362000457565b602086015181528152604085015192506001600160a01b03831683146200050957600080fd5b826020820152606085015160408201526080850151606082015280602083015250809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b6001811015620005bf57825180518352858101518684015286015115158683015291840191908301906001016200058d565b50505050505092915050565b6000600019821415620005ee57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200060a57607f821691505b602082108114156200062c57634e487b7160e01b600052602260045260246000fd5b50919050565b6113fa80620006426000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063b62792241461010c57005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f87565b61012f565b6100756100bc366004610f87565b61015a565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610f87565b610181565b3480156100f557600080fd5b506100fe6101a8565b604051610092929190610fcf565b61011f61011a366004611009565b610245565b6040519015158152602001610092565b604080516020810190915260008152610156610150368490038401846110ca565b82610287565b5050565b60408051602081019091526000815261015661017b3684900384018461112f565b826104fc565b6040805160208101909152600081526101566101a23684900384018461112f565b82610756565b6000606060005460028080546101bd90611167565b80601f01602080910402602001604051908101604052809291908181526020018280546101e990611167565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b50505050509050915091509091565b604080516020810190915260008082529061025e610dc0565b604080518082019091526020808201868152825282015261027f8183610287565b505192915050565b610297600560005414600f610927565b81516102b29015806102ab57508251600154145b6010610927565b6000808055600280546102c490611167565b80601f01602080910402602001604051908101604052809291908181526020018280546102f090611167565b801561033d5780601f106103125761010080835404028352916020019161033d565b820191906000526020600020905b81548152906001019060200180831161032057829003601f168201915b505050505080602001905181019061035591906111b8565b90506103688160c0015142106011610927565b60408051338152845160208083019190915285015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a1602083015151516103c3903414600e610927565b8060a001511561048457604051600181527f750d980cdc17db9e83512c894567a0055ab6941e35510e09154e7102650e51db906020015b60405180910390a16001825261040e610df2565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201528582015151518284018051919091528051339301929092528151600091015280516001606090910152805143608090910152514260a09091015261047e8161094d565b50505050565b80608001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f193505050501580156104c5573d6000803e3d6000fd5b50604051600181527f04976168436ca2e31e70bfcfd3d38342c8c900392d96fff1d7142b09883115da906020016103fa565b505050565b61050c600160005414600c610927565b815161052790158061052057508251600154145b600d610927565b60008080556002805461053990611167565b80601f016020809104026020016040519081016040528092919081815260200182805461056590611167565b80156105b25780601f10610587576101008083540402835291602001916105b2565b820191906000526020600020905b81548152906001019060200180831161059557829003601f168201915b50505050508060200190518101906105ca9190611257565b90506105f360408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161064634156008610927565b6080820151515161065990600190611358565b815152608082018051516020908101518351820152905151604090810151835190151591015282015161069a906106939033906001610b3a565b6009610927565b81516106b2906001600160a01b03163314600a610927565b6106d560016106cb846080015160008560000151610b52565b515114600b610927565b6106dd610df2565b825181516001600160a01b0391821690526020808501518351921691810191909152606080850151835160409081019190915280860151838501805191909152805133940193909352825160019101819052825190910152805143608090910152514260a09091015261074f8161094d565b5050505050565b6107666005600054146014610927565b815161078190158061077a57508251600154145b6015610927565b60008080556002805461079390611167565b80601f01602080910402602001604051908101604052809291908181526020018280546107bf90611167565b801561080c5780601f106107e15761010080835404028352916020019161080c565b820191906000526020600020905b8154815290600101906020018083116107ef57829003601f168201915b505050505080602001905181019061082491906111b8565b90506108388160c001514210156016610927565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a161088b34156012610927565b80516108a3906001600160a01b031633146013610927565b6108ab610df2565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015183860180519190915260808088015182519616959094019490945260a08087015185519015159301929092528351600091015282514392019190915290514291015261047e8161094d565b816101565760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60408051602081019091526000815281602001516060015115610aa457815160400151602083015160a001516109839190611358565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528186018051516060860152805183015190931660808501529151820151151560a0840152835160c08401526005600055436001559051610a809183910181516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519091169082015260a08281015115159082015260c0918201519181019190915260e00190565b6040516020818303038152906040526002908051906020019061047e929190610e4e565b610ac08260000151602001518360200151602001516001610bc6565b81602001516040015115610ae4576000808055600181905561015690600290610ed2565b8151516020830151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b23573d6000803e3d6000fd5b506000808055600181905561015690600290610ed2565b6000610b4883853085610bda565b90505b9392505050565b610b5a610f0f565b60005b6001811015610ba657848160018110610b7857610b7861132c565b6020020151828260018110610b8f57610b8f61132c565b602002015280610b9e81611370565b915050610b5d565b5081818460018110610bba57610bba61132c565b60200201529392505050565b610bd1838383610cb4565b6104f757600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c419161138b565b60006040518083038185875af1925050503d8060008114610c7e576040519150601f19603f3d011682016040523d82523d6000602084013e610c83565b606091505b5091509150610c9482826001610d85565b5080806020019051810190610ca991906113a7565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610d139161138b565b60006040518083038185875af1925050503d8060008114610d50576040519150601f19603f3d011682016040523d82523d6000602084013e610d55565b606091505b5091509150610d6682826002610d85565b5080806020019051810190610d7b91906113a7565b9695505050505050565b60608315610d94575081610b4b565b825115610da45782518084602001fd5b60405163100960cb60e01b815260048101839052602401610944565b604051806040016040528060008152602001610ded60408051808201909152600060208201908152815290565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291015290565b828054610e5a90611167565b90600052602060002090601f016020900481019282610e7c5760008555610ec2565b82601f10610e9557805160ff1916838001178555610ec2565b82800160010185558215610ec2579182015b82811115610ec2578251825591602001919060010190610ea7565b50610ece929150610f5a565b5090565b508054610ede90611167565b6000825580601f10610eee575050565b601f016020900490600052602060002090810190610f0c9190610f5a565b50565b60405180602001604052806001905b610f44604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081610f1e5790505090565b5b80821115610ece5760008155600101610f5b565b600060408284031215610f8157600080fd5b50919050565b600060408284031215610f9957600080fd5b610b4b8383610f6f565b60005b83811015610fbe578181015183820152602001610fa6565b8381111561047e5750506000910152565b8281526040602082015260008251806040840152610ff4816060850160208701610fa3565b601f01601f1916919091016060019392505050565b60006020828403121561101b57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561105b5761105b611022565b60405290565b6040516020810167ffffffffffffffff8111828210171561105b5761105b611022565b60405160a0810167ffffffffffffffff8111828210171561105b5761105b611022565b6040516060810167ffffffffffffffff8111828210171561105b5761105b611022565b600081830360408112156110dd57600080fd5b6110e5611038565b833581526020601f19830112156110fb57600080fd5b611103611061565b915061110d611061565b602094850135815282529283015250919050565b8015158114610f0c57600080fd5b60006040828403121561114157600080fd5b611149611038565b82358152602083013561115b81611121565b60208201529392505050565b600181811c9082168061117b57607f821691505b60208210811415610f8157634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146111b357600080fd5b919050565b600060e082840312156111ca57600080fd5b60405160e0810181811067ffffffffffffffff821117156111ed576111ed611022565b6040526111f98361119c565b81526112076020840161119c565b6020820152604083015160408201526060830151606082015261122c6080840161119c565b608082015260a083015161123f81611121565b60a082015260c0928301519281019290925250919050565b600060e0828403121561126957600080fd5b611271611084565b61127a8361119c565b8152602061128981850161119c565b81830152604080850151818401526060808601518185015286609f8701126112b057600080fd5b6112b8611061565b8060e08801898111156112ca57600080fd5b608089015b818110156113195784818c0312156112e75760008081fd5b6112ef6110a7565b8151815287820151888201528682015161130881611121565b8188015284529286019284016112cf565b5050608086015250929695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561136b5761136b611342565b500190565b600060001982141561138457611384611342565b5060010190565b6000825161139d818460208701610fa3565b9190910192915050565b6000602082840312156113b957600080fd5b8151610b4b8161112156fea2646970667358221220f85249f7ad8c7234f65afe4a3e79452efe04bdce4c79a4ff75e9be09a4b7da9e64736f6c634300080c0033`,
  BytecodeLen: 6716,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:73:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:43:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
