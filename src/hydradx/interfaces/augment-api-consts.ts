// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Null, Option, RangeInclusive, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, HydradxTraitsOracleOraclePeriod, PalletDynamicFeesFeeParams, PalletReferendaTrackInfo, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, StagingXcmV4Location } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * The min length of a name or symbol stored on-chain.
       **/
      minStringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Weight multiplier for `register_external` extrinsic
       **/
      regExternalWeightMultiplier: u64 & AugmentedConst<ApiType>;
      sequentialIdStartAt: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a name or symbol stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    aura: {
      /**
       * The slot duration Aura should run with, expressed in milliseconds.
       * The effective value of this type should not change while the chain is running.
       * 
       * For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const.
       **/
      slotDuration: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       * 
       * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       * 
       * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bonds: {
      /**
       * Protocol fee receiver.
       **/
      feeReceiver: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Protocol fee.
       **/
      protocolFee: Permill & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    circuitBreaker: {
      /**
       * The maximum percentage of a pool's liquidity that can be added in a block.
       * Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
       * If set to None, the limits are not enforced.
       **/
      defaultMaxAddLiquidityLimitPerBlock: Option<ITuple<[u32, u32]>> & AugmentedConst<ApiType>;
      /**
       * The maximum percentage of a pool's liquidity that can be traded in a block.
       * Represented as a non-zero fraction (nominator, denominator) with the max value being 10_000.
       **/
      defaultMaxNetTradeVolumeLimitPerBlock: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      /**
       * The maximum percentage of a pool's liquidity that can be removed in a block.
       * Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
       * If set to None, the limits are not enforced.
       **/
      defaultMaxRemoveLiquidityLimitPerBlock: Option<ITuple<[u32, u32]>> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    collatorRewards: {
      /**
       * Reward Asset Id
       **/
      rewardCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * Reward amount per one collator.
       **/
      rewardPerCollator: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    convictionVoting: {
      /**
       * The maximum number of concurrent votes an account may have.
       * 
       * Also used to compute weight, an overly large value can lead to extrinsics with large
       * weight estimation: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    council: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    currencies: {
      getNativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    dca: {
      /**
       * Chance of the random rescheduling
       **/
      bumpChance: Percent & AugmentedConst<ApiType>;
      /**
       * The fee receiver for transaction fees
       **/
      feeReceiver: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Max configurable price difference allowed between blocks
       **/
      maxConfigurablePriceDifferenceBetweenBlocks: Permill & AugmentedConst<ApiType>;
      /**
       * The number of max retries in case of trade limit error
       **/
      maxNumberOfRetriesOnError: u8 & AugmentedConst<ApiType>;
      /**
       * Max price difference allowed between blocks
       **/
      maxPriceDifferenceBetweenBlocks: Permill & AugmentedConst<ApiType>;
      /**
       * The number of max schedules to be executed per block
       **/
      maxSchedulePerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum budget to be able to schedule a DCA, specified in native currency
       **/
      minBudgetInNativeCurrency: u128 & AugmentedConst<ApiType>;
      /**
       * Minimal period between executions
       **/
      minimalPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum trading limit for a single trade
       **/
      minimumTradingLimit: u128 & AugmentedConst<ApiType>;
      /**
       * Named reserve identifier to store named reserves for orders of each users
       **/
      namedReserveId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Native Asset Id
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Polkadot Native Asset Id (DOT)
       **/
      polkadotNativeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of items which can be blacklisted.
       **/
      maxBlacklisted: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of deposits a public proposal may have at any time.
       **/
      maxDeposits: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    duster: {
      /**
       * Native Asset Id
       **/
      nativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * Reward amount
       **/
      reward: u128 & AugmentedConst<ApiType>;
      /**
       * Default account for `reward_account` and `dust_account` in genesis config.
       **/
      treasuryAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    dynamicEvmFee: {
      /**
       * WETH Asset Id
       **/
      wethAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    dynamicFees: {
      assetFeeParameters: PalletDynamicFeesFeeParams & AugmentedConst<ApiType>;
      protocolFeeParameters: PalletDynamicFeesFeeParams & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    elections: {
      /**
       * How much should be locked up in order to submit one's candidacy.
       **/
      candidacyBond: u128 & AugmentedConst<ApiType>;
      /**
       * Number of members to elect.
       **/
      desiredMembers: u32 & AugmentedConst<ApiType>;
      /**
       * Number of runners_up to keep.
       **/
      desiredRunnersUp: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of candidates in a phragmen election.
       * 
       * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
       * consider how it will impact `T::WeightInfo::election_phragmen`.
       * 
       * When this limit is reached no more candidates are accepted in the election.
       **/
      maxCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of voters to allow in a phragmen election.
       * 
       * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
       * consider how it will impact `T::WeightInfo::election_phragmen`.
       * 
       * When the limit is reached the new voters are ignored.
       **/
      maxVoters: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum numbers of votes per voter.
       * 
       * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
       * consider how it will impact `T::WeightInfo::election_phragmen`.
       **/
      maxVotesPerVoter: u32 & AugmentedConst<ApiType>;
      /**
       * Identifier for the elections-phragmen pallet's lock
       **/
      palletId: U8aFixed & AugmentedConst<ApiType>;
      /**
       * How long each seat is kept. This defines the next block number at which an election
       * round will happen. If set to zero, no elections are ever triggered and the module will
       * be in passive mode.
       **/
      termDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Base deposit associated with voting.
       * 
       * This should be sensibly high to economically ensure the pallet cannot be attacked by
       * creating a gigantic number of votes.
       **/
      votingBondBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of bond that need to be locked for each vote (32 bytes).
       **/
      votingBondFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    emaOracle: {
      /**
       * Maximum number of unique oracle entries expected in one block.
       **/
      maxUniqueEntries: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evmAccounts: {
      /**
       * Fee multiplier for the binding of addresses.
       **/
      feeMultiplier: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity.
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per encoded byte for a registered identity.
       **/
      byteDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a suffix.
       **/
      maxSuffixLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a username, including its suffix and any system-added delimiters.
       **/
      maxUsernameLength: u32 & AugmentedConst<ApiType>;
      /**
       * The number of blocks within which a username grant must be accepted.
       **/
      pendingUsernameExpiration: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    lbp: {
      /**
       * Max fraction of pool to sell in single transaction
       **/
      maxInRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Max fraction of pool to buy in single transaction
       **/
      maxOutRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum pool liquidity, sole purpose of this is to keep the math working
       **/
      minPoolLiquidity: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum trading limit, sole purpose of this is to keep the math working
       **/
      minTradingLimit: u128 & AugmentedConst<ApiType>;
      repayFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    liquidation: {
      /**
       * The gas limit for the execution of the liquidation call.
       **/
      gasLimit: u64 & AugmentedConst<ApiType>;
      /**
       * Account who receives the profit.
       **/
      profitReceiver: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    messageQueue: {
      /**
       * The size of the page; this implies the maximum message size which can be sent.
       * 
       * A good value depends on the expected message sizes, their weights, the weight that is
       * available for processing them and the maximal needed message size. The maximal message
       * size is slightly lower than this as defined by [`MaxMessageLenOf`].
       **/
      heapSize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of weight (if any) to be used from remaining weight `on_idle` which
       * should be provided to the message queue for servicing enqueued items `on_idle`.
       * Useful for parachains to process messages at the same block they are received.
       * 
       * If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`.
       **/
      idleMaxServiceWeight: Option<SpWeightsWeightV2Weight> & AugmentedConst<ApiType>;
      /**
       * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
       * can happen. Once there are more stale pages than this, then historical pages may be
       * dropped, even if they contain unprocessed overweight messages.
       **/
      maxStale: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of weight (if any) which should be provided to the message queue for
       * servicing enqueued items `on_initialize`.
       * 
       * This may be legitimately `None` in the case that you will call
       * `ServiceQueues::service_queues` manually or set [`Self::IdleMaxServiceWeight`] to have
       * it run in `on_idle`.
       **/
      serviceWeight: Option<SpWeightsWeightV2Weight> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multiTransactionPayment: {
      /**
       * EVM Asset
       **/
      evmAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Native Asset
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Polkadot Native Asset (DOT)
       **/
      polkadotNativeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    omnipool: {
      /**
       * Native Asset ID
       **/
      hdxAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Hub Asset ID
       **/
      hubAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Max fraction of asset reserve to sell in single transaction
       **/
      maxInRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Max fraction of asset reserve to buy in single transaction
       **/
      maxOutRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum pool liquidity which can be added
       **/
      minimumPoolLiquidity: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum trading limit
       **/
      minimumTradingLimit: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum withdrawal fee
       **/
      minWithdrawalFee: Permill & AugmentedConst<ApiType>;
      /**
       * Non fungible class id
       **/
      nftCollectionId: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    omnipoolLiquidityMining: {
      /**
       * NFT collection id for liquidity mining's deposit nfts.
       **/
      nftCollectionId: u128 & AugmentedConst<ApiType>;
      /**
       * Oracle's price aggregation period.
       **/
      oraclePeriod: HydradxTraitsOracleOraclePeriod & AugmentedConst<ApiType>;
      /**
       * Identifier of oracle data soruce
       **/
      oracleSource: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    omnipoolWarehouseLM: {
      /**
       * Maximum number of yield farms same LP shares can be re/deposited into. This value always
       * MUST BE >= 1.
       **/
      maxFarmEntriesPerDeposit: u32 & AugmentedConst<ApiType>;
      /**
       * Max number of yield farms can exist in global farm. This includes all farms in the
       * storage(active, stopped, terminated).
       **/
      maxYieldFarmsPerGlobalFarm: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum number of periods to run liquidity mining program.
       **/
      minPlannedYieldingPeriods: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum total rewards to distribute from global farm during liquidity mining.
       **/
      minTotalFarmRewards: u128 & AugmentedConst<ApiType>;
      /**
       * Pallet id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Treasury account to receive claimed rewards lower than ED
       **/
      treasuryAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    otc: {
      /**
       * Multiplier used to compute minimal amounts of asset_in and asset_out in an OTC.
       **/
      existentialDepositMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Fee deducted from amount_out.
       **/
      fee: Permill & AugmentedConst<ApiType>;
      /**
       * Fee receiver.
       **/
      feeReceiver: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    otcSettlements: {
      /**
       * Maximum number of iterations used in the binary search algorithm to find the trade amount.
       **/
      maxIterations: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum profit in terms of percentage.
       **/
      minProfitPercentage: Perbill & AugmentedConst<ApiType>;
      /**
       * Minimum trading limit.
       **/
      minTradingLimit: u128 & AugmentedConst<ApiType>;
      /**
       * Determines when we consider an arbitrage as closed.
       **/
      pricePrecision: u128 & AugmentedConst<ApiType>;
      /**
       * Account who receives the profit.
       **/
      profitReceiver: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    parachainSystem: {
      /**
       * Returns the parachain ID we are running with.
       **/
      selfParaId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    referenda: {
      /**
       * Quantization level for the referendum wakeup scheduler. A higher number will result in
       * fewer storage reads/writes needed for smaller voters, but also result in delays to the
       * automatic referendum status changes. Explicit servicing instructions are unaffected.
       **/
      alarmInterval: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum size of the referendum queue for a single track.
       **/
      maxQueued: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      submissionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Information concerning the different referendum tracks.
       **/
      tracks: Vec<ITuple<[u16, PalletReferendaTrackInfo]>> & AugmentedConst<ApiType>;
      /**
       * The number of blocks after submission that a referendum must begin being decided by.
       * Once this passes, then anyone may cancel the referendum.
       **/
      undecidingTimeout: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    referrals: {
      /**
       * Maximum referral code length.
       **/
      codeLength: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum referral code length.
       **/
      minCodeLength: u32 & AugmentedConst<ApiType>;
      /**
       * Pallet id. Determines account which holds accumulated rewards in various assets.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Registration fee details.
       * (ID of an asset which fee is to be paid in, Amount, Beneficiary account)
       **/
      registrationFee: ITuple<[u32, u128, AccountId32]> & AugmentedConst<ApiType>;
      /**
       * ID of an asset that is used to distribute rewards in.
       **/
      rewardAsset: u32 & AugmentedConst<ApiType>;
      /**
       * Seed amount that was sent to the reward pot.
       **/
      seedNativeAmount: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    router: {
      /**
       * Native Asset Id
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Oracle's price aggregation period.
       **/
      oraclePeriod: HydradxTraitsOracleOraclePeriod & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * 
       * NOTE:
       * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
       * higher limit under `runtime-benchmarks` feature.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    stableswap: {
      /**
       * Amplification inclusive range. Pool's amp can be selected from the range only.
       **/
      amplificationRange: RangeInclusive<u16> & AugmentedConst<ApiType>;
      /**
       * Minimum pool liquidity
       **/
      minPoolLiquidity: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum trading amount
       **/
      minTradingLimit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    staking: {
      /**
       * Weight of the action points in total points calculations.
       **/
      actionPointsWeight: Perbill & AugmentedConst<ApiType>;
      /**
       * Weight of the actual stake in slash points calculation. Bigger the value lower the calculated slash points.
       **/
      currentStakeWeight: u8 & AugmentedConst<ApiType>;
      /**
       * Max amount of votes the user can have at any time.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * Min amount user must stake.
       **/
      minStake: u128 & AugmentedConst<ApiType>;
      /**
       * Native Asset ID.
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * NFT collection id.
       **/
      nftCollectionId: u128 & AugmentedConst<ApiType>;
      /**
       * Pallet id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Staking period length in blocks.
       **/
      periodLength: u32 & AugmentedConst<ApiType>;
      /**
       * Number of time points users receive for each period.
       **/
      timePointsPerPeriod: u8 & AugmentedConst<ApiType>;
      /**
       * Weight of the time points in total points calculations.
       **/
      timePointsWeight: Permill & AugmentedConst<ApiType>;
      /**
       * Number of periods user can't claim rewards for. User can exit but won't receive any rewards.
       * If he stay longer than `UnclaimablePeriods` he will receive rewards also for these periods.
       **/
      unclaimablePeriods: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    stateTrieMigration: {
      /**
       * Maximal number of bytes that a key can have.
       * 
       * FRAME itself does not limit the key length.
       * The concrete value must therefore depend on your storage usage.
       * A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
       * keys which are then hashed and concatenated, resulting in arbitrarily long keys.
       * 
       * Use the *state migration RPC* to retrieve the length of the longest key in your
       * storage: <https://github.com/paritytech/substrate/issues/11642>
       * 
       * The migration will halt with a `Halted` event if this value is too small.
       * Since there is no real penalty from over-estimating, it is advised to use a large
       * value. The default is 512 byte.
       * 
       * Some key lengths for reference:
       * - [`frame_support::storage::StorageValue`]: 32 byte
       * - [`frame_support::storage::StorageMap`]: 64 byte
       * - [`frame_support::storage::StorageDoubleMap`]: 96 byte
       * 
       * For more info see
       * <https://www.shawntabrizi.com/blog/substrate/querying-substrate-storage-via-rpc/>
       **/
      maxKeyLen: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's in-code version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    technicalCommittee: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks.
       * 
       * Be aware that this is different to the *expected* period that the block production
       * apparatus provides. Your chosen consensus system will generally work with this to
       * determine a sensible block time. For example, in the Aura pallet it will be double this
       * period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tips: {
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount for a single tip.
       **/
      maxTipAmount: u128 & AugmentedConst<ApiType>;
      /**
       * The period for which a tip remains open after is has achieved threshold tippers.
       **/
      tipCountdown: u32 & AugmentedConst<ApiType>;
      /**
       * The percent of the final tip which goes to the original reporter of the tip.
       **/
      tipFindersFee: Percent & AugmentedConst<ApiType>;
      /**
       * The non-zero amount held on deposit for placing a tip report.
       **/
      tipReportDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    tokens: {
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The period during which an approved treasury spend has to be claimed.
       **/
      payoutPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    uniques: {
      /**
       * The basic amount of funds that must be reserved when adding an attribute to an item.
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for collection.
       **/
      collectionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes store in metadata,
       * either "normal" metadata or attribute metadata.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an item.
       **/
      itemDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute key.
       **/
      keyLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your item.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of data stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute value.
       **/
      valueLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xcmpQueue: {
      /**
       * The maximum number of inbound XCMP channels that can be suspended simultaneously.
       * 
       * Any further channel suspensions will fail and messages may get dropped without further
       * notice. Choosing a high value (1000) is okay; the trade-off that is described in
       * [`InboundXcmpSuspended`] still applies at that scale.
       **/
      maxInboundSuspended: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xTokens: {
      /**
       * Base XCM weight.
       * 
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The id of the RateLimiter.
       **/
      rateLimiterId: Null & AugmentedConst<ApiType>;
      /**
       * Self chain location.
       **/
      selfLocation: StagingXcmV4Location & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xyk: {
      /**
       * Trading fee rate
       **/
      getExchangeFee: ITuple<[u32, u32]> & AugmentedConst<ApiType>;
      /**
       * Max fraction of pool to sell in single transaction
       **/
      maxInRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Max fraction of pool to buy in single transaction
       **/
      maxOutRatio: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum pool liquidity
       **/
      minPoolLiquidity: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum trading limit
       **/
      minTradingLimit: u128 & AugmentedConst<ApiType>;
      /**
       * Native Asset Id
       **/
      nativeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Oracle source identifier for this pallet.
       **/
      oracleSource: U8aFixed & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xykLiquidityMining: {
      /**
       * NFT collection id for liquidity mining's deposit nfts.
       **/
      nftCollectionId: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xykWarehouseLM: {
      /**
       * Maximum number of yield farms same LP shares can be re/deposited into. This value always
       * MUST BE >= 1.
       **/
      maxFarmEntriesPerDeposit: u32 & AugmentedConst<ApiType>;
      /**
       * Max number of yield farms can exist in global farm. This includes all farms in the
       * storage(active, stopped, terminated).
       **/
      maxYieldFarmsPerGlobalFarm: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum number of periods to run liquidity mining program.
       **/
      minPlannedYieldingPeriods: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum total rewards to distribute from global farm during liquidity mining.
       **/
      minTotalFarmRewards: u128 & AugmentedConst<ApiType>;
      /**
       * Pallet id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Treasury account to receive claimed rewards lower than ED
       **/
      treasuryAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
