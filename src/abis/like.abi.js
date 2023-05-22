export const abi = [
  {
    anonymous: false,
    inputs: [],
    name: "Liked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isLiked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "like",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
