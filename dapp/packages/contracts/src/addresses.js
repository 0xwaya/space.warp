/**
 * See all ids below
 * https://ethereum.stackexchange.com/questions/17051/how-to-select-a-network-id-or-is-there-a-list-of-network-ids
 */
export const HYPERSPACE_ID = 3141;

const commonContracts = {
  factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  router01: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
  router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
};

export default {
  [HYPERSPACE_ID]: {
    pairs: {
      "DAI-WETH": " ",
    },
    tokens: {
      DAI: "0x697Ed3E98aaeCFa3121F536251F9D500de159dBa",
      WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    },
    ...commonContracts,
  },
  [MAINNET_ID]: {
    pairs: {
      "BAT-WETH": "0xB6909B960DbbE7392D405429eB2b3649752b4838",
      "COMP-WETH": "0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f",
      "DAI-WETH": "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
      "LEND-WETH": "0xaB3F9bF1D81ddb224a2014e98B238638824bCf20",
      "LINK-WETH": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      "MKR-WETH": "0xC2aDdA861F89bBB333c90c492cB837741916A225",
      "USDC-WETH": "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
      "USDC-USDT": "0x3041CbD36888bECc7bbCBc0045E3B1f144466f5f",
      "WBTC-WETH": "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
      "WETH-AMPL": "0xc5be99A02C6857f9Eac67BbCE58DF5572498F40c",
    },
    tokens: {
      AMPL: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
      BAT: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
      DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      LEND: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
      LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      MKR: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      wBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
  }
};
