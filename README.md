# Simple Collateral Swap 

This repo is forked from [kartojal/flash-loans-workshop](https://github.com/kartojal/flash-loans-workshop).

## technical stack
- [x] Aave V2 flash loans to liquidate a loan from an unhealthy borrower position.
- [] Borrow more lucrative asset as collateral woth InstaDapp's SDK
- [] Switch network to Mumbai(Polygon's testnet)

# Get started

Open a terminal,clone this repository and Install dependencies

```
git clone git@github.com:suricata3838/collateral-swap-aave.git

cd collateral-swap-aave

yarn
```

Open three terminals, and run the following in each terminal:

```
yarn start
```

```
ALCHEMY_RPC="YOUR ALCHEMY RPC URL" yarn fork
```

```
yarn deploy
```

A browser should start pointing to http://localhost:3000 with a minimal frontend.

## Made possible by

This project uses [scaffold-eth](https://github.com/austintgriffith/scaffold-eth) for fast bootstrapping. Thanks @austintgriffith!
