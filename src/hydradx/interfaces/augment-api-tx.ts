// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Null, Option, U256, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { CumulusPrimitivesCoreAggregateMessageOrigin, CumulusPrimitivesParachainInherentParachainInherentData, EthereumTransactionTransactionV2, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, HydradxRuntimeOpaqueSessionKeys, HydradxRuntimeOriginCaller, HydradxRuntimeSystemProxyType, HydradxRuntimeXcmAssetLocation, HydradxTraitsRouterAssetPair, HydradxTraitsRouterTrade, OrmlVestingVestingSchedule, PalletAssetRegistryAssetType, PalletBalancesAdjustmentDirection, PalletClaimsEcdsaSignature, PalletConvictionVotingConviction, PalletConvictionVotingVoteAccountVote, PalletDcaSchedule, PalletDemocracyConviction, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletElectionsPhragmenRenouncing, PalletIdentityJudgement, PalletIdentityLegacyIdentityInfo, PalletLbpWeightCurveType, PalletLiquidityMiningLoyaltyCurve, PalletMultisigTimepoint, PalletOmnipoolTradability, PalletReferralsFeeDistribution, PalletReferralsLevel, PalletStableswapAssetAmount, PalletStableswapTradability, PalletStateTrieMigrationMigrationLimits, PalletStateTrieMigrationMigrationTask, PalletStateTrieMigrationProgress, PalletUniquesDestroyWitness, PalletXykAssetPair, SpRuntimeMultiSignature, SpWeightsWeightV2Weight, StagingXcmExecutorAssetTransferTransferType, StagingXcmV4Location, XcmV3WeightLimit, XcmVersionedAsset, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      banAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Register a new asset.
       * 
       * New asset is given `NextAssetId` - sequential asset id
       * 
       * Asset's id is optional and it can't be used by another asset if it's provided.
       * Provided `asset_id` must be from within reserved range.
       * If `asset_id` is `None`, new asset is given id for sequential ids.
       * 
       * Asset's name is optional and it can't be used by another asset if it's provided.
       * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
       * 
       * Emits 'Registered` event when successful.
       **/
      register: AugmentedSubmittable<(assetId: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, assetType: PalletAssetRegistryAssetType | 'Token' | 'XYK' | 'StableSwap' | 'Bond' | 'External' | 'Erc20' | number | Uint8Array, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, decimals: Option<u8> | null | Uint8Array | u8 | AnyNumber, location: Option<HydradxRuntimeXcmAssetLocation> | null | Uint8Array | HydradxRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string, xcmRateLimit: Option<u128> | null | Uint8Array | u128 | AnyNumber, isSufficient: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u32>, Option<Bytes>, PalletAssetRegistryAssetType, Option<u128>, Option<Bytes>, Option<u8>, Option<HydradxRuntimeXcmAssetLocation>, Option<u128>, bool]>;
      registerExternal: AugmentedSubmittable<(location: HydradxRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeXcmAssetLocation]>;
      unbanAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Update registered asset.
       * 
       * All parameteres are optional and value is not updated if param is `None`.
       * 
       * `decimals` - can be update by `UpdateOrigin` only if it wasn't set yet. Only
       * `RegistryOrigin` can update `decimals` if it was previously set.
       * 
       * `location` - can be updated only by `RegistryOrigin`.
       * 
       * Emits `Updated` event when successful.
       **/
      update: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, name: Option<Bytes> | null | Uint8Array | Bytes | string, assetType: Option<PalletAssetRegistryAssetType> | null | Uint8Array | PalletAssetRegistryAssetType | 'Token' | 'XYK' | 'StableSwap' | 'Bond' | 'External' | 'Erc20' | number, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, xcmRateLimit: Option<u128> | null | Uint8Array | u128 | AnyNumber, isSufficient: Option<bool> | null | Uint8Array | bool | boolean, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, decimals: Option<u8> | null | Uint8Array | u8 | AnyNumber, location: Option<HydradxRuntimeXcmAssetLocation> | null | Uint8Array | HydradxRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<Bytes>, Option<PalletAssetRegistryAssetType>, Option<u128>, Option<u128>, Option<bool>, Option<Bytes>, Option<u8>, Option<HydradxRuntimeXcmAssetLocation>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * Adjust the total issuance in a saturating way.
       * 
       * Can only be called by root and always needs a positive `delta`.
       * 
       * # Example
       **/
      forceAdjustTotalIssuance: AugmentedSubmittable<(direction: PalletBalancesAdjustmentDirection | 'Increase' | 'Decrease' | number | Uint8Array, delta: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletBalancesAdjustmentDirection, Compact<u128>]>;
      /**
       * Set the regular balance of a given account.
       * 
       * The dispatch origin for this call is `root`.
       **/
      forceSetBalance: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * Exactly as `transfer_allow_death`, except the origin must be root and the source account
       * may be specified.
       **/
      forceTransfer: AugmentedSubmittable<(source: AccountId32 | string | Uint8Array, dest: AccountId32 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
       * kill the origin account.
       * 
       * 99% of the time you want [`transfer_allow_death`] instead.
       * 
       * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * Upgrade a specified account.
       * 
       * - `origin`: Must be `Signed`.
       * - `who`: The account to be upgraded.
       * 
       * This will waive the transaction fee if at least all but 10% of the accounts needed to
       * be upgraded. (We let some not have to be upgraded just in order to allow for the
       * possibility of churn).
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bonds: {
      /**
       * Issue new fungible bonds.
       * New asset id is registered and assigned to the bonds.
       * The number of bonds the issuer receives is 1:1 to the `amount` of the underlying asset
       * minus the protocol fee.
       * The bond asset is registered with the empty string for the asset name,
       * and with the same existential deposit as of the underlying asset.
       * Bonds can be redeemed for the underlying asset once mature.
       * Protocol fee is applied to the amount, and transferred to `T::FeeReceiver`.
       * When issuing new bonds with the underlying asset and maturity that matches existing bonds,
       * new amount of these existing bonds is issued, instead of registering new bonds.
       * It's possible to issue new bonds for bonds that are already mature.
       * 
       * Parameters:
       * - `origin`: issuer of new bonds, needs to be `T::IssueOrigin`
       * - `asset_id`: underlying asset id
       * - `amount`: the amount of the underlying asset
       * - `maturity`: Unix time in milliseconds, when the bonds will be mature.
       * 
       * Emits `BondTokenCreated` event when successful and new bonds were registered.
       * Emits `BondsIssued` event when successful.
       * 
       **/
      issue: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maturity: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u64]>;
      /**
       * Redeem bonds for the underlying asset.
       * The amount of the underlying asset the `origin` receives is 1:1 to the `amount` of the bonds.
       * Anyone who holds the bonds is able to redeem them.
       * Bonds can be both partially or fully redeemed.
       * 
       * Parameters:
       * - `origin`: account id
       * - `asset_id`: bond asset id
       * - `amount`: the amount of the bonds to redeem for the underlying asset
       * 
       * Emits `BondsRedeemed` event when successful.
       * 
       **/
      redeem: AugmentedSubmittable<(bondId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    circuitBreaker: {
      /**
       * Set add liquidity limit for an asset.
       * 
       * Parameters:
       * - `origin`: The dispatch origin for this call. Must be `UpdateLimitsOrigin`
       * - `asset_id`: The identifier of an asset
       * - `liquidity_limit`: Optional add liquidity limit represented as a percentage
       * 
       * Emits `AddLiquidityLimitChanged` event when successful.
       * 
       **/
      setAddLiquidityLimit: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, liquidityLimit: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>]>;
      /**
       * Set remove liquidity limit for an asset.
       * 
       * Parameters:
       * - `origin`: The dispatch origin for this call. Must be `UpdateLimitsOrigin`
       * - `asset_id`: The identifier of an asset
       * - `liquidity_limit`: Optional remove liquidity limit represented as a percentage
       * 
       * Emits `RemoveLiquidityLimitChanged` event when successful.
       * 
       **/
      setRemoveLiquidityLimit: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, liquidityLimit: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>]>;
      /**
       * Set trade volume limit for an asset.
       * 
       * Parameters:
       * - `origin`: The dispatch origin for this call. Must be `UpdateLimitsOrigin`
       * - `asset_id`: The identifier of an asset
       * - `trade_volume_limit`: New trade volume limit represented as a percentage
       * 
       * Emits `TradeVolumeLimitChanged` event when successful.
       * 
       **/
      setTradeVolumeLimit: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, tradeVolumeLimit: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, ITuple<[u32, u32]>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    claims: {
      /**
       * Claim xHDX by providing signed message with Ethereum address.
       **/
      claim: AugmentedSubmittable<(ethereumSignature: PalletClaimsEcdsaSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletClaimsEcdsaSignature]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    collatorSelection: {
      /**
       * Add a new account `who` to the list of `Invulnerables` collators. `who` must have
       * registered session keys. If `who` is a candidate, they will be removed.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      addInvulnerable: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Deregister `origin` as a collator candidate. Note that the collator can only leave on
       * session change. The `CandidacyBond` will be unreserved immediately.
       * 
       * This call will fail if the total number of candidates would drop below
       * `MinEligibleCollators`.
       **/
      leaveIntent: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Register this account as a collator candidate. The account must (a) already have
       * registered session keys and (b) be able to reserve the `CandidacyBond`.
       * 
       * This call is not available to `Invulnerable` collators.
       **/
      registerAsCandidate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
       * be sorted.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      removeInvulnerable: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Set the candidacy bond amount.
       * 
       * If the candidacy bond is increased by this call, all current candidates which have a
       * deposit lower than the new bond will be kicked from the list and get their deposits
       * back.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      setCandidacyBond: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Set the ideal number of non-invulnerable collators. If lowering this number, then the
       * number of running collators could be higher than this figure. Aside from that edge case,
       * there should be no other way to have more candidates than the desired number.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      setDesiredCandidates: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the list of invulnerable (fixed) collators. These collators must do some
       * preparation, namely to have registered session keys.
       * 
       * The call will remove any accounts that have not registered keys from the set. That is,
       * it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
       * acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
       * 
       * This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
       * is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
       * `batch_all` can also be used to enforce atomicity. If any candidates are included in
       * `new`, they should be removed with `remove_invulnerable_candidate` after execution.
       * 
       * Must be called by the `UpdateOrigin`.
       **/
      setInvulnerables: AugmentedSubmittable<(updated: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * The caller `origin` replaces a candidate `target` in the collator candidate list by
       * reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
       * the existing bond of the target it is trying to replace.
       * 
       * This call will fail if the caller is already a collator candidate or invulnerable, the
       * caller does not have registered session keys, the target is not a collator candidate,
       * and/or the `deposit` amount cannot be reserved.
       **/
      takeCandidateSlot: AugmentedSubmittable<(deposit: u128 | AnyNumber | Uint8Array, target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32]>;
      /**
       * Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
       * 
       * Setting a `new_deposit` that is lower than the current deposit while `origin` is
       * occupying a top-`DesiredCandidates` slot is not allowed.
       * 
       * This call will fail if `origin` is not a collator candidate, the updated bond is lower
       * than the minimum candidacy bond, and/or the amount cannot be reserved.
       **/
      updateBond: AugmentedSubmittable<(newDeposit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    convictionVoting: {
      /**
       * Delegate the voting power (with some given conviction) of the sending account for a
       * particular class of polls.
       * 
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * 
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed through
       * `remove_vote`).
       * 
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
       * to this function are required.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must not
       * be more than the account's current balance.
       * 
       * Emits `Delegated`.
       * 
       * Weight: `O(R)` where R is the number of polls the voter delegating to has
       * voted on. Weight is initially charged as if maximum votes, but is refunded later.
       **/
      delegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, to: AccountId32 | string | Uint8Array, conviction: PalletConvictionVotingConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, AccountId32, PalletConvictionVotingConviction, u128]>;
      /**
       * Remove a vote for a poll.
       * 
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the poll was cancelled, because the voter lost the poll or
       * because the conviction period is over.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account of the vote to be removed; this account must have voted for poll
       * `index`.
       * - `index`: The index of poll of the vote to be removed.
       * - `class`: The class of the poll.
       * 
       * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array, clazz: u16 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u16, u32]>;
      /**
       * Remove a vote for a poll.
       * 
       * If:
       * - the poll was cancelled, or
       * - the poll is ongoing, or
       * - the poll has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       * 
       * If, however, the poll has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       * 
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for poll `index`.
       * 
       * - `index`: The index of poll of the vote to be removed.
       * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
       * which have finished or are cancelled, this must be `Some`.
       * 
       * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(clazz: Option<u16> | null | Uint8Array | u16 | AnyNumber, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u16>, u32]>;
      /**
       * Undelegate the voting power of the sending account for a particular class of polls.
       * 
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued has passed.
       * 
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       * 
       * - `class`: The class of polls to remove the delegation from.
       * 
       * Emits `Undelegated`.
       * 
       * Weight: `O(R)` where R is the number of polls the voter delegating to has
       * voted on. Weight is initially charged as if maximum votes, but is refunded later.
       **/
      undelegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Remove the lock caused by prior voting/delegating which has expired within a particular
       * class.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `class`: The class of polls to unlock.
       * - `target`: The account to remove the lock on.
       * 
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, AccountId32]>;
      /**
       * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `poll_index`: The index of the poll to vote for.
       * - `vote`: The vote configuration.
       * 
       * Weight: `O(R)` where R is the number of polls the voter has voted on.
       **/
      vote: AugmentedSubmittable<(pollIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletConvictionVotingVoteAccountVote | { Standard: any } | { Split: any } | { SplitAbstain: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletConvictionVotingVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * ## Complexity
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * ## Complexity
       * O(P) where P is the number of max proposals
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * ## Complexity:
       * - `O(B + M + P)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` members-count (code-bounded)
       * - `P` complexity of dispatching `proposal`
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * ## Complexity
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       * 
       * The dispatch of this call must be `SetMembersOrigin`.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # WARNING:
       * 
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       * 
       * ## Complexity:
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * ## Complexity
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>]>;
      /**
       * Transfer some native currency to another account.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u128>]>;
      /**
       * update amount of account `who` under `currency_id`.
       * 
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, i128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dca: {
      /**
       * Creates a new DCA (Dollar-Cost Averaging) schedule and plans the next execution
       * for the specified block.
       * 
       * If the block is not specified, the execution is planned for the next block.
       * If the given block is full, the execution will be planned in the subsequent block.
       * 
       * Once the schedule is created, the specified `total_amount` will be reserved for DCA.
       * The reservation currency will be the `amount_in` currency of the order.
       * 
       * Trades are executed as long as there is budget remaining
       * from the initial `total_amount` allocation.
       * 
       * If a trade fails due to slippage limit or price stability errors, it will be retried.
       * If the number of retries reaches the maximum allowed,
       * the schedule will be terminated permanently.
       * In the case of a successful trade, the retry counter is reset.
       * 
       * Parameters:
       * - `origin`: schedule owner
       * - `schedule`: schedule details
       * - `start_execution_block`: first possible execution block for the schedule
       * 
       * Emits `Scheduled` and `ExecutionPlanned` event when successful.
       * 
       **/
      schedule: AugmentedSubmittable<(schedule: PalletDcaSchedule | { owner?: any; period?: any; totalAmount?: any; maxRetries?: any; stabilityThreshold?: any; slippage?: any; order?: any } | string | Uint8Array, startExecutionBlock: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [PalletDcaSchedule, Option<u32>]>;
      /**
       * Terminates a DCA schedule and remove it completely from the chain.
       * 
       * This can be called by both schedule owner or the configured `T::TerminateOrigin`
       * 
       * Parameters:
       * - `origin`: schedule owner
       * - `schedule_id`: schedule id
       * - `next_execution_block`: block number where the schedule is planned.
       * 
       * Emits `Terminated` event when successful.
       * 
       **/
      terminate: AugmentedSubmittable<(scheduleId: u32 | AnyNumber | Uint8Array, nextExecutionBlock: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    democracy: {
      /**
       * Permanently place a proposal into the blacklist. This prevents it from ever being
       * proposed again.
       * 
       * If called on a queued public or external proposal, then this will result in it being
       * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
       * then it will be cancelled.
       * 
       * The dispatch origin of this call must be `BlacklistOrigin`.
       * 
       * - `proposal_hash`: The proposal hash to blacklist permanently.
       * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
       * cancelled.
       * 
       * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
       * reasonable value).
       **/
      blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
      /**
       * Remove a proposal.
       * 
       * The dispatch origin of this call must be `CancelProposalOrigin`.
       * 
       * - `prop_index`: The index of the proposal to cancel.
       * 
       * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove a referendum.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * - `ref_index`: The index of the referendum to cancel.
       * 
       * # Weight: `O(1)`.
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Clears all public proposals.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * Weight: `O(1)`.
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Delegate the voting power (with some given conviction) of the sending account.
       * 
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * 
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       * 
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must not
       * be more than the account's current balance.
       * 
       * Emits `Delegated`.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      delegate: AugmentedSubmittable<(to: AccountId32 | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PalletDemocracyConviction, u128]>;
      /**
       * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
       * referendum.
       * 
       * The dispatch origin of this call must be `CancellationOrigin`.
       * 
       * -`ref_index`: The index of the referendum to cancel.
       * 
       * Weight: `O(1)`.
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Schedule a referendum to be tabled once it is legal to schedule an external
       * referendum.
       * 
       * The dispatch origin of this call must be `ExternalOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       **/
      externalPropose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
       * schedule an external referendum.
       * 
       * The dispatch of this call must be `ExternalDefaultOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * 
       * Weight: `O(1)`
       **/
      externalProposeDefault: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
       * an external referendum.
       * 
       * The dispatch of this call must be `ExternalMajorityOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * 
       * Weight: `O(1)`
       **/
      externalProposeMajority: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * Schedule the currently externally-proposed majority-carries referendum to be tabled
       * immediately. If there is no externally-proposed referendum currently, or if there is one
       * but it is not a majority-carries referendum then it fails.
       * 
       * The dispatch of this call must be `FastTrackOrigin`.
       * 
       * - `proposal_hash`: The hash of the current external proposal.
       * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
       * Must be always greater than zero.
       * For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
       * - `delay`: The number of block after voting has ended in approval and this should be
       * enacted. This doesn't have a minimum amount.
       * 
       * Emits `Started`.
       * 
       * Weight: `O(1)`
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, u32]>;
      /**
       * Allow to force remove a vote for a referendum.
       * 
       * Same as `remove_other_vote`, except the scope is overriden by forced flag.
       * The dispatch origin of this call must be `VoteRemovalOrigin`.
       * 
       * Only allowed if the referendum is finished.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account of the vote to be removed; this account must have voted for
       * referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      forceRemoveVote: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Propose a sensitive action to be taken.
       * 
       * The dispatch origin of this call must be _Signed_ and the sender must
       * have funds to cover the deposit.
       * 
       * - `proposal_hash`: The hash of the proposal preimage.
       * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
       * 
       * Emits `Proposed`.
       **/
      propose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded, Compact<u128>]>;
      /**
       * Remove a vote for a referendum.
       * 
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the referendum was cancelled, because the voter lost the referendum or
       * because the conviction period is over.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account of the vote to be removed; this account must have voted for
       * referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Remove a vote for a referendum.
       * 
       * If:
       * - the referendum was cancelled, or
       * - the referendum is ongoing, or
       * - the referendum has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       * 
       * If, however, the referendum has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       * 
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for referendum `index`.
       * 
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Signals agreement with a particular proposal.
       * 
       * The dispatch origin of this call must be _Signed_ and the sender
       * must have funds to cover the deposit, equal to the original deposit.
       * 
       * - `proposal`: The index of the proposal to second.
       **/
      second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Set or clear a metadata of a proposal or a referendum.
       * 
       * Parameters:
       * - `origin`: Must correspond to the `MetadataOwner`.
       * - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
       * threshold.
       * - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
       * threshold.
       * - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
       * threshold.
       * - `Signed` by a creator for a public proposal.
       * - `Signed` to clear a metadata for a finished referendum.
       * - `Root` to set a metadata for an ongoing referendum.
       * - `owner`: an identifier of a metadata owner.
       * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
       **/
      setMetadata: AugmentedSubmittable<(owner: PalletDemocracyMetadataOwner | { External: any } | { Proposal: any } | { Referendum: any } | string | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [PalletDemocracyMetadataOwner, Option<H256>]>;
      /**
       * Undelegate the voting power of the sending account.
       * 
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued.
       * 
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       * 
       * Emits `Undelegated`.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unlock tokens that have an expired lock.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account to remove the lock on.
       * 
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Veto and blacklist the external proposal hash.
       * 
       * The dispatch origin of this call must be `VetoOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
       * 
       * Emits `Vetoed`.
       * 
       * Weight: `O(V + log(V))` where V is number of `existing vetoers`
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `ref_index`: The index of the referendum to vote for.
       * - `vote`: The vote configuration.
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    duster: {
      /**
       * Add account to list of non-dustable account. Account whihc are excluded from udsting.
       * If such account should be dusted - `AccountBlacklisted` error is returned.
       * Only root can perform this action.
       **/
      addNondustableAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Dust specified account.
       * IF account balance is < min. existential deposit of given currency, and account is allowed to
       * be dusted, the remaining balance is transferred to selected account (usually treasury).
       * 
       * Caller is rewarded with chosen reward in native currency.
       **/
      dustAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Remove account from list of non-dustable accounts. That means account can be dusted again.
       **/
      removeNondustableAccount: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dynamicFees: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    elections: {
      /**
       * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
       * deposit of the removed voters are returned.
       * 
       * This is an root function to be used only for cleaning the state.
       * 
       * The dispatch origin of this call must be root.
       * 
       * ## Complexity
       * - Check is_defunct_voter() details.
       **/
      cleanDefunctVoters: AugmentedSubmittable<(numVoters: u32 | AnyNumber | Uint8Array, numDefunct: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Remove a particular member from the set. This is effective immediately and the bond of
       * the outgoing member is slashed.
       * 
       * If a runner-up is available, then the best runner-up will be removed and replaces the
       * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
       * started, else, nothing happens.
       * 
       * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
       * it is returned.
       * 
       * The dispatch origin of this call must be root.
       * 
       * Note that this does not affect the designated block number of the next election.
       * 
       * ## Complexity
       * - Check details of remove_and_replace_member() and do_phragmen().
       **/
      removeMember: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, slashBond: bool | boolean | Uint8Array, rerunElection: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, bool, bool]>;
      /**
       * Remove `origin` as a voter.
       * 
       * This removes the lock and returns the deposit.
       * 
       * The dispatch origin of this call must be signed and be a voter.
       **/
      removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Renounce one's intention to be a candidate for the next election round. 3 potential
       * outcomes exist:
       * 
       * - `origin` is a candidate and not elected in any set. In this case, the deposit is
       * unreserved, returned and origin is removed as a candidate.
       * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
       * origin is removed as a runner-up.
       * - `origin` is a current member. In this case, the deposit is unreserved and origin is
       * removed as a member, consequently not being a candidate for the next round anymore.
       * Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
       * are immediately used. If the prime is renouncing, then no prime will exist until the
       * next round.
       * 
       * The dispatch origin of this call must be signed, and have one of the above roles.
       * The type of renouncing must be provided as witness data.
       * 
       * ## Complexity
       * - Renouncing::Candidate(count): O(count + log(count))
       * - Renouncing::Member: O(1)
       * - Renouncing::RunnerUp: O(1)
       **/
      renounceCandidacy: AugmentedSubmittable<(renouncing: PalletElectionsPhragmenRenouncing | { Member: any } | { RunnerUp: any } | { Candidate: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionsPhragmenRenouncing]>;
      /**
       * Submit oneself for candidacy. A fixed amount of deposit is recorded.
       * 
       * All candidates are wiped at the end of the term. They either become a member/runner-up,
       * or leave the system while their deposit is slashed.
       * 
       * The dispatch origin of this call must be signed.
       * 
       * ### Warning
       * 
       * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
       * to get their deposit back. Losing the spot in an election will always lead to a slash.
       * 
       * The number of current candidates must be provided as witness data.
       * ## Complexity
       * O(C + log(C)) where C is candidate_count.
       **/
      submitCandidacy: AugmentedSubmittable<(candidateCount: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Vote for a set of candidates for the upcoming round of election. This can be called to
       * set the initial votes, or update already existing votes.
       * 
       * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
       * reserved. The deposit is based on the number of votes and can be updated over time.
       * 
       * The `votes` should:
       * - not be empty.
       * - be less than the number of possible candidates. Note that all current members and
       * runners-up are also automatically candidates for the next round.
       * 
       * If `value` is more than `who`'s free balance, then the maximum of the two is used.
       * 
       * The dispatch origin of this call must be signed.
       * 
       * ### Warning
       * 
       * It is the responsibility of the caller to **NOT** place all of their balance into the
       * lock and keep some for further operations.
       **/
      vote: AugmentedSubmittable<(votes: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    emaOracle: {
      addOracle: AugmentedSubmittable<(source: U8aFixed | string | Uint8Array, assets: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [U8aFixed, ITuple<[u32, u32]>]>;
      removeOracle: AugmentedSubmittable<(source: U8aFixed | string | Uint8Array, assets: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [U8aFixed, ITuple<[u32, u32]>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ethereum: {
      /**
       * Transact an Ethereum transaction.
       **/
      transact: AugmentedSubmittable<(transaction: EthereumTransactionTransactionV2 | { Legacy: any } | { EIP2930: any } | { EIP1559: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [EthereumTransactionTransactionV2]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    evm: {
      /**
       * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
       **/
      call: AugmentedSubmittable<(source: H160 | string | Uint8Array, target: H160 | string | Uint8Array, input: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, H160, Bytes, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
      /**
       * Issue an EVM create operation. This is similar to a contract creation transaction in
       * Ethereum.
       **/
      create: AugmentedSubmittable<(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, Bytes, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
      /**
       * Issue an EVM create2 operation.
       **/
      create2: AugmentedSubmittable<(source: H160 | string | Uint8Array, init: Bytes | string | Uint8Array, salt: H256 | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, maxFeePerGas: U256 | AnyNumber | Uint8Array, maxPriorityFeePerGas: Option<U256> | null | Uint8Array | U256 | AnyNumber, nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber, accessList: Vec<ITuple<[H160, Vec<H256>]>> | ([H160 | string | Uint8Array, Vec<H256> | (H256 | string | Uint8Array)[]])[]) => SubmittableExtrinsic<ApiType>, [H160, Bytes, H256, U256, u64, U256, Option<U256>, Option<U256>, Vec<ITuple<[H160, Vec<H256>]>>]>;
      /**
       * Withdraw balance from EVM into currency/balances pallet.
       **/
      withdraw: AugmentedSubmittable<(address: H160 | string | Uint8Array, value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    evmAccounts: {
      /**
       * Adds an EVM address to the list of addresses that are allowed to deploy smart contracts.
       * 
       * Parameters:
       * - `origin`: Substrate account whitelisting an address. Must be `ControllerOrigin`.
       * - `address`: EVM address that is whitelisted
       * 
       * Emits `DeployerAdded` event when successful.
       **/
      addContractDeployer: AugmentedSubmittable<(address: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160]>;
      /**
       * Adds address of the contract to the list of approved contracts to manage balances.
       * 
       * Effectively giving it allowance to for any balances and tokens.
       * 
       * Parameters:
       * - `origin`:  Must be `ControllerOrigin`.
       * - `address`: Contract address that will be approved
       * 
       * Emits `ContractApproved` event when successful.
       **/
      approveContract: AugmentedSubmittable<(address: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160]>;
      /**
       * Binds a Substrate address to EVM address.
       * After binding, the EVM is able to convert an EVM address to the original Substrate address.
       * Without binding, the EVM converts an EVM address to a truncated Substrate address, which doesn't correspond
       * to the origin address.
       * 
       * Binding an address is not necessary for interacting with the EVM.
       * 
       * Parameters:
       * - `origin`: Substrate account binding an address
       * 
       * Emits `EvmAccountBound` event when successful.
       **/
      bindEvmAddress: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Removes address of the contract from the list of approved contracts to manage balances.
       * 
       * Parameters:
       * - `origin`:  Must be `ControllerOrigin`.
       * - `address`: Contract address that will be disapproved
       * 
       * Emits `ContractDisapproved` event when successful.
       **/
      disapproveContract: AugmentedSubmittable<(address: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160]>;
      /**
       * Removes an EVM address from the list of addresses that are allowed to deploy smart contracts.
       * 
       * Parameters:
       * - `origin`: Substrate account removing the EVM address from the whitelist. Must be `ControllerOrigin`.
       * - `address`: EVM address that is removed from the whitelist
       * 
       * Emits `DeployerRemoved` event when successful.
       **/
      removeContractDeployer: AugmentedSubmittable<(address: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160]>;
      /**
       * Removes the account's EVM address from the list of addresses that are allowed to deploy smart contracts.
       * Based on the best practices, this extrinsic can be called by any whitelisted account to renounce their own permission.
       * 
       * Parameters:
       * - `origin`: Substrate account removing their EVM address from the whitelist.
       * 
       * Emits `DeployerRemoved` event when successful.
       **/
      renounceContractDeployer: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    genesisHistory: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * Accept a given username that an `authority` granted. The call must include the full
       * username, as in `username.suffix`.
       **/
      acceptUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Add a registrar to the system.
       * 
       * The dispatch origin for this call must be `T::RegistrarOrigin`.
       * 
       * - `account`: the account of the registrar.
       * 
       * Emits `RegistrarAdded` if successful.
       **/
      addRegistrar: AugmentedSubmittable<(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Add the given account to the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      addSub: AugmentedSubmittable<(sub: AccountId32 | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Data]>;
      /**
       * Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
       * 
       * The authority can grant up to `allocation` usernames. To top up their allocation, they
       * should just issue (or request via governance) a new `add_username_authority` call.
       **/
      addUsernameAuthority: AugmentedSubmittable<(authority: AccountId32 | string | Uint8Array, suffix: Bytes | string | Uint8Array, allocation: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Bytes, u32]>;
      /**
       * Cancel a previous request.
       * 
       * Payment: A previously reserved deposit is returned on success.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is no longer requested.
       * 
       * Emits `JudgementUnrequested` if successful.
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Clear an account's identity info and all sub-accounts and return all deposits.
       * 
       * Payment: All reserved balances on the account are returned.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * Emits `IdentityCleared` if successful.
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove an account's identity and sub-account information and slash the deposits.
       * 
       * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
       * `Slash`. Verification request deposits are not returned; they should be cancelled
       * manually using `cancel_request`.
       * 
       * The dispatch origin for this call must match `T::ForceOrigin`.
       * 
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * 
       * Emits `IdentityKilled` if successful.
       **/
      killIdentity: AugmentedSubmittable<(target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Provide a judgement for an account's identity.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `reg_index`.
       * 
       * - `reg_index`: the index of the registrar whose judgement is being made.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
       * - `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
       * provided.
       * 
       * Note: Judgements do not apply to a username.
       * 
       * Emits `JudgementGiven` if successful.
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: AccountId32 | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, AccountId32, PalletIdentityJudgement, H256]>;
      /**
       * Remove the sender as a sub-account.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender (*not* the original depositor).
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * super-identity.
       * 
       * NOTE: This should not normally be used, but is provided in the case that the non-
       * controller of an account is maliciously registered as a sub-account.
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a username that corresponds to an account with no identity. Exists when a user
       * gets a username but then calls `clear_identity`.
       **/
      removeDanglingUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Remove an expired username approval. The username was approved by an authority but never
       * accepted by the user and must now be beyond its expiration. The call must include the
       * full username, as in `username.suffix`.
       **/
      removeExpiredApproval: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Remove the given account from the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      removeSub: AugmentedSubmittable<(sub: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Remove `authority` from the username authorities.
       **/
      removeUsernameAuthority: AugmentedSubmittable<(authority: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Alter the associated name of the given sub-account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      renameSub: AugmentedSubmittable<(sub: AccountId32 | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Data]>;
      /**
       * Request a judgement from a registrar.
       * 
       * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
       * given.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is requested.
       * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
       * 
       * ```nocompile
       * Self::registrars().get(reg_index).unwrap().fee
       * ```
       * 
       * Emits `JudgementRequested` if successful.
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Change the account associated with a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `new`: the new account ID.
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, AccountId32]>;
      /**
       * Set the fee required for a judgement to be requested from a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fee`: the new fee.
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Set the field information for a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fields`: the fields that the registrar concerns themselves with.
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, u64]>;
      /**
       * Set an account's identity information and reserve the appropriate deposit.
       * 
       * If the account already has identity information, the deposit is taken as part payment
       * for the new deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `info`: The identity information.
       * 
       * Emits `IdentitySet` if successful.
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityLegacyIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityLegacyIdentityInfo]>;
      /**
       * Set a given username as the primary. The username should include the suffix.
       **/
      setPrimaryUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the sub-accounts of the sender.
       * 
       * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
       * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * - `subs`: The identity's (new) sub-accounts.
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Set the username for `who`. Must be called by a username authority.
       * 
       * The authority must have an `allocation`. Users can either pre-sign their usernames or
       * accept them later.
       * 
       * Usernames must:
       * - Only contain lowercase ASCII characters or digits.
       * - When combined with the suffix of the issuing authority be _less than_ the
       * `MaxUsernameLength`.
       **/
      setUsernameFor: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, username: Bytes | string | Uint8Array, signature: Option<SpRuntimeMultiSignature> | null | Uint8Array | SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [AccountId32, Bytes, Option<SpRuntimeMultiSignature>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    lbp: {
      /**
       * Add liquidity to a pool.
       * 
       * Assets to add has to match the pool assets. At least one amount has to be non-zero.
       * 
       * The dispatch origin for this call must be signed by the pool owner.
       * 
       * Parameters:
       * - `pool_id`: The identifier of the pool
       * - `amount_a`: The identifier of the asset and the amount to add.
       * - `amount_b`: The identifier of the second asset and the amount to add.
       * 
       * Emits `LiquidityAdded` event when successful.
       **/
      addLiquidity: AugmentedSubmittable<(amountA: ITuple<[u32, u128]> | [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], amountB: ITuple<[u32, u128]> | [u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, u128]>, ITuple<[u32, u128]>]>;
      /**
       * Trade `asset_in` for `asset_out`.
       * 
       * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
       * affected by the amount and the proportion of the pool assets and the weights.
       * 
       * Trading `fee` is distributed to the `fee_collector`.
       * 
       * Parameters:
       * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
       * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
       * - `amount`: The amount of `asset_out`.
       * - `max_limit`: maximum amount of `asset_in` to be sold in exchange for `asset_out`.
       * 
       * Emits `BuyExecuted` when successful.
       **/
      buy: AugmentedSubmittable<(assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Create a new liquidity bootstrapping pool for given asset pair.
       * 
       * For any asset pair, only one pool can exist at a time.
       * 
       * The dispatch origin for this call must be `T::CreatePoolOrigin`.
       * The pool is created with initial liquidity provided by the `pool_owner` who must have
       * sufficient funds free.
       * 
       * The pool starts uninitialized and update_pool call should be called once created to set the start block.
       * 
       * This function should be dispatched from governing entity `T::CreatePoolOrigin`
       * 
       * Parameters:
       * - `pool_owner`: the future owner of the new pool.
       * - `asset_a`: { asset_id, amount } Asset ID and initial liquidity amount.
       * - `asset_b`: { asset_id, amount } Asset ID and initial liquidity amount.
       * - `initial_weight`: Initial weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
       * this should be higher than final weight
       * - `final_weight`: Final weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
       * this should be lower than initial weight
       * - `weight_curve`: The weight function used to update the LBP weights. Currently,
       * there is only one weight function implemented, the linear function.
       * - `fee`: The trading fee charged on every trade distributed to `fee_collector`.
       * - `fee_collector`: The account to which trading fees will be transferred.
       * - `repay_target`: The amount of tokens to repay to separate fee_collector account. Until this amount is
       * reached, fee will be increased to 20% and taken from the pool
       * 
       * Emits `PoolCreated` event when successful.
       * 
       * BEWARE: We are taking the fee from the accumulated asset. If the accumulated asset is sold to the pool,
       * the fee cost is transferred to the pool. If its bought from the pool the buyer bears the cost.
       * This increases the price of the sold asset on every trade. Make sure to only run this with
       * previously illiquid assets.
       **/
      createPool: AugmentedSubmittable<(poolOwner: AccountId32 | string | Uint8Array, assetA: u32 | AnyNumber | Uint8Array, assetAAmount: u128 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, assetBAmount: u128 | AnyNumber | Uint8Array, initialWeight: u32 | AnyNumber | Uint8Array, finalWeight: u32 | AnyNumber | Uint8Array, weightCurve: PalletLbpWeightCurveType | 'Linear' | number | Uint8Array, fee: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], feeCollector: AccountId32 | string | Uint8Array, repayTarget: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, u128, u32, u128, u32, u32, PalletLbpWeightCurveType, ITuple<[u32, u32]>, AccountId32, u128]>;
      /**
       * Transfer all the liquidity from a pool back to the pool owner and destroy the pool.
       * The pool data are also removed from the storage.
       * 
       * The pool can't be destroyed during the sale.
       * 
       * The dispatch origin for this call must be signed by the pool owner.
       * 
       * Parameters:
       * - `amount_a`: The identifier of the asset and the amount to add.
       * 
       * Emits 'LiquidityRemoved' when successful.
       **/
      removeLiquidity: AugmentedSubmittable<(poolId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Trade `asset_in` for `asset_out`.
       * 
       * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
       * affected by the amount and proportion of the pool assets and the weights.
       * 
       * Trading `fee` is distributed to the `fee_collector`.
       * 
       * Parameters:
       * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
       * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
       * - `amount`: The amount of `asset_in`
       * - `max_limit`: minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
       * 
       * Emits `SellExecuted` when successful.
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Update pool data of a pool.
       * 
       * The dispatch origin for this call must be signed by the pool owner.
       * 
       * The pool can be updated only if the sale has not already started.
       * 
       * At least one of the following optional parameters has to be specified.
       * 
       * Parameters:
       * - `pool_id`: The identifier of the pool to be updated.
       * - `start`: The new starting time of the sale. This parameter is optional.
       * - `end`: The new ending time of the sale. This parameter is optional.
       * - `initial_weight`: The new initial weight. This parameter is optional.
       * - `final_weight`: The new final weight. This parameter is optional.
       * - `fee`: The new trading fee charged on every trade. This parameter is optional.
       * - `fee_collector`: The new receiver of trading fees. This parameter is optional.
       * 
       * Emits `PoolUpdated` event when successful.
       **/
      updatePoolData: AugmentedSubmittable<(poolId: AccountId32 | string | Uint8Array, poolOwner: Option<AccountId32> | null | Uint8Array | AccountId32 | string, start: Option<u32> | null | Uint8Array | u32 | AnyNumber, end: Option<u32> | null | Uint8Array | u32 | AnyNumber, initialWeight: Option<u32> | null | Uint8Array | u32 | AnyNumber, finalWeight: Option<u32> | null | Uint8Array | u32 | AnyNumber, fee: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], feeCollector: Option<AccountId32> | null | Uint8Array | AccountId32 | string, repayTarget: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<AccountId32>, Option<u32>, Option<u32>, Option<u32>, Option<u32>, Option<ITuple<[u32, u32]>>, Option<AccountId32>, Option<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    liquidation: {
      /**
       * Liquidates an existing money market position.
       * 
       * Performs a flash loan to get funds to pay for the debt.
       * Received collateral is swapped and the profit is transferred to `FeeReceiver`.
       * 
       * Parameters:
       * - `origin`: Signed origin.
       * - `collateral_asset`: Asset ID used as collateral in the MM position.
       * - `debt_asset`: Asset ID used as debt in the MM position.
       * - `user`: EVM address of the MM position that we want to liquidate.
       * - `debt_to_cover`: Amount of debt we want to liquidate.
       * - `route`: The route we trade against. Required for the fee calculation.
       * 
       * Emits `Liquidated` event when successful.
       * 
       **/
      liquidate: AugmentedSubmittable<(collateralAsset: u32 | AnyNumber | Uint8Array, debtAsset: u32 | AnyNumber | Uint8Array, user: H160 | string | Uint8Array, debtToCover: u128 | AnyNumber | Uint8Array, route: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, H160, u128, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Set the borrowing market contract address.
       **/
      setBorrowingContract: AugmentedSubmittable<(contract: H160 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    messageQueue: {
      /**
       * Execute an overweight message.
       * 
       * Temporary processing errors will be propagated whereas permanent errors are treated
       * as success condition.
       * 
       * - `origin`: Must be `Signed`.
       * - `message_origin`: The origin from which the message to be executed arrived.
       * - `page`: The page in the queue in which the message to be executed is sitting.
       * - `index`: The index into the queue of the message to be executed.
       * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
       * of the message.
       * 
       * Benchmark complexity considerations: O(index + weight_limit).
       **/
      executeOverweight: AugmentedSubmittable<(messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array, page: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesCoreAggregateMessageOrigin, u32, u32, SpWeightsWeightV2Weight]>;
      /**
       * Remove a page which has no more messages remaining to be processed or is stale.
       **/
      reapPage: AugmentedSubmittable<(messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array, pageIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesCoreAggregateMessageOrigin, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * If there are enough, then dispatch the call.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       * 
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       * 
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       * 
       * ## Complexity
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * Immediately dispatch a multi-signature call using a single approval from the caller.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multi-signature, but do not participate in the approval process.
       * - `call`: The call to be executed.
       * 
       * Result is equivalent to the dispatched result.
       * 
       * ## Complexity
       * O(Z + C) where Z is the length of the call and C its execution weight.
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiTransactionPayment: {
      /**
       * Add a currency to the list of accepted currencies.
       * 
       * Only member can perform this action.
       * 
       * Currency must not be already accepted. Core asset id cannot be explicitly added.
       * 
       * Emits `CurrencyAdded` event when successful.
       **/
      addCurrency: AugmentedSubmittable<(currency: u32 | AnyNumber | Uint8Array, price: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Dispatch EVM permit.
       * The main purpose of this function is to allow EVM accounts to pay for the transaction fee in non-native currency
       * by allowing them to self-dispatch pre-signed permit.
       * The EVM fee is paid in the currency set for the account.
       **/
      dispatchPermit: AugmentedSubmittable<(from: H160 | string | Uint8Array, to: H160 | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, gasLimit: u64 | AnyNumber | Uint8Array, deadline: U256 | AnyNumber | Uint8Array, v: u8 | AnyNumber | Uint8Array, r: H256 | string | Uint8Array, s: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, H160, U256, Bytes, u64, U256, u8, H256, H256]>;
      /**
       * Remove currency from the list of supported currencies
       * Only selected members can perform this action
       * 
       * Core asset cannot be removed.
       * 
       * Emits `CurrencyRemoved` when successful.
       **/
      removeCurrency: AugmentedSubmittable<(currency: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Reset currency of the specified account to HDX.
       * If the account is EVM account, the payment currency is reset to WETH.
       * Only selected members can perform this action.
       * 
       * Emits `CurrencySet` when successful.
       **/
      resetPaymentCurrency: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Set selected currency for given account.
       * 
       * This allows to set a currency for an account in which all transaction fees will be paid.
       * Account balance cannot be zero.
       * 
       * In case of sufficient asset, the chosen currency must be in the list of accepted currencies
       * In case of insufficient asset, the chosen currency must have a XYK pool with DOT
       * 
       * When currency is set, fixed fee is withdrawn from the account to pay for the currency change
       * 
       * EVM accounts are now allowed to change thier payment currency.
       * 
       * Emits `CurrencySet` event when successful.
       **/
      setCurrency: AugmentedSubmittable<(currency: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    omnipool: {
      /**
       * Add liquidity of asset `asset` in quantity `amount` to Omnipool
       * 
       * `add_liquidity` adds specified asset amount to Omnipool and in exchange gives the origin
       * corresponding shares amount in form of NFT at current price.
       * 
       * Asset's tradable state must contain ADD_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
       * 
       * NFT is minted using NTFHandler which implements non-fungibles traits from frame_support.
       * 
       * Asset weight cap must be respected, otherwise `AssetWeightExceeded` error is returned.
       * Asset weight is ratio between new HubAsset reserve and total reserve of Hub asset in Omnipool.
       * 
       * Add liquidity fails if price difference between spot price and oracle price is higher than allowed by `PriceBarrier`.
       * 
       * Parameters:
       * - `asset`: The identifier of the new asset added to the pool. Must be already in the pool
       * - `amount`: Amount of asset added to omnipool
       * 
       * Emits `LiquidityAdded` event when successful.
       * 
       **/
      addLiquidity: AugmentedSubmittable<(asset: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Add liquidity of asset `asset` in quantity `amount` to Omnipool.
       * 
       * Limit protection is applied.
       * 
       * `add_liquidity` adds specified asset amount to Omnipool and in exchange gives the origin
       * corresponding shares amount in form of NFT at current price.
       * 
       * Asset's tradable state must contain ADD_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
       * 
       * NFT is minted using NTFHandler which implements non-fungibles traits from frame_support.
       * 
       * Asset weight cap must be respected, otherwise `AssetWeightExceeded` error is returned.
       * Asset weight is ratio between new HubAsset reserve and total reserve of Hub asset in Omnipool.
       * 
       * Add liquidity fails if price difference between spot price and oracle price is higher than allowed by `PriceBarrier`.
       * 
       * Parameters:
       * - `asset`: The identifier of the new asset added to the pool. Must be already in the pool
       * - `amount`: Amount of asset added to omnipool
       * - `min_shares_limit`: The min amount of delta share asset the user should receive in the position
       * 
       * Emits `LiquidityAdded` event when successful.
       * 
       **/
      addLiquidityWithLimit: AugmentedSubmittable<(asset: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, minSharesLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u128]>;
      /**
       * Add new token to omnipool in quantity `amount` at price `initial_price`
       * 
       * Initial liquidity must be transferred to pool's account for this new token manually prior to calling `add_token`.
       * 
       * Initial liquidity is pool's account balance of the token.
       * 
       * Position NFT token is minted for `position_owner`.
       * 
       * Parameters:
       * - `asset`: The identifier of the new asset added to the pool. Must be registered in Asset registry
       * - `initial_price`: Initial price
       * - `position_owner`: account id for which share are distributed in form on NFT
       * - `weight_cap`: asset weight cap
       * 
       * Emits `TokenAdded` event when successful.
       * 
       **/
      addToken: AugmentedSubmittable<(asset: u32 | AnyNumber | Uint8Array, initialPrice: u128 | AnyNumber | Uint8Array, weightCap: Permill | AnyNumber | Uint8Array, positionOwner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, Permill, AccountId32]>;
      /**
       * Execute a swap of `asset_out` for `asset_in`.
       * 
       * Price is determined by the Omnipool.
       * 
       * Hub asset is traded separately.
       * 
       * Asset's tradable states must contain SELL flag for asset_in and BUY flag for asset_out, otherwise `NotAllowed` error is returned.
       * 
       * Parameters:
       * - `asset_in`: ID of asset sold to the pool
       * - `asset_out`: ID of asset bought from the pool
       * - `amount`: Amount of asset sold
       * - `max_sell_amount`: Maximum amount to be sold.
       * 
       * Emits `BuyExecuted` event when successful.
       * 
       **/
      buy: AugmentedSubmittable<(assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxSellAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Refund given amount of asset to a recipient.
       * 
       * A refund is needed when a token is refused to be added to Omnipool, and initial liquidity of the asset has been already transferred to pool's account.
       * 
       * Transfer can be executed only if asset is not in Omnipool and pool's balance has sufficient amount.
       * 
       * Only `AuthorityOrigin` can perform this operation.
       * 
       * Emits `AssetRefunded`
       **/
      refundRefusedAsset: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, recipient: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, AccountId32]>;
      /**
       * Remove liquidity of asset `asset` in quantity `amount` from Omnipool
       * 
       * `remove_liquidity` removes specified shares amount from given PositionId (NFT instance).
       * 
       * Asset's tradable state must contain REMOVE_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
       * 
       * if all shares from given position are removed, position is destroyed and NFT is burned.
       * 
       * Remove liquidity fails if price difference between spot price and oracle price is higher than allowed by `PriceBarrier`.
       * 
       * Dynamic withdrawal fee is applied if withdrawal is not safe. It is calculated using spot price and external price oracle.
       * Withdrawal is considered safe when trading is disabled.
       * 
       * Parameters:
       * - `position_id`: The identifier of position which liquidity is removed from.
       * - `amount`: Amount of shares removed from omnipool
       * 
       * Emits `LiquidityRemoved` event when successful.
       * 
       **/
      removeLiquidity: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * Remove liquidity of asset `asset` in quantity `amount` from Omnipool
       * 
       * Limit protection is applied.
       * 
       * `remove_liquidity` removes specified shares amount from given PositionId (NFT instance).
       * 
       * Asset's tradable state must contain REMOVE_LIQUIDITY flag, otherwise `NotAllowed` error is returned.
       * 
       * if all shares from given position are removed, position is destroyed and NFT is burned.
       * 
       * Remove liquidity fails if price difference between spot price and oracle price is higher than allowed by `PriceBarrier`.
       * 
       * Dynamic withdrawal fee is applied if withdrawal is not safe. It is calculated using spot price and external price oracle.
       * Withdrawal is considered safe when trading is disabled.
       * 
       * Parameters:
       * - `position_id`: The identifier of position which liquidity is removed from.
       * - `amount`: Amount of shares removed from omnipool
       * - `min_limit`: The min amount of asset to be removed for the user
       * 
       * Emits `LiquidityRemoved` event when successful.
       * 
       **/
      removeLiquidityWithLimit: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, minLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, u128]>;
      /**
       * Removes token from Omnipool.
       * 
       * Asset's tradability must be FROZEN, otherwise `AssetNotFrozen` error is returned.
       * 
       * Remaining shares must belong to protocol, otherwise `SharesRemaining` error is returned.
       * 
       * Protocol's liquidity is transferred to the beneficiary account and hub asset amount is burned.
       * 
       * Only `AuthorityOrigin` can perform this call.
       * 
       * Emits `TokenRemoved` event when successful.
       **/
      removeToken: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, AccountId32]>;
      /**
       * Sacrifice LP position in favor of pool.
       * 
       * A position is destroyed and liquidity owned by LP becomes pool owned liquidity.
       * 
       * Only owner of position can perform this action.
       * 
       * Emits `PositionDestroyed`.
       **/
      sacrificePosition: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Execute a swap of `asset_in` for `asset_out`.
       * 
       * Price is determined by the Omnipool.
       * 
       * Hub asset is traded separately.
       * 
       * Asset's tradable states must contain SELL flag for asset_in and BUY flag for asset_out, otherwise `NotAllowed` error is returned.
       * 
       * Parameters:
       * - `asset_in`: ID of asset sold to the pool
       * - `asset_out`: ID of asset bought from the pool
       * - `amount`: Amount of asset sold
       * - `min_buy_amount`: Minimum amount required to receive
       * 
       * Emits `SellExecuted` event when successful.
       * 
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, minBuyAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Update asset's tradable state.
       * 
       * Parameters:
       * - `asset_id`: asset id
       * - `state`: new state
       * 
       * Emits `TradableStateUpdated` event when successful.
       * 
       **/
      setAssetTradableState: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, state: PalletOmnipoolTradability | { bits?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletOmnipoolTradability]>;
      /**
       * Update asset's weight cap
       * 
       * Parameters:
       * - `asset_id`: asset id
       * - `cap`: new weight cap
       * 
       * Emits `AssetWeightCapUpdated` event when successful.
       * 
       **/
      setAssetWeightCap: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, cap: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Permill]>;
      /**
       * Removes protocol liquidity.
       * 
       * Protocol liquidity is liquidity from sacrificed positions. In order to remove protocol liquidity,
       * we need the know the price of the position at the time of sacrifice. Hence this specific call.
       * 
       * Only `AuthorityOrigin` can perform this call.
       * 
       * Note that sacrifice position will be deprecated in future. There is no longer a need for that.
       * 
       * It works the same way as remove liquidity call, but position is temporary reconstructed.
       * 
       **/
      withdrawProtocolLiquidity: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, price: ITuple<[u128, u128]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array], dest: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, ITuple<[u128, u128]>, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    omnipoolLiquidityMining: {
      /**
       * This function allows user to add liquidity then use that shares to join multiple farms.
       * 
       * Parameters:
       * - `origin`: owner of the omnipool position to deposit into the liquidity mining.
       * - `farm_entries`: list of farms to join.
       * - `asset`: id of the asset to be deposited into the liquidity mining.
       * - `amount`: amount of the asset to be deposited into the liquidity mining.
       * 
       * Emits `SharesDeposited` event for the first farm entry
       * Emits `SharesRedeposited` event for each farm entry after the first one
       **/
      addLiquidityAndJoinFarms: AugmentedSubmittable<(farmEntries: Vec<ITuple<[u32, u32]>> | ([u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array])[], asset: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u32]>>, u32, u128]>;
      /**
       * Claim rewards from liquidity mining program for deposit represented by the `deposit_id`.
       * 
       * This function calculate user rewards from liquidity mining and transfer rewards to `origin`
       * account. Claiming multiple time the same period is not allowed.
       * 
       * Parameters:
       * - `origin`: owner of deposit.
       * - `deposit_id`: id of the deposit to claim rewards for.
       * - `yield_farm_id`: id of the yield farm to claim rewards from.
       * 
       * Emits `RewardClaimed` event when successful.
       * 
       **/
      claimRewards: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * Create a new liquidity mining program with provided parameters.
       * 
       * `owner` account has to have at least `total_rewards` balance. These funds will be
       * transferred from `owner` to farm account.
       * 
       * The dispatch origin for this call must be `T::CreateOrigin`.
       * !!!WARN: `T::CreateOrigin` has power over funds of `owner`'s account and it should be
       * configured to trusted origin e.g Sudo or Governance.
       * 
       * Parameters:
       * - `origin`: account allowed to create new liquidity mining program(root, governance).
       * - `total_rewards`: total rewards planned to distribute. These rewards will be
       * distributed between all yield farms in the global farm.
       * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
       * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
       * `planned_yielding_periods`. Rewards are distributed based on the situation in the yield
       * farms and can be distributed in a longer, though never in a shorter, time frame.
       * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
       * period is 1.
       * - `reward_currency`: payoff currency of rewards.
       * - `owner`: liq. mining farm owner. This account will be able to manage created
       * liquidity mining program.
       * - `yield_per_period`: percentage return on `reward_currency` of all farms.
       * - `min_deposit`: minimum amount of LP shares to be deposited into the liquidity mining by each user.
       * - `lrna_price_adjustment`: price adjustment between `[LRNA]` and `reward_currency`.
       * 
       * Emits `GlobalFarmCreated` when successful.
       * 
       **/
      createGlobalFarm: AugmentedSubmittable<(totalRewards: u128 | AnyNumber | Uint8Array, plannedYieldingPeriods: u32 | AnyNumber | Uint8Array, blocksPerPeriod: u32 | AnyNumber | Uint8Array, rewardCurrency: u32 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array, yieldPerPeriod: Perquintill | AnyNumber | Uint8Array, minDeposit: u128 | AnyNumber | Uint8Array, lrnaPriceAdjustment: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u32, u32, AccountId32, Perquintill, u128, u128]>;
      /**
       * Create yield farm for given `asset_id` in the omnipool.
       * 
       * Only farm owner can perform this action.
       * 
       * Asset with `asset_id` has to be registered in the omnipool.
       * At most one `active` yield farm can exist in one global farm for the same `asset_id`.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: global farm id to which a yield farm will be added.
       * - `asset_id`: id of a asset in the omnipool. Yield farm will be created
       * for this asset and user will be able to lock LP shares into this yield farm immediately.
       * - `multiplier`: yield farm's multiplier.
       * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
       * with time incentive. `None` means no loyalty multiplier.
       * 
       * Emits `YieldFarmCreated` event when successful.
       * 
       **/
      createYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array, loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve> | null | Uint8Array | PalletLiquidityMiningLoyaltyCurve | { initialRewardPercentage?: any; scaleCoef?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, Option<PalletLiquidityMiningLoyaltyCurve>]>;
      /**
       * Deposit omnipool position(LP shares) to a liquidity mining.
       * 
       * This function transfers omnipool position from `origin` to pallet's account and mint NFT for
       * `origin` account. Minted NFT represents deposit in the liquidity mining. User can
       * deposit omnipool position as a whole(all the LP shares in the position).
       * 
       * Parameters:
       * - `origin`: owner of the omnipool position to deposit into the liquidity mining.
       * - `global_farm_id`: id of global farm to which user wants to deposit LP shares.
       * - `yield_farm_id`: id of yield farm to deposit to.
       * - `position_id`: id of the omnipool position to be deposited into the liquidity mining.
       * 
       * Emits `SharesDeposited` event when successful.
       * 
       **/
      depositShares: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * Exit from all specified yield farms
       * 
       * This function will attempt to withdraw shares and claim rewards (if available) from all
       * specified yield farms for a given deposit.
       * 
       * Parameters:
       * - `origin`: account owner of deposit(nft).
       * - `deposit_id`: id of the deposit to claim rewards for.
       * - `yield_farm_ids`: id(s) of yield farm(s) to exit from.
       * 
       * Emits:
       * * `RewardClaimed` for each successful claim
       * * `SharesWithdrawn` for each successful withdrawal
       * * `DepositDestroyed` if the deposit is fully withdrawn
       * 
       **/
      exitFarms: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, yieldFarmIds: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u128, Vec<u32>]>;
      /**
       * This function allows user to join multiple farms with a single omnipool position.
       * 
       * Parameters:
       * - `origin`: owner of the omnipool position to deposit into the liquidity mining.
       * - `farm_entries`: list of farms to join.
       * - `position_id`: id of the omnipool position to be deposited into the liquidity mining.
       * 
       * Emits `SharesDeposited` event for the first farm entry
       * Emits `SharesRedeposited` event for each farm entry after the first one
       **/
      joinFarms: AugmentedSubmittable<(farmEntries: Vec<ITuple<[u32, u32]>> | ([u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array])[], positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u32]>>, u128]>;
      /**
       * Redeposit LP shares in the already locked omnipool position.
       * 
       * This function create yield farm entry for existing deposit. Amount of redeposited LP
       * shares is same as amount shares which are already deposited in the deposit.
       * 
       * This function DOESN'T create new deposit(NFT).
       * 
       * Parameters:
       * - `origin`: owner of the deposit to redeposit.
       * - `global_farm_id`: id of the global farm to which user wants to redeposit LP shares.
       * - `yield_farm_id`: id of the yield farm to redeposit to.
       * - `deposit_id`: identifier of the deposit to redeposit.
       * 
       * Emits `SharesRedeposited` event when successful.
       * 
       **/
      redepositShares: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, depositId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * Resume incentivization of the asset represented by yield farm.
       * 
       * This function resume incentivization of the asset from the `GlobalFarm` and
       * restore full functionality or the yield farm. Users will be able to deposit,
       * claim and withdraw again.
       * 
       * WARN: Yield farm(and users) is NOT rewarded for time it was stopped.
       * 
       * Only farm owner can perform this action.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: global farm id in which yield farm will be resumed.
       * - `yield_farm_id`: id of the yield farm to be resumed.
       * - `asset_id`: id of the asset identifying yield farm in the global farm.
       * - `multiplier`: yield farm multiplier.
       * 
       * Emits `YieldFarmResumed` event when successful.
       * 
       **/
      resumeYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128]>;
      /**
       * Stop liquidity miming for specific yield farm.
       * 
       * This function claims rewards from `GlobalFarm` last time and stop yield farm
       * incentivization from a `GlobalFarm`. Users will be able to only withdraw
       * shares(with claiming) after calling this function.
       * `deposit_shares()` is not allowed on stopped yield farm.
       * 
       * Only farm owner can perform this action.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: farm id in which yield farm will be canceled.
       * - `asset_id`: id of the asset identifying yield farm in the global farm.
       * 
       * Emits `YieldFarmStopped` event when successful.
       * 
       **/
      stopYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Terminate existing liq. mining program.
       * 
       * Only farm owner can perform this action.
       * 
       * WARN: To successfully terminate a global farm, farm have to be empty
       * (all yield farms in the global farm must be terminated).
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: id of global farm to be terminated.
       * 
       * Emits `GlobalFarmTerminated` event when successful.
       * 
       **/
      terminateGlobalFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Terminate yield farm.
       * 
       * This function marks a yield farm as ready to be removed from storage when it's empty. Users will
       * be able to only withdraw shares(without claiming rewards from yield farm). Unpaid rewards
       * will be transferred back to global farm and it will be used to distribute to other yield farms.
       * 
       * Yield farm must be stopped before it can be terminated.
       * 
       * Only global farm's owner can perform this action. Yield farm stays in the storage until it's
       * empty(all farm entries are withdrawn). Last withdrawn from yield farm trigger removing from
       * the storage.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: global farm id in which yield farm should be terminated.
       * - `yield_farm_id`: id of yield farm to be terminated.
       * - `asset_id`: id of the asset identifying yield farm.
       * 
       * Emits `YieldFarmTerminated` event when successful.
       * 
       **/
      terminateYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * This extrinsic updates global farm's main parameters.
       * 
       * The dispatch origin for this call must be `T::CreateOrigin`.
       * !!!WARN: `T::CreateOrigin` has power over funds of `owner`'s account and it should be
       * configured to trusted origin e.g Sudo or Governance.
       * 
       * Parameters:
       * - `origin`: account allowed to create new liquidity mining program(root, governance).
       * - `global_farm_id`: id of the global farm to update.
       * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
       * - `yield_per_period`: percentage return on `reward_currency` of all farms.
       * - `min_deposit`: minimum amount of LP shares to be deposited into the liquidity mining by each user.
       * 
       * Emits `GlobalFarmUpdated` event when successful.
       **/
      updateGlobalFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, plannedYieldingPeriods: u32 | AnyNumber | Uint8Array, yieldPerPeriod: Perquintill | AnyNumber | Uint8Array, minDeposit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, Perquintill, u128]>;
      /**
       * Update yield farm's multiplier.
       * 
       * Only farm owner can perform this action.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: global farm id in which yield farm will be updated.
       * - `asset_id`: id of the asset identifying yield farm in the global farm.
       * - `multiplier`: new yield farm's multiplier.
       * 
       * Emits `YieldFarmUpdated` event when successful.
       * 
       **/
      updateYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * This function claim rewards and withdraw LP shares from yield farm. Omnipool position
       * is transferred to origin only if this is last withdraw in the deposit and deposit is
       * destroyed. This function claim rewards only if yield farm is not terminated and user
       * didn't already claim rewards in current period.
       * 
       * Unclaimable rewards represents rewards which user won't be able to claim because of
       * exiting early and these rewards will be transferred back to global farm for future
       * redistribution.
       * 
       * Parameters:
       * - `origin`: owner of deposit.
       * - `deposit_id`: id of the deposit to claim rewards for.
       * - `yield_farm_id`: id of the yield farm to claim rewards from.
       * 
       * Emits:
       * * `RewardClaimed` event if claimed rewards is > 0
       * * `SharesWithdrawn` event when successful
       * * `DepositDestroyed` event when this was last withdraw from the deposit and deposit was
       * destroyed.
       * 
       **/
      withdrawShares: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    omnipoolWarehouseLM: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlXcm: {
      /**
       * Send an XCM message as parachain sovereign.
       **/
      sendAsSovereign: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedXcm]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    otc: {
      /**
       * Cancel an open OTC order
       * 
       * Parameters:
       * - `order_id`: ID of the order
       * - `asset`: Asset which is being filled
       * - `amount`: Amount which is being filled
       * 
       * Validations:
       * - caller is order owner
       * 
       * Emits `Cancelled` event when successful.
       **/
      cancelOrder: AugmentedSubmittable<(orderId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Fill an OTC order (completely)
       * 
       * Parameters:
       * - `order_id`: ID of the order
       * 
       * Events:
       * `Filled` event when successful.
       **/
      fillOrder: AugmentedSubmittable<(orderId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Fill an OTC order (partially)
       * 
       * Parameters:
       * - `order_id`: ID of the order
       * - `amount_in`: Amount with which the order is being filled
       * 
       * Validations:
       * - order must be partially_fillable
       * - after the partial_fill, the remaining order.amount_in must be higher than the existential deposit
       * of asset_in multiplied by ExistentialDepositMultiplier
       * - after the partial_fill, the remaining order.amount_out must be higher than the existential deposit
       * of asset_out multiplied by ExistentialDepositMultiplier
       * 
       * Events:
       * `PartiallyFilled` event when successful.
       **/
      partialFillOrder: AugmentedSubmittable<(orderId: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Create a new OTC order
       * 
       * Parameters:
       * - `asset_in`: Asset which is being bought
       * - `asset_out`: Asset which is being sold
       * - `amount_in`: Amount that the order is seeking to buy
       * - `amount_out`: Amount that the order is selling
       * - `partially_fillable`: Flag indicating whether users can fill the order partially
       * 
       * Validations:
       * - asset_in must be registered
       * - amount_in must be higher than the existential deposit of asset_in multiplied by
       * ExistentialDepositMultiplier
       * - amount_out must be higher than the existential deposit of asset_out multiplied by
       * ExistentialDepositMultiplier
       * 
       * Events:
       * - `Placed` event when successful.
       **/
      placeOrder: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array, amountOut: u128 | AnyNumber | Uint8Array, partiallyFillable: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    otcSettlements: {
      /**
       * Close an existing OTC arbitrage opportunity.
       * 
       * Executes a trade between an OTC order and some route.
       * If the OTC order is partially fillable, the extrinsic fails if the existing arbitrage
       * opportunity is not closed or reduced after the trade.
       * If the OTC order is not partially fillable, fails if there is no profit after the trade.
       * 
       * `Origin` calling this extrinsic is not paying or receiving anything.
       * 
       * The profit made by closing the arbitrage is transferred to `FeeReceiver`.
       * 
       * Parameters:
       * - `origin`: Signed or unsigned origin. Unsigned origin doesn't pay the TX fee,
       * but can be submitted only by a collator.
       * - `otc_id`: ID of the OTC order with existing arbitrage opportunity.
       * - `amount`: Amount necessary to close the arb.
       * - `route`: The route we trade against. Required for the fee calculation.
       * 
       * Emits `Executed` event when successful.
       * 
       **/
      settleOtcOrder: AugmentedSubmittable<(otcId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, route: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u128, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainInfo: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
       * version and name should be verified on upgrade. Since the authorization only has a hash,
       * it cannot actually perform the verification.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
       * 
       * If the authorization required a version check, this call will ensure the spec name
       * remains unchanged and that the spec version has increased.
       * 
       * Note that this function will not apply the new `code`, but only attempt to schedule the
       * upgrade with the Relay Chain.
       * 
       * All origins are allowed.
       **/
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the current validation data.
       * 
       * This should be invoked exactly once per block. It will panic at the finalization
       * phase if the call was not invoked.
       * 
       * The dispatch origin for this call must be `Inherent`
       * 
       * As a side effect, this function upgrades the current validation function
       * if the appropriate time has come.
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * Claims assets trapped on this pallet because of leftover assets during XCM execution.
       * 
       * - `origin`: Anyone can call this extrinsic.
       * - `assets`: The exact assets that were trapped. Use the version to specify what version
       * was the latest when they were trapped.
       * - `beneficiary`: The location/account where the claimed assets will be deposited.
       **/
      claimAssets: AugmentedSubmittable<(assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedAssets, XcmVersionedLocation]>;
      /**
       * Execute an XCM message from a local, signed, origin.
       * 
       * An event is deposited indicating whether `msg` could be executed completely or only
       * partially.
       * 
       * No more than `max_weight` will be used in its attempted execution. If this is less than
       * the maximum amount of weight that the message could take to be executed, then no
       * execution attempt will be made.
       **/
      execute: AugmentedSubmittable<(message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * Set a safe XCM version (the version that XCM should be encoded with if the most recent
       * version a destination can accept is unknown).
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Ask a location to notify us regarding their XCM version and any changes to it.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The location to which we should subscribe for XCM version notifications.
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * Set or unset the global suspension state of the XCM executor.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `suspended`: `true` to suspend, `false` to resume.
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Require that a particular destination should no longer notify us regarding any XCM
       * version changes.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The location to which we are currently subscribed for XCM version
       * notifications which we no longer desire.
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * Extoll that a particular destination can be communicated with through a particular
       * version of XCM.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The destination that is being described.
       * - `xcm_version`: The latest version of XCM that `location` supports.
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, u32]>;
      /**
       * Transfer some assets from the local chain to the destination chain through their local,
       * destination or remote reserve.
       * 
       * `assets` must have same reserve location and may not be teleportable to `dest`.
       * - `assets` have local reserve: transfer assets to sovereign account of destination
       * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
       * assets to `beneficiary`.
       * - `assets` have destination reserve: burn local assets and forward a notification to
       * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
       * deposit them to `beneficiary`.
       * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
       * reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
       * to mint and deposit reserve-based assets to `beneficiary`.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the sent assets may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the sent assets may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` chain.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * Transfer some assets from the local chain to the destination chain through their local,
       * destination or remote reserve.
       * 
       * `assets` must have same reserve location and may not be teleportable to `dest`.
       * - `assets` have local reserve: transfer assets to sovereign account of destination
       * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
       * assets to `beneficiary`.
       * - `assets` have destination reserve: burn local assets and forward a notification to
       * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
       * deposit them to `beneficiary`.
       * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
       * reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
       * to mint and deposit reserve-based assets to `beneficiary`.
       * 
       * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
      send: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedXcm]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * **This function is deprecated: Use `limited_teleport_assets` instead.**
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` chain.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      teleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
      /**
       * Transfer some assets from the local chain to the destination chain through their local,
       * destination or remote reserve, or through teleports.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
       * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
       * operation will fail and the sent assets may be at risk.
       * 
       * `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
       * to `dest`, no limitations imposed on `fees`.
       * - for local reserve: transfer assets to sovereign account of destination chain and
       * forward a notification XCM to `dest` to mint and deposit reserve-based assets to
       * `beneficiary`.
       * - for destination reserve: burn local assets and forward a notification to `dest` chain
       * to withdraw the reserve assets from this chain's sovereign account and deposit them
       * to `beneficiary`.
       * - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
       * from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
       * and deposit reserve-based assets to `beneficiary`.
       * - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
       * assets and deposit them to `beneficiary`.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent,
       * Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
       * from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      transferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * Transfer assets from the local chain to the destination chain using explicit transfer
       * types for assets and fees.
       * 
       * `assets` must have same reserve location or may be teleportable to `dest`. Caller must
       * provide the `assets_transfer_type` to be used for `assets`:
       * - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
       * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
       * assets to `beneficiary`.
       * - `TransferType::DestinationReserve`: burn local assets and forward a notification to
       * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
       * deposit them to `beneficiary`.
       * - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
       * chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
       * XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
       * the remote `reserve` is Asset Hub.
       * - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
       * mint/teleport assets and deposit them to `beneficiary`.
       * 
       * On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
       * buy execution using transferred `assets` identified by `remote_fees_id`.
       * Make sure enough of the specified `remote_fees_id` asset is included in the given list
       * of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
       * is needed than `weight_limit`, then the operation will fail and the sent assets may be
       * at risk.
       * 
       * `remote_fees_id` may use different transfer type than rest of `assets` and can be
       * specified through `fees_transfer_type`.
       * 
       * The caller needs to specify what should happen to the transferred assets once they reach
       * the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
       * contains the instructions to execute on `dest` as a final step.
       * This is usually as simple as:
       * `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
       * but could be something more exotic like sending the `assets` even further.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
       * parachain across a bridge to another ecosystem destination.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
       * - `remote_fees_id`: One of the included `assets` to be be used to pay fees.
       * - `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
       * - `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
       * transfer, which also determines what happens to the assets on the destination chain.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      transferAssetsUsingTypeAndThen: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assetsTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array, remoteFeesId: XcmVersionedAssetId | { V3: any } | { V4: any } | string | Uint8Array, feesTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array, customXcmOnDest: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedAssets, StagingXcmExecutorAssetTransferTransferType, XcmVersionedAssetId, StagingXcmExecutorAssetTransferTransferType, XcmVersionedXcm, XcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * Ensure that the a bulk of pre-images is upgraded.
       * 
       * The caller pays no fee if at least 90% of pre-images were successfully updated.
       **/
      ensureUpdated: AugmentedSubmittable<(hashes: Vec<H256> | (H256 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<H256>]>;
      /**
       * Register a preimage on-chain.
       * 
       * If the preimage was previously requested, no fees or deposits are taken for providing
       * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Request a preimage be uploaded to the chain without paying any fees or deposits.
       * 
       * If the preimage requests has already been provided on-chain, we unreserve any deposit
       * a user may have paid, and take the control of the preimage out of their hands.
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear an unrequested preimage from the runtime storage.
       * 
       * If `len` is provided, then it will be a much cheaper operation.
       * 
       * - `hash`: The hash of the preimage to be removed from the store.
       * - `len`: The length of the preimage of `hash`.
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear a previously made request for a preimage.
       * 
       * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * Register a proxy account for the sender that is able to make calls on its behalf.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to make a proxy.
       * - `proxy_type`: The permissions allowed for this proxy account.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       **/
      addProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, HydradxRuntimeSystemProxyType, u32]>;
      /**
       * Publish the hash of a proxy-call that will be made in the future.
       * 
       * This must be called some number of blocks before the corresponding `proxy` is attempted
       * if the delay associated with the proxy relationship is greater than zero.
       * 
       * No more than `MaxPending` announcements may be made at any one time.
       * 
       * This will take a deposit of `AnnouncementDepositFactor` as well as
       * `AnnouncementDepositBase` if there are no other pending announcements.
       * 
       * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      announce: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      /**
       * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
       * initialize it with a proxy of `proxy_type` for `origin` sender.
       * 
       * Requires a `Signed` origin.
       * 
       * - `proxy_type`: The type of the proxy that the sender will be registered as over the
       * new account. This will almost always be the most permissive `ProxyType` possible to
       * allow for maximum flexibility.
       * - `index`: A disambiguation index, in case this is called multiple times in the same
       * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
       * want to use `0`.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       * 
       * Fails with `Duplicate` if this has already been called in this transaction, from the
       * same sender, with the same parameters.
       * 
       * Fails if there are insufficient funds to pay for deposit.
       **/
      createPure: AugmentedSubmittable<(proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeSystemProxyType, u32, u16]>;
      /**
       * Removes a previously spawned pure proxy.
       * 
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       * 
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `pure` with corresponding parameters.
       * 
       * - `spawner`: The account that originally called `pure` to create this account.
       * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `pure`.
       * - `height`: The height of the chain when the call to `pure` was processed.
       * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
       * 
       * Fails with `NoPermission` in case the caller is not a previously created pure
       * account whose `pure` call has corresponding parameters.
       **/
      killPure: AugmentedSubmittable<(spawner: AccountId32 | string | Uint8Array, proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, HydradxRuntimeSystemProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxy: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, forceProxyType: Option<HydradxRuntimeSystemProxyType> | null | Uint8Array | HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<HydradxRuntimeSystemProxyType>, Call]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorized for through
       * `add_proxy`.
       * 
       * Removes any corresponding announcement(s).
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, real: AccountId32 | string | Uint8Array, forceProxyType: Option<HydradxRuntimeSystemProxyType> | null | Uint8Array | HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Option<HydradxRuntimeSystemProxyType>, Call]>;
      /**
       * Remove the given announcement of a delegate.
       * 
       * May be called by a target (proxied) account to remove a call that one of their delegates
       * (`delegate`) has announced they want to execute. The deposit is returned.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `delegate`: The account that previously announced the call.
       * - `call_hash`: The hash of the call to be made.
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      /**
       * Remove a given announcement.
       * 
       * May be called by a proxy account to remove a call they previously announced and return
       * the deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      removeAnnouncement: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, H256]>;
      /**
       * Unregister all proxy accounts for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * WARNING: This may be called on accounts created by `pure`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unregister a proxy account for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to remove as a proxy.
       * - `proxy_type`: The permissions currently enabled for the removed proxy account.
       **/
      removeProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: HydradxRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, HydradxRuntimeSystemProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referenda: {
      /**
       * Cancel an ongoing referendum.
       * 
       * - `origin`: must be the `CancelOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Cancelled`.
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Cancel an ongoing referendum and slash the deposits.
       * 
       * - `origin`: must be the `KillOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Killed` and `DepositSlashed`.
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a referendum onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `index`: the referendum to be advanced.
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a track onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `track`: the track to be advanced.
       * 
       * Action item for when there is now one fewer referendum in the deciding phase and the
       * `DecidingCount` is not yet updated. This means that we should either:
       * - begin deciding another referendum (and leave `DecidingCount` alone); or
       * - decrement `DecidingCount`.
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Post the Decision Deposit for a referendum.
       * 
       * - `origin`: must be `Signed` and the account must have funds available for the
       * referendum's track's Decision Deposit.
       * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
       * posted.
       * 
       * Emits `DecisionDepositPlaced`.
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Decision Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
       * refunded.
       * 
       * Emits `DecisionDepositRefunded`.
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Submission Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
       * refunded.
       * 
       * Emits `SubmissionDepositRefunded`.
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set or clear metadata of a referendum.
       * 
       * Parameters:
       * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
       * metadata of a finished referendum.
       * - `index`:  The index of a referendum to set or clear metadata for.
       * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * Propose a referendum on a privileged action.
       * 
       * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
       * available.
       * - `proposal_origin`: The origin from which the proposal should be executed.
       * - `proposal`: The proposal.
       * - `enactment_moment`: The moment that the proposal should be enacted.
       * 
       * Emits `Submitted`.
       **/
      submit: AugmentedSubmittable<(proposalOrigin: HydradxRuntimeOriginCaller | { system: any } | { Void: any } | { Council: any } | { TechnicalCommittee: any } | { Origins: any } | { Ethereum: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referrals: {
      /**
       * Claim accumulated rewards
       * 
       * IF there is any asset in the reward pot, all is converted to RewardCurrency first.
       * 
       * Reward amount is calculated based on the shares of the signer account.
       * 
       * if the signer account is referrer account, total accumulated rewards is updated as well as referrer level if reached.
       * 
       * Emits `Claimed` event when successful.
       **/
      claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Convert accrued asset amount to reward currency.
       * 
       * Parameters:
       * - `asset_id`: Id of an asset to convert to RewardAsset.
       * 
       * Emits `Converted` event when successful.
       **/
      convert: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Link a code to an account.
       * 
       * `Code` must be valid registered code. Otherwise `InvalidCode` is returned.
       * 
       * Signer account is linked to the referral account of the code.
       * 
       * Parameters:
       * - `code`: Code to use to link the signer account to.
       * 
       * Emits `CodeLinked` event when successful.
       **/
      linkCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Register new referral code.
       * 
       * `origin` pays the registration fee.
       * `code` is assigned to the given `account`.
       * 
       * Length of the `code` must be at least `T::MinCodeLength`.
       * Maximum length is limited to `T::CodeLength`.
       * `code` must contain only alfa-numeric characters and all characters will be converted to upper case.
       * 
       * Parameters:
       * - `code`: Code to register. Must follow the restrictions.
       * 
       * Emits `CodeRegistered` event when successful.
       **/
      registerCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set asset reward percentages
       * 
       * Parameters:
       * - `asset_id`: asset id
       * - `level`: level
       * - `rewards`: reward fee percentages
       * 
       * Emits `AssetRewardsUpdated` event when successful.
       **/
      setRewardPercentage: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, level: PalletReferralsLevel | 'None' | 'Tier0' | 'Tier1' | 'Tier2' | 'Tier3' | 'Tier4' | number | Uint8Array, rewards: PalletReferralsFeeDistribution | { referrer?: any; trader?: any; external?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletReferralsLevel, PalletReferralsFeeDistribution]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    relayChainInfo: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    router: {
      /**
       * Executes a buy with a series of trades specified in the route.
       * The price for each trade is determined by the corresponding AMM.
       * 
       * - `origin`: The executor of the trade
       * - `asset_in`: The identifier of the asset to be swapped to buy `asset_out`
       * - `asset_out`: The identifier of the asset to buy
       * - `amount_out`: The amount of `asset_out` to buy
       * - `max_amount_in`: The max amount of `asset_in` to spend on the buy.
       * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
       * If not specified, than the on-chain route is used.
       * If no on-chain is present, then omnipool route is used as default
       * 
       * Emits `RouteExecuted` when successful.
       **/
      buy: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountOut: u128 | AnyNumber | Uint8Array, maxAmountIn: u128 | AnyNumber | Uint8Array, route: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Force inserts the on-chain route for a given asset pair, so there is no any validation for the route
       * 
       * Can only be called by T::ForceInsertOrigin
       * 
       * The route is stored in an ordered manner, based on the oder of the ids in the asset pair.
       * 
       * If the route is set successfully, then the fee is payed back.
       * 
       * - `origin`: The origin of the route setter
       * - `asset_pair`: The identifier of the asset-pair for which the route is set
       * - `new_route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
       * 
       * Emits `RouteUpdated` when successful.
       * 
       **/
      forceInsertRoute: AugmentedSubmittable<(assetPair: HydradxTraitsRouterAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, newRoute: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [HydradxTraitsRouterAssetPair, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Executes a sell with a series of trades specified in the route.
       * The price for each trade is determined by the corresponding AMM.
       * 
       * - `origin`: The executor of the trade
       * - `asset_in`: The identifier of the asset to sell
       * - `asset_out`: The identifier of the asset to receive
       * - `amount_in`: The amount of `asset_in` to sell
       * - `min_amount_out`: The minimum amount of `asset_out` to receive.
       * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
       * If not specified, than the on-chain route is used.
       * If no on-chain is present, then omnipool route is used as default
       * 
       * Emits `RouteExecuted` when successful.
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array, route: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Executes a sell with a series of trades specified in the route.
       * It sells all reducible user balance of `asset_in`
       * The price for each trade is determined by the corresponding AMM.
       * 
       * - `origin`: The executor of the trade
       * - `asset_in`: The identifier of the asset to sell
       * - `asset_out`: The identifier of the asset to receive
       * - `min_amount_out`: The minimum amount of `asset_out` to receive.
       * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
       * If not specified, than the on-chain route is used.
       * If no on-chain is present, then omnipool route is used as default
       * 
       * Emits `RouteExecuted` when successful.
       * 
       **/
      sellAll: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array, route: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Sets the on-chain route for a given asset pair.
       * 
       * The new route is validated by being executed in a dry-run mode
       * 
       * If there is no route explicitly set for an asset pair, then we use the omnipool route as default.
       * 
       * When a new route is set, we compare it to the existing (or default) route.
       * The comparison happens by calculating sell amount_outs for the routes, but also for the inversed routes.
       * 
       * The route is stored in an ordered manner, based on the oder of the ids in the asset pair.
       * 
       * If the route is set successfully, then the fee is payed back.
       * 
       * - `origin`: The origin of the route setter
       * - `asset_pair`: The identifier of the asset-pair for which the route is set
       * - `new_route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
       * 
       * Emits `RouteUpdated` when successful.
       * 
       * Fails with `RouteUpdateIsNotSuccessful` error when failed to set the route
       * 
       **/
      setRoute: AugmentedSubmittable<(assetPair: HydradxTraitsRouterAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, newRoute: Vec<HydradxTraitsRouterTrade> | (HydradxTraitsRouterTrade | { pool?: any; assetIn?: any; assetOut?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [HydradxTraitsRouterAssetPair, Vec<HydradxTraitsRouterTrade>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Cancel a named scheduled task.
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Removes the retry configuration of a task.
       **/
      cancelRetry: AugmentedSubmittable<(task: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, u32]>]>;
      /**
       * Cancel the retry configuration of a named task.
       **/
      cancelRetryNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Anonymously schedule a task.
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task.
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task after a delay.
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Set a retry configuration for a task so that, in case its scheduled run fails, it will
       * be retried after `period` blocks, for a total amount of `retries` retries or until it
       * succeeds.
       * 
       * Tasks which need to be scheduled for a retry are still subject to weight metering and
       * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
       * normally while the task is retrying.
       * 
       * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
       * clones of the original task. Their retry configuration will be derived from the
       * original task's configuration, but will have a lower value for `remaining` than the
       * original `total_retries`.
       **/
      setRetry: AugmentedSubmittable<(task: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], retries: u8 | AnyNumber | Uint8Array, period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, u32]>, u8, u32]>;
      /**
       * Set a retry configuration for a named task so that, in case its scheduled run fails, it
       * will be retried after `period` blocks, for a total amount of `retries` retries or until
       * it succeeds.
       * 
       * Tasks which need to be scheduled for a retry are still subject to weight metering and
       * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
       * normally while the task is retrying.
       * 
       * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
       * clones of the original task. Their retry configuration will be derived from the
       * original task's configuration, but will have a lower value for `remaining` than the
       * original `total_retries`.
       **/
      setRetryNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, retries: u8 | AnyNumber | Uint8Array, period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u8, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * 
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be Signed and the account must be either be
       * convertible to a validator ID using the chain's typical addressing system (this usually
       * means being a controller account) or directly convertible into a validator ID (which
       * usually means being a stash account).
       * 
       * ## Complexity
       * - `O(1)` in number of key types. Actual cost depends on the number of length of
       * `T::Keys::key_ids()` which is fixed.
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * ## Complexity
       * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
       * fixed.
       **/
      setKeys: AugmentedSubmittable<(keys: HydradxRuntimeOpaqueSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeOpaqueSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stableswap: {
      /**
       * Add liquidity to selected pool.
       * 
       * First call of `add_liquidity` must provide "initial liquidity" of all assets.
       * 
       * If there is liquidity already in the pool, LP can provide liquidity of any number of pool assets.
       * 
       * LP must have sufficient amount of each asset.
       * 
       * Origin is given corresponding amount of shares.
       * 
       * Parameters:
       * - `origin`: liquidity provider
       * - `pool_id`: Pool Id
       * - `assets`: asset id and liquidity amount provided
       * 
       * Emits `LiquidityAdded` event when successful.
       **/
      addLiquidity: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assets: Vec<PalletStableswapAssetAmount> | (PalletStableswapAssetAmount | { assetId?: any; amount?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<PalletStableswapAssetAmount>]>;
      /**
       * Add liquidity to selected pool given exact amount of shares to receive.
       * 
       * Similar to `add_liquidity` but LP specifies exact amount of shares to receive.
       * 
       * This functionality is used mainly by on-chain routing when a swap between Omnipool asset and stable asset is performed.
       * 
       * Parameters:
       * - `origin`: liquidity provider
       * - `pool_id`: Pool Id
       * - `shares`: amount of shares to receive
       * - `asset_id`: asset id of an asset to provide as liquidity
       * - `max_asset_amount`: slippage limit. Max amount of asset.
       * 
       * Emits `LiquidityAdded` event when successful.
       **/
      addLiquidityShares: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, shares: u128 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, maxAssetAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
      /**
       * Execute a swap of `asset_in` for `asset_out`.
       * 
       * Parameters:
       * - `origin`:
       * - `pool_id`: Id of a pool
       * - `asset_out`: ID of asset bought from the pool
       * - `asset_in`: ID of asset sold to the pool
       * - `amount_out`: Amount of asset to receive from the pool
       * - `max_sell_amount`: Maximum amount allowed to be sold
       * 
       * Emits `BuyExecuted` event when successful.
       * 
       **/
      buy: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amountOut: u128 | AnyNumber | Uint8Array, maxSellAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128, u128]>;
      /**
       * Create a stable pool with given list of assets.
       * 
       * All assets must be correctly registered in `T::AssetRegistry`.
       * Note that this does not seed the pool with liquidity. Use `add_liquidity` to provide
       * initial liquidity.
       * 
       * Parameters:
       * - `origin`: Must be T::AuthorityOrigin
       * - `share_asset`: Preregistered share asset identifier
       * - `assets`: List of Asset ids
       * - `amplification`: Pool amplification
       * - `fee`: fee to be applied on trade and liquidity operations
       * 
       * Emits `PoolCreated` event if successful.
       **/
      createPool: AugmentedSubmittable<(shareAsset: u32 | AnyNumber | Uint8Array, assets: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], amplification: u16 | AnyNumber | Uint8Array, fee: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Vec<u32>, u16, Permill]>;
      removeLiquidity: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, shareAmount: u128 | AnyNumber | Uint8Array, minAmountsOut: Vec<PalletStableswapAssetAmount> | (PalletStableswapAssetAmount | { assetId?: any; amount?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, u128, Vec<PalletStableswapAssetAmount>]>;
      /**
       * Remove liquidity from selected pool.
       * 
       * Withdraws liquidity of selected asset from a pool.
       * 
       * Share amount is burned and LP receives corresponding amount of chosen asset.
       * 
       * Withdraw fee is applied to the asset amount.
       * 
       * Parameters:
       * - `origin`: liquidity provider
       * - `pool_id`: Pool Id
       * - `asset_id`: id of asset to receive
       * - 'share_amount': amount of shares to withdraw
       * - 'min_amount_out': minimum amount to receive
       * 
       * Emits `LiquidityRemoved` event when successful.
       **/
      removeLiquidityOneAsset: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, shareAmount: u128 | AnyNumber | Uint8Array, minAmountOut: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Execute a swap of `asset_in` for `asset_out`.
       * 
       * Parameters:
       * - `origin`: origin of the caller
       * - `pool_id`: Id of a pool
       * - `asset_in`: ID of asset sold to the pool
       * - `asset_out`: ID of asset bought from the pool
       * - `amount_in`: Amount of asset to be sold to the pool
       * - `min_buy_amount`: Minimum amount required to receive
       * 
       * Emits `SellExecuted` event when successful.
       * 
       **/
      sell: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amountIn: u128 | AnyNumber | Uint8Array, minBuyAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128, u128]>;
      setAssetTradableState: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, state: PalletStableswapTradability | { bits?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, PalletStableswapTradability]>;
      /**
       * Update pool's amplification.
       * 
       * Parameters:
       * - `origin`: Must be T::AuthorityOrigin
       * - `pool_id`: pool to update
       * - `future_amplification`: new desired pool amplification
       * - `future_block`: future block number when the amplification is updated
       * 
       * Emits `AmplificationUpdated` event if successful.
       **/
      updateAmplification: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, finalAmplification: u16 | AnyNumber | Uint8Array, startBlock: u32 | AnyNumber | Uint8Array, endBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u16, u32, u32]>;
      /**
       * Update pool's fee.
       * 
       * if pool does not exist, `PoolNotFound` is returned.
       * 
       * Parameters:
       * - `origin`: Must be T::AuthorityOrigin
       * - `pool_id`: pool to update
       * - `fee`: new pool fee
       * 
       * Emits `FeeUpdated` event if successful.
       **/
      updatePoolFee: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, fee: Permill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Permill]>;
      /**
       * Remove liquidity from selected pool by specifying exact amount of asset to receive.
       * 
       * Similar to `remove_liquidity_one_asset` but LP specifies exact amount of asset to receive instead of share amount.
       * 
       * Parameters:
       * - `origin`: liquidity provider
       * - `pool_id`: Pool Id
       * - `asset_id`: id of asset to receive
       * - 'amount': amount of asset to receive
       * - 'max_share_amount': Slippage limit. Max amount of shares to burn.
       * 
       * Emits `LiquidityRemoved` event when successful.
       **/
      withdrawAssetAmount: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxShareAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    staking: {
      /**
       * Claim rewards accumulated for specific staking position.
       * 
       * Function calculates amount of rewards to pay for specified staking position based on
       * the amount of points position accumulated. Function also unlocks all the rewards locked
       * from `increase_stake` based on the amount of the points.
       * 
       * This action is penalized by removing all the points and returning allocated unpaid rewards
       * for redistribution.
       * 
       * Parameters:
       * - `position_id`: The identifier of the position to claim rewards for.
       * 
       * Emits `RewardsClaimed` event when successful.
       * 
       **/
      claim: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Extrinsic to increase staked amount of existing staking position by specified `amount`.
       * 
       * `increase_stake` increases staked amount of position specified by `postion_id` by the
       * `amount` specified by the user.
       * Staking position must exist and `origin` has to be the owner of the position.
       * Users can stake tokens which are not vested or already staked.
       * Position's params e.g points are updated to offset stake increase and rewards
       * accumulated until this point are paid and locked to the user.
       * 
       * Parameters:
       * - `position_id`: The identifier of the position which stake will be increased.
       * - `amount`: Amount of native asset to be added to staked amount. `amount` can't be vested or
       * already staked
       * 
       * Emits `StakeAdded` event when successful.
       * 
       **/
      increaseStake: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * Staking pallet initialization. This call will reserved `pot`'s balance to prevent
       * account dusting and start collecting fees from trades as rewards.
       * 
       * `pot`’s account has to have a balance which will be reserved to prevent account dusting.
       * 
       * Emits `StakingInitialized` event when successful.
       * 
       **/
      initializeStaking: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Stake `amount` into a new staking position.
       * 
       * `stake` locks specified `amount` into staking and creates new NFT representing staking
       * position.
       * Users can stake `NativeAssetId` balance which is not vested or already staked.
       * 
       * Staking pallet must be initialized otherwise extrinsic will fail with error.
       * 
       * Parameters:
       * - `amount`: Amount of native asset to be staked. `amount` can't be vested or already
       * staked
       * 
       * Emits `PositionCreated` event when successful.
       * 
       **/
      stake: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Function pays rewards, unlocks all the staked assets and destroys staking position
       * specified by `position_id`.
       * 
       * Function calculates and pays latest rewards, unlocks all the locked rewards and staked
       * tokens for staking position and burns NFT representing staking position.
       * Unpaid allocated rewards are returned to the Staking for redistribution.
       * 
       * Parameters:
       * - `position_id`: The identifier of the position to be destroyed.
       * 
       * Emits `RewardsClaimed` and `Unstaked` events when successful.
       * 
       **/
      unstake: AugmentedSubmittable<(positionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stateTrieMigration: {
      /**
       * Continue the migration for the given `limits`.
       * 
       * The dispatch origin of this call can be any signed account.
       * 
       * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
       * Upon successful execution, the transaction fee is returned.
       * 
       * The (potentially over-estimated) of the byte length of all the data read must be
       * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
       * that executing the current `MigrationTask` with the given `limits` will not exceed
       * `real_size_upper` bytes of read data.
       * 
       * The `witness_task` is merely a helper to prevent the caller from being slashed or
       * generally trigger a migration that they do not intend. This parameter is just a message
       * from caller, saying that they believed `witness_task` was the last state of the
       * migration, and they only wish for their transaction to do anything, if this assumption
       * holds. In case `witness_task` does not match, the transaction fails.
       * 
       * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
       * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
       * `size` limit can always be overwritten.
       **/
      continueMigrate: AugmentedSubmittable<(limits: PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string | Uint8Array, realSizeUpper: u32 | AnyNumber | Uint8Array, witnessTask: PalletStateTrieMigrationMigrationTask | { progressTop?: any; progressChild?: any; size_?: any; topItems?: any; childItems?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationMigrationLimits, u32, PalletStateTrieMigrationMigrationTask]>;
      /**
       * Control the automatic migration.
       * 
       * The dispatch origin of this call must be [`Config::ControlOrigin`].
       **/
      controlAutoMigration: AugmentedSubmittable<(maybeConfig: Option<PalletStateTrieMigrationMigrationLimits> | null | Uint8Array | PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string) => SubmittableExtrinsic<ApiType>, [Option<PalletStateTrieMigrationMigrationLimits>]>;
      /**
       * Forcefully set the progress the running migration.
       * 
       * This is only useful in one case: the next key to migrate is too big to be migrated with
       * a signed account, in a parachain context, and we simply want to skip it. A reasonable
       * example of this would be `:code:`, which is both very expensive to migrate, and commonly
       * used, so probably it is already migrated.
       * 
       * In case you mess things up, you can also, in principle, use this to reset the migration
       * process.
       **/
      forceSetProgress: AugmentedSubmittable<(progressTop: PalletStateTrieMigrationProgress | { ToStart: any } | { LastKey: any } | { Complete: any } | string | Uint8Array, progressChild: PalletStateTrieMigrationProgress | { ToStart: any } | { LastKey: any } | { Complete: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationProgress, PalletStateTrieMigrationProgress]>;
      /**
       * Migrate the list of child keys by iterating each of them one by one.
       * 
       * All of the given child keys must be present under one `child_root`.
       * 
       * This does not affect the global migration process tracker ([`MigrationProcess`]), and
       * should only be used in case any keys are leftover due to a bug.
       **/
      migrateCustomChild: AugmentedSubmittable<(root: Bytes | string | Uint8Array, childKeys: Vec<Bytes> | (Bytes | string | Uint8Array)[], totalSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Vec<Bytes>, u32]>;
      /**
       * Migrate the list of top keys by iterating each of them one by one.
       * 
       * This does not affect the global migration process tracker ([`MigrationProcess`]), and
       * should only be used in case any keys are leftover due to a bug.
       **/
      migrateCustomTop: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[], witnessSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>, u32]>;
      /**
       * Set the maximum limit of the signed migration.
       **/
      setSignedMaxLimits: AugmentedSubmittable<(limits: PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationMigrationLimits]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
       * 
       * If the authorization required a version check, this call will ensure the spec name
       * remains unchanged and that the spec version has increased.
       * 
       * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
       * the new `code` in the same block or attempt to schedule the upgrade.
       * 
       * All origins are allowed.
       **/
      applyAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * WARNING: This authorizes an upgrade that will take place without any safety checks, for
       * example that the spec name remains the same and that the version number increases. Not
       * recommended for normal use. Use `authorize_upgrade` instead.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgradeWithoutChecks: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * Make some on-chain remark.
       * 
       * Can be executed by every `origin`.
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * Note that runtime upgrades will not run if this is called with a not-increasing spec
       * version!
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalCommittee: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * ## Complexity
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * ## Complexity
       * O(P) where P is the number of max proposals
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * ## Complexity:
       * - `O(B + M + P)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` members-count (code-bounded)
       * - `P` complexity of dispatching `proposal`
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * ## Complexity
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       * 
       * The dispatch of this call must be `SetMembersOrigin`.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # WARNING:
       * 
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       * 
       * ## Complexity:
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * ## Complexity
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * [`Config::MinimumPeriod`].
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
       * that changing the complexity of this call could result exhausting the resources in a
       * block to execute any other calls.
       * 
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tips: {
      /**
       * Close and payout a tip.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * The tip identified by `hash` must have finished its countdown period.
       * 
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       * 
       * ## Complexity
       * - : `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`. `T`
       * is charged as upper bound given by `ContainsLengthBound`. The actual cost depends on
       * the implementation of `T::Tippers`.
       **/
      closeTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`.
       * 
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       * 
       * Emits `NewTip` if successful.
       * 
       * ## Complexity
       * - `O(R)` where `R` length of `reason`.
       * - encoding and hashing of 'reason'
       **/
      reportAwesome: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId32]>;
      /**
       * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
       * 
       * If successful, the original deposit will be unreserved.
       * 
       * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
       * must have been reported by the signing account through `report_awesome` (and not
       * through `tip_new`).
       * 
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
       * 
       * Emits `TipRetracted` if successful.
       * 
       * ## Complexity
       * - `O(1)`
       * - Depends on the length of `T::Hash` which is fixed.
       **/
      retractTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Remove and slash an already-open tip.
       * 
       * May only be called from `T::RejectOrigin`.
       * 
       * As a result, the finder is slashed and the deposits are lost.
       * 
       * Emits `TipSlashed` if successful.
       * 
       * ## Complexity
       * - O(1).
       **/
      slashTip: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Declare a tip value for an already-open tip.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       * 
       * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
       * as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
       * account ID.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       * 
       * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
       * has started.
       * 
       * ## Complexity
       * - `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`, insert
       * tip and check closing, `T` is charged as upper bound given by `ContainsLengthBound`.
       * The actual cost depends on the implementation of `T::Tippers`.
       * 
       * Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
       * is weighted as if almost full i.e of length `T-1`.
       **/
      tip: AugmentedSubmittable<(hash: H256 | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u128>]>;
      /**
       * Give a tip for something new; no finder's fee will be taken.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must be a
       * member of the `Tippers` set.
       * 
       * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
       * a UTF-8-encoded URL.
       * - `who`: The account which should be credited for the tip.
       * - `tip_value`: The amount of tip that the sender would like to give. The median tip
       * value of active tippers will be given to the `who`.
       * 
       * Emits `NewTip` if successful.
       * 
       * ## Complexity
       * - `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
       * - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
       * `ContainsLengthBound`. The actual cost depends on the implementation of
       * `T::Tippers`.
       * - `O(R)`: hashing and encoding of reason of length `R`
       **/
      tipNew: AugmentedSubmittable<(reason: Bytes | string | Uint8Array, who: AccountId32 | string | Uint8Array, tipValue: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, AccountId32, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source
       * account may be specified.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The sender of the transfer.
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      forceTransfer: AugmentedSubmittable<(source: AccountId32 | string | Uint8Array, dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, u32, Compact<u128>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it
       * will also decrease the total issuance of the system
       * (`TotalIssuance`). If the new free or reserved balance is below the
       * existential deposit, it will reap the `AccountInfo`.
       * 
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>, Compact<u128>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the
       * `TransferFee`. If the sender's account is below the existential
       * deposit as a result of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>]>;
      /**
       * Transfer all remaining balance to the given account.
       * 
       * NOTE: This function only attempts to transfer _transferable_
       * balances. This means that any locked, reserved, or existential
       * deposits (when `keep_alive` is `true`), will not be transferred by
       * this function. To ensure that this function results in a killed
       * account, you might need to prepare the account by removing any
       * reference counters, storage deposits, etc...
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `keep_alive`: A boolean to determine if the `transfer_all`
       * operation should send all of the funds the account has, causing
       * the sender account to be killed (false), or transfer everything
       * except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer
       * will not kill the origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, currencyId: u32 | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    transactionPause: {
      pauseTransaction: AugmentedSubmittable<(palletName: Bytes | string | Uint8Array, functionName: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      unpauseTransaction: AugmentedSubmittable<(palletName: Bytes | string | Uint8Array, functionName: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * Approve a proposal.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::ApproveOrigin`].
       * 
       * ## Details
       * 
       * At a later time, the proposal will be allocated to the beneficiary and the original
       * deposit will be returned.
       * 
       * ### Complexity
       * - O(1).
       * 
       * ## Events
       * 
       * No events are emitted from this dispatch.
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Check the status of the spend and remove it from the storage if processed.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed.
       * 
       * ## Details
       * 
       * The status check is a prerequisite for retrying a failed payout.
       * If a spend has either succeeded or expired, it is removed from the storage by this
       * function. In such instances, transaction fees are refunded.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::PaymentFailed`] if the spend payout has failed.
       * Emits [`Event::SpendProcessed`] if the spend payout has succeed.
       **/
      checkStatus: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Claim a spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed.
       * 
       * ## Details
       * 
       * Spends must be claimed within some temporal bounds. A spend may be claimed within one
       * [`Config::PayoutPeriod`] from the `valid_from` block.
       * In case of a payout failure, the spend status must be updated with the `check_status`
       * dispatchable before retrying with the current function.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::Paid`] if successful.
       **/
      payout: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Put forward a suggestion for spending.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed.
       * 
       * ## Details
       * A deposit proportional to the value is reserved and slashed if the proposal is rejected.
       * It is returned once the proposal is awarded.
       * 
       * ### Complexity
       * - O(1)
       * 
       * ## Events
       * 
       * Emits [`Event::Proposed`] if successful.
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, AccountId32]>;
      /**
       * Reject a proposed spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * The original deposit will be slashed.
       * 
       * ### Complexity
       * - O(1)
       * 
       * ## Events
       * 
       * Emits [`Event::Rejected`] if successful.
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Force a previously approved proposal to be removed from the approval queue.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * 
       * The original deposit will no longer be returned.
       * 
       * ### Parameters
       * - `proposal_id`: The index of a proposal
       * 
       * ### Complexity
       * - O(A) where `A` is the number of approvals
       * 
       * ### Errors
       * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
       * approval queue, i.e., the proposal has not been approved. This could also mean the
       * proposal does not exist altogether, thus there is no way it would have been approved
       * in the first place.
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::SpendOrigin`] with the `Success` value being at least
       * `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
       * for assertion using the [`Config::BalanceConverter`].
       * 
       * ## Details
       * 
       * Create an approved spend for transferring a specific `amount` of `asset_kind` to a
       * designated beneficiary. The spend must be claimed using the `payout` dispatchable within
       * the [`Config::PayoutPeriod`].
       * 
       * ### Parameters
       * - `asset_kind`: An indicator of the specific asset class to be spent.
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The beneficiary of the spend.
       * - `valid_from`: The block number from which the spend can be claimed. It can refer to
       * the past if the resulting spend has not yet expired according to the
       * [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
       * approval.
       * 
       * ## Events
       * 
       * Emits [`Event::AssetSpendApproved`] if successful.
       **/
      spend: AugmentedSubmittable<(assetKind: Null | null, amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array, validFrom: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Null, Compact<u128>, AccountId32, Option<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
       * 
       * ### Details
       * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
       * beneficiary.
       * 
       * ### Parameters
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The destination account for the transfer.
       * 
       * ## Events
       * 
       * Emits [`Event::SpendApproved`] if successful.
       **/
      spendLocal: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, AccountId32]>;
      /**
       * Void previously approved spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * 
       * A spend void is only possible if the payout has not been attempted yet.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::AssetSpendVoided`] if successful.
       **/
      voidSpend: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    uniques: {
      /**
       * Approve an item to be transferred by a delegated third-party account.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
       * either the owner of the `item` or the admin of the collection.
       * 
       * - `collection`: The collection of the item to be approved for delegated transfer.
       * - `item`: The item of the item to be approved for delegated transfer.
       * - `delegate`: The account to delegate permission to transfer the item.
       * 
       * Important NOTE: The `approved` account gets reset after each transfer.
       * 
       * Emits `ApprovedTransfer` on success.
       * 
       * Weight: `O(1)`
       **/
      approveTransfer: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, delegate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
      /**
       * Destroy a single item.
       * 
       * Origin must be Signed and the signing account must be either:
       * - the Admin of the `collection`;
       * - the Owner of the `item`;
       * 
       * - `collection`: The collection of the item to be burned.
       * - `item`: The item of the item to be burned.
       * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
       * item is owned by this value.
       * 
       * Emits `Burned` with the actual amount burned.
       * 
       * Weight: `O(1)`
       * Modes: `check_owner.is_some()`.
       **/
      burn: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, checkOwner: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<AccountId32>]>;
      /**
       * Allows to buy an item if it's up for sale.
       * 
       * Origin must be Signed and must not be the owner of the `item`.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item the sender wants to buy.
       * - `bid_price`: The price the sender is willing to pay.
       * 
       * Emits `ItemBought` on success.
       **/
      buyItem: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, bidPrice: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, u128]>;
      /**
       * Cancel the prior approval for the transfer of an item by a delegate.
       * 
       * Origin must be either:
       * - the `Force` origin;
       * - `Signed` with the signer being the Admin of the `collection`;
       * - `Signed` with the signer being the Owner of the `item`;
       * 
       * Arguments:
       * - `collection`: The collection of the item of whose approval will be cancelled.
       * - `item`: The item of the item of whose approval will be cancelled.
       * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
       * which permission of transfer is delegated.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      cancelApproval: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, maybeCheckDelegate: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<AccountId32>]>;
      /**
       * Clear an attribute for a collection or item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `collection`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to clear.
       * - `maybe_item`: The identifier of the item whose metadata to clear.
       * - `key`: The key of the attribute.
       * 
       * Emits `AttributeCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearAttribute: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, maybeItem: Option<u128> | null | Uint8Array | u128 | AnyNumber, key: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Option<u128>, Bytes]>;
      /**
       * Clear the metadata for a collection.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
       * the `collection`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose metadata to clear.
       * 
       * Emits `CollectionMetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearCollectionMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Clear the metadata for an item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `item`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to clear.
       * - `item`: The identifier of the item whose metadata to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * Issue a new collection of non-fungible items from a public origin.
       * 
       * This new collection has no items initially and its owner is the origin.
       * 
       * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
       * 
       * `ItemDeposit` funds of sender are reserved.
       * 
       * Parameters:
       * - `collection`: The identifier of the new collection. This must not be currently in use.
       * - `admin`: The admin of this collection. The admin is the initial address of each
       * member of the collection's admin team.
       * 
       * Emits `Created` event when successful.
       * 
       * Weight: `O(1)`
       **/
      create: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, admin: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32]>;
      /**
       * Destroy a collection of fungible items.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
       * owner of the `collection`.
       * 
       * - `collection`: The identifier of the collection to be destroyed.
       * - `witness`: Information on the items minted in the collection. This must be
       * correct.
       * 
       * Emits `Destroyed` event when successful.
       * 
       * Weight: `O(n + m)` where:
       * - `n = witness.items`
       * - `m = witness.item_metadatas`
       * - `a = witness.attributes`
       **/
      destroy: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, witness: PalletUniquesDestroyWitness | { items?: any; itemMetadatas?: any; attributes?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, PalletUniquesDestroyWitness]>;
      /**
       * Issue a new collection of non-fungible items from a privileged origin.
       * 
       * This new collection has no items initially.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * Unlike `create`, no funds are reserved.
       * 
       * - `collection`: The identifier of the new item. This must not be currently in use.
       * - `owner`: The owner of this collection of items. The owner has full superuser
       * permissions
       * over this item, but may later change and configure the permissions using
       * `transfer_ownership` and `set_team`.
       * 
       * Emits `ForceCreated` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceCreate: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array, freeHolding: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32, bool]>;
      /**
       * Alter the attributes of a given item.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * - `collection`: The identifier of the item.
       * - `owner`: The new Owner of this item.
       * - `issuer`: The new Issuer of this item.
       * - `admin`: The new Admin of this item.
       * - `freezer`: The new Freezer of this item.
       * - `free_holding`: Whether a deposit is taken for holding an item of this collection.
       * - `is_frozen`: Whether this collection is frozen except for permissioned/admin
       * instructions.
       * 
       * Emits `ItemStatusChanged` with the identity of the item.
       * 
       * Weight: `O(1)`
       **/
      forceItemStatus: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array, issuer: AccountId32 | string | Uint8Array, admin: AccountId32 | string | Uint8Array, freezer: AccountId32 | string | Uint8Array, freeHolding: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32, AccountId32, AccountId32, AccountId32, bool, bool]>;
      /**
       * Disallow further unprivileged transfer of an item.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection of the item to be frozen.
       * - `item`: The item of the item to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freeze: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * Disallow further unprivileged transfers for a whole collection.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection to be frozen.
       * 
       * Emits `CollectionFrozen`.
       * 
       * Weight: `O(1)`
       **/
      freezeCollection: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Mint an item of a particular collection.
       * 
       * The origin must be Signed and the sender must be the Issuer of the `collection`.
       * 
       * - `collection`: The collection of the item to be minted.
       * - `item`: The item value of the item to be minted.
       * - `beneficiary`: The initial owner of the minted item.
       * 
       * Emits `Issued` event when successful.
       * 
       * Weight: `O(1)`
       **/
      mint: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
      /**
       * Reevaluate the deposits on some items.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection to be frozen.
       * - `items`: The items of the collection whose deposits will be reevaluated.
       * 
       * NOTE: This exists as a best-effort function. Any items which are unknown or
       * in the case that the owner account does not have reservable funds to pay for a
       * deposit increase are ignored. Generally the owner isn't going to call this on items
       * whose existing deposit is less than the refreshed deposit as it would only cost them,
       * so it's of little consequence.
       * 
       * It will still return an error in the case that the collection is unknown of the signer
       * is not permitted to call it.
       * 
       * Weight: `O(items.len())`
       **/
      redeposit: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, items: Vec<u128> | (u128 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u128, Vec<u128>]>;
      /**
       * Set (or reset) the acceptance of ownership for a particular account.
       * 
       * Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
       * provider reference.
       * 
       * - `maybe_collection`: The identifier of the collection whose ownership the signer is
       * willing to accept, or if `None`, an indication that the signer is willing to accept no
       * ownership transferal.
       * 
       * Emits `OwnershipAcceptanceChanged`.
       **/
      setAcceptOwnership: AugmentedSubmittable<(maybeCollection: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u128>]>;
      /**
       * Set an attribute for a collection or item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `collection`.
       * 
       * If the origin is Signed, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to set.
       * - `maybe_item`: The identifier of the item whose metadata to set.
       * - `key`: The key of the attribute.
       * - `value`: The value to which to set the attribute.
       * 
       * Emits `AttributeSet`.
       * 
       * Weight: `O(1)`
       **/
      setAttribute: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, maybeItem: Option<u128> | null | Uint8Array | u128 | AnyNumber, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Option<u128>, Bytes, Bytes]>;
      /**
       * Set the maximum amount of items a collection could have.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
       * the `collection`.
       * 
       * Note: This function can only succeed once per collection.
       * 
       * - `collection`: The identifier of the collection to change.
       * - `max_supply`: The maximum amount of items a collection could have.
       * 
       * Emits `CollectionMaxSupplySet` event when successful.
       **/
      setCollectionMaxSupply: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, maxSupply: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * Set the metadata for a collection.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
       * the `collection`.
       * 
       * If the origin is `Signed`, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * data.len` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the item whose metadata to update.
       * - `data`: The general information of this item. Limited in length by `StringLimit`.
       * - `is_frozen`: Whether the metadata should be frozen against further changes.
       * 
       * Emits `CollectionMetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setCollectionMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, Bytes, bool]>;
      /**
       * Set the metadata for an item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `collection`.
       * 
       * If the origin is Signed, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * data.len` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to set.
       * - `item`: The identifier of the item whose metadata to set.
       * - `data`: The general information of this item. Limited in length by `StringLimit`.
       * - `is_frozen`: Whether the metadata should be frozen against further changes.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setMetadata: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, Bytes, bool]>;
      /**
       * Set (or reset) the price for an item.
       * 
       * Origin must be Signed and must be the owner of the asset `item`.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item to set the price for.
       * - `price`: The price for the item. Pass `None`, to reset the price.
       * - `buyer`: Restricts the buy operation to a specific account.
       * 
       * Emits `ItemPriceSet` on success if the price is not `None`.
       * Emits `ItemPriceRemoved` on success if the price is `None`.
       **/
      setPrice: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, price: Option<u128> | null | Uint8Array | u128 | AnyNumber, whitelistedBuyer: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<u128>, Option<AccountId32>]>;
      /**
       * Change the Issuer, Admin and Freezer of a collection.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection whose team should be changed.
       * - `issuer`: The new Issuer of this collection.
       * - `admin`: The new Admin of this collection.
       * - `freezer`: The new Freezer of this collection.
       * 
       * Emits `TeamChanged`.
       * 
       * Weight: `O(1)`
       **/
      setTeam: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, issuer: AccountId32 | string | Uint8Array, admin: AccountId32 | string | Uint8Array, freezer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32, AccountId32, AccountId32]>;
      /**
       * Re-allow unprivileged transfer of an item.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection of the item to be thawed.
       * - `item`: The item of the item to be thawed.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thaw: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * Re-allow unprivileged transfers for a whole collection.
       * 
       * Origin must be Signed and the sender should be the Admin of the `collection`.
       * 
       * - `collection`: The collection to be thawed.
       * 
       * Emits `CollectionThawed`.
       * 
       * Weight: `O(1)`
       **/
      thawCollection: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Move an item from the sender account to another.
       * 
       * This resets the approved account of the item.
       * 
       * Origin must be Signed and the signing account must be either:
       * - the Admin of the `collection`;
       * - the Owner of the `item`;
       * - the approved delegate for the `item` (in this case, the approval is reset).
       * 
       * Arguments:
       * - `collection`: The collection of the item to be transferred.
       * - `item`: The item of the item to be transferred.
       * - `dest`: The account to receive ownership of the item.
       * 
       * Emits `Transferred`.
       * 
       * Weight: `O(1)`
       **/
      transfer: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, item: u128 | AnyNumber | Uint8Array, dest: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
      /**
       * Change the Owner of a collection.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection whose owner should be changed.
       * - `owner`: The new Owner of this collection. They must have called
       * `set_accept_ownership` with `collection` in order for this operation to succeed.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      transferOwnership: AugmentedSubmittable<(collection: u128 | AnyNumber | Uint8Array, newOwner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatches a function call with a provided origin.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * ## Complexity
       * - O(1).
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: HydradxRuntimeOriginCaller | { system: any } | { Void: any } | { Council: any } | { TechnicalCommittee: any } | { Origins: any } | { Ethereum: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [HydradxRuntimeOriginCaller, Call]>;
      /**
       * Send a batch of dispatch calls.
       * Unlike `batch`, it allows errors and won't interrupt.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatch without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatch a function call with a specified weight.
       * 
       * This function does not check the weight of the call, and instead allows the
       * Root origin to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Root_.
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      claim: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      claimFor: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      updateVestingSchedules: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, vestingSchedules: Vec<OrmlVestingVestingSchedule> | (OrmlVestingVestingSchedule | { start?: any; period?: any; periodCount?: any; perPeriod?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [AccountId32, Vec<OrmlVestingVestingSchedule>]>;
      vestedTransfer: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, schedule: OrmlVestingVestingSchedule | { start?: any; period?: any; periodCount?: any; perPeriod?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, OrmlVestingVestingSchedule]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    whitelist: {
      dispatchWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array, callEncodedLen: u32 | AnyNumber | Uint8Array, callWeightWitness: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, SpWeightsWeightV2Weight]>;
      dispatchWhitelistedCallWithPreimage: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      removeWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      whitelistCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * Transfer native currencies.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transfer: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, XcmVersionedLocation, XcmV3WeightLimit]>;
      /**
       * Transfer `Asset`.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiasset: AugmentedSubmittable<(asset: XcmVersionedAsset | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedAsset, XcmVersionedLocation, XcmV3WeightLimit]>;
      /**
       * Transfer several `Asset` specifying the item to be used as fee
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee_item` is index of the Assets that we want to use for
       * payment
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiassets: AugmentedSubmittable<(assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedAssets, u32, XcmVersionedLocation, XcmV3WeightLimit]>;
      /**
       * Transfer `Asset` specifying the fee and amount as separate.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee` is the Asset to be spent to pay for execution in
       * destination chain. Both fee and amount will be subtracted form the
       * callers balance For now we only accept fee and asset having the same
       * `Location` id.
       * 
       * If `fee` is not high enough to cover for the execution costs in the
       * destination chain, then the assets will be trapped in the
       * destination chain
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: XcmVersionedAsset | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, fee: XcmVersionedAsset | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedAsset, XcmVersionedAsset, XcmVersionedLocation, XcmV3WeightLimit]>;
      /**
       * Transfer several currencies specifying the item to be used as fee
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee_item` is index of the currencies tuple that we want to use for
       * payment
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[u32, u128]>> | ([u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u128]>>, u32, XcmVersionedLocation, XcmV3WeightLimit]>;
      /**
       * Transfer native currencies specifying the fee and amount as
       * separate.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee` is the amount to be spent to pay for execution in destination
       * chain. Both fee and amount will be subtracted form the callers
       * balance.
       * 
       * If `fee` is not high enough to cover for the execution costs in the
       * destination chain, then the assets will be trapped in the
       * destination chain
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u128, XcmVersionedLocation, XcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xyk: {
      /**
       * Add liquidity to previously created asset pair pool.
       * 
       * Shares are issued with current price.
       * 
       * Emits `LiquidityAdded` event when successful.
       **/
      addLiquidity: AugmentedSubmittable<(assetA: u32 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, amountA: u128 | AnyNumber | Uint8Array, amountBMaxLimit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128]>;
      /**
       * Trade asset in for asset out.
       * 
       * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
       * 
       * `max_limit` - maximum amount of `asset_in` to be sold in exchange for `asset_out`.
       * 
       * Emits `BuyExecuted` when successful.
       **/
      buy: AugmentedSubmittable<(assetOut: u32 | AnyNumber | Uint8Array, assetIn: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array, discount: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, bool]>;
      /**
       * Create new pool for given asset pair.
       * 
       * Registers new pool for given asset pair (`asset a` and `asset b`) in asset registry.
       * Asset registry creates new id or returns previously created one if such pool existed before.
       * 
       * Pool is created with initial liquidity provided by `origin`.
       * Shares are issued with specified initial price and represents proportion of asset in the pool.
       * 
       * Emits `PoolCreated` event when successful.
       **/
      createPool: AugmentedSubmittable<(assetA: u32 | AnyNumber | Uint8Array, amountA: u128 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, amountB: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128, u32, u128]>;
      /**
       * Remove liquidity from specific liquidity pool in the form of burning shares.
       * 
       * If liquidity in the pool reaches 0, it is destroyed.
       * 
       * Emits 'LiquidityRemoved' when successful.
       * Emits 'PoolDestroyed' when pool is destroyed.
       **/
      removeLiquidity: AugmentedSubmittable<(assetA: u32 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, liquidityAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * Trade asset in for asset out.
       * 
       * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
       * 
       * `max_limit` - minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
       * 
       * Emits `SellExecuted` when successful.
       **/
      sell: AugmentedSubmittable<(assetIn: u32 | AnyNumber | Uint8Array, assetOut: u32 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, maxLimit: u128 | AnyNumber | Uint8Array, discount: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xykLiquidityMining: {
      /**
       * Add liquidity to XYK pool and join multiple farms with a given share amount
       * 
       * The share is deposited to the first farm of the specified entries,
       * and then redeposit the shares to the remaining farms
       * 
       * Parameters:
       * - `origin`: account depositing LP shares. This account has to have at least
       * - `asset_a`: asset id of the first asset in the pair
       * - `asset_b`: asset id of the second asset in the pair
       * - `amount_a`: amount of the first asset to deposit
       * - `amount_b_max_limit`: maximum amount of the second asset to deposit
       * - `farm_entries`: list of global farm id and yield farm id pairs to join
       * 
       * Emits `SharesDeposited` event for the first farm entry
       * Emits `SharesRedeposited` event for each farm entry after the first one
       **/
      addLiquidityAndJoinFarms: AugmentedSubmittable<(assetA: u32 | AnyNumber | Uint8Array, assetB: u32 | AnyNumber | Uint8Array, amountA: u128 | AnyNumber | Uint8Array, amountBMaxLimit: u128 | AnyNumber | Uint8Array, farmEntries: Vec<ITuple<[u32, u32]>> | ([u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u32, u32, u128, u128, Vec<ITuple<[u32, u32]>>]>;
      /**
       * Claim rewards from liq. mining for deposit represented by `nft_id`.
       * 
       * This function calculate user rewards from liq. mining and transfer rewards to `origin`
       * account. Claiming in the same period is allowed only once.
       * 
       * Parameters:
       * - `origin`: account owner of deposit(nft).
       * - `deposit_id`: nft id representing deposit in the yield farm.
       * - `yield_farm_id`: yield farm identifier to claim rewards from.
       * 
       * Emits `RewardClaimed` event when successful.
       **/
      claimRewards: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * Create new liquidity mining program with provided parameters.
       * 
       * `owner` account has to have at least `total_rewards` balance. This fund will be
       * transferred from `owner` to farm account.
       * In case of `reward_currency` is insufficient asset, farm's `owner` has to pay existential
       * deposit for global farm account and for liquidity mining `pot` account.
       * 
       * The dispatch origin for this call must be `T::CreateOrigin`.
       * !!!WARN: `T::CreateOrigin` has power over funds of `owner`'s account and it should be
       * configured to trusted origin e.g Sudo or Governance.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `total_rewards`: total rewards planned to distribute. This rewards will be
       * distributed between all yield farms in the global farm.
       * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
       * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
       * `planned_yielding_periods`. Rewards are distributed based on the situation in the yield
       * farms and can be distributed in a longer time frame but never in the shorter time frame.
       * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
       * period is 1.
       * - `incentivized_asset`: asset to be incentivized in XYK pools. All yield farms added into
       * liq. mining program have to have `incentivized_asset` in their pair.
       * - `reward_currency`: payoff currency of rewards.
       * - `owner`: liq. mining program owner.
       * - `yield_per_period`: percentage return on `reward_currency` of all farms p.a.
       * - `min_deposit`: minimum amount which can be deposited to the farm
       * - `price_adjustment`:
       * Emits `GlobalFarmCreated` event when successful.
       **/
      createGlobalFarm: AugmentedSubmittable<(totalRewards: u128 | AnyNumber | Uint8Array, plannedYieldingPeriods: u32 | AnyNumber | Uint8Array, blocksPerPeriod: u32 | AnyNumber | Uint8Array, incentivizedAsset: u32 | AnyNumber | Uint8Array, rewardCurrency: u32 | AnyNumber | Uint8Array, owner: AccountId32 | string | Uint8Array, yieldPerPeriod: Perquintill | AnyNumber | Uint8Array, minDeposit: u128 | AnyNumber | Uint8Array, priceAdjustment: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, u32, u32, u32, AccountId32, Perquintill, u128, u128]>;
      /**
       * Add yield farm for given `asset_pair` XYK pool.
       * 
       * Only farm owner can perform this action.
       * 
       * Only XYKs with `asset_pair` with `incentivized_asset` can be added into the farm. XYK
       * pool for `asset_pair` has to exist to successfully create yield farm.
       * Yield farm for same `asset_pair` can exist only once in the global farm.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `farm_id`: global farm id to which a yield farm will be added.
       * - `asset_pair`: asset pair identifying yield farm. Liq. mining will be allowed for this
       * `asset_pair` and one of the assets in the pair must be `incentivized_asset`.
       * - `multiplier`: yield farm multiplier.
       * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
       * with time incentive. `None` means no loyalty multiplier.
       * 
       * Emits `YieldFarmCreated` event when successful.
       **/
      createYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array, loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve> | null | Uint8Array | PalletLiquidityMiningLoyaltyCurve | { initialRewardPercentage?: any; scaleCoef?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, PalletXykAssetPair, u128, Option<PalletLiquidityMiningLoyaltyCurve>]>;
      /**
       * Deposit LP shares to a liq. mining.
       * 
       * This function transfers LP shares from `origin` to pallet's account and mint nft for
       * `origin` account. Minted nft represents deposit in the liq. mining.
       * 
       * Parameters:
       * - `origin`: account depositing LP shares. This account has to have at least
       * `shares_amount` of LP shares.
       * - `global_farm_id`: id of global farm to which user wants to deposit LP shares.
       * - `yield_farm_id`: id of yield farm to deposit to.
       * - `asset_pair`: asset pair identifying LP shares user wants to deposit.
       * - `shares_amount`: amount of LP shares user wants to deposit.
       * 
       * Emits `SharesDeposited` event when successful.
       **/
      depositShares: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, sharesAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, PalletXykAssetPair, u128]>;
      /**
       * Exit from all specified yield farms
       * 
       * This function will attempt to withdraw shares and claim rewards (if available) from all
       * specified yield farms for a given deposit.
       * 
       * Parameters:
       * - `origin`: account owner of deposit(nft).
       * - `deposit_id`: nft id representing deposit in the yield farm.
       * - `asset_pair`: asset pair identifying yield farm(s) in global farm(s).
       * - `farm_entries`: id(s) of yield farm(s) to exit from.
       * 
       * Emits:
       * * `RewardClaimed` for each successful claim
       * * `SharesWithdrawn` for each successful withdrawal
       * * `DepositDestroyed` if the deposit is fully withdrawn
       * 
       **/
      exitFarms: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, farmEntries: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u128, PalletXykAssetPair, Vec<u32>]>;
      /**
       * Join multiple farms with a given share amount
       * 
       * The share is deposited to the first farm of the specified fams,
       * and then redeposit the shares to the remaining farms
       * 
       * Parameters:
       * - `origin`: account depositing LP shares. This account has to have at least
       * - `farm_entries`: list of global farm id and yield farm id pairs to join
       * - `asset_pair`: asset pair identifying LP shares user wants to deposit.
       * - `shares_amount`: amount of LP shares user wants to deposit.
       * 
       * Emits `SharesDeposited` event for the first farm entry
       * Emits `SharesRedeposited` event for each farm entry after the first one
       **/
      joinFarms: AugmentedSubmittable<(farmEntries: Vec<ITuple<[u32, u32]>> | ([u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array])[], assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, sharesAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, u32]>>, PalletXykAssetPair, u128]>;
      /**
       * Redeposit already locked LP shares to another yield farm.
       * 
       * This function create yield farm entry for existing deposit. LP shares are not transferred
       * and amount of LP shares is based on existing deposit.
       * 
       * This function DOESN'T create new deposit.
       * 
       * Parameters:
       * - `origin`: account depositing LP shares. This account have to have at least
       * - `global_farm_id`: global farm identifier.
       * - `yield_farm_id`: yield farm identifier redepositing to.
       * - `asset_pair`: asset pair identifying LP shares user want to deposit.
       * - `deposit_id`: identifier of the deposit.
       * 
       * Emits `SharesRedeposited` event when successful.
       **/
      redepositShares: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, depositId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, PalletXykAssetPair, u128]>;
      /**
       * Resume yield farm for stopped yield farm.
       * 
       * This function resume incentivization from `GlobalFarm` and restore full functionality
       * for yield farm. Users will be able to deposit, claim and withdraw again.
       * 
       * WARN: Yield farm is NOT rewarded for time it was stopped.
       * 
       * Only farm owner can perform this action.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: global farm id in which yield farm will be resumed.
       * - `yield_farm_id`: id of yield farm to be resumed.
       * - `asset_pair`: asset pair identifying yield farm in global farm.
       * - `multiplier`: yield farm multiplier in the farm.
       * 
       * Emits `YieldFarmResumed` event when successful.
       **/
      resumeYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, PalletXykAssetPair, u128]>;
      /**
       * Stop liq. miming for specific yield farm.
       * 
       * This function claims rewards from `GlobalFarm` last time and stops yield farm
       * incentivization from a `GlobalFarm`. Users will be able to only withdraw
       * shares(with claiming) after calling this function.
       * `deposit_shares()` and `claim_rewards()` are not allowed on canceled yield farm.
       * 
       * Only farm owner can perform this action.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: farm id in which yield farm will be canceled.
       * - `asset_pair`: asset pair identifying yield farm in the farm.
       * 
       * Emits `YieldFarmStopped` event when successful.
       **/
      stopYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletXykAssetPair]>;
      /**
       * Terminate existing liq. mining program.
       * 
       * Only farm owner can perform this action.
       * 
       * WARN: To successfully terminate a farm, farm have to be empty(all yield farms in he global farm must be terminated).
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: id of global farm to be terminated.
       * 
       * Emits `GlobalFarmTerminated` event when successful.
       **/
      terminateGlobalFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Remove yield farm
       * 
       * This function marks a yield farm as ready to be removed from storage when it's empty. Users will
       * be able to only withdraw shares(without claiming rewards from yield farm). Unpaid rewards
       * will be transferred back to global farm and will be used to distribute to other yield farms.
       * 
       * Yield farm must be stopped before calling this function.
       * 
       * Only global farm's owner can perform this action. Yield farm stays in the storage until it's
       * empty(all farm entries are withdrawn). Last withdrawn from yield farm trigger removing from
       * the storage.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: farm id from which yield farm should be terminated.
       * - `yield_farm_id`: id of yield farm to be terminated.
       * - `asset_pair`: asset pair identifying yield farm in the global farm.
       * 
       * Emits `YieldFarmTerminated` event when successful.
       **/
      terminateYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, PalletXykAssetPair]>;
      /**
       * Update global farm's prices adjustment.
       * 
       * Only farm's owner can perform this action.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: id of the global farm to update
       * - `price_adjustment`: new value for price adjustment
       * 
       * Emits `GlobalFarmUpdated` event when successful.
       **/
      updateGlobalFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, priceAdjustment: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Update yield farm multiplier.
       * 
       * Only farm owner can perform this action.
       * 
       * Parameters:
       * - `origin`: global farm's owner.
       * - `global_farm_id`: global farm id in which yield farm will be updated.
       * - `asset_pair`: asset pair identifying yield farm in global farm.
       * - `multiplier`: new yield farm multiplier.
       * 
       * Emits `YieldFarmUpdated` event when successful.
       **/
      updateYieldFarm: AugmentedSubmittable<(globalFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array, multiplier: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletXykAssetPair, u128]>;
      /**
       * Withdraw LP shares from liq. mining with reward claiming if possible.
       * 
       * List of possible cases of transfers of LP shares and claimed rewards:
       * 
       * * yield farm is active(yield farm is not stopped) - claim and transfer rewards(if it
       * wasn't claimed in this period) and transfer LP shares.
       * * liq. mining is stopped - claim and transfer rewards(if it
       * wasn't claimed in this period) and transfer LP shares.
       * * yield farm was terminated - only LP shares will be transferred.
       * * farm was terminated - only LP shares will be transferred.
       * 
       * User's unclaimable rewards will be transferred back to global farm's account.
       * 
       * Parameters:
       * - `origin`: account owner of deposit(nft).
       * - `deposit_id`: nft id representing deposit in the yield farm.
       * - `yield_farm_id`: yield farm identifier to dithdraw shares from.
       * - `asset_pair`: asset pair identifying yield farm in global farm.
       * 
       * Emits:
       * * `RewardClaimed` if claim happen
       * * `SharesWithdrawn` event when successful
       **/
      withdrawShares: AugmentedSubmittable<(depositId: u128 | AnyNumber | Uint8Array, yieldFarmId: u32 | AnyNumber | Uint8Array, assetPair: PalletXykAssetPair | { assetIn?: any; assetOut?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32, PalletXykAssetPair]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xykWarehouseLM: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
