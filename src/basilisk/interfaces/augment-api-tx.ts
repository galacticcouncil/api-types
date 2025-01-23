// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Null, Option, U256, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { BasiliskRuntimeOpaqueSessionKeys, BasiliskRuntimeOriginCaller, BasiliskRuntimeSystemProxyType, BasiliskRuntimeXcmAssetLocation, CumulusPrimitivesCoreAggregateMessageOrigin, CumulusPrimitivesParachainInherentParachainInherentData, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, HydradxTraitsRouterAssetPair, HydradxTraitsRouterTrade, OrmlVestingVestingSchedule, PalletAssetRegistryAssetType, PalletAssetRegistryMetadata, PalletBalancesAdjustmentDirection, PalletConvictionVotingConviction, PalletConvictionVotingVoteAccountVote, PalletDemocracyConviction, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletIdentityJudgement, PalletIdentityLegacyIdentityInfo, PalletLbpWeightCurveType, PalletLiquidityMiningLoyaltyCurve, PalletMultisigTimepoint, PalletNftCollectionType, PalletStateTrieMigrationMigrationLimits, PalletStateTrieMigrationMigrationTask, PalletStateTrieMigrationProgress, PalletUniquesDestroyWitness, PalletXykAssetPair, SpRuntimeMultiSignature, SpWeightsWeightV2Weight, StagingXcmExecutorAssetTransferTransferType, StagingXcmV4Location, XcmV3WeightLimit, XcmVersionedAsset, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * Register a new asset.
       * 
       * Asset is identified by `name` and the name must not be used to register another asset.
       * 
       * New asset is given `NextAssetId` - sequential asset id
       * 
       * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
       * 
       * Emits 'Registered` event when successful.
       **/
      register: AugmentedSubmittable<(name: Bytes | string | Uint8Array, assetType: PalletAssetRegistryAssetType | { Token: any } | { PoolShare: any } | { XYK: any } | { StableSwap: any } | { Bond: any } | { External: any } | string | Uint8Array, existentialDeposit: u128 | AnyNumber | Uint8Array, assetId: Option<u32> | null | Uint8Array | u32 | AnyNumber, metadata: Option<PalletAssetRegistryMetadata> | null | Uint8Array | PalletAssetRegistryMetadata | { symbol?: any; decimals?: any } | string, location: Option<BasiliskRuntimeXcmAssetLocation> | null | Uint8Array | BasiliskRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string, xcmRateLimit: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Bytes, PalletAssetRegistryAssetType, u128, Option<u32>, Option<PalletAssetRegistryMetadata>, Option<BasiliskRuntimeXcmAssetLocation>, Option<u128>]>;
      /**
       * Set asset native location.
       * 
       * Adds mapping between native location and local asset id and vice versa.
       * 
       * Mainly used in XCM.
       * 
       * Emits `LocationSet` event when successful.
       **/
      setLocation: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, location: BasiliskRuntimeXcmAssetLocation | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, BasiliskRuntimeXcmAssetLocation]>;
      /**
       * Set metadata for an asset.
       * 
       * - `asset_id`: Asset identifier.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MetadataSet` event when successful.
       **/
      setMetadata: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, u8]>;
      /**
       * Update registered asset.
       * 
       * Updates also mapping between name and asset id if provided name is different than currently registered.
       * 
       * Emits `Updated` event when successful.
       **/
      update: AugmentedSubmittable<(assetId: u32 | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, assetType: PalletAssetRegistryAssetType | { Token: any } | { PoolShare: any } | { XYK: any } | { StableSwap: any } | { Bond: any } | { External: any } | string | Uint8Array, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, xcmRateLimit: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Bytes, PalletAssetRegistryAssetType, Option<u128>, Option<u128>]>;
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
    emaOracle: {
      addOracle: AugmentedSubmittable<(source: U8aFixed | string | Uint8Array, assets: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [U8aFixed, ITuple<[u32, u32]>]>;
      removeOracle: AugmentedSubmittable<(source: U8aFixed | string | Uint8Array, assets: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [U8aFixed, ITuple<[u32, u32]>]>;
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
    marketplace: {
      /**
       * Accept an offer and process the trade
       * 
       * Parameters:
       * - `collection_id`: The identifier of a non-fungible token collection
       * - `item_id`: The item identifier of a collection
       * - `maker`: User who made the offer
       **/
      acceptOffer: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array, maker: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
      /**
       * Add royalty feature where a cut for author is provided
       * There is non-refundable reserve held for creating a royalty
       * 
       * Parameters:
       * - `collection_id`: The collection of the asset to be minted.
       * - `item_id`: The item value of the asset to be minted.
       * - `author`: Receiver of the royalty
       * - `royalty`: Percentage reward from each trade for the author, represented in basis points
       **/
      addRoyalty: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array, author: AccountId32 | string | Uint8Array, royalty: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32, u16]>;
      /**
       * Pays a price to the current owner
       * Transfers NFT ownership to the buyer
       * Disables automatic sell of the NFT
       * 
       * Parameters:
       * - `collection_id`: The identifier of a non-fungible token collection
       * - `item_id`: The item identifier of a collection
       **/
      buy: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * Users can indicate what price they would be willing to pay for a token
       * Price can be lower than current listing price
       * Token doesn't have to be currently listed
       * 
       * Parameters:
       * - `collection_id`: The identifier of a non-fungible token collection
       * - `item_id`: The item identifier of a collection
       * - `amount`: The amount user is willing to pay
       * - `expires`: The block until the current owner can accept the offer
       **/
      makeOffer: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array, amount: u128 | AnyNumber | Uint8Array, expires: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, u128, u32]>;
      /**
       * Set trading price and allow sell
       * Setting price to None disables auto sell
       * 
       * Parameters:
       * - `collection_id`: The identifier of a non-fungible token collection
       * - `item_id`: The item identifier of a collection
       * - `new_price`: price the token will be listed for
       **/
      setPrice: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array, newPrice: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u128, u128, Option<u128>]>;
      /**
       * Reverse action to make_offer
       * Removes an offer and unreserves funds
       * Can be done by the offer maker or owner of the token
       * 
       * Parameters:
       * - `collection_id`: The identifier of a non-fungible token collection
       * - `item_id`: The item identifier of a collection
       * - `maker`: User who made the offer
       **/
      withdrawOffer: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array, maker: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
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
       * Chosen currency must be in the list of accepted currencies.
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
    nft: {
      /**
       * Removes a token from existence.
       * Burning needs to be enabled in the permissions for the given collection type.
       * 
       * Parameters:
       * - `origin`: The NFT owner.
       * - `collection_id`: The collection of the asset to be burned.
       * - `item_id`: The instance of the asset to be burned.
       **/
      burn: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128]>;
      /**
       * Creates an NFT collection of the given collection type and sets its metadata.
       * The collection ID needs to be outside of the range of reserved IDs.
       * The creation of a collection needs to be enabled in the permissions
       * for the given collection type.
       * 
       * Parameters:
       * - `origin`: The owner of the newly created collection.
       * - `collection_id`: Identifier of a collection.
       * - `collection_type`: The collection type determines its purpose and usage.
       * - `metadata`: Arbitrary data about a collection, e.g. IPFS hash or name.
       * 
       * Emits CollectionCreated event
       **/
      createCollection: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, collectionType: PalletNftCollectionType | 'Marketplace' | 'LiquidityMining' | number | Uint8Array, metadata: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, PalletNftCollectionType, Bytes]>;
      /**
       * Removes a collection from existence.
       * Destroying of collections need to be enabled in the permissions
       * for the given collection type.
       * Fails if the collection is not empty.
       * 
       * Parameters:
       * - `origin`: The collection owner.
       * - `collection_id`: The identifier of the asset collection to be destroyed.
       **/
      destroyCollection: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Mints an NFT in the specified collection and sets its metadata.
       * Minting of new items needs to be enabled in the permissions
       * for the given collection type.
       * 
       * Parameters:
       * - `origin`: The owner of the newly minted NFT.
       * - `collection_id`: The collection of the asset to be minted.
       * - `item_id`: The item of the asset to be minted.
       * - `metadata`: Arbitrary data about an item, e.g. IPFS hash or symbol.
       **/
      mint: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array, metadata: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, Bytes]>;
      /**
       * Transfers NFT from account A to account B.
       * Transfers need to be enabled in the permissions for the given collection type.
       * 
       * Parameters:
       * - `origin`: The NFT owner
       * - `collection_id`: The collection of the asset to be transferred.
       * - `item_id`: The instance of the asset to be transferred.
       * - `dest`: The account to receive ownership of the asset.
       **/
      transfer: AugmentedSubmittable<(collectionId: u128 | AnyNumber | Uint8Array, itemId: u128 | AnyNumber | Uint8Array, dest: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u128, AccountId32]>;
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
      addProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: BasiliskRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Exchange' | 'Transfer' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, BasiliskRuntimeSystemProxyType, u32]>;
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
      createPure: AugmentedSubmittable<(proxyType: BasiliskRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Exchange' | 'Transfer' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BasiliskRuntimeSystemProxyType, u32, u16]>;
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
      killPure: AugmentedSubmittable<(spawner: AccountId32 | string | Uint8Array, proxyType: BasiliskRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Exchange' | 'Transfer' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, BasiliskRuntimeSystemProxyType, u16, Compact<u32>, Compact<u32>]>;
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
      proxy: AugmentedSubmittable<(real: AccountId32 | string | Uint8Array, forceProxyType: Option<BasiliskRuntimeSystemProxyType> | null | Uint8Array | BasiliskRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Exchange' | 'Transfer' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<BasiliskRuntimeSystemProxyType>, Call]>;
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
      proxyAnnounced: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, real: AccountId32 | string | Uint8Array, forceProxyType: Option<BasiliskRuntimeSystemProxyType> | null | Uint8Array | BasiliskRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Exchange' | 'Transfer' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, AccountId32, Option<BasiliskRuntimeSystemProxyType>, Call]>;
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
      removeProxy: AugmentedSubmittable<(delegate: AccountId32 | string | Uint8Array, proxyType: BasiliskRuntimeSystemProxyType | 'Any' | 'CancelProxy' | 'Governance' | 'Exchange' | 'Transfer' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, BasiliskRuntimeSystemProxyType, u32]>;
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
      submit: AugmentedSubmittable<(proposalOrigin: BasiliskRuntimeOriginCaller | { system: any } | { Void: any } | { TechnicalCommittee: any } | { Origins: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BasiliskRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
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
       * Can only be called by technical origin
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
      setKeys: AugmentedSubmittable<(keys: BasiliskRuntimeOpaqueSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BasiliskRuntimeOpaqueSessionKeys, Bytes]>;
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
      dispatchAs: AugmentedSubmittable<(asOrigin: BasiliskRuntimeOriginCaller | { system: any } | { Void: any } | { TechnicalCommittee: any } | { Origins: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BasiliskRuntimeOriginCaller, Call]>;
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
