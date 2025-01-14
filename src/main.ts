import { SDK, SdkOptions } from "./sdk";
import { SwapModule, CalculateRatesParams, CreateTXPayloadParams } from "./modules/SwapModule";
import { ResourcesModule } from "./modules/ResourcesModule";
import { getCoinsInWithFeesStable, getCoinsOutWithFeesStable, getCoinOutWithFees, getCoinInWithFees } from './utils'

export {
  SDK,
  SwapModule,
  ResourcesModule,
  SdkOptions,
  CalculateRatesParams,
  CreateTXPayloadParams,
  getCoinInWithFees,
  getCoinOutWithFees,
  getCoinsOutWithFeesStable,
  getCoinsInWithFeesStable
};

export default SDK;
