import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {config as evn_config} from "dotenv";
evn_config();


const { PRIVATE_KEY, RPC_URL } = process.env;


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
        "5393eb89457505dc0cea935ef8f3e09b03ecc283234fff38fdf6c8a8d0ccf35a",
      ],
    },
  }
};
export default config;
