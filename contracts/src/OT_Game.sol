// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {OT_PauseRegistry} from "./OT_PauseRegistry.sol";
import {OT_Actor, OT_IActor} from "./OT_Actor.sol";
import {OT_Supply, OT_ISupply} from "./OT_Supply.sol";
import {OT_Pausable, OT_IPausable} from "./OT_Pausable.sol";

interface OT_IGame is OT_IPausable {

}

/*
    Travel - pause
    Wait X blocks
    Claim - unpause
*/

contract OT_Game is OT_Pausable {
    address public immutable actor;

    address public immutable fuel;
    address public immutable battery;
    address public immutable medicine;
    address public immutable food;
    address public immutable water;
    address public immutable ammo;

    uint256 public constant STARTING_SUPPLY = 100;
    uint256 public constant STARTING_ACTORS = 4;

    constructor(address otPauseRegistry) OT_Pausable(otPauseRegistry) {
        actor = address(new OT_Actor("OT Actor", "otACTOR", address(this), otPauseRegistry));

        fuel = address(new OT_Supply("OT Fuel", "otFUEL", address(this), otPauseRegistry));
        battery = address(new OT_Supply("OT Battery", "otBATTERY", address(this), otPauseRegistry));
        medicine = address(new OT_Supply("OT Medicine", "otMEDICINE", address(this), otPauseRegistry));
        food = address(new OT_Supply("OT Food", "otFOOD", address(this), otPauseRegistry));
        water = address(new OT_Supply("OT Water", "otWATER", address(this), otPauseRegistry));
        ammo = address(new OT_Supply("OT Ammo", "otAMMO", address(this), otPauseRegistry));
    }

    function start(address account) external {
        OT_IActor(actor).mint(account, STARTING_ACTORS);

        OT_ISupply(fuel).mint(account, STARTING_SUPPLY);
        OT_ISupply(battery).mint(account, STARTING_SUPPLY);
        OT_ISupply(medicine).mint(account, STARTING_SUPPLY);
        OT_ISupply(food).mint(account, STARTING_SUPPLY);
        OT_ISupply(water).mint(account, STARTING_SUPPLY);
        OT_ISupply(ammo).mint(account, STARTING_SUPPLY);
    }
}
