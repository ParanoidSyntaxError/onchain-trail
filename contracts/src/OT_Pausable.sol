// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {OT_IPauseRegistry} from "./OT_PauseRegistry.sol";

interface OT_IPausable {
    function pauseRegistry() external view returns (address);
}

contract OT_Pausable is OT_IPausable {
    address private immutable _pauseRegistry;

    constructor(address otPauseRegistry) {
        _pauseRegistry = otPauseRegistry;
    }

    modifier whenAccountNotPaused(address account) {
        if (OT_IPauseRegistry(_pauseRegistry).paused(account)) {
            revert();
        }
        _;
    }

    function pauseRegistry() external view override returns (address) {
        return _pauseRegistry;
    }
}
