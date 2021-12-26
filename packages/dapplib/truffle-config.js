require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember social install creek fringe tattoo'; 
let testAccounts = [
"0x58d0403648635528576dca4fd34a2d6f07270ed6f055aa1ffc548aa0e012ac26",
"0xa208fca92922519b30cb944dc766f8a6fec2b2f0a3f1171939e8203a716dbf28",
"0xaa4876f872a5fcdf46538088af1dd7c423d8362070351626ef10b1f1fcf6f96a",
"0x155b8965063ef0a3c34b47eddbd79fd5813ddb848bf884a78d72f8d81099d941",
"0xa54ffa5243dd1359d6f67429d5773bc03acd8b1ee63c69e72d48d894635cd3d1",
"0x9480f3d2fd7430589911ff54bb6a51e71eaab640f14b0fc64313750e077656f9",
"0xfb69b78dbcf012c7be943b04d5e983197e8d3bd01031cbf7f68a80e0532e2354",
"0xfe25e13d1b3803c413be438c2b594b22ae3764dbcc5183507bcae3b9e2578ef9",
"0xdff7a724d4de9865bab6db0d89f616c361d6c63acdd4080324d17db8511ccc18",
"0xf33e757d7c5d3bdce2c762c237ceb27c4873af01c55195e6c710099b18083010"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

