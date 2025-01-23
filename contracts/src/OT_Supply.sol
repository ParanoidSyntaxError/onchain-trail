// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {OT_Pausable, OT_IPausable} from "./OT_Pausable.sol";

interface OT_ISupply is IERC20, OT_IPausable {
    function mint(address account, uint256 value) external;
    function burn(address account, uint256 value) external;
}

contract OT_Supply is ERC20, Ownable, OT_Pausable, OT_ISupply {
    constructor(
        string memory name,
        string memory symbol,
        address initialOwner,
        address pauseRegistry
    ) ERC20(name, symbol) Ownable(initialOwner) OT_Pausable(pauseRegistry) {}

    function mint(address account, uint256 value) external override onlyOwner {
        _mint(account, value);
    }

    function burn(address account, uint256 value) external override onlyOwner {
        _burn(account, value);
    }

    function _update(
        address from,
        address to,
        uint256 value
    ) internal virtual override whenAccountNotPaused(from) {
        super._update(from, to, value);
    }
}
