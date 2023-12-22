import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 42220,
    BSCTESTNET = 97
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x2d32661f52eB55c9109F2EEF5FBc405DA0136608";
export declare const INIT_CODE_HASH = "0xc539ded66e13fbce7d7f1493a82578705b9fa662a7c94db89c311b3f97014f20";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
