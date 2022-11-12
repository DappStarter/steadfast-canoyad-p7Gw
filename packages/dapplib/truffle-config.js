require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn property gesture inflict tattoo sell'; 
let testAccounts = [
"0x690fefba3816431493fca4302dac81ca8eaefe97f707645095b112bf578706dc",
"0x53e9af0820befc4e888dcea3c1dc0d236a5d930d3414fcf3b7f12c4cef86fbf8",
"0x797930943f849949252672be7f14025ef2bd2a342070025c21e6b2b6f7520675",
"0x5fbf13663e23e883da383396813353851da4bd78124771dc2070d4e561499435",
"0x85d176b67279bb682dbf9a760ec0f5a33afef901f3b9b7dcff88141344d0e806",
"0xd9c90d13da91c87624daed8a81f9fd7b3b031bbc0ffc84e97df6ff32ed48d13a",
"0x2181bfbeecc3b888b517e8b2b7f25817b4530661764ad7c2ab604cfb95e28235",
"0x0e4a37908aaa6663b7f3fc80a09b0a788662e7eeee10a1e7fb373ebfdfd7d6ba",
"0x0cfc3a9c0fbf8078001a1b71ad8537a6a16db2440ed3a6e6ee23419b2cfc0f0d",
"0xa96aa232e8b4859e2b7456fb54cb7438f1d9f4a7c85b245bffd8b080b044d980"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


