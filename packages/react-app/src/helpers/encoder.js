import {ethers} from 'ethers';

export const buildFlashLiquidationAdapterParams = (
  collateralAsset,
  debtAsset,
  depositAsset,
  user,
  debtToCover,
  useEthPath
) => {
  return ethers.utils.defaultAbiCoder.encode(
    ['address', 'address', 'address', 'address', 'uint256', 'bool'],
    [collateralAsset, debtAsset, depositAsset, user, debtToCover, useEthPath]
  );
};
