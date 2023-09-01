// SPDX: License-Identifier: MIT
pragma solidity ^0.8.9;

contract Destroy {
    function destroy(address _receivingAddress) public {
        selfdestruct(payable(_receivingAddress));
    }
}