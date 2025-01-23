// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {ERC721A, IERC721A} from "erc721a/contracts/ERC721A.sol";

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {OT_Pausable, OT_IPausable} from "./OT_Pausable.sol";

interface OT_IActor is IERC721A, OT_IPausable {
    function mint(address account, uint256 quantity) external;
    function burn(uint256 tokenId) external;
}

contract OT_Actor is ERC721A, Ownable, OT_Pausable, OT_IActor {
    constructor(
        string memory name,
        string memory symbol,
        address initialOwner,
        address pauseRegistry
    ) ERC721A(name, symbol) Ownable(initialOwner) OT_Pausable(pauseRegistry) {}

    function mint(address account, uint256 quantity) external override onlyOwner {
        _safeMint(account, quantity);
    }

    function burn(uint256 tokenId) external override onlyOwner {
        _burn(tokenId);
    }

    function _beforeTokenTransfers(
        address from,
        address to,
        uint256 startTokenId,
        uint256 quantity
    ) internal override whenAccountNotPaused(from) {}
}
