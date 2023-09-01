// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "../utils/Ownable.sol";


/// @dev I would be using this interface to ineract with 
interface IBank {
  function deposit() external payable;
  function withdraw() external;
}

/// @author developeruche
contract Attacker is Ownable {
  /// @dev the bank contracts interface is immplimented here
  IBank public immutable bankContract;

  constructor(address bankContractAddress) Ownable(msg.sender) {
    bankContract = IBank(bankContractAddress);
  }

  /// @dev this is the start of the attack
  function attack() external payable onlyOwner {
    bankContract.withdraw();
  }

  /// @dev this is the base in how the attack continues
  receive() external payable {}





  function getContractBalance() public view returns(uint ) {
      return address(this).balance;
  }


}