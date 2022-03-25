// Automatically generated with Reach 0.1.9 (78dbf873)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (78dbf873)';
export const _backendVersion = 11;

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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Digest;
  
  
  const v60 = stdlib.protect(ctc0, interact.amt, 'for Alice\'s interact field amt');
  const v61 = stdlib.protect(ctc1, interact.passWord, 'for Alice\'s interact field passWord');
  
  const v64 = stdlib.digest(ctc2, [v61]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v60, v64],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:7:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc3],
    pay: [v60, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
      
      sim_r.txns.push({
        amt: v66,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest(ctc2, [v78]);
  const v82 = stdlib.digestEq(v67, v81);
  stdlib.assert(v82, {
    at: './index.rsh:37:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
  const ctc3 = stdlib.T_Tuple([ctc2]);
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v66, v67], secs: v69, time: v68, didSend: v32, from: v65 } = txn1;
  ;
  const v74 = stdlib.protect(ctc2, await interact.getPass(), {
    at: './index.rsh:31:47:application',
    fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: 'getPass',
    who: 'Bob'
    });
  const v75 = stdlib.digest(ctc3, [v74]);
  const v76 = stdlib.digestEq(v67, v75);
  stdlib.assert(v76, {
    at: './index.rsh:32:13:application',
    fs: ['at ./index.rsh:30:9:application call to [unknown function] (defined at: ./index.rsh:30:13:function exp)'],
    msg: null,
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v66, v67, v74],
    evt_cnt: 1,
    funcNum: 1,
    lct: v68,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
      
      ;
      const v81 = stdlib.digest(ctc3, [v78]);
      const v82 = stdlib.digestEq(v67, v81);
      ;
      sim_r.txns.push({
        amt: v66,
        kind: 'from',
        to: v77,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v43, from: v77 } = txn2;
  ;
  const v81 = stdlib.digest(ctc3, [v78]);
  const v82 = stdlib.digestEq(v67, v81);
  stdlib.assert(v82, {
    at: './index.rsh:37:10:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQELKGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAARSMSRCM0ARJENARJIhJMNAISEUQpZDUDSTUFNf+ABEk0gqI0/1CwNANXCCA0/wESRLEisgE0AyJbsggjshAxALIHs0IAUEgiNAESRDQESSISTDQCEhFESTUFSSJbNf9XCCA1/oAEtN7zVjT/FlA0/lCwgaCNBogAczT/iABuNP8WNP5QKUsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T2",
                "name": "v78",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T2",
                "name": "v78",
                "type": "tuple"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610783380380610783833981016040819052610022916101e6565b6000805543600355604080518251815260208084015180518284015201518183015290517f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9181900360600190a160208101515161008390341460076100ee565b60408051808201825260008082526020808301828152858201805151808652905183015182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e69260029290910190610117565b50505061027b565b816101135760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012390610240565b90600052602060002090601f016020900481019282610145576000855561018b565b82601f1061015e57805160ff191683800117855561018b565b8280016001018555821561018b579182015b8281111561018b578251825591602001919060010190610170565b5061019792915061019b565b5090565b5b80821115610197576000815560010161019c565b604080519081016001600160401b03811182821017156101e057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101f957600080fd5b6102016101b0565b835181526040601f198301121561021757600080fd5b61021f6101b0565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061025457607f821691505b6020821081141561027557634e487b7160e01b600052602260045260246000fd5b50919050565b6104f98061028a6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d5780638cd3c75514610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610367565b6100b8565b3480156100a157600080fd5b506100aa61024f565b60405161006492919061037f565b6100c8600160005414600a6102ec565b6100e2813515806100db57506001548235145b600b6102ec565b6000808055600280546100f4906103dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103dc565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b50505050508060200190518101906101859190610411565b90507fbd4bc3ce4b661fe264350ab7af8f9356a30fc81b3844e61bf19a0f55aa112a4d826040516101b69190610497565b60405180910390a16101ca341560086102ec565b604051610207906101e190602080860191016104b5565b6040516020818303038152906040528051906020012060001c82602001511460096102ec565b8051604051339180156108fc02916000818181858888f19350505050158015610234573d6000803e3d6000fd5b506000808055600181905561024b90600290610311565b5050565b600060606000546002808054610264906103dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610290906103dc565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b50505050509050915091509091565b8161024b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461031d906103dc565b6000825580601f1061032d575050565b601f01602090049060005260206000209081019061034b919061034e565b50565b5b80821115610363576000815560010161034f565b5090565b60006040828403121561037957600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103b357858101830151858201606001528201610397565b818111156103c5576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103f057607f821691505b6020821081141561037957634e487b7160e01b600052602260045260246000fd5b60006040828403121561042357600080fd5b6040516040810181811067ffffffffffffffff8211171561045457634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b80356fffffffffffffffffffffffffffffffff19811680821461049057600080fd5b9092525050565b81358152604081016104af602080840190850161046e565b92915050565b602081016104af828461046e56fea2646970667358221220e04a01917e44b85c0255cdc4572a16c4e15c289730adc14cbcf6527213dad1fd64736f6c634300080c0033`,
  BytecodeLen: 1923,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:39:11:after expr stmt semicolon',
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
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
