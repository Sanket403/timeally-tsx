/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface TimeAllyStakingInterface extends ethers.utils.Interface {
  functions: {
    'delegate(address,address,uint256,uint256[])': FunctionFragment;
    'endMonth()': FunctionFragment;
    'getDelegation(uint256,uint256)': FunctionFragment;
    'getDelegations(uint256)': FunctionFragment;
    'getMonthlyReward(uint256)': FunctionFragment;
    'getPrincipalAmount(uint256)': FunctionFragment;
    'increaseIssTime(uint256)': FunctionFragment;
    'isMonthClaimed(uint256)': FunctionFragment;
    'issTime()': FunctionFragment;
    'nextMonthPrincipalAmount()': FunctionFragment;
    'nrtManager()': FunctionFragment;
    'owner()': FunctionFragment;
    'prepaidFallback(address,uint256)': FunctionFragment;
    'startMonth()': FunctionFragment;
    'timeAllyManager()': FunctionFragment;
    'timestamp()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'validatorManager()': FunctionFragment;
    'withdrawMonthlyNRT(uint256[],uint8)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'delegate',
    values: [string, string, BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: 'endMonth', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getDelegation',
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'getDelegations', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getMonthlyReward', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getPrincipalAmount', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'increaseIssTime', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isMonthClaimed', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'issTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nextMonthPrincipalAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nrtManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'prepaidFallback', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'startMonth', values?: undefined): string;
  encodeFunctionData(functionFragment: 'timeAllyManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'timestamp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'validatorManager', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'withdrawMonthlyNRT',
    values: [BigNumberish[], BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'delegate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'endMonth', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDelegation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDelegations', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMonthlyReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPrincipalAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseIssTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isMonthClaimed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nextMonthPrincipalAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nrtManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'prepaidFallback', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'startMonth', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'timeAllyManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'timestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'validatorManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawMonthlyNRT', data: BytesLike): Result;

  events: {
    'Claim(uint256,uint256,uint8)': EventFragment;
    'Topup(uint256,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Claim'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Topup'): EventFragment;
}

export class TimeAllyStaking extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TimeAllyStakingInterface;

  functions: {
    delegate(
      _platform: string,
      _delegatee: string,
      _amount: BigNumberish,
      _months: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    endMonth(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getDelegation(
      _month: BigNumberish,
      _delegationIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        platform: string;
        delegatee: string;
        amount: BigNumber;
        0: string;
        1: string;
        2: BigNumber;
      };
    }>;

    getDelegations(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        platform: string;
        delegatee: string;
        amount: BigNumber;
        0: string;
        1: string;
        2: BigNumber;
      }[];
    }>;

    getMonthlyReward(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getPrincipalAmount(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    increaseIssTime(
      _increaseValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isMonthClaimed(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    issTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    nextMonthPrincipalAmount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    nrtManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    prepaidFallback(
      arg0: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    startMonth(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    timeAllyManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    timestamp(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transferOwnership(_newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

    validatorManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    withdrawMonthlyNRT(
      _months: BigNumberish[],
      _rewardType: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  delegate(
    _platform: string,
    _delegatee: string,
    _amount: BigNumberish,
    _months: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  endMonth(overrides?: CallOverrides): Promise<BigNumber>;

  getDelegation(
    _month: BigNumberish,
    _delegationIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    platform: string;
    delegatee: string;
    amount: BigNumber;
    0: string;
    1: string;
    2: BigNumber;
  }>;

  getDelegations(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    {
      platform: string;
      delegatee: string;
      amount: BigNumber;
      0: string;
      1: string;
      2: BigNumber;
    }[]
  >;

  getMonthlyReward(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getPrincipalAmount(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  increaseIssTime(
    _increaseValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isMonthClaimed(_month: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  issTime(overrides?: CallOverrides): Promise<BigNumber>;

  nextMonthPrincipalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  nrtManager(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  prepaidFallback(
    arg0: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  startMonth(overrides?: CallOverrides): Promise<BigNumber>;

  timeAllyManager(overrides?: CallOverrides): Promise<string>;

  timestamp(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(_newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

  validatorManager(overrides?: CallOverrides): Promise<string>;

  withdrawMonthlyNRT(
    _months: BigNumberish[],
    _rewardType: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    delegate(
      _platform: string,
      _delegatee: string,
      _amount: BigNumberish,
      _months: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    endMonth(overrides?: CallOverrides): Promise<BigNumber>;

    getDelegation(
      _month: BigNumberish,
      _delegationIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      platform: string;
      delegatee: string;
      amount: BigNumber;
      0: string;
      1: string;
      2: BigNumber;
    }>;

    getDelegations(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      {
        platform: string;
        delegatee: string;
        amount: BigNumber;
        0: string;
        1: string;
        2: BigNumber;
      }[]
    >;

    getMonthlyReward(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getPrincipalAmount(_month: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    increaseIssTime(_increaseValue: BigNumberish, overrides?: CallOverrides): Promise<void>;

    isMonthClaimed(_month: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    issTime(overrides?: CallOverrides): Promise<BigNumber>;

    nextMonthPrincipalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    nrtManager(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    prepaidFallback(
      arg0: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    startMonth(overrides?: CallOverrides): Promise<BigNumber>;

    timeAllyManager(overrides?: CallOverrides): Promise<string>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(_newOwner: string, overrides?: CallOverrides): Promise<void>;

    validatorManager(overrides?: CallOverrides): Promise<string>;

    withdrawMonthlyNRT(
      _months: BigNumberish[],
      _rewardType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Claim(month: null, amount: null, rewardType: null): EventFilter;

    Topup(amount: null, benefactor: null): EventFilter;
  };

  estimateGas: {
    delegate(
      _platform: string,
      _delegatee: string,
      _amount: BigNumberish,
      _months: BigNumberish[]
    ): Promise<BigNumber>;
    endMonth(): Promise<BigNumber>;
    getDelegation(_month: BigNumberish, _delegationIndex: BigNumberish): Promise<BigNumber>;
    getDelegations(_month: BigNumberish): Promise<BigNumber>;
    getMonthlyReward(_month: BigNumberish): Promise<BigNumber>;
    getPrincipalAmount(_month: BigNumberish): Promise<BigNumber>;
    increaseIssTime(_increaseValue: BigNumberish): Promise<BigNumber>;
    isMonthClaimed(_month: BigNumberish): Promise<BigNumber>;
    issTime(): Promise<BigNumber>;
    nextMonthPrincipalAmount(): Promise<BigNumber>;
    nrtManager(): Promise<BigNumber>;
    owner(): Promise<BigNumber>;
    prepaidFallback(arg0: string, _value: BigNumberish): Promise<BigNumber>;
    startMonth(): Promise<BigNumber>;
    timeAllyManager(): Promise<BigNumber>;
    timestamp(): Promise<BigNumber>;
    transferOwnership(_newOwner: string): Promise<BigNumber>;
    validatorManager(): Promise<BigNumber>;
    withdrawMonthlyNRT(_months: BigNumberish[], _rewardType: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    delegate(
      _platform: string,
      _delegatee: string,
      _amount: BigNumberish,
      _months: BigNumberish[]
    ): Promise<PopulatedTransaction>;
    endMonth(): Promise<PopulatedTransaction>;
    getDelegation(
      _month: BigNumberish,
      _delegationIndex: BigNumberish
    ): Promise<PopulatedTransaction>;
    getDelegations(_month: BigNumberish): Promise<PopulatedTransaction>;
    getMonthlyReward(_month: BigNumberish): Promise<PopulatedTransaction>;
    getPrincipalAmount(_month: BigNumberish): Promise<PopulatedTransaction>;
    increaseIssTime(_increaseValue: BigNumberish): Promise<PopulatedTransaction>;
    isMonthClaimed(_month: BigNumberish): Promise<PopulatedTransaction>;
    issTime(): Promise<PopulatedTransaction>;
    nextMonthPrincipalAmount(): Promise<PopulatedTransaction>;
    nrtManager(): Promise<PopulatedTransaction>;
    owner(): Promise<PopulatedTransaction>;
    prepaidFallback(arg0: string, _value: BigNumberish): Promise<PopulatedTransaction>;
    startMonth(): Promise<PopulatedTransaction>;
    timeAllyManager(): Promise<PopulatedTransaction>;
    timestamp(): Promise<PopulatedTransaction>;
    transferOwnership(_newOwner: string): Promise<PopulatedTransaction>;
    validatorManager(): Promise<PopulatedTransaction>;
    withdrawMonthlyNRT(
      _months: BigNumberish[],
      _rewardType: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
