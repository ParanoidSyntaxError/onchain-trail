// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface OT_IPauseRegistry {
    function paused(address account) external view returns (bool);

    function pause(address account) external;
    function unpause(address account) external;
}

contract OT_PauseRegistry is Ownable, OT_IPauseRegistry {
    mapping(address => bool) private _paused;

    constructor(address initialOwner) Ownable(initialOwner) {}

    function paused(address account) external view override returns (bool) {
        return _paused[account];
    }

    function pause(address account) external override onlyOwner {
        _paused[account] = true;
    }

    function unpause(address account) external override onlyOwner {
        _paused[account] = false;
    }
}
