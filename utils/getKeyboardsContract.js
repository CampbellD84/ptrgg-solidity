import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0x310626665F1D0af0f0a4D282D5430450c71F1931";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
