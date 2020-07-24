/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface TimeAllyManagerInterface extends ethers.utils.Interface {
  functions: {
    'adminMode()': FunctionFragment;
    'deactivateAdminMode()': FunctionFragment;
    'defaultMonths()': FunctionFragment;
    'deployer()': FunctionFragment;
    'emitStakingTransfer(address,address)': FunctionFragment;
    'getTimeAllyMonthlyNRT(uint256)': FunctionFragment;
    'getTotalActiveStaking(uint256)': FunctionFragment;
    'increaseActiveStaking(uint256,uint256)': FunctionFragment;
    'isStakingContractValid(address)': FunctionFragment;
    'nrtManager()': FunctionFragment;
    'prepaidEs()': FunctionFragment;
    'prepaidFallback(address,uint256)': FunctionFragment;
    'processNrtReward(uint256,uint8)': FunctionFragment;
    'sendStake(address,bool[])': FunctionFragment;
    'setInitialValues(address,address,address)': FunctionFragment;
    'stake()': FunctionFragment;
    'validatorManager()': FunctionFragment;
    'withdrawClaimedNrt(uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'adminMode', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deactivateAdminMode', values?: undefined): string;
  encodeFunctionData(functionFragment: 'defaultMonths', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deployer', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emitStakingTransfer', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'getTimeAllyMonthlyNRT', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getTotalActiveStaking', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'increaseActiveStaking',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'isStakingContractValid', values: [string]): string;
  encodeFunctionData(functionFragment: 'nrtManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'prepaidEs', values?: undefined): string;
  encodeFunctionData(functionFragment: 'prepaidFallback', values: [string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'processNrtReward',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'sendStake', values: [string, boolean[]]): string;
  encodeFunctionData(
    functionFragment: 'setInitialValues',
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: 'stake', values?: undefined): string;
  encodeFunctionData(functionFragment: 'validatorManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawClaimedNrt', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'adminMode', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deactivateAdminMode', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'defaultMonths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deployer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emitStakingTransfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTimeAllyMonthlyNRT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTotalActiveStaking', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseActiveStaking', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isStakingContractValid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nrtManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'prepaidEs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'prepaidFallback', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'processNrtReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sendStake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInitialValues', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'validatorManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawClaimedNrt', data: BytesLike): Result;

  events: {
    'StakingTransfer(address,address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'StakingTransfer'): EventFragment;
}

export class TimeAllyManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TimeAllyManagerInterface;

  functions: {
    adminMode(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    deactivateAdminMode(overrides?: Overrides): Promise<ContractTransaction>;

    defaultMonths(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    deployer(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    emitStakingTransfer(
      _oldOwner: string,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getTimeAllyMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getTotalActiveStaking(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    increaseActiveStaking(
      _amount: BigNumberish,
      _uptoMonth: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isStakingContractValid(
      _stakingContract: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    nrtManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    prepaidEs(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    prepaidFallback(
      _sender: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    processNrtReward(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendStake(
      _receiver: string,
      _claimedMonths: boolean[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    setInitialValues(
      _nrtAddress: string,
      _validatorManager: string,
      _prepaidEs: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stake(overrides?: PayableOverrides): Promise<ContractTransaction>;

    validatorManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    withdrawClaimedNrt(
      _amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  adminMode(overrides?: CallOverrides): Promise<boolean>;

  deactivateAdminMode(overrides?: Overrides): Promise<ContractTransaction>;

  defaultMonths(overrides?: CallOverrides): Promise<BigNumber>;

  deployer(overrides?: CallOverrides): Promise<string>;

  emitStakingTransfer(
    _oldOwner: string,
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getTimeAllyMonthlyNRT(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getTotalActiveStaking(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  increaseActiveStaking(
    _amount: BigNumberish,
    _uptoMonth: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isStakingContractValid(_stakingContract: string, overrides?: CallOverrides): Promise<boolean>;

  nrtManager(overrides?: CallOverrides): Promise<string>;

  prepaidEs(overrides?: CallOverrides): Promise<string>;

  prepaidFallback(
    _sender: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  processNrtReward(
    _reward: BigNumberish,
    _rewardType: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendStake(
    _receiver: string,
    _claimedMonths: boolean[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  setInitialValues(
    _nrtAddress: string,
    _validatorManager: string,
    _prepaidEs: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stake(overrides?: PayableOverrides): Promise<ContractTransaction>;

  validatorManager(overrides?: CallOverrides): Promise<string>;

  withdrawClaimedNrt(
    _amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    adminMode(overrides?: CallOverrides): Promise<boolean>;

    deactivateAdminMode(overrides?: CallOverrides): Promise<void>;

    defaultMonths(overrides?: CallOverrides): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<string>;

    emitStakingTransfer(
      _oldOwner: string,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getTimeAllyMonthlyNRT(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getTotalActiveStaking(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    increaseActiveStaking(
      _amount: BigNumberish,
      _uptoMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isStakingContractValid(_stakingContract: string, overrides?: CallOverrides): Promise<boolean>;

    nrtManager(overrides?: CallOverrides): Promise<string>;

    prepaidEs(overrides?: CallOverrides): Promise<string>;

    prepaidFallback(
      _sender: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    processNrtReward(
      _reward: BigNumberish,
      _rewardType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sendStake(
      _receiver: string,
      _claimedMonths: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setInitialValues(
      _nrtAddress: string,
      _validatorManager: string,
      _prepaidEs: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(overrides?: CallOverrides): Promise<void>;

    validatorManager(overrides?: CallOverrides): Promise<string>;

    withdrawClaimedNrt(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    StakingTransfer(from: string | null, to: string | null, staking: string | null): EventFilter;
  };

  estimateGas: {
    adminMode(): Promise<BigNumber>;
    deactivateAdminMode(): Promise<BigNumber>;
    defaultMonths(): Promise<BigNumber>;
    deployer(): Promise<BigNumber>;
    emitStakingTransfer(_oldOwner: string, _newOwner: string): Promise<BigNumber>;
    getTimeAllyMonthlyNRT(_month: BigNumberish): Promise<BigNumber>;
    getTotalActiveStaking(_month: BigNumberish): Promise<BigNumber>;
    increaseActiveStaking(_amount: BigNumberish, _uptoMonth: BigNumberish): Promise<BigNumber>;
    isStakingContractValid(_stakingContract: string): Promise<BigNumber>;
    nrtManager(): Promise<BigNumber>;
    prepaidEs(): Promise<BigNumber>;
    prepaidFallback(_sender: string, _value: BigNumberish): Promise<BigNumber>;
    processNrtReward(_reward: BigNumberish, _rewardType: BigNumberish): Promise<BigNumber>;
    sendStake(_receiver: string, _claimedMonths: boolean[]): Promise<BigNumber>;
    setInitialValues(
      _nrtAddress: string,
      _validatorManager: string,
      _prepaidEs: string
    ): Promise<BigNumber>;
    stake(): Promise<BigNumber>;
    validatorManager(): Promise<BigNumber>;
    withdrawClaimedNrt(_amount: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    adminMode(): Promise<PopulatedTransaction>;
    deactivateAdminMode(): Promise<PopulatedTransaction>;
    defaultMonths(): Promise<PopulatedTransaction>;
    deployer(): Promise<PopulatedTransaction>;
    emitStakingTransfer(_oldOwner: string, _newOwner: string): Promise<PopulatedTransaction>;
    getTimeAllyMonthlyNRT(_month: BigNumberish): Promise<PopulatedTransaction>;
    getTotalActiveStaking(_month: BigNumberish): Promise<PopulatedTransaction>;
    increaseActiveStaking(
      _amount: BigNumberish,
      _uptoMonth: BigNumberish
    ): Promise<PopulatedTransaction>;
    isStakingContractValid(_stakingContract: string): Promise<PopulatedTransaction>;
    nrtManager(): Promise<PopulatedTransaction>;
    prepaidEs(): Promise<PopulatedTransaction>;
    prepaidFallback(_sender: string, _value: BigNumberish): Promise<PopulatedTransaction>;
    processNrtReward(
      _reward: BigNumberish,
      _rewardType: BigNumberish
    ): Promise<PopulatedTransaction>;
    sendStake(_receiver: string, _claimedMonths: boolean[]): Promise<PopulatedTransaction>;
    setInitialValues(
      _nrtAddress: string,
      _validatorManager: string,
      _prepaidEs: string
    ): Promise<PopulatedTransaction>;
    stake(): Promise<PopulatedTransaction>;
    validatorManager(): Promise<PopulatedTransaction>;
    withdrawClaimedNrt(_amount: BigNumberish): Promise<PopulatedTransaction>;
  };
}
