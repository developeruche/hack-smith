import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {config as evn_config} from "dotenv";
evn_config();


const { PRIVATE_KEY, PRIVATE_KEY_TEST, RPC_URL } = process.env;


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    polygon: {
      url: RPC_URL,
      accounts: [
        PRIVATE_KEY!,
      ],
    },

    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/bGRq4Ou6YB_plvpRZFDQsWW1MWukDWy6",
      accounts: [
        PRIVATE_KEY_TEST!,
      ],
    },
  }
};
export default config;
