// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

contract Register {
    address public owner;
    mapping(string => string) c_name;
    mapping(string => string) c_party;
    mapping(string => bool) c_id;
    modifier restricted() {
        require(msg.sender == owner);
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function RegisterVoter(
        string memory _name,
        string memory _party,
        string memory _id
    ) public restricted {
        require(!c_id[_id]);
        c_name[_id] = _name;
        c_party[_id] = _party;
        c_id[_id] = true;
    }
}
