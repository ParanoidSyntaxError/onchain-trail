// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

import {OT_PauseRegistry} from "./OT_PauseRegistry.sol";
import {OT_Game} from "./OT_Game.sol";

contract OT_GameDeployer {
    constructor() {}

    function deploy(bytes32 salt, bytes32 bytecodeHash) external returns (address otGame) {
        otGame = Create2.computeAddress(salt, bytecodeHash);
        address pauseRegistry = address(new OT_PauseRegistry(game));
        new OT_Game(pauseRegistry);
    }
}
