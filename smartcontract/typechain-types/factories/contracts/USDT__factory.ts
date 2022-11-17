/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { USDT, USDTInterface } from "../../contracts/USDT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526012600a620000149190620006f0565b640ba43b740062000026919062000741565b6006553480156200003657600080fd5b506040518060400160405280600981526020017f55534454206d6f636b00000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f55534454000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb929190620004b3565b508060049080519060200190620000d4929190620004b3565b505050620000f7620000eb6200012260201b60201c565b6200012a60201b60201c565b6200010b33600654620001f060201b60201c565b6200011c336200036960201b60201c565b62000a1f565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000263576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200025a9062000803565b60405180910390fd5b62000277600083836200047f60201b60201c565b80600260008282546200028b919062000825565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002e2919062000825565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000349919062000893565b60405180910390a362000365600083836200048460201b60201c565b5050565b620003796200012260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff166200039f6200048960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620003f8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003ef9062000900565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200046b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004629062000998565b60405180910390fd5b6200047c816200012a60201b60201c565b50565b505050565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b828054620004c190620009e9565b90600052602060002090601f016020900481019282620004e5576000855562000531565b82601f106200050057805160ff191683800117855562000531565b8280016001018555821562000531579182015b828111156200053057825182559160200191906001019062000513565b5b50905062000540919062000544565b5090565b5b808211156200055f57600081600090555060010162000545565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620005f157808604811115620005c957620005c862000563565b5b6001851615620005d95780820291505b8081029050620005e98562000592565b9450620005a9565b94509492505050565b6000826200060c5760019050620006df565b816200061c5760009050620006df565b8160018114620006355760028114620006405762000676565b6001915050620006df565b60ff84111562000655576200065462000563565b5b8360020a9150848211156200066f576200066e62000563565b5b50620006df565b5060208310610133831016604e8410600b8410161715620006b05782820a905083811115620006aa57620006a962000563565b5b620006df565b620006bf84848460016200059f565b92509050818404811115620006d957620006d862000563565b5b81810290505b9392505050565b6000819050919050565b6000620006fd82620006e6565b91506200070a83620006e6565b9250620007397fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005fa565b905092915050565b60006200074e82620006e6565b91506200075b83620006e6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000797576200079662000563565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620007eb601f83620007a2565b9150620007f882620007b3565b602082019050919050565b600060208201905081810360008301526200081e81620007dc565b9050919050565b60006200083282620006e6565b91506200083f83620006e6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000877576200087662000563565b5b828201905092915050565b6200088d81620006e6565b82525050565b6000602082019050620008aa600083018462000882565b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620008e8602083620007a2565b9150620008f582620008b0565b602082019050919050565b600060208201905081810360008301526200091b81620008d9565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000980602683620007a2565b91506200098d8262000922565b604082019050919050565b60006020820190508181036000830152620009b38162000971565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a0257607f821691505b6020821081141562000a195762000a18620009ba565b5b50919050565b611da38062000a2f6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b60405161012591906112d8565b60405180910390f35b61014860048036038101906101439190611393565b610402565b60405161015591906113ee565b60405180910390f35b610166610425565b6040516101739190611418565b60405180910390f35b61019660048036038101906101919190611433565b61042f565b6040516101a391906113ee565b60405180910390f35b6101b461045e565b6040516101c191906114a2565b60405180910390f35b6101e460048036038101906101df9190611393565b610467565b6040516101f191906113ee565b60405180910390f35b610214600480360381019061020f9190611393565b61049e565b005b610230600480360381019061022b91906114bd565b61057f565b005b61024c600480360381019061024791906114ea565b610593565b6040516102599190611418565b60405180910390f35b61026a6105db565b005b61028660048036038101906102819190611393565b610663565b005b610290610683565b60405161029d9190611526565b60405180910390f35b6102ae6106ad565b6040516102bb91906112d8565b60405180910390f35b6102de60048036038101906102d99190611393565b61073f565b6040516102eb91906113ee565b60405180910390f35b61030e60048036038101906103099190611393565b6107b6565b60405161031b91906113ee565b60405180910390f35b61033e60048036038101906103399190611541565b6107d9565b60405161034b9190611418565b60405180910390f35b61036e600480360381019061036991906114ea565b610860565b005b60606003805461037f906115b0565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab906115b0565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b60008061040d610958565b905061041a818585610960565b600191505092915050565b6000600254905090565b60008061043a610958565b9050610447858285610b2b565b610452858585610bb7565b60019150509392505050565b60006012905090565b600080610472610958565b905061049381858561048485896107d9565b61048e9190611611565b610960565b600191505092915050565b6104a6610958565b73ffffffffffffffffffffffffffffffffffffffff166104c4610683565b73ffffffffffffffffffffffffffffffffffffffff161461051a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610511906116b3565b60405180910390fd5b60065481610526610425565b6105309190611611565b1115610571576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105689061171f565b60405180910390fd5b61057b8282610e38565b5050565b61059061058a610958565b82610f98565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105e3610958565b73ffffffffffffffffffffffffffffffffffffffff16610601610683565b73ffffffffffffffffffffffffffffffffffffffff1614610657576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064e906116b3565b60405180910390fd5b610661600061116f565b565b6106758261066f610958565b83610b2b565b61067f8282610f98565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546106bc906115b0565b80601f01602080910402602001604051908101604052809291908181526020018280546106e8906115b0565b80156107355780601f1061070a57610100808354040283529160200191610735565b820191906000526020600020905b81548152906001019060200180831161071857829003601f168201915b5050505050905090565b60008061074a610958565b9050600061075882866107d9565b90508381101561079d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610794906117b1565b60405180910390fd5b6107aa8286868403610960565b60019250505092915050565b6000806107c1610958565b90506107ce818585610bb7565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610868610958565b73ffffffffffffffffffffffffffffffffffffffff16610886610683565b73ffffffffffffffffffffffffffffffffffffffff16146108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d3906116b3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094390611843565b60405180910390fd5b6109558161116f565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c7906118d5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3790611967565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b1e9190611418565b60405180910390a3505050565b6000610b3784846107d9565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610bb15781811015610ba3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9a906119d3565b60405180910390fd5b610bb08484848403610960565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1e90611a65565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8e90611af7565b60405180910390fd5b610ca2838383611235565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1f90611b89565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dbb9190611611565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e1f9190611418565b60405180910390a3610e3284848461123a565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ea8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9f90611bf5565b60405180910390fd5b610eb460008383611235565b8060026000828254610ec69190611611565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f1b9190611611565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f809190611418565b60405180910390a3610f946000838361123a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611008576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fff90611c87565b60405180910390fd5b61101482600083611235565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561109a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109190611d19565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546110f19190611d39565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111569190611418565b60405180910390a361116a8360008461123a565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561127957808201518184015260208101905061125e565b83811115611288576000848401525b50505050565b6000601f19601f8301169050919050565b60006112aa8261123f565b6112b4818561124a565b93506112c481856020860161125b565b6112cd8161128e565b840191505092915050565b600060208201905081810360008301526112f2818461129f565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061132a826112ff565b9050919050565b61133a8161131f565b811461134557600080fd5b50565b60008135905061135781611331565b92915050565b6000819050919050565b6113708161135d565b811461137b57600080fd5b50565b60008135905061138d81611367565b92915050565b600080604083850312156113aa576113a96112fa565b5b60006113b885828601611348565b92505060206113c98582860161137e565b9150509250929050565b60008115159050919050565b6113e8816113d3565b82525050565b600060208201905061140360008301846113df565b92915050565b6114128161135d565b82525050565b600060208201905061142d6000830184611409565b92915050565b60008060006060848603121561144c5761144b6112fa565b5b600061145a86828701611348565b935050602061146b86828701611348565b925050604061147c8682870161137e565b9150509250925092565b600060ff82169050919050565b61149c81611486565b82525050565b60006020820190506114b76000830184611493565b92915050565b6000602082840312156114d3576114d26112fa565b5b60006114e18482850161137e565b91505092915050565b600060208284031215611500576114ff6112fa565b5b600061150e84828501611348565b91505092915050565b6115208161131f565b82525050565b600060208201905061153b6000830184611517565b92915050565b60008060408385031215611558576115576112fa565b5b600061156685828601611348565b925050602061157785828601611348565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806115c857607f821691505b602082108114156115dc576115db611581565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061161c8261135d565b91506116278361135d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561165c5761165b6115e2565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061169d60208361124a565b91506116a882611667565b602082019050919050565b600060208201905081810360008301526116cc81611690565b9050919050565b7f5553445420746f6b656e3a206361702065786365656465640000000000000000600082015250565b600061170960188361124a565b9150611714826116d3565b602082019050919050565b60006020820190508181036000830152611738816116fc565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061179b60258361124a565b91506117a68261173f565b604082019050919050565b600060208201905081810360008301526117ca8161178e565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061182d60268361124a565b9150611838826117d1565b604082019050919050565b6000602082019050818103600083015261185c81611820565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006118bf60248361124a565b91506118ca82611863565b604082019050919050565b600060208201905081810360008301526118ee816118b2565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061195160228361124a565b915061195c826118f5565b604082019050919050565b6000602082019050818103600083015261198081611944565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006119bd601d8361124a565b91506119c882611987565b602082019050919050565b600060208201905081810360008301526119ec816119b0565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611a4f60258361124a565b9150611a5a826119f3565b604082019050919050565b60006020820190508181036000830152611a7e81611a42565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611ae160238361124a565b9150611aec82611a85565b604082019050919050565b60006020820190508181036000830152611b1081611ad4565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611b7360268361124a565b9150611b7e82611b17565b604082019050919050565b60006020820190508181036000830152611ba281611b66565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611bdf601f8361124a565b9150611bea82611ba9565b602082019050919050565b60006020820190508181036000830152611c0e81611bd2565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c7160218361124a565b9150611c7c82611c15565b604082019050919050565b60006020820190508181036000830152611ca081611c64565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d0360228361124a565b9150611d0e82611ca7565b604082019050919050565b60006020820190508181036000830152611d3281611cf6565b9050919050565b6000611d448261135d565b9150611d4f8361135d565b925082821015611d6257611d616115e2565b5b82820390509291505056fea2646970667358221220837cb8b2a7cc240b3016853303f332bdc09c50dca1d88a58a641a933882b1d8264736f6c63430008090033";

type USDTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDT__factory extends ContractFactory {
  constructor(...args: USDTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<USDT> {
    return super.deploy(overrides || {}) as Promise<USDT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): USDT {
    return super.attach(address) as USDT;
  }
  override connect(signer: Signer): USDT__factory {
    return super.connect(signer) as USDT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDTInterface {
    return new utils.Interface(_abi) as USDTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USDT {
    return new Contract(address, _abi, signerOrProvider) as USDT;
  }
}
