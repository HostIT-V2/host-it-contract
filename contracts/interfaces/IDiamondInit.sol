// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IDiamondInit {
    /// @notice Init function that must be (delegated) call when deploying the diamond contract.
    function init() external;
}