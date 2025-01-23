// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U256, U8aFixed, Vec, bool, i128, i64, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, Perbill, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (9) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (10) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (15) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (17) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (20) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (22) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked' | 'UpgradeAuthorized';
  }

  /** @name FrameSupportDispatchDispatchInfo (23) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (24) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (25) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (26) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (27) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (28) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (29) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (30) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletBalancesEvent (31) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTotalIssuanceForced: boolean;
    readonly asTotalIssuanceForced: {
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed' | 'TotalIssuanceForced';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (32) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (33) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletTransactionMultiPaymentEvent (34) */
  interface PalletTransactionMultiPaymentEvent extends Enum {
    readonly isCurrencySet: boolean;
    readonly asCurrencySet: {
      readonly accountId: AccountId32;
      readonly assetId: u32;
    } & Struct;
    readonly isCurrencyAdded: boolean;
    readonly asCurrencyAdded: {
      readonly assetId: u32;
    } & Struct;
    readonly isCurrencyRemoved: boolean;
    readonly asCurrencyRemoved: {
      readonly assetId: u32;
    } & Struct;
    readonly isFeeWithdrawn: boolean;
    readonly asFeeWithdrawn: {
      readonly accountId: AccountId32;
      readonly assetId: u32;
      readonly nativeFeeAmount: u128;
      readonly nonNativeFeeAmount: u128;
      readonly destinationAccountId: AccountId32;
    } & Struct;
    readonly type: 'CurrencySet' | 'CurrencyAdded' | 'CurrencyRemoved' | 'FeeWithdrawn';
  }

  /** @name PalletTreasuryEvent (35) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly isAssetSpendApproved: boolean;
    readonly asAssetSpendApproved: {
      readonly index: u32;
      readonly assetKind: Null;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
      readonly validFrom: u32;
      readonly expireAt: u32;
    } & Struct;
    readonly isAssetSpendVoided: boolean;
    readonly asAssetSpendVoided: {
      readonly index: u32;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isPaymentFailed: boolean;
    readonly asPaymentFailed: {
      readonly index: u32;
      readonly paymentId: Null;
    } & Struct;
    readonly isSpendProcessed: boolean;
    readonly asSpendProcessed: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive' | 'AssetSpendApproved' | 'AssetSpendVoided' | 'Paid' | 'PaymentFailed' | 'SpendProcessed';
  }

  /** @name PalletUtilityEvent (37) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletPreimageEvent (39) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletIdentityEvent (40) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isAuthorityAdded: boolean;
    readonly asAuthorityAdded: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isAuthorityRemoved: boolean;
    readonly asAuthorityRemoved: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isUsernameSet: boolean;
    readonly asUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isUsernameQueued: boolean;
    readonly asUsernameQueued: {
      readonly who: AccountId32;
      readonly username: Bytes;
      readonly expiration: u32;
    } & Struct;
    readonly isPreapprovalExpired: boolean;
    readonly asPreapprovalExpired: {
      readonly whose: AccountId32;
    } & Struct;
    readonly isPrimaryUsernameSet: boolean;
    readonly asPrimaryUsernameSet: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly isDanglingUsernameRemoved: boolean;
    readonly asDanglingUsernameRemoved: {
      readonly who: AccountId32;
      readonly username: Bytes;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked' | 'AuthorityAdded' | 'AuthorityRemoved' | 'UsernameSet' | 'UsernameQueued' | 'PreapprovalExpired' | 'PrimaryUsernameSet' | 'DanglingUsernameRemoved';
  }

  /** @name PalletDemocracyEvent (42) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (43) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (44) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (46) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletElectionsPhragmenEvent (47) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletCollectiveEvent (50) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletTipsEvent (52) */
  interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosing: boolean;
    readonly asTipClosing: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosed: boolean;
    readonly asTipClosed: {
      readonly tipHash: H256;
      readonly who: AccountId32;
      readonly payout: u128;
    } & Struct;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: {
      readonly tipHash: H256;
      readonly finder: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletProxyEvent (53) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name HydradxRuntimeSystemProxyType (54) */
  interface HydradxRuntimeSystemProxyType extends Enum {
    readonly isAny: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isTransfer: boolean;
    readonly isLiquidity: boolean;
    readonly isLiquidityMining: boolean;
    readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Transfer' | 'Liquidity' | 'LiquidityMining';
  }

  /** @name PalletMultisigEvent (56) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (57) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletUniquesEvent (58) */
  interface PalletUniquesEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly collection: u128;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly collection: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly collection: u128;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly collection: u128;
      readonly item: u128;
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isCollectionFrozen: boolean;
    readonly asCollectionFrozen: {
      readonly collection: u128;
    } & Struct;
    readonly isCollectionThawed: boolean;
    readonly asCollectionThawed: {
      readonly collection: u128;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly collection: u128;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly collection: u128;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isItemStatusChanged: boolean;
    readonly asItemStatusChanged: {
      readonly collection: u128;
    } & Struct;
    readonly isCollectionMetadataSet: boolean;
    readonly asCollectionMetadataSet: {
      readonly collection: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isCollectionMetadataCleared: boolean;
    readonly asCollectionMetadataCleared: {
      readonly collection: u128;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly collection: u128;
      readonly item: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isRedeposited: boolean;
    readonly asRedeposited: {
      readonly collection: u128;
      readonly successfulItems: Vec<u128>;
    } & Struct;
    readonly isAttributeSet: boolean;
    readonly asAttributeSet: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isAttributeCleared: boolean;
    readonly asAttributeCleared: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
    } & Struct;
    readonly isOwnershipAcceptanceChanged: boolean;
    readonly asOwnershipAcceptanceChanged: {
      readonly who: AccountId32;
      readonly maybeCollection: Option<u128>;
    } & Struct;
    readonly isCollectionMaxSupplySet: boolean;
    readonly asCollectionMaxSupplySet: {
      readonly collection: u128;
      readonly maxSupply: u32;
    } & Struct;
    readonly isItemPriceSet: boolean;
    readonly asItemPriceSet: {
      readonly collection: u128;
      readonly item: u128;
      readonly price: u128;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isItemPriceRemoved: boolean;
    readonly asItemPriceRemoved: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isItemBought: boolean;
    readonly asItemBought: {
      readonly collection: u128;
      readonly item: u128;
      readonly price: u128;
      readonly seller: AccountId32;
      readonly buyer: AccountId32;
    } & Struct;
    readonly type: 'Created' | 'ForceCreated' | 'Destroyed' | 'Issued' | 'Transferred' | 'Burned' | 'Frozen' | 'Thawed' | 'CollectionFrozen' | 'CollectionThawed' | 'OwnerChanged' | 'TeamChanged' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'ItemStatusChanged' | 'CollectionMetadataSet' | 'CollectionMetadataCleared' | 'MetadataSet' | 'MetadataCleared' | 'Redeposited' | 'AttributeSet' | 'AttributeCleared' | 'OwnershipAcceptanceChanged' | 'CollectionMaxSupplySet' | 'ItemPriceSet' | 'ItemPriceRemoved' | 'ItemBought';
  }

  /** @name PalletStateTrieMigrationEvent (65) */
  interface PalletStateTrieMigrationEvent extends Enum {
    readonly isMigrated: boolean;
    readonly asMigrated: {
      readonly top: u32;
      readonly child: u32;
      readonly compute: PalletStateTrieMigrationMigrationCompute;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAutoMigrationFinished: boolean;
    readonly isHalted: boolean;
    readonly asHalted: {
      readonly error: PalletStateTrieMigrationError;
    } & Struct;
    readonly type: 'Migrated' | 'Slashed' | 'AutoMigrationFinished' | 'Halted';
  }

  /** @name PalletStateTrieMigrationMigrationCompute (66) */
  interface PalletStateTrieMigrationMigrationCompute extends Enum {
    readonly isSigned: boolean;
    readonly isAuto: boolean;
    readonly type: 'Signed' | 'Auto';
  }

  /** @name PalletStateTrieMigrationError (67) */
  interface PalletStateTrieMigrationError extends Enum {
    readonly isMaxSignedLimits: boolean;
    readonly isKeyTooLong: boolean;
    readonly isNotEnoughFunds: boolean;
    readonly isBadWitness: boolean;
    readonly isSignedMigrationNotAllowed: boolean;
    readonly isBadChildRoot: boolean;
    readonly type: 'MaxSignedLimits' | 'KeyTooLong' | 'NotEnoughFunds' | 'BadWitness' | 'SignedMigrationNotAllowed' | 'BadChildRoot';
  }

  /** @name PalletConvictionVotingEvent (68) */
  interface PalletConvictionVotingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: ITuple<[AccountId32, AccountId32]>;
    readonly isUndelegated: boolean;
    readonly asUndelegated: AccountId32;
    readonly type: 'Delegated' | 'Undelegated';
  }

  /** @name PalletReferendaEvent (69) */
  interface PalletReferendaEvent extends Enum {
    readonly isSubmitted: boolean;
    readonly asSubmitted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isDecisionDepositPlaced: boolean;
    readonly asDecisionDepositPlaced: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionDepositRefunded: boolean;
    readonly asDecisionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionStarted: boolean;
    readonly asDecisionStarted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isConfirmStarted: boolean;
    readonly asConfirmStarted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmAborted: boolean;
    readonly asConfirmAborted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmed: boolean;
    readonly asConfirmed: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly index: u32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isTimedOut: boolean;
    readonly asTimedOut: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isSubmissionDepositRefunded: boolean;
    readonly asSubmissionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Submitted' | 'DecisionDepositPlaced' | 'DecisionDepositRefunded' | 'DepositSlashed' | 'DecisionStarted' | 'ConfirmStarted' | 'ConfirmAborted' | 'Confirmed' | 'Approved' | 'Rejected' | 'TimedOut' | 'Cancelled' | 'Killed' | 'SubmissionDepositRefunded' | 'MetadataSet' | 'MetadataCleared';
  }

  /** @name FrameSupportPreimagesBounded (70) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name FrameSystemCall (72) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isAuthorizeUpgradeWithoutChecks: boolean;
    readonly asAuthorizeUpgradeWithoutChecks: {
      readonly codeHash: H256;
    } & Struct;
    readonly isApplyAuthorizedUpgrade: boolean;
    readonly asApplyAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent' | 'AuthorizeUpgrade' | 'AuthorizeUpgradeWithoutChecks' | 'ApplyAuthorizedUpgrade';
  }

  /** @name PalletTimestampCall (76) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletBalancesCall (77) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: AccountId32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: AccountId32;
      readonly dest: AccountId32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: AccountId32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: AccountId32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: AccountId32;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly isForceAdjustTotalIssuance: boolean;
    readonly asForceAdjustTotalIssuance: {
      readonly direction: PalletBalancesAdjustmentDirection;
      readonly delta: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'ForceSetBalance' | 'ForceAdjustTotalIssuance';
  }

  /** @name PalletBalancesAdjustmentDirection (80) */
  interface PalletBalancesAdjustmentDirection extends Enum {
    readonly isIncrease: boolean;
    readonly isDecrease: boolean;
    readonly type: 'Increase' | 'Decrease';
  }

  /** @name PalletTransactionMultiPaymentCall (81) */
  interface PalletTransactionMultiPaymentCall extends Enum {
    readonly isSetCurrency: boolean;
    readonly asSetCurrency: {
      readonly currency: u32;
    } & Struct;
    readonly isAddCurrency: boolean;
    readonly asAddCurrency: {
      readonly currency: u32;
      readonly price: u128;
    } & Struct;
    readonly isRemoveCurrency: boolean;
    readonly asRemoveCurrency: {
      readonly currency: u32;
    } & Struct;
    readonly isResetPaymentCurrency: boolean;
    readonly asResetPaymentCurrency: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isDispatchPermit: boolean;
    readonly asDispatchPermit: {
      readonly from: H160;
      readonly to: H160;
      readonly value: U256;
      readonly data: Bytes;
      readonly gasLimit: u64;
      readonly deadline: U256;
      readonly v: u8;
      readonly r: H256;
      readonly s: H256;
    } & Struct;
    readonly type: 'SetCurrency' | 'AddCurrency' | 'RemoveCurrency' | 'ResetPaymentCurrency' | 'DispatchPermit';
  }

  /** @name PalletTreasuryCall (87) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpendLocal: boolean;
    readonly asSpendLocal: {
      readonly amount: Compact<u128>;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly assetKind: Null;
      readonly amount: Compact<u128>;
      readonly beneficiary: AccountId32;
      readonly validFrom: Option<u32>;
    } & Struct;
    readonly isPayout: boolean;
    readonly asPayout: {
      readonly index: u32;
    } & Struct;
    readonly isCheckStatus: boolean;
    readonly asCheckStatus: {
      readonly index: u32;
    } & Struct;
    readonly isVoidSpend: boolean;
    readonly asVoidSpend: {
      readonly index: u32;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'SpendLocal' | 'RemoveApproval' | 'Spend' | 'Payout' | 'CheckStatus' | 'VoidSpend';
  }

  /** @name PalletUtilityCall (90) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: HydradxRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name HydradxRuntimeOriginCaller (92) */
  interface HydradxRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: HydradxRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isEthereum: boolean;
    readonly asEthereum: PalletEthereumRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Council' | 'TechnicalCommittee' | 'Origins' | 'Ethereum' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name FrameSupportDispatchRawOrigin (93) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (94) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name HydradxRuntimeGovernanceOriginsPalletCustomOriginsOrigin (96) */
  interface HydradxRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
    readonly isWhitelistedCaller: boolean;
    readonly isReferendumCanceller: boolean;
    readonly isReferendumKiller: boolean;
    readonly isGeneralAdmin: boolean;
    readonly isOmnipoolAdmin: boolean;
    readonly isTreasurer: boolean;
    readonly isSpender: boolean;
    readonly isTipper: boolean;
    readonly type: 'WhitelistedCaller' | 'ReferendumCanceller' | 'ReferendumKiller' | 'GeneralAdmin' | 'OmnipoolAdmin' | 'Treasurer' | 'Spender' | 'Tipper';
  }

  /** @name PalletEthereumRawOrigin (97) */
  interface PalletEthereumRawOrigin extends Enum {
    readonly isEthereumTransaction: boolean;
    readonly asEthereumTransaction: H160;
    readonly type: 'EthereumTransaction';
  }

  /** @name PalletXcmOrigin (98) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV4Location;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV4Location;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name StagingXcmV4Location (99) */
  interface StagingXcmV4Location extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV4Junctions;
  }

  /** @name StagingXcmV4Junctions (100) */
  interface StagingXcmV4Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV4Junction;
    readonly isX2: boolean;
    readonly asX2: StagingXcmV4Junction;
    readonly isX3: boolean;
    readonly asX3: StagingXcmV4Junction;
    readonly isX4: boolean;
    readonly asX4: StagingXcmV4Junction;
    readonly isX5: boolean;
    readonly asX5: StagingXcmV4Junction;
    readonly isX6: boolean;
    readonly asX6: StagingXcmV4Junction;
    readonly isX7: boolean;
    readonly asX7: StagingXcmV4Junction;
    readonly isX8: boolean;
    readonly asX8: StagingXcmV4Junction;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV4Junction (102) */
  interface StagingXcmV4Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: StagingXcmV4JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name StagingXcmV4JunctionNetworkId (104) */
  interface StagingXcmV4JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly isPolkadotBulletin: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash' | 'PolkadotBulletin';
  }

  /** @name XcmV3JunctionBodyId (105) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (106) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name CumulusPalletXcmOrigin (114) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name SpCoreVoid (116) */
  type SpCoreVoid = Null;

  /** @name PalletPreimageCall (117) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isEnsureUpdated: boolean;
    readonly asEnsureUpdated: {
      readonly hashes: Vec<H256>;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage' | 'EnsureUpdated';
  }

  /** @name PalletIdentityCall (119) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: AccountId32;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityLegacyIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: u64;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: AccountId32;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: AccountId32;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: AccountId32;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: AccountId32;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: AccountId32;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly isAddUsernameAuthority: boolean;
    readonly asAddUsernameAuthority: {
      readonly authority: AccountId32;
      readonly suffix: Bytes;
      readonly allocation: u32;
    } & Struct;
    readonly isRemoveUsernameAuthority: boolean;
    readonly asRemoveUsernameAuthority: {
      readonly authority: AccountId32;
    } & Struct;
    readonly isSetUsernameFor: boolean;
    readonly asSetUsernameFor: {
      readonly who: AccountId32;
      readonly username: Bytes;
      readonly signature: Option<SpRuntimeMultiSignature>;
    } & Struct;
    readonly isAcceptUsername: boolean;
    readonly asAcceptUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveExpiredApproval: boolean;
    readonly asRemoveExpiredApproval: {
      readonly username: Bytes;
    } & Struct;
    readonly isSetPrimaryUsername: boolean;
    readonly asSetPrimaryUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly isRemoveDanglingUsername: boolean;
    readonly asRemoveDanglingUsername: {
      readonly username: Bytes;
    } & Struct;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub' | 'AddUsernameAuthority' | 'RemoveUsernameAuthority' | 'SetUsernameFor' | 'AcceptUsername' | 'RemoveExpiredApproval' | 'SetPrimaryUsername' | 'RemoveDanglingUsername';
  }

  /** @name PalletIdentityLegacyIdentityInfo (120) */
  interface PalletIdentityLegacyIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityJudgement (158) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name SpRuntimeMultiSignature (160) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: U8aFixed;
    readonly isSr25519: boolean;
    readonly asSr25519: U8aFixed;
    readonly isEcdsa: boolean;
    readonly asEcdsa: U8aFixed;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name PalletDemocracyCall (163) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: AccountId32;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly isForceRemoveVote: boolean;
    readonly asForceRemoveVote: {
      readonly target: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata' | 'ForceRemoveVote';
  }

  /** @name PalletDemocracyConviction (164) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletElectionsPhragmenCall (166) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId32;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (167) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletCollectiveCall (168) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletTipsCall (170) */
  interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: AccountId32;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: AccountId32;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletProxyCall (171) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: AccountId32;
      readonly forceProxyType: Option<HydradxRuntimeSystemProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: AccountId32;
      readonly proxyType: HydradxRuntimeSystemProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: AccountId32;
      readonly real: AccountId32;
      readonly forceProxyType: Option<HydradxRuntimeSystemProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletMultisigCall (173) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletUniquesCall (175) */
  interface PalletUniquesCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly collection: u128;
      readonly admin: AccountId32;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly collection: u128;
      readonly owner: AccountId32;
      readonly freeHolding: bool;
    } & Struct;
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly collection: u128;
      readonly witness: PalletUniquesDestroyWitness;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly collection: u128;
      readonly item: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly collection: u128;
      readonly item: u128;
      readonly checkOwner: Option<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly collection: u128;
      readonly item: u128;
      readonly dest: AccountId32;
    } & Struct;
    readonly isRedeposit: boolean;
    readonly asRedeposit: {
      readonly collection: u128;
      readonly items: Vec<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isFreezeCollection: boolean;
    readonly asFreezeCollection: {
      readonly collection: u128;
    } & Struct;
    readonly isThawCollection: boolean;
    readonly asThawCollection: {
      readonly collection: u128;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly collection: u128;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly collection: u128;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly collection: u128;
      readonly item: u128;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly collection: u128;
      readonly item: u128;
      readonly maybeCheckDelegate: Option<AccountId32>;
    } & Struct;
    readonly isForceItemStatus: boolean;
    readonly asForceItemStatus: {
      readonly collection: u128;
      readonly owner: AccountId32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
      readonly freeHolding: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isSetAttribute: boolean;
    readonly asSetAttribute: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
      readonly value: Bytes;
    } & Struct;
    readonly isClearAttribute: boolean;
    readonly asClearAttribute: {
      readonly collection: u128;
      readonly maybeItem: Option<u128>;
      readonly key: Bytes;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly collection: u128;
      readonly item: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly collection: u128;
      readonly item: u128;
    } & Struct;
    readonly isSetCollectionMetadata: boolean;
    readonly asSetCollectionMetadata: {
      readonly collection: u128;
      readonly data: Bytes;
      readonly isFrozen: bool;
    } & Struct;
    readonly isClearCollectionMetadata: boolean;
    readonly asClearCollectionMetadata: {
      readonly collection: u128;
    } & Struct;
    readonly isSetAcceptOwnership: boolean;
    readonly asSetAcceptOwnership: {
      readonly maybeCollection: Option<u128>;
    } & Struct;
    readonly isSetCollectionMaxSupply: boolean;
    readonly asSetCollectionMaxSupply: {
      readonly collection: u128;
      readonly maxSupply: u32;
    } & Struct;
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly collection: u128;
      readonly item: u128;
      readonly price: Option<u128>;
      readonly whitelistedBuyer: Option<AccountId32>;
    } & Struct;
    readonly isBuyItem: boolean;
    readonly asBuyItem: {
      readonly collection: u128;
      readonly item: u128;
      readonly bidPrice: u128;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'Redeposit' | 'Freeze' | 'Thaw' | 'FreezeCollection' | 'ThawCollection' | 'TransferOwnership' | 'SetTeam' | 'ApproveTransfer' | 'CancelApproval' | 'ForceItemStatus' | 'SetAttribute' | 'ClearAttribute' | 'SetMetadata' | 'ClearMetadata' | 'SetCollectionMetadata' | 'ClearCollectionMetadata' | 'SetAcceptOwnership' | 'SetCollectionMaxSupply' | 'SetPrice' | 'BuyItem';
  }

  /** @name PalletUniquesDestroyWitness (176) */
  interface PalletUniquesDestroyWitness extends Struct {
    readonly items: Compact<u32>;
    readonly itemMetadatas: Compact<u32>;
    readonly attributes: Compact<u32>;
  }

  /** @name PalletStateTrieMigrationCall (177) */
  interface PalletStateTrieMigrationCall extends Enum {
    readonly isControlAutoMigration: boolean;
    readonly asControlAutoMigration: {
      readonly maybeConfig: Option<PalletStateTrieMigrationMigrationLimits>;
    } & Struct;
    readonly isContinueMigrate: boolean;
    readonly asContinueMigrate: {
      readonly limits: PalletStateTrieMigrationMigrationLimits;
      readonly realSizeUpper: u32;
      readonly witnessTask: PalletStateTrieMigrationMigrationTask;
    } & Struct;
    readonly isMigrateCustomTop: boolean;
    readonly asMigrateCustomTop: {
      readonly keys_: Vec<Bytes>;
      readonly witnessSize: u32;
    } & Struct;
    readonly isMigrateCustomChild: boolean;
    readonly asMigrateCustomChild: {
      readonly root: Bytes;
      readonly childKeys: Vec<Bytes>;
      readonly totalSize: u32;
    } & Struct;
    readonly isSetSignedMaxLimits: boolean;
    readonly asSetSignedMaxLimits: {
      readonly limits: PalletStateTrieMigrationMigrationLimits;
    } & Struct;
    readonly isForceSetProgress: boolean;
    readonly asForceSetProgress: {
      readonly progressTop: PalletStateTrieMigrationProgress;
      readonly progressChild: PalletStateTrieMigrationProgress;
    } & Struct;
    readonly type: 'ControlAutoMigration' | 'ContinueMigrate' | 'MigrateCustomTop' | 'MigrateCustomChild' | 'SetSignedMaxLimits' | 'ForceSetProgress';
  }

  /** @name PalletStateTrieMigrationMigrationLimits (179) */
  interface PalletStateTrieMigrationMigrationLimits extends Struct {
    readonly size_: u32;
    readonly item: u32;
  }

  /** @name PalletStateTrieMigrationMigrationTask (180) */
  interface PalletStateTrieMigrationMigrationTask extends Struct {
    readonly progressTop: PalletStateTrieMigrationProgress;
    readonly progressChild: PalletStateTrieMigrationProgress;
    readonly size_: u32;
    readonly topItems: u32;
    readonly childItems: u32;
  }

  /** @name PalletStateTrieMigrationProgress (181) */
  interface PalletStateTrieMigrationProgress extends Enum {
    readonly isToStart: boolean;
    readonly isLastKey: boolean;
    readonly asLastKey: Bytes;
    readonly isComplete: boolean;
    readonly type: 'ToStart' | 'LastKey' | 'Complete';
  }

  /** @name PalletConvictionVotingCall (183) */
  interface PalletConvictionVotingCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly pollIndex: Compact<u32>;
      readonly vote: PalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly class: u16;
      readonly to: AccountId32;
      readonly conviction: PalletConvictionVotingConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly asUndelegate: {
      readonly class: u16;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly class: u16;
      readonly target: AccountId32;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly class: Option<u16>;
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: AccountId32;
      readonly class: u16;
      readonly index: u32;
    } & Struct;
    readonly type: 'Vote' | 'Delegate' | 'Undelegate' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote';
  }

  /** @name PalletConvictionVotingVoteAccountVote (184) */
  interface PalletConvictionVotingVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly isSplitAbstain: boolean;
    readonly asSplitAbstain: {
      readonly aye: u128;
      readonly nay: u128;
      readonly abstain: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split' | 'SplitAbstain';
  }

  /** @name PalletConvictionVotingConviction (186) */
  interface PalletConvictionVotingConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletReferendaCall (188) */
  interface PalletReferendaCall extends Enum {
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly proposalOrigin: HydradxRuntimeOriginCaller;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly enactmentMoment: FrameSupportScheduleDispatchTime;
    } & Struct;
    readonly isPlaceDecisionDeposit: boolean;
    readonly asPlaceDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isRefundDecisionDeposit: boolean;
    readonly asRefundDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly index: u32;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly index: u32;
    } & Struct;
    readonly isNudgeReferendum: boolean;
    readonly asNudgeReferendum: {
      readonly index: u32;
    } & Struct;
    readonly isOneFewerDeciding: boolean;
    readonly asOneFewerDeciding: {
      readonly track: u16;
    } & Struct;
    readonly isRefundSubmissionDeposit: boolean;
    readonly asRefundSubmissionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly index: u32;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Submit' | 'PlaceDecisionDeposit' | 'RefundDecisionDeposit' | 'Cancel' | 'Kill' | 'NudgeReferendum' | 'OneFewerDeciding' | 'RefundSubmissionDeposit' | 'SetMetadata';
  }

  /** @name FrameSupportScheduleDispatchTime (189) */
  interface FrameSupportScheduleDispatchTime extends Enum {
    readonly isAt: boolean;
    readonly asAt: u32;
    readonly isAfter: boolean;
    readonly asAfter: u32;
    readonly type: 'At' | 'After';
  }

  /** @name PalletWhitelistCall (190) */
  interface PalletWhitelistCall extends Enum {
    readonly isWhitelistCall: boolean;
    readonly asWhitelistCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveWhitelistedCall: boolean;
    readonly asRemoveWhitelistedCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isDispatchWhitelistedCall: boolean;
    readonly asDispatchWhitelistedCall: {
      readonly callHash: H256;
      readonly callEncodedLen: u32;
      readonly callWeightWitness: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isDispatchWhitelistedCallWithPreimage: boolean;
    readonly asDispatchWhitelistedCallWithPreimage: {
      readonly call: Call;
    } & Struct;
    readonly type: 'WhitelistCall' | 'RemoveWhitelistedCall' | 'DispatchWhitelistedCall' | 'DispatchWhitelistedCallWithPreimage';
  }

  /** @name PalletAssetRegistryCall (191) */
  interface PalletAssetRegistryCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly assetId: Option<u32>;
      readonly name: Option<Bytes>;
      readonly assetType: PalletAssetRegistryAssetType;
      readonly existentialDeposit: Option<u128>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly location: Option<HydradxRuntimeXcmAssetLocation>;
      readonly xcmRateLimit: Option<u128>;
      readonly isSufficient: bool;
    } & Struct;
    readonly isUpdate: boolean;
    readonly asUpdate: {
      readonly assetId: u32;
      readonly name: Option<Bytes>;
      readonly assetType: Option<PalletAssetRegistryAssetType>;
      readonly existentialDeposit: Option<u128>;
      readonly xcmRateLimit: Option<u128>;
      readonly isSufficient: Option<bool>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly location: Option<HydradxRuntimeXcmAssetLocation>;
    } & Struct;
    readonly isRegisterExternal: boolean;
    readonly asRegisterExternal: {
      readonly location: HydradxRuntimeXcmAssetLocation;
    } & Struct;
    readonly isBanAsset: boolean;
    readonly asBanAsset: {
      readonly assetId: u32;
    } & Struct;
    readonly isUnbanAsset: boolean;
    readonly asUnbanAsset: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'Register' | 'Update' | 'RegisterExternal' | 'BanAsset' | 'UnbanAsset';
  }

  /** @name PalletAssetRegistryAssetType (194) */
  interface PalletAssetRegistryAssetType extends Enum {
    readonly isToken: boolean;
    readonly isXyk: boolean;
    readonly isStableSwap: boolean;
    readonly isBond: boolean;
    readonly isExternal: boolean;
    readonly isErc20: boolean;
    readonly type: 'Token' | 'Xyk' | 'StableSwap' | 'Bond' | 'External' | 'Erc20';
  }

  /** @name HydradxRuntimeXcmAssetLocation (197) */
  interface HydradxRuntimeXcmAssetLocation extends StagingXcmV3MultiLocation {}

  /** @name StagingXcmV3MultiLocation (198) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (199) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (200) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (202) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly isPolkadotBulletin: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash' | 'PolkadotBulletin';
  }

  /** @name PalletClaimsCall (205) */
  interface PalletClaimsCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly ethereumSignature: PalletClaimsEcdsaSignature;
    } & Struct;
    readonly type: 'Claim';
  }

  /** @name PalletClaimsEcdsaSignature (206) */
  interface PalletClaimsEcdsaSignature extends U8aFixed {}

  /** @name PalletGenesisHistoryCall (207) */
  type PalletGenesisHistoryCall = Null;

  /** @name PalletOmnipoolCall (208) */
  interface PalletOmnipoolCall extends Enum {
    readonly isAddToken: boolean;
    readonly asAddToken: {
      readonly asset: u32;
      readonly initialPrice: u128;
      readonly weightCap: Permill;
      readonly positionOwner: AccountId32;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly asset: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly positionId: u128;
      readonly amount: u128;
    } & Struct;
    readonly isSacrificePosition: boolean;
    readonly asSacrificePosition: {
      readonly positionId: u128;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly minBuyAmount: u128;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly maxSellAmount: u128;
    } & Struct;
    readonly isSetAssetTradableState: boolean;
    readonly asSetAssetTradableState: {
      readonly assetId: u32;
      readonly state: PalletOmnipoolTradability;
    } & Struct;
    readonly isRefundRefusedAsset: boolean;
    readonly asRefundRefusedAsset: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly recipient: AccountId32;
    } & Struct;
    readonly isSetAssetWeightCap: boolean;
    readonly asSetAssetWeightCap: {
      readonly assetId: u32;
      readonly cap: Permill;
    } & Struct;
    readonly isWithdrawProtocolLiquidity: boolean;
    readonly asWithdrawProtocolLiquidity: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly price: ITuple<[u128, u128]>;
      readonly dest: AccountId32;
    } & Struct;
    readonly isRemoveToken: boolean;
    readonly asRemoveToken: {
      readonly assetId: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isAddLiquidityWithLimit: boolean;
    readonly asAddLiquidityWithLimit: {
      readonly asset: u32;
      readonly amount: u128;
      readonly minSharesLimit: u128;
    } & Struct;
    readonly isRemoveLiquidityWithLimit: boolean;
    readonly asRemoveLiquidityWithLimit: {
      readonly positionId: u128;
      readonly amount: u128;
      readonly minLimit: u128;
    } & Struct;
    readonly type: 'AddToken' | 'AddLiquidity' | 'RemoveLiquidity' | 'SacrificePosition' | 'Sell' | 'Buy' | 'SetAssetTradableState' | 'RefundRefusedAsset' | 'SetAssetWeightCap' | 'WithdrawProtocolLiquidity' | 'RemoveToken' | 'AddLiquidityWithLimit' | 'RemoveLiquidityWithLimit';
  }

  /** @name PalletOmnipoolTradability (210) */
  interface PalletOmnipoolTradability extends Struct {
    readonly bits: u8;
  }

  /** @name PalletTransactionPauseCall (212) */
  interface PalletTransactionPauseCall extends Enum {
    readonly isPauseTransaction: boolean;
    readonly asPauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly isUnpauseTransaction: boolean;
    readonly asUnpauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly type: 'PauseTransaction' | 'UnpauseTransaction';
  }

  /** @name PalletDusterCall (213) */
  interface PalletDusterCall extends Enum {
    readonly isDustAccount: boolean;
    readonly asDustAccount: {
      readonly account: AccountId32;
      readonly currencyId: u32;
    } & Struct;
    readonly isAddNondustableAccount: boolean;
    readonly asAddNondustableAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemoveNondustableAccount: boolean;
    readonly asRemoveNondustableAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'DustAccount' | 'AddNondustableAccount' | 'RemoveNondustableAccount';
  }

  /** @name PalletLiquidityMiningCall (214) */
  type PalletLiquidityMiningCall = Null;

  /** @name PalletOmnipoolLiquidityMiningCall (215) */
  interface PalletOmnipoolLiquidityMiningCall extends Enum {
    readonly isCreateGlobalFarm: boolean;
    readonly asCreateGlobalFarm: {
      readonly totalRewards: u128;
      readonly plannedYieldingPeriods: u32;
      readonly blocksPerPeriod: u32;
      readonly rewardCurrency: u32;
      readonly owner: AccountId32;
      readonly yieldPerPeriod: Perquintill;
      readonly minDeposit: u128;
      readonly lrnaPriceAdjustment: u128;
    } & Struct;
    readonly isTerminateGlobalFarm: boolean;
    readonly asTerminateGlobalFarm: {
      readonly globalFarmId: u32;
    } & Struct;
    readonly isCreateYieldFarm: boolean;
    readonly asCreateYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    } & Struct;
    readonly isUpdateYieldFarm: boolean;
    readonly asUpdateYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
    } & Struct;
    readonly isStopYieldFarm: boolean;
    readonly asStopYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetId: u32;
    } & Struct;
    readonly isResumeYieldFarm: boolean;
    readonly asResumeYieldFarm: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
    } & Struct;
    readonly isTerminateYieldFarm: boolean;
    readonly asTerminateYieldFarm: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
    } & Struct;
    readonly isDepositShares: boolean;
    readonly asDepositShares: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly positionId: u128;
    } & Struct;
    readonly isRedepositShares: boolean;
    readonly asRedepositShares: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly depositId: u128;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly depositId: u128;
      readonly yieldFarmId: u32;
    } & Struct;
    readonly isWithdrawShares: boolean;
    readonly asWithdrawShares: {
      readonly depositId: u128;
      readonly yieldFarmId: u32;
    } & Struct;
    readonly isUpdateGlobalFarm: boolean;
    readonly asUpdateGlobalFarm: {
      readonly globalFarmId: u32;
      readonly plannedYieldingPeriods: u32;
      readonly yieldPerPeriod: Perquintill;
      readonly minDeposit: u128;
    } & Struct;
    readonly isJoinFarms: boolean;
    readonly asJoinFarms: {
      readonly farmEntries: Vec<ITuple<[u32, u32]>>;
      readonly positionId: u128;
    } & Struct;
    readonly isAddLiquidityAndJoinFarms: boolean;
    readonly asAddLiquidityAndJoinFarms: {
      readonly farmEntries: Vec<ITuple<[u32, u32]>>;
      readonly asset: u32;
      readonly amount: u128;
    } & Struct;
    readonly isExitFarms: boolean;
    readonly asExitFarms: {
      readonly depositId: u128;
      readonly yieldFarmIds: Vec<u32>;
    } & Struct;
    readonly type: 'CreateGlobalFarm' | 'TerminateGlobalFarm' | 'CreateYieldFarm' | 'UpdateYieldFarm' | 'StopYieldFarm' | 'ResumeYieldFarm' | 'TerminateYieldFarm' | 'DepositShares' | 'RedepositShares' | 'ClaimRewards' | 'WithdrawShares' | 'UpdateGlobalFarm' | 'JoinFarms' | 'AddLiquidityAndJoinFarms' | 'ExitFarms';
  }

  /** @name PalletLiquidityMiningLoyaltyCurve (218) */
  interface PalletLiquidityMiningLoyaltyCurve extends Struct {
    readonly initialRewardPercentage: u128;
    readonly scaleCoef: u32;
  }

  /** @name PalletOtcCall (224) */
  interface PalletOtcCall extends Enum {
    readonly isPlaceOrder: boolean;
    readonly asPlaceOrder: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly partiallyFillable: bool;
    } & Struct;
    readonly isPartialFillOrder: boolean;
    readonly asPartialFillOrder: {
      readonly orderId: u32;
      readonly amountIn: u128;
    } & Struct;
    readonly isFillOrder: boolean;
    readonly asFillOrder: {
      readonly orderId: u32;
    } & Struct;
    readonly isCancelOrder: boolean;
    readonly asCancelOrder: {
      readonly orderId: u32;
    } & Struct;
    readonly type: 'PlaceOrder' | 'PartialFillOrder' | 'FillOrder' | 'CancelOrder';
  }

  /** @name PalletCircuitBreakerCall (225) */
  interface PalletCircuitBreakerCall extends Enum {
    readonly isSetTradeVolumeLimit: boolean;
    readonly asSetTradeVolumeLimit: {
      readonly assetId: u32;
      readonly tradeVolumeLimit: ITuple<[u32, u32]>;
    } & Struct;
    readonly isSetAddLiquidityLimit: boolean;
    readonly asSetAddLiquidityLimit: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isSetRemoveLiquidityLimit: boolean;
    readonly asSetRemoveLiquidityLimit: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly type: 'SetTradeVolumeLimit' | 'SetAddLiquidityLimit' | 'SetRemoveLiquidityLimit';
  }

  /** @name PalletRouteExecutorCall (227) */
  interface PalletRouteExecutorCall extends Enum {
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly minAmountOut: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountOut: u128;
      readonly maxAmountIn: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isSetRoute: boolean;
    readonly asSetRoute: {
      readonly assetPair: HydradxTraitsRouterAssetPair;
      readonly newRoute: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isForceInsertRoute: boolean;
    readonly asForceInsertRoute: {
      readonly assetPair: HydradxTraitsRouterAssetPair;
      readonly newRoute: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isSellAll: boolean;
    readonly asSellAll: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly minAmountOut: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly type: 'Sell' | 'Buy' | 'SetRoute' | 'ForceInsertRoute' | 'SellAll';
  }

  /** @name HydradxTraitsRouterTrade (229) */
  interface HydradxTraitsRouterTrade extends Struct {
    readonly pool: HydradxTraitsRouterPoolType;
    readonly assetIn: u32;
    readonly assetOut: u32;
  }

  /** @name HydradxTraitsRouterPoolType (230) */
  interface HydradxTraitsRouterPoolType extends Enum {
    readonly isXyk: boolean;
    readonly isLbp: boolean;
    readonly isStableswap: boolean;
    readonly asStableswap: u32;
    readonly isOmnipool: boolean;
    readonly type: 'Xyk' | 'Lbp' | 'Stableswap' | 'Omnipool';
  }

  /** @name HydradxTraitsRouterAssetPair (231) */
  interface HydradxTraitsRouterAssetPair extends Struct {
    readonly assetIn: u32;
    readonly assetOut: u32;
  }

  /** @name PalletDynamicFeesCall (232) */
  type PalletDynamicFeesCall = Null;

  /** @name PalletStakingCall (233) */
  interface PalletStakingCall extends Enum {
    readonly isInitializeStaking: boolean;
    readonly isStake: boolean;
    readonly asStake: {
      readonly amount: u128;
    } & Struct;
    readonly isIncreaseStake: boolean;
    readonly asIncreaseStake: {
      readonly positionId: u128;
      readonly amount: u128;
    } & Struct;
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly positionId: u128;
    } & Struct;
    readonly isUnstake: boolean;
    readonly asUnstake: {
      readonly positionId: u128;
    } & Struct;
    readonly type: 'InitializeStaking' | 'Stake' | 'IncreaseStake' | 'Claim' | 'Unstake';
  }

  /** @name PalletStableswapCall (234) */
  interface PalletStableswapCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly shareAsset: u32;
      readonly assets: Vec<u32>;
      readonly amplification: u16;
      readonly fee: Permill;
    } & Struct;
    readonly isUpdatePoolFee: boolean;
    readonly asUpdatePoolFee: {
      readonly poolId: u32;
      readonly fee: Permill;
    } & Struct;
    readonly isUpdateAmplification: boolean;
    readonly asUpdateAmplification: {
      readonly poolId: u32;
      readonly finalAmplification: u16;
      readonly startBlock: u32;
      readonly endBlock: u32;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly poolId: u32;
      readonly assets: Vec<PalletStableswapAssetAmount>;
    } & Struct;
    readonly isAddLiquidityShares: boolean;
    readonly asAddLiquidityShares: {
      readonly poolId: u32;
      readonly shares: u128;
      readonly assetId: u32;
      readonly maxAssetAmount: u128;
    } & Struct;
    readonly isRemoveLiquidityOneAsset: boolean;
    readonly asRemoveLiquidityOneAsset: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly shareAmount: u128;
      readonly minAmountOut: u128;
    } & Struct;
    readonly isWithdrawAssetAmount: boolean;
    readonly asWithdrawAssetAmount: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly amount: u128;
      readonly maxShareAmount: u128;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly poolId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly minBuyAmount: u128;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly poolId: u32;
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amountOut: u128;
      readonly maxSellAmount: u128;
    } & Struct;
    readonly isSetAssetTradableState: boolean;
    readonly asSetAssetTradableState: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly state: PalletStableswapTradability;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly poolId: u32;
      readonly shareAmount: u128;
      readonly minAmountsOut: Vec<PalletStableswapAssetAmount>;
    } & Struct;
    readonly type: 'CreatePool' | 'UpdatePoolFee' | 'UpdateAmplification' | 'AddLiquidity' | 'AddLiquidityShares' | 'RemoveLiquidityOneAsset' | 'WithdrawAssetAmount' | 'Sell' | 'Buy' | 'SetAssetTradableState' | 'RemoveLiquidity';
  }

  /** @name PalletStableswapAssetAmount (236) */
  interface PalletStableswapAssetAmount extends Struct {
    readonly assetId: u32;
    readonly amount: u128;
  }

  /** @name PalletStableswapTradability (238) */
  interface PalletStableswapTradability extends Struct {
    readonly bits: u8;
  }

  /** @name PalletBondsCall (239) */
  interface PalletBondsCall extends Enum {
    readonly isIssue: boolean;
    readonly asIssue: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly maturity: u64;
    } & Struct;
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly bondId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Issue' | 'Redeem';
  }

  /** @name PalletOtcSettlementsCall (240) */
  interface PalletOtcSettlementsCall extends Enum {
    readonly isSettleOtcOrder: boolean;
    readonly asSettleOtcOrder: {
      readonly otcId: u32;
      readonly amount: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly type: 'SettleOtcOrder';
  }

  /** @name PalletLbpCall (241) */
  interface PalletLbpCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly poolOwner: AccountId32;
      readonly assetA: u32;
      readonly assetAAmount: u128;
      readonly assetB: u32;
      readonly assetBAmount: u128;
      readonly initialWeight: u32;
      readonly finalWeight: u32;
      readonly weightCurve: PalletLbpWeightCurveType;
      readonly fee: ITuple<[u32, u32]>;
      readonly feeCollector: AccountId32;
      readonly repayTarget: u128;
    } & Struct;
    readonly isUpdatePoolData: boolean;
    readonly asUpdatePoolData: {
      readonly poolId: AccountId32;
      readonly poolOwner: Option<AccountId32>;
      readonly start: Option<u32>;
      readonly end: Option<u32>;
      readonly initialWeight: Option<u32>;
      readonly finalWeight: Option<u32>;
      readonly fee: Option<ITuple<[u32, u32]>>;
      readonly feeCollector: Option<AccountId32>;
      readonly repayTarget: Option<u128>;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly amountA: ITuple<[u32, u128]>;
      readonly amountB: ITuple<[u32, u128]>;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly poolId: AccountId32;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
    } & Struct;
    readonly type: 'CreatePool' | 'UpdatePoolData' | 'AddLiquidity' | 'RemoveLiquidity' | 'Sell' | 'Buy';
  }

  /** @name PalletLbpWeightCurveType (242) */
  interface PalletLbpWeightCurveType extends Enum {
    readonly isLinear: boolean;
    readonly type: 'Linear';
  }

  /** @name PalletXykCall (244) */
  interface PalletXykCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly assetA: u32;
      readonly amountA: u128;
      readonly assetB: u32;
      readonly amountB: u128;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountBMaxLimit: u128;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly assetA: u32;
      readonly assetB: u32;
      readonly liquidityAmount: u128;
    } & Struct;
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
      readonly discount: bool;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly maxLimit: u128;
      readonly discount: bool;
    } & Struct;
    readonly type: 'CreatePool' | 'AddLiquidity' | 'RemoveLiquidity' | 'Sell' | 'Buy';
  }

  /** @name PalletReferralsCall (245) */
  interface PalletReferralsCall extends Enum {
    readonly isRegisterCode: boolean;
    readonly asRegisterCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isLinkCode: boolean;
    readonly asLinkCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isConvert: boolean;
    readonly asConvert: {
      readonly assetId: u32;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly isSetRewardPercentage: boolean;
    readonly asSetRewardPercentage: {
      readonly assetId: u32;
      readonly level: PalletReferralsLevel;
      readonly rewards: PalletReferralsFeeDistribution;
    } & Struct;
    readonly type: 'RegisterCode' | 'LinkCode' | 'Convert' | 'ClaimRewards' | 'SetRewardPercentage';
  }

  /** @name PalletReferralsLevel (247) */
  interface PalletReferralsLevel extends Enum {
    readonly isNone: boolean;
    readonly isTier0: boolean;
    readonly isTier1: boolean;
    readonly isTier2: boolean;
    readonly isTier3: boolean;
    readonly isTier4: boolean;
    readonly type: 'None' | 'Tier0' | 'Tier1' | 'Tier2' | 'Tier3' | 'Tier4';
  }

  /** @name PalletReferralsFeeDistribution (248) */
  interface PalletReferralsFeeDistribution extends Struct {
    readonly referrer: Permill;
    readonly trader: Permill;
    readonly external: Permill;
  }

  /** @name PalletLiquidationCall (249) */
  interface PalletLiquidationCall extends Enum {
    readonly isLiquidate: boolean;
    readonly asLiquidate: {
      readonly collateralAsset: u32;
      readonly debtAsset: u32;
      readonly user: H160;
      readonly debtToCover: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isSetBorrowingContract: boolean;
    readonly asSetBorrowingContract: {
      readonly contract: H160;
    } & Struct;
    readonly type: 'Liquidate' | 'SetBorrowingContract';
  }

  /** @name OrmlTokensModuleCall (250) */
  interface OrmlTokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: AccountId32;
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: AccountId32;
      readonly currencyId: u32;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance';
  }

  /** @name PalletCurrenciesModuleCall (251) */
  interface PalletCurrenciesModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: AccountId32;
      readonly currencyId: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferNativeCurrency: boolean;
    readonly asTransferNativeCurrency: {
      readonly dest: AccountId32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUpdateBalance: boolean;
    readonly asUpdateBalance: {
      readonly who: AccountId32;
      readonly currencyId: u32;
      readonly amount: i128;
    } & Struct;
    readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance';
  }

  /** @name OrmlVestingModuleCall (253) */
  interface OrmlVestingModuleCall extends Enum {
    readonly isClaim: boolean;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly dest: AccountId32;
      readonly schedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isUpdateVestingSchedules: boolean;
    readonly asUpdateVestingSchedules: {
      readonly who: AccountId32;
      readonly vestingSchedules: Vec<OrmlVestingVestingSchedule>;
    } & Struct;
    readonly isClaimFor: boolean;
    readonly asClaimFor: {
      readonly dest: AccountId32;
    } & Struct;
    readonly type: 'Claim' | 'VestedTransfer' | 'UpdateVestingSchedules' | 'ClaimFor';
  }

  /** @name OrmlVestingVestingSchedule (254) */
  interface OrmlVestingVestingSchedule extends Struct {
    readonly start: u32;
    readonly period: u32;
    readonly periodCount: u32;
    readonly perPeriod: Compact<u128>;
  }

  /** @name PalletEvmCall (256) */
  interface PalletEvmCall extends Enum {
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly address: H160;
      readonly value: u128;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly source: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly source: H160;
      readonly init: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly source: H160;
      readonly init: Bytes;
      readonly salt: H256;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2';
  }

  /** @name PalletEthereumCall (260) */
  interface PalletEthereumCall extends Enum {
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly transaction: EthereumTransactionTransactionV2;
    } & Struct;
    readonly type: 'Transact';
  }

  /** @name EthereumTransactionTransactionV2 (261) */
  interface EthereumTransactionTransactionV2 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumTransactionLegacyTransaction;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumTransactionEip2930Transaction;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumTransactionEip1559Transaction;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumTransactionLegacyTransaction (262) */
  interface EthereumTransactionLegacyTransaction extends Struct {
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly signature: EthereumTransactionTransactionSignature;
  }

  /** @name EthereumTransactionTransactionAction (263) */
  interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean;
    readonly asCall: H160;
    readonly isCreate: boolean;
    readonly type: 'Call' | 'Create';
  }

  /** @name EthereumTransactionTransactionSignature (264) */
  interface EthereumTransactionTransactionSignature extends Struct {
    readonly v: u64;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionEip2930Transaction (266) */
  interface EthereumTransactionEip2930Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionAccessListItem (268) */
  interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name EthereumTransactionEip1559Transaction (269) */
  interface EthereumTransactionEip1559Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly maxFeePerGas: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name PalletEvmAccountsCall (270) */
  interface PalletEvmAccountsCall extends Enum {
    readonly isBindEvmAddress: boolean;
    readonly isAddContractDeployer: boolean;
    readonly asAddContractDeployer: {
      readonly address: H160;
    } & Struct;
    readonly isRemoveContractDeployer: boolean;
    readonly asRemoveContractDeployer: {
      readonly address: H160;
    } & Struct;
    readonly isRenounceContractDeployer: boolean;
    readonly isApproveContract: boolean;
    readonly asApproveContract: {
      readonly address: H160;
    } & Struct;
    readonly isDisapproveContract: boolean;
    readonly asDisapproveContract: {
      readonly address: H160;
    } & Struct;
    readonly type: 'BindEvmAddress' | 'AddContractDeployer' | 'RemoveContractDeployer' | 'RenounceContractDeployer' | 'ApproveContract' | 'DisapproveContract';
  }

  /** @name PalletXykLiquidityMiningCall (271) */
  interface PalletXykLiquidityMiningCall extends Enum {
    readonly isCreateGlobalFarm: boolean;
    readonly asCreateGlobalFarm: {
      readonly totalRewards: u128;
      readonly plannedYieldingPeriods: u32;
      readonly blocksPerPeriod: u32;
      readonly incentivizedAsset: u32;
      readonly rewardCurrency: u32;
      readonly owner: AccountId32;
      readonly yieldPerPeriod: Perquintill;
      readonly minDeposit: u128;
      readonly priceAdjustment: u128;
    } & Struct;
    readonly isUpdateGlobalFarm: boolean;
    readonly asUpdateGlobalFarm: {
      readonly globalFarmId: u32;
      readonly priceAdjustment: u128;
    } & Struct;
    readonly isTerminateGlobalFarm: boolean;
    readonly asTerminateGlobalFarm: {
      readonly globalFarmId: u32;
    } & Struct;
    readonly isCreateYieldFarm: boolean;
    readonly asCreateYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
      readonly multiplier: u128;
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    } & Struct;
    readonly isUpdateYieldFarm: boolean;
    readonly asUpdateYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
      readonly multiplier: u128;
    } & Struct;
    readonly isStopYieldFarm: boolean;
    readonly asStopYieldFarm: {
      readonly globalFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
    } & Struct;
    readonly isResumeYieldFarm: boolean;
    readonly asResumeYieldFarm: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
      readonly multiplier: u128;
    } & Struct;
    readonly isTerminateYieldFarm: boolean;
    readonly asTerminateYieldFarm: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
    } & Struct;
    readonly isDepositShares: boolean;
    readonly asDepositShares: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
      readonly sharesAmount: u128;
    } & Struct;
    readonly isRedepositShares: boolean;
    readonly asRedepositShares: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
      readonly depositId: u128;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly depositId: u128;
      readonly yieldFarmId: u32;
    } & Struct;
    readonly isWithdrawShares: boolean;
    readonly asWithdrawShares: {
      readonly depositId: u128;
      readonly yieldFarmId: u32;
      readonly assetPair: PalletXykAssetPair;
    } & Struct;
    readonly isJoinFarms: boolean;
    readonly asJoinFarms: {
      readonly farmEntries: Vec<ITuple<[u32, u32]>>;
      readonly assetPair: PalletXykAssetPair;
      readonly sharesAmount: u128;
    } & Struct;
    readonly isAddLiquidityAndJoinFarms: boolean;
    readonly asAddLiquidityAndJoinFarms: {
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountBMaxLimit: u128;
      readonly farmEntries: Vec<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isExitFarms: boolean;
    readonly asExitFarms: {
      readonly depositId: u128;
      readonly assetPair: PalletXykAssetPair;
      readonly farmEntries: Vec<u32>;
    } & Struct;
    readonly type: 'CreateGlobalFarm' | 'UpdateGlobalFarm' | 'TerminateGlobalFarm' | 'CreateYieldFarm' | 'UpdateYieldFarm' | 'StopYieldFarm' | 'ResumeYieldFarm' | 'TerminateYieldFarm' | 'DepositShares' | 'RedepositShares' | 'ClaimRewards' | 'WithdrawShares' | 'JoinFarms' | 'AddLiquidityAndJoinFarms' | 'ExitFarms';
  }

  /** @name PalletXykAssetPair (272) */
  interface PalletXykAssetPair extends Struct {
    readonly assetIn: u32;
    readonly assetOut: u32;
  }

  /** @name PalletRelaychainInfoCall (276) */
  type PalletRelaychainInfoCall = Null;

  /** @name PalletDcaCall (277) */
  interface PalletDcaCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly schedule: PalletDcaSchedule;
      readonly startExecutionBlock: Option<u32>;
    } & Struct;
    readonly isTerminate: boolean;
    readonly asTerminate: {
      readonly scheduleId: u32;
      readonly nextExecutionBlock: Option<u32>;
    } & Struct;
    readonly type: 'Schedule' | 'Terminate';
  }

  /** @name PalletDcaSchedule (278) */
  interface PalletDcaSchedule extends Struct {
    readonly owner: AccountId32;
    readonly period: u32;
    readonly totalAmount: u128;
    readonly maxRetries: Option<u8>;
    readonly stabilityThreshold: Option<Permill>;
    readonly slippage: Option<Permill>;
    readonly order: PalletDcaOrder;
  }

  /** @name PalletDcaOrder (280) */
  interface PalletDcaOrder extends Enum {
    readonly isSell: boolean;
    readonly asSell: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly minAmountOut: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly isBuy: boolean;
    readonly asBuy: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountOut: u128;
      readonly maxAmountIn: u128;
      readonly route: Vec<HydradxTraitsRouterTrade>;
    } & Struct;
    readonly type: 'Sell' | 'Buy';
  }

  /** @name PalletSchedulerCall (282) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isSetRetry: boolean;
    readonly asSetRetry: {
      readonly task: ITuple<[u32, u32]>;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isSetRetryNamed: boolean;
    readonly asSetRetryNamed: {
      readonly id: U8aFixed;
      readonly retries: u8;
      readonly period: u32;
    } & Struct;
    readonly isCancelRetry: boolean;
    readonly asCancelRetry: {
      readonly task: ITuple<[u32, u32]>;
    } & Struct;
    readonly isCancelRetryNamed: boolean;
    readonly asCancelRetryNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter' | 'SetRetry' | 'SetRetryNamed' | 'CancelRetry' | 'CancelRetryNamed';
  }

  /** @name CumulusPalletParachainSystemCall (283) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (284) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV7PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV7PersistedValidationData (285) */
  interface PolkadotPrimitivesV7PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (287) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (290) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (293) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name StagingParachainInfoCall (296) */
  type StagingParachainInfoCall = Null;

  /** @name PalletXcmCall (297) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: StagingXcmV4Location;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly isTransferAssets: boolean;
    readonly asTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isClaimAssets: boolean;
    readonly asClaimAssets: {
      readonly assets: XcmVersionedAssets;
      readonly beneficiary: XcmVersionedLocation;
    } & Struct;
    readonly isTransferAssetsUsingTypeAndThen: boolean;
    readonly asTransferAssetsUsingTypeAndThen: {
      readonly dest: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly assetsTransferType: StagingXcmExecutorAssetTransferTransferType;
      readonly remoteFeesId: XcmVersionedAssetId;
      readonly feesTransferType: StagingXcmExecutorAssetTransferTransferType;
      readonly customXcmOnDest: XcmVersionedXcm;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension' | 'TransferAssets' | 'ClaimAssets' | 'TransferAssetsUsingTypeAndThen';
  }

  /** @name XcmVersionedLocation (298) */
  interface XcmVersionedLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Location;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name XcmV2MultiLocation (299) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (300) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (301) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (302) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (304) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (305) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmVersionedXcm (306) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Xcm;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name XcmV2Xcm (307) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (309) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV2MultiassetMultiAssets (310) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (312) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (313) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiassetFungibility (314) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (315) */
  interface XcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmV2Response (316) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (319) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name XcmV2OriginKind (320) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (321) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV2MultiassetMultiAssetFilter (322) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (323) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (324) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (325) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmV3Xcm (326) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (328) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (329) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (331) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetAssetId (332) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV3MultiassetFungibility (333) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (334) */
  interface XcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmV3Response (335) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3TraitsError (338) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name XcmV3PalletInfo (340) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (343) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV3QueryResponseInfo (346) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (347) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (348) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (349) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (350) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name StagingXcmV4Xcm (351) */
  interface StagingXcmV4Xcm extends Vec<StagingXcmV4Instruction> {}

  /** @name StagingXcmV4Instruction (353) */
  interface StagingXcmV4Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV4AssetAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV4AssetAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV4AssetAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV4Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly beneficiary: StagingXcmV4Location;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: StagingXcmV4Junctions;
    readonly isReportError: boolean;
    readonly asReportError: StagingXcmV4QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly beneficiary: StagingXcmV4Location;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV4AssetAssetFilter;
      readonly want: StagingXcmV4AssetAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly reserve: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: StagingXcmV4QueryResponseInfo;
      readonly assets: StagingXcmV4AssetAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV4Asset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV4Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV4Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly ticket: StagingXcmV4Location;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: StagingXcmV4AssetAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: StagingXcmV4AssetAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV4Location>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: StagingXcmV4QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: StagingXcmV4QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: StagingXcmV4Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: StagingXcmV4JunctionNetworkId;
      readonly destination: StagingXcmV4Junctions;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: StagingXcmV4Asset;
      readonly unlocker: StagingXcmV4Location;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: StagingXcmV4Asset;
      readonly target: StagingXcmV4Location;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: StagingXcmV4Asset;
      readonly owner: StagingXcmV4Location;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: StagingXcmV4Asset;
      readonly locker: StagingXcmV4Location;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV4Location;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV4Location>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name StagingXcmV4AssetAssets (354) */
  interface StagingXcmV4AssetAssets extends Vec<StagingXcmV4Asset> {}

  /** @name StagingXcmV4Asset (356) */
  interface StagingXcmV4Asset extends Struct {
    readonly id: StagingXcmV4AssetAssetId;
    readonly fun: StagingXcmV4AssetFungibility;
  }

  /** @name StagingXcmV4AssetAssetId (357) */
  interface StagingXcmV4AssetAssetId extends StagingXcmV4Location {}

  /** @name StagingXcmV4AssetFungibility (358) */
  interface StagingXcmV4AssetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV4AssetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV4AssetAssetInstance (359) */
  interface StagingXcmV4AssetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name StagingXcmV4Response (360) */
  interface StagingXcmV4Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV4AssetAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<StagingXcmV4PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name StagingXcmV4PalletInfo (362) */
  interface StagingXcmV4PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name StagingXcmV4QueryResponseInfo (366) */
  interface StagingXcmV4QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV4Location;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV4AssetAssetFilter (367) */
  interface StagingXcmV4AssetAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV4AssetAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV4AssetWildAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV4AssetWildAsset (368) */
  interface StagingXcmV4AssetWildAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV4AssetAssetId;
      readonly fun: StagingXcmV4AssetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: StagingXcmV4AssetAssetId;
      readonly fun: StagingXcmV4AssetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name StagingXcmV4AssetWildFungibility (369) */
  interface StagingXcmV4AssetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmVersionedAssets (370) */
  interface XcmVersionedAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssets;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name StagingXcmExecutorAssetTransferTransferType (382) */
  interface StagingXcmExecutorAssetTransferTransferType extends Enum {
    readonly isTeleport: boolean;
    readonly isLocalReserve: boolean;
    readonly isDestinationReserve: boolean;
    readonly isRemoteReserve: boolean;
    readonly asRemoteReserve: XcmVersionedLocation;
    readonly type: 'Teleport' | 'LocalReserve' | 'DestinationReserve' | 'RemoteReserve';
  }

  /** @name XcmVersionedAssetId (383) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssetId;
    readonly type: 'V3' | 'V4';
  }

  /** @name CumulusPalletXcmCall (384) */
  type CumulusPalletXcmCall = Null;

  /** @name PalletMessageQueueCall (385) */
  interface PalletMessageQueueCall extends Enum {
    readonly isReapPage: boolean;
    readonly asReapPage: {
      readonly messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly pageIndex: u32;
    } & Struct;
    readonly isExecuteOverweight: boolean;
    readonly asExecuteOverweight: {
      readonly messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly page: u32;
      readonly index: u32;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ReapPage' | 'ExecuteOverweight';
  }

  /** @name CumulusPrimitivesCoreAggregateMessageOrigin (386) */
  interface CumulusPrimitivesCoreAggregateMessageOrigin extends Enum {
    readonly isHere: boolean;
    readonly isParent: boolean;
    readonly isSibling: boolean;
    readonly asSibling: u32;
    readonly type: 'Here' | 'Parent' | 'Sibling';
  }

  /** @name OrmlXcmModuleCall (387) */
  interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean;
    readonly asSendAsSovereign: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'SendAsSovereign';
  }

  /** @name OrmlXtokensModuleCall (388) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedAsset;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedAsset;
      readonly fee: XcmVersionedAsset;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[u32, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedAsset (389) */
  interface XcmVersionedAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Asset;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name PalletCollatorSelectionCall (391) */
  interface PalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly isAddInvulnerable: boolean;
    readonly asAddInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveInvulnerable: boolean;
    readonly asRemoveInvulnerable: {
      readonly who: AccountId32;
    } & Struct;
    readonly isUpdateBond: boolean;
    readonly asUpdateBond: {
      readonly newDeposit: u128;
    } & Struct;
    readonly isTakeCandidateSlot: boolean;
    readonly asTakeCandidateSlot: {
      readonly deposit: u128;
      readonly target: AccountId32;
    } & Struct;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'LeaveIntent' | 'AddInvulnerable' | 'RemoveInvulnerable' | 'UpdateBond' | 'TakeCandidateSlot';
  }

  /** @name PalletSessionCall (392) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: HydradxRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name HydradxRuntimeOpaqueSessionKeys (393) */
  interface HydradxRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (394) */
  interface SpConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name PalletEmaOracleCall (395) */
  interface PalletEmaOracleCall extends Enum {
    readonly isAddOracle: boolean;
    readonly asAddOracle: {
      readonly source: U8aFixed;
      readonly assets: ITuple<[u32, u32]>;
    } & Struct;
    readonly isRemoveOracle: boolean;
    readonly asRemoveOracle: {
      readonly source: U8aFixed;
      readonly assets: ITuple<[u32, u32]>;
    } & Struct;
    readonly type: 'AddOracle' | 'RemoveOracle';
  }

  /** @name SpRuntimeBlakeTwo256 (396) */
  type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletConvictionVotingTally (398) */
  interface PalletConvictionVotingTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly support: u128;
  }

  /** @name PalletWhitelistEvent (399) */
  interface PalletWhitelistEvent extends Enum {
    readonly isCallWhitelisted: boolean;
    readonly asCallWhitelisted: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallRemoved: boolean;
    readonly asWhitelistedCallRemoved: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallDispatched: boolean;
    readonly asWhitelistedCallDispatched: {
      readonly callHash: H256;
      readonly result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>;
    } & Struct;
    readonly type: 'CallWhitelisted' | 'WhitelistedCallRemoved' | 'WhitelistedCallDispatched';
  }

  /** @name FrameSupportDispatchPostDispatchInfo (401) */
  interface FrameSupportDispatchPostDispatchInfo extends Struct {
    readonly actualWeight: Option<SpWeightsWeightV2Weight>;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name SpRuntimeDispatchErrorWithPostInfo (403) */
  interface SpRuntimeDispatchErrorWithPostInfo extends Struct {
    readonly postInfo: FrameSupportDispatchPostDispatchInfo;
    readonly error: SpRuntimeDispatchError;
  }

  /** @name PalletAssetRegistryEvent (404) */
  interface PalletAssetRegistryEvent extends Enum {
    readonly isExistentialDepositPaid: boolean;
    readonly asExistentialDepositPaid: {
      readonly who: AccountId32;
      readonly feeAsset: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRegistered: boolean;
    readonly asRegistered: {
      readonly assetId: u32;
      readonly assetName: Option<Bytes>;
      readonly assetType: PalletAssetRegistryAssetType;
      readonly existentialDeposit: u128;
      readonly xcmRateLimit: Option<u128>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly isSufficient: bool;
    } & Struct;
    readonly isUpdated: boolean;
    readonly asUpdated: {
      readonly assetId: u32;
      readonly assetName: Option<Bytes>;
      readonly assetType: PalletAssetRegistryAssetType;
      readonly existentialDeposit: u128;
      readonly xcmRateLimit: Option<u128>;
      readonly symbol: Option<Bytes>;
      readonly decimals: Option<u8>;
      readonly isSufficient: bool;
    } & Struct;
    readonly isLocationSet: boolean;
    readonly asLocationSet: {
      readonly assetId: u32;
      readonly location: HydradxRuntimeXcmAssetLocation;
    } & Struct;
    readonly isAssetBanned: boolean;
    readonly asAssetBanned: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetUnbanned: boolean;
    readonly asAssetUnbanned: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'ExistentialDepositPaid' | 'Registered' | 'Updated' | 'LocationSet' | 'AssetBanned' | 'AssetUnbanned';
  }

  /** @name PalletClaimsEvent (405) */
  interface PalletClaimsEvent extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: ITuple<[AccountId32, PalletClaimsEthereumAddress, u128]>;
    readonly type: 'Claim';
  }

  /** @name PalletClaimsEthereumAddress (406) */
  interface PalletClaimsEthereumAddress extends U8aFixed {}

  /** @name PalletCollatorRewardsEvent (407) */
  interface PalletCollatorRewardsEvent extends Enum {
    readonly isCollatorRewarded: boolean;
    readonly asCollatorRewarded: {
      readonly who: AccountId32;
      readonly amount: u128;
      readonly currency: u32;
    } & Struct;
    readonly type: 'CollatorRewarded';
  }

  /** @name PalletOmnipoolEvent (408) */
  interface PalletOmnipoolEvent extends Enum {
    readonly isTokenAdded: boolean;
    readonly asTokenAdded: {
      readonly assetId: u32;
      readonly initialAmount: u128;
      readonly initialPrice: u128;
    } & Struct;
    readonly isTokenRemoved: boolean;
    readonly asTokenRemoved: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly hubWithdrawn: u128;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly assetId: u32;
      readonly amount: u128;
      readonly positionId: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly assetId: u32;
      readonly sharesRemoved: u128;
      readonly fee: u128;
    } & Struct;
    readonly isProtocolLiquidityRemoved: boolean;
    readonly asProtocolLiquidityRemoved: {
      readonly who: AccountId32;
      readonly assetId: u32;
      readonly amount: u128;
      readonly hubAmount: u128;
      readonly sharesRemoved: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly hubAmountIn: u128;
      readonly hubAmountOut: u128;
      readonly assetFeeAmount: u128;
      readonly protocolFeeAmount: u128;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly hubAmountIn: u128;
      readonly hubAmountOut: u128;
      readonly assetFeeAmount: u128;
      readonly protocolFeeAmount: u128;
    } & Struct;
    readonly isPositionCreated: boolean;
    readonly asPositionCreated: {
      readonly positionId: u128;
      readonly owner: AccountId32;
      readonly asset: u32;
      readonly amount: u128;
      readonly shares: u128;
      readonly price: u128;
    } & Struct;
    readonly isPositionDestroyed: boolean;
    readonly asPositionDestroyed: {
      readonly positionId: u128;
      readonly owner: AccountId32;
    } & Struct;
    readonly isPositionUpdated: boolean;
    readonly asPositionUpdated: {
      readonly positionId: u128;
      readonly owner: AccountId32;
      readonly asset: u32;
      readonly amount: u128;
      readonly shares: u128;
      readonly price: u128;
    } & Struct;
    readonly isTradableStateUpdated: boolean;
    readonly asTradableStateUpdated: {
      readonly assetId: u32;
      readonly state: PalletOmnipoolTradability;
    } & Struct;
    readonly isAssetRefunded: boolean;
    readonly asAssetRefunded: {
      readonly assetId: u32;
      readonly amount: u128;
      readonly recipient: AccountId32;
    } & Struct;
    readonly isAssetWeightCapUpdated: boolean;
    readonly asAssetWeightCapUpdated: {
      readonly assetId: u32;
      readonly cap: Permill;
    } & Struct;
    readonly type: 'TokenAdded' | 'TokenRemoved' | 'LiquidityAdded' | 'LiquidityRemoved' | 'ProtocolLiquidityRemoved' | 'SellExecuted' | 'BuyExecuted' | 'PositionCreated' | 'PositionDestroyed' | 'PositionUpdated' | 'TradableStateUpdated' | 'AssetRefunded' | 'AssetWeightCapUpdated';
  }

  /** @name PalletTransactionPauseEvent (409) */
  interface PalletTransactionPauseEvent extends Enum {
    readonly isTransactionPaused: boolean;
    readonly asTransactionPaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly isTransactionUnpaused: boolean;
    readonly asTransactionUnpaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly type: 'TransactionPaused' | 'TransactionUnpaused';
  }

  /** @name PalletDusterEvent (410) */
  interface PalletDusterEvent extends Enum {
    readonly isDusted: boolean;
    readonly asDusted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoved: boolean;
    readonly asRemoved: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Dusted' | 'Added' | 'Removed';
  }

  /** @name PalletLiquidityMiningEvent (411) */
  interface PalletLiquidityMiningEvent extends Enum {
    readonly isGlobalFarmAccRPZUpdated: boolean;
    readonly asGlobalFarmAccRPZUpdated: {
      readonly globalFarmId: u32;
      readonly accumulatedRpz: u128;
      readonly totalSharesZ: u128;
    } & Struct;
    readonly isYieldFarmAccRPVSUpdated: boolean;
    readonly asYieldFarmAccRPVSUpdated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly accumulatedRpvs: u128;
      readonly totalValuedShares: u128;
    } & Struct;
    readonly isAllRewardsDistributed: boolean;
    readonly asAllRewardsDistributed: {
      readonly globalFarmId: u32;
    } & Struct;
    readonly type: 'GlobalFarmAccRPZUpdated' | 'YieldFarmAccRPVSUpdated' | 'AllRewardsDistributed';
  }

  /** @name PalletOmnipoolLiquidityMiningEvent (412) */
  interface PalletOmnipoolLiquidityMiningEvent extends Enum {
    readonly isGlobalFarmCreated: boolean;
    readonly asGlobalFarmCreated: {
      readonly id: u32;
      readonly owner: AccountId32;
      readonly totalRewards: u128;
      readonly rewardCurrency: u32;
      readonly yieldPerPeriod: Perquintill;
      readonly plannedYieldingPeriods: u32;
      readonly blocksPerPeriod: u32;
      readonly maxRewardPerPeriod: u128;
      readonly minDeposit: u128;
      readonly lrnaPriceAdjustment: u128;
    } & Struct;
    readonly isGlobalFarmUpdated: boolean;
    readonly asGlobalFarmUpdated: {
      readonly id: u32;
      readonly plannedYieldingPeriods: u32;
      readonly yieldPerPeriod: Perquintill;
      readonly minDeposit: u128;
    } & Struct;
    readonly isGlobalFarmTerminated: boolean;
    readonly asGlobalFarmTerminated: {
      readonly globalFarmId: u32;
      readonly who: AccountId32;
      readonly rewardCurrency: u32;
      readonly undistributedRewards: u128;
    } & Struct;
    readonly isYieldFarmCreated: boolean;
    readonly asYieldFarmCreated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly multiplier: u128;
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    } & Struct;
    readonly isYieldFarmUpdated: boolean;
    readonly asYieldFarmUpdated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly multiplier: u128;
    } & Struct;
    readonly isYieldFarmStopped: boolean;
    readonly asYieldFarmStopped: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isYieldFarmResumed: boolean;
    readonly asYieldFarmResumed: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly multiplier: u128;
    } & Struct;
    readonly isYieldFarmTerminated: boolean;
    readonly asYieldFarmTerminated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isSharesDeposited: boolean;
    readonly asSharesDeposited: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly depositId: u128;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly sharesAmount: u128;
      readonly positionId: u128;
    } & Struct;
    readonly isSharesRedeposited: boolean;
    readonly asSharesRedeposited: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly depositId: u128;
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly sharesAmount: u128;
      readonly positionId: u128;
    } & Struct;
    readonly isRewardClaimed: boolean;
    readonly asRewardClaimed: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly claimed: u128;
      readonly rewardCurrency: u32;
      readonly depositId: u128;
    } & Struct;
    readonly isSharesWithdrawn: boolean;
    readonly asSharesWithdrawn: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
      readonly depositId: u128;
    } & Struct;
    readonly isDepositDestroyed: boolean;
    readonly asDepositDestroyed: {
      readonly who: AccountId32;
      readonly depositId: u128;
    } & Struct;
    readonly type: 'GlobalFarmCreated' | 'GlobalFarmUpdated' | 'GlobalFarmTerminated' | 'YieldFarmCreated' | 'YieldFarmUpdated' | 'YieldFarmStopped' | 'YieldFarmResumed' | 'YieldFarmTerminated' | 'SharesDeposited' | 'SharesRedeposited' | 'RewardClaimed' | 'SharesWithdrawn' | 'DepositDestroyed';
  }

  /** @name PalletOtcEvent (413) */
  interface PalletOtcEvent extends Enum {
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly orderId: u32;
    } & Struct;
    readonly isFilled: boolean;
    readonly asFilled: {
      readonly orderId: u32;
      readonly who: AccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly fee: u128;
    } & Struct;
    readonly isPartiallyFilled: boolean;
    readonly asPartiallyFilled: {
      readonly orderId: u32;
      readonly who: AccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly fee: u128;
    } & Struct;
    readonly isPlaced: boolean;
    readonly asPlaced: {
      readonly orderId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly partiallyFillable: bool;
    } & Struct;
    readonly type: 'Cancelled' | 'Filled' | 'PartiallyFilled' | 'Placed';
  }

  /** @name PalletCircuitBreakerEvent (414) */
  interface PalletCircuitBreakerEvent extends Enum {
    readonly isTradeVolumeLimitChanged: boolean;
    readonly asTradeVolumeLimitChanged: {
      readonly assetId: u32;
      readonly tradeVolumeLimit: ITuple<[u32, u32]>;
    } & Struct;
    readonly isAddLiquidityLimitChanged: boolean;
    readonly asAddLiquidityLimitChanged: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isRemoveLiquidityLimitChanged: boolean;
    readonly asRemoveLiquidityLimitChanged: {
      readonly assetId: u32;
      readonly liquidityLimit: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly type: 'TradeVolumeLimitChanged' | 'AddLiquidityLimitChanged' | 'RemoveLiquidityLimitChanged';
  }

  /** @name PalletRouteExecutorEvent (415) */
  interface PalletRouteExecutorEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
    } & Struct;
    readonly isRouteUpdated: boolean;
    readonly asRouteUpdated: {
      readonly assetIds: Vec<u32>;
    } & Struct;
    readonly type: 'Executed' | 'RouteUpdated';
  }

  /** @name PalletDynamicFeesEvent (416) */
  type PalletDynamicFeesEvent = Null;

  /** @name PalletStakingEvent (417) */
  interface PalletStakingEvent extends Enum {
    readonly isPositionCreated: boolean;
    readonly asPositionCreated: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly stake: u128;
    } & Struct;
    readonly isStakeAdded: boolean;
    readonly asStakeAdded: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly stake: u128;
      readonly totalStake: u128;
      readonly lockedRewards: u128;
      readonly slashedPoints: u128;
      readonly payablePercentage: u128;
    } & Struct;
    readonly isRewardsClaimed: boolean;
    readonly asRewardsClaimed: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly paidRewards: u128;
      readonly unlockedRewards: u128;
      readonly slashedPoints: u128;
      readonly slashedUnpaidRewards: u128;
      readonly payablePercentage: u128;
    } & Struct;
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly who: AccountId32;
      readonly positionId: u128;
      readonly unlockedStake: u128;
    } & Struct;
    readonly isStakingInitialized: boolean;
    readonly asStakingInitialized: {
      readonly nonDustableBalance: u128;
    } & Struct;
    readonly isAccumulatedRpsUpdated: boolean;
    readonly asAccumulatedRpsUpdated: {
      readonly accumulatedRps: u128;
      readonly totalStake: u128;
    } & Struct;
    readonly type: 'PositionCreated' | 'StakeAdded' | 'RewardsClaimed' | 'Unstaked' | 'StakingInitialized' | 'AccumulatedRpsUpdated';
  }

  /** @name PalletStableswapEvent (418) */
  interface PalletStableswapEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly poolId: u32;
      readonly assets: Vec<u32>;
      readonly amplification: u16;
      readonly fee: Permill;
    } & Struct;
    readonly isFeeUpdated: boolean;
    readonly asFeeUpdated: {
      readonly poolId: u32;
      readonly fee: Permill;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly poolId: u32;
      readonly who: AccountId32;
      readonly shares: u128;
      readonly assets: Vec<PalletStableswapAssetAmount>;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly poolId: u32;
      readonly who: AccountId32;
      readonly shares: u128;
      readonly amounts: Vec<PalletStableswapAssetAmount>;
      readonly fee: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly poolId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly fee: u128;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly poolId: u32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amountIn: u128;
      readonly amountOut: u128;
      readonly fee: u128;
    } & Struct;
    readonly isTradableStateUpdated: boolean;
    readonly asTradableStateUpdated: {
      readonly poolId: u32;
      readonly assetId: u32;
      readonly state: PalletStableswapTradability;
    } & Struct;
    readonly isAmplificationChanging: boolean;
    readonly asAmplificationChanging: {
      readonly poolId: u32;
      readonly currentAmplification: u16;
      readonly finalAmplification: u16;
      readonly startBlock: u32;
      readonly endBlock: u32;
    } & Struct;
    readonly isPoolDestroyed: boolean;
    readonly asPoolDestroyed: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'PoolCreated' | 'FeeUpdated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'SellExecuted' | 'BuyExecuted' | 'TradableStateUpdated' | 'AmplificationChanging' | 'PoolDestroyed';
  }

  /** @name PalletBondsEvent (420) */
  interface PalletBondsEvent extends Enum {
    readonly isTokenCreated: boolean;
    readonly asTokenCreated: {
      readonly issuer: AccountId32;
      readonly assetId: u32;
      readonly bondId: u32;
      readonly maturity: u64;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly issuer: AccountId32;
      readonly bondId: u32;
      readonly amount: u128;
      readonly fee: u128;
    } & Struct;
    readonly isRedeemed: boolean;
    readonly asRedeemed: {
      readonly who: AccountId32;
      readonly bondId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'TokenCreated' | 'Issued' | 'Redeemed';
  }

  /** @name PalletOtcSettlementsEvent (421) */
  interface PalletOtcSettlementsEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly assetId: u32;
      readonly profit: u128;
    } & Struct;
    readonly type: 'Executed';
  }

  /** @name PalletLbpEvent (422) */
  interface PalletLbpEvent extends Enum {
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly pool: AccountId32;
      readonly data: PalletLbpPool;
    } & Struct;
    readonly isPoolUpdated: boolean;
    readonly asPoolUpdated: {
      readonly pool: AccountId32;
      readonly data: PalletLbpPool;
    } & Struct;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountB: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountB: u128;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly salePrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly buyPrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
    } & Struct;
    readonly type: 'PoolCreated' | 'PoolUpdated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'SellExecuted' | 'BuyExecuted';
  }

  /** @name PalletLbpPool (423) */
  interface PalletLbpPool extends Struct {
    readonly owner: AccountId32;
    readonly start: Option<u32>;
    readonly end: Option<u32>;
    readonly assets: ITuple<[u32, u32]>;
    readonly initialWeight: u32;
    readonly finalWeight: u32;
    readonly weightCurve: PalletLbpWeightCurveType;
    readonly fee: ITuple<[u32, u32]>;
    readonly feeCollector: AccountId32;
    readonly repayTarget: u128;
  }

  /** @name PalletXykEvent (424) */
  interface PalletXykEvent extends Enum {
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly amountA: u128;
      readonly amountB: u128;
    } & Struct;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly shares: u128;
    } & Struct;
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly initialSharesAmount: u128;
      readonly shareToken: u32;
      readonly pool: AccountId32;
    } & Struct;
    readonly isPoolDestroyed: boolean;
    readonly asPoolDestroyed: {
      readonly who: AccountId32;
      readonly assetA: u32;
      readonly assetB: u32;
      readonly shareToken: u32;
      readonly pool: AccountId32;
    } & Struct;
    readonly isSellExecuted: boolean;
    readonly asSellExecuted: {
      readonly who: AccountId32;
      readonly assetIn: u32;
      readonly assetOut: u32;
      readonly amount: u128;
      readonly salePrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
      readonly pool: AccountId32;
    } & Struct;
    readonly isBuyExecuted: boolean;
    readonly asBuyExecuted: {
      readonly who: AccountId32;
      readonly assetOut: u32;
      readonly assetIn: u32;
      readonly amount: u128;
      readonly buyPrice: u128;
      readonly feeAsset: u32;
      readonly feeAmount: u128;
      readonly pool: AccountId32;
    } & Struct;
    readonly type: 'LiquidityAdded' | 'LiquidityRemoved' | 'PoolCreated' | 'PoolDestroyed' | 'SellExecuted' | 'BuyExecuted';
  }

  /** @name PalletReferralsEvent (425) */
  interface PalletReferralsEvent extends Enum {
    readonly isCodeRegistered: boolean;
    readonly asCodeRegistered: {
      readonly code: Bytes;
      readonly account: AccountId32;
    } & Struct;
    readonly isCodeLinked: boolean;
    readonly asCodeLinked: {
      readonly account: AccountId32;
      readonly code: Bytes;
      readonly referralAccount: AccountId32;
    } & Struct;
    readonly isConverted: boolean;
    readonly asConverted: {
      readonly from: PalletReferralsAssetAmount;
      readonly to: PalletReferralsAssetAmount;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly referrerRewards: u128;
      readonly tradeRewards: u128;
    } & Struct;
    readonly isAssetRewardsUpdated: boolean;
    readonly asAssetRewardsUpdated: {
      readonly assetId: u32;
      readonly level: PalletReferralsLevel;
      readonly rewards: PalletReferralsFeeDistribution;
    } & Struct;
    readonly isLevelUp: boolean;
    readonly asLevelUp: {
      readonly who: AccountId32;
      readonly level: PalletReferralsLevel;
    } & Struct;
    readonly type: 'CodeRegistered' | 'CodeLinked' | 'Converted' | 'Claimed' | 'AssetRewardsUpdated' | 'LevelUp';
  }

  /** @name PalletReferralsAssetAmount (426) */
  interface PalletReferralsAssetAmount extends Struct {
    readonly assetId: u32;
    readonly amount: u128;
  }

  /** @name PalletLiquidationEvent (427) */
  interface PalletLiquidationEvent extends Enum {
    readonly isLiquidated: boolean;
    readonly asLiquidated: {
      readonly liquidator: AccountId32;
      readonly evmAddress: H160;
      readonly collateralAsset: u32;
      readonly debtAsset: u32;
      readonly debtToCover: u128;
      readonly profit: u128;
    } & Struct;
    readonly type: 'Liquidated';
  }

  /** @name OrmlTokensModuleEvent (428) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly currencyId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked' | 'Issued' | 'Rescinded';
  }

  /** @name PalletCurrenciesModuleEvent (429) */
  interface PalletCurrenciesModuleEvent extends Enum {
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly currencyId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceUpdated: boolean;
    readonly asBalanceUpdated: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transferred' | 'BalanceUpdated' | 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlVestingModuleEvent (430) */
  interface OrmlVestingModuleEvent extends Enum {
    readonly isVestingScheduleAdded: boolean;
    readonly asVestingScheduleAdded: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly vestingSchedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isVestingSchedulesUpdated: boolean;
    readonly asVestingSchedulesUpdated: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'VestingScheduleAdded' | 'Claimed' | 'VestingSchedulesUpdated';
  }

  /** @name PalletEvmEvent (431) */
  interface PalletEvmEvent extends Enum {
    readonly isLog: boolean;
    readonly asLog: {
      readonly log: EthereumLog;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly address: H160;
    } & Struct;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: {
      readonly address: H160;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly address: H160;
    } & Struct;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: {
      readonly address: H160;
    } & Struct;
    readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed';
  }

  /** @name EthereumLog (432) */
  interface EthereumLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name PalletEthereumEvent (433) */
  interface PalletEthereumEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly from: H160;
      readonly to: H160;
      readonly transactionHash: H256;
      readonly exitReason: EvmCoreErrorExitReason;
      readonly extraData: Bytes;
    } & Struct;
    readonly type: 'Executed';
  }

  /** @name EvmCoreErrorExitReason (434) */
  interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean;
    readonly asSucceed: EvmCoreErrorExitSucceed;
    readonly isError: boolean;
    readonly asError: EvmCoreErrorExitError;
    readonly isRevert: boolean;
    readonly asRevert: EvmCoreErrorExitRevert;
    readonly isFatal: boolean;
    readonly asFatal: EvmCoreErrorExitFatal;
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
  }

  /** @name EvmCoreErrorExitSucceed (435) */
  interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean;
    readonly isReturned: boolean;
    readonly isSuicided: boolean;
    readonly type: 'Stopped' | 'Returned' | 'Suicided';
  }

  /** @name EvmCoreErrorExitError (436) */
  interface EvmCoreErrorExitError extends Enum {
    readonly isStackUnderflow: boolean;
    readonly isStackOverflow: boolean;
    readonly isInvalidJump: boolean;
    readonly isInvalidRange: boolean;
    readonly isDesignatedInvalid: boolean;
    readonly isCallTooDeep: boolean;
    readonly isCreateCollision: boolean;
    readonly isCreateContractLimit: boolean;
    readonly isOutOfOffset: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutOfFund: boolean;
    readonly isPcUnderflow: boolean;
    readonly isCreateEmpty: boolean;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly isMaxNonce: boolean;
    readonly isInvalidCode: boolean;
    readonly asInvalidCode: u8;
    readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'MaxNonce' | 'InvalidCode';
  }

  /** @name EvmCoreErrorExitRevert (440) */
  interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean;
    readonly type: 'Reverted';
  }

  /** @name EvmCoreErrorExitFatal (441) */
  interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean;
    readonly isUnhandledInterrupt: boolean;
    readonly isCallErrorAsFatal: boolean;
    readonly asCallErrorAsFatal: EvmCoreErrorExitError;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
  }

  /** @name PalletEvmAccountsEvent (442) */
  interface PalletEvmAccountsEvent extends Enum {
    readonly isBound: boolean;
    readonly asBound: {
      readonly account: AccountId32;
      readonly address: H160;
    } & Struct;
    readonly isDeployerAdded: boolean;
    readonly asDeployerAdded: {
      readonly who: H160;
    } & Struct;
    readonly isDeployerRemoved: boolean;
    readonly asDeployerRemoved: {
      readonly who: H160;
    } & Struct;
    readonly isContractApproved: boolean;
    readonly asContractApproved: {
      readonly address: H160;
    } & Struct;
    readonly isContractDisapproved: boolean;
    readonly asContractDisapproved: {
      readonly address: H160;
    } & Struct;
    readonly type: 'Bound' | 'DeployerAdded' | 'DeployerRemoved' | 'ContractApproved' | 'ContractDisapproved';
  }

  /** @name PalletXykLiquidityMiningEvent (443) */
  interface PalletXykLiquidityMiningEvent extends Enum {
    readonly isGlobalFarmCreated: boolean;
    readonly asGlobalFarmCreated: {
      readonly id: u32;
      readonly owner: AccountId32;
      readonly totalRewards: u128;
      readonly rewardCurrency: u32;
      readonly yieldPerPeriod: Perquintill;
      readonly plannedYieldingPeriods: u32;
      readonly blocksPerPeriod: u32;
      readonly incentivizedAsset: u32;
      readonly maxRewardPerPeriod: u128;
      readonly minDeposit: u128;
      readonly priceAdjustment: u128;
    } & Struct;
    readonly isGlobalFarmUpdated: boolean;
    readonly asGlobalFarmUpdated: {
      readonly id: u32;
      readonly priceAdjustment: u128;
    } & Struct;
    readonly isYieldFarmCreated: boolean;
    readonly asYieldFarmCreated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly multiplier: u128;
      readonly assetPair: PalletXykAssetPair;
      readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    } & Struct;
    readonly isGlobalFarmTerminated: boolean;
    readonly asGlobalFarmTerminated: {
      readonly globalFarmId: u32;
      readonly who: AccountId32;
      readonly rewardCurrency: u32;
      readonly undistributedRewards: u128;
    } & Struct;
    readonly isSharesDeposited: boolean;
    readonly asSharesDeposited: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
      readonly lpToken: u32;
      readonly depositId: u128;
    } & Struct;
    readonly isSharesRedeposited: boolean;
    readonly asSharesRedeposited: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly amount: u128;
      readonly lpToken: u32;
      readonly depositId: u128;
    } & Struct;
    readonly isRewardClaimed: boolean;
    readonly asRewardClaimed: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly claimed: u128;
      readonly rewardCurrency: u32;
      readonly depositId: u128;
    } & Struct;
    readonly isSharesWithdrawn: boolean;
    readonly asSharesWithdrawn: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly lpToken: u32;
      readonly amount: u128;
      readonly depositId: u128;
    } & Struct;
    readonly isYieldFarmStopped: boolean;
    readonly asYieldFarmStopped: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly assetPair: PalletXykAssetPair;
    } & Struct;
    readonly isYieldFarmResumed: boolean;
    readonly asYieldFarmResumed: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly assetPair: PalletXykAssetPair;
      readonly multiplier: u128;
    } & Struct;
    readonly isYieldFarmTerminated: boolean;
    readonly asYieldFarmTerminated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly assetPair: PalletXykAssetPair;
    } & Struct;
    readonly isYieldFarmUpdated: boolean;
    readonly asYieldFarmUpdated: {
      readonly globalFarmId: u32;
      readonly yieldFarmId: u32;
      readonly who: AccountId32;
      readonly assetPair: PalletXykAssetPair;
      readonly multiplier: u128;
    } & Struct;
    readonly isDepositDestroyed: boolean;
    readonly asDepositDestroyed: {
      readonly who: AccountId32;
      readonly depositId: u128;
    } & Struct;
    readonly type: 'GlobalFarmCreated' | 'GlobalFarmUpdated' | 'YieldFarmCreated' | 'GlobalFarmTerminated' | 'SharesDeposited' | 'SharesRedeposited' | 'RewardClaimed' | 'SharesWithdrawn' | 'YieldFarmStopped' | 'YieldFarmResumed' | 'YieldFarmTerminated' | 'YieldFarmUpdated' | 'DepositDestroyed';
  }

  /** @name PalletRelaychainInfoEvent (445) */
  interface PalletRelaychainInfoEvent extends Enum {
    readonly isCurrentBlockNumbers: boolean;
    readonly asCurrentBlockNumbers: {
      readonly parachainBlockNumber: u32;
      readonly relaychainBlockNumber: u32;
    } & Struct;
    readonly type: 'CurrentBlockNumbers';
  }

  /** @name PalletDcaEvent (446) */
  interface PalletDcaEvent extends Enum {
    readonly isExecutionStarted: boolean;
    readonly asExecutionStarted: {
      readonly id: u32;
      readonly block: u32;
    } & Struct;
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly period: u32;
      readonly totalAmount: u128;
      readonly order: PalletDcaOrder;
    } & Struct;
    readonly isExecutionPlanned: boolean;
    readonly asExecutionPlanned: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly block: u32;
    } & Struct;
    readonly isTradeExecuted: boolean;
    readonly asTradeExecuted: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly amountIn: u128;
      readonly amountOut: u128;
    } & Struct;
    readonly isTradeFailed: boolean;
    readonly asTradeFailed: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly id: u32;
      readonly who: AccountId32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isCompleted: boolean;
    readonly asCompleted: {
      readonly id: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isRandomnessGenerationFailed: boolean;
    readonly asRandomnessGenerationFailed: {
      readonly block: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly type: 'ExecutionStarted' | 'Scheduled' | 'ExecutionPlanned' | 'TradeExecuted' | 'TradeFailed' | 'Terminated' | 'Completed' | 'RandomnessGenerationFailed';
  }

  /** @name PalletSchedulerEvent (447) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isRetrySet: boolean;
    readonly asRetrySet: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly period: u32;
      readonly retries: u8;
    } & Struct;
    readonly isRetryCancelled: boolean;
    readonly asRetryCancelled: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isRetryFailed: boolean;
    readonly asRetryFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'RetrySet' | 'RetryCancelled' | 'CallUnavailable' | 'PeriodicFailed' | 'RetryFailed' | 'PermanentlyOverweight';
  }

  /** @name CumulusPalletParachainSystemEvent (449) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name PalletXcmEvent (450) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: StagingXcmV4TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV4Location;
      readonly destination: StagingXcmV4Location;
      readonly message: StagingXcmV4Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: StagingXcmV4Response;
    } & Struct;
    readonly isNotified: boolean;
    readonly asNotified: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
      readonly actualWeight: SpWeightsWeightV2Weight;
      readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV4Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV4Location;
      readonly result: u32;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV4Location;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV4Location;
      readonly queryId: u64;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: XcmVersionedLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV4Location;
      readonly maybeActualQuerier: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV4Location;
      readonly fees: StagingXcmV4AssetAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV4Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionMigrationFinished: boolean;
    readonly asVersionMigrationFinished: {
      readonly version: u32;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed' | 'VersionMigrationFinished';
  }

  /** @name StagingXcmV4TraitsOutcome (451) */
  interface StagingXcmV4TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: {
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isIncomplete: boolean;
    readonly asIncomplete: {
      readonly used: SpWeightsWeightV2Weight;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isError: boolean;
    readonly asError: {
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name CumulusPalletXcmEvent (452) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, StagingXcmV4TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name CumulusPalletXcmpQueueEvent (453) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: U8aFixed;
    } & Struct;
    readonly type: 'XcmpMessageSent';
  }

  /** @name PalletMessageQueueEvent (454) */
  interface PalletMessageQueueEvent extends Enum {
    readonly isProcessingFailed: boolean;
    readonly asProcessingFailed: {
      readonly id: H256;
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly error: FrameSupportMessagesProcessMessageError;
    } & Struct;
    readonly isProcessed: boolean;
    readonly asProcessed: {
      readonly id: H256;
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly success: bool;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly id: U8aFixed;
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly pageIndex: u32;
      readonly messageIndex: u32;
    } & Struct;
    readonly isPageReaped: boolean;
    readonly asPageReaped: {
      readonly origin: CumulusPrimitivesCoreAggregateMessageOrigin;
      readonly index: u32;
    } & Struct;
    readonly type: 'ProcessingFailed' | 'Processed' | 'OverweightEnqueued' | 'PageReaped';
  }

  /** @name FrameSupportMessagesProcessMessageError (455) */
  interface FrameSupportMessagesProcessMessageError extends Enum {
    readonly isBadFormat: boolean;
    readonly isCorrupt: boolean;
    readonly isUnsupported: boolean;
    readonly isOverweight: boolean;
    readonly asOverweight: SpWeightsWeightV2Weight;
    readonly isYield: boolean;
    readonly type: 'BadFormat' | 'Corrupt' | 'Unsupported' | 'Overweight' | 'Yield';
  }

  /** @name OrmlXcmModuleEvent (456) */
  interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean;
    readonly asSent: {
      readonly to: StagingXcmV4Location;
      readonly message: StagingXcmV4Xcm;
    } & Struct;
    readonly type: 'Sent';
  }

  /** @name OrmlXtokensModuleEvent (457) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredAssets: boolean;
    readonly asTransferredAssets: {
      readonly sender: AccountId32;
      readonly assets: StagingXcmV4AssetAssets;
      readonly fee: StagingXcmV4Asset;
      readonly dest: StagingXcmV4Location;
    } & Struct;
    readonly type: 'TransferredAssets';
  }

  /** @name OrmlUnknownTokensModuleEvent (458) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: StagingXcmV4Asset;
      readonly who: StagingXcmV4Location;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: StagingXcmV4Asset;
      readonly who: StagingXcmV4Location;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name PalletCollatorSelectionEvent (459) */
  interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isInvulnerableAdded: boolean;
    readonly asInvulnerableAdded: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isInvulnerableRemoved: boolean;
    readonly asInvulnerableRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly desiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly bondAmount: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateBondUpdated: boolean;
    readonly asCandidateBondUpdated: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isCandidateReplaced: boolean;
    readonly asCandidateReplaced: {
      readonly old: AccountId32;
      readonly new_: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isInvalidInvulnerableSkipped: boolean;
    readonly asInvalidInvulnerableSkipped: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'InvulnerableAdded' | 'InvulnerableRemoved' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateBondUpdated' | 'CandidateRemoved' | 'CandidateReplaced' | 'InvalidInvulnerableSkipped';
  }

  /** @name PalletSessionEvent (460) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletEmaOracleEvent (461) */
  interface PalletEmaOracleEvent extends Enum {
    readonly isAddedToWhitelist: boolean;
    readonly asAddedToWhitelist: {
      readonly source: U8aFixed;
      readonly assets: ITuple<[u32, u32]>;
    } & Struct;
    readonly isRemovedFromWhitelist: boolean;
    readonly asRemovedFromWhitelist: {
      readonly source: U8aFixed;
      readonly assets: ITuple<[u32, u32]>;
    } & Struct;
    readonly type: 'AddedToWhitelist' | 'RemovedFromWhitelist';
  }

  /** @name FrameSystemPhase (462) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (463) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCodeUpgradeAuthorization (464) */
  interface FrameSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name FrameSystemLimitsBlockWeights (465) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (466) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (467) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (468) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (469) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (470) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (471) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (475) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly isMultiBlockMigrationsOngoing: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered' | 'MultiBlockMigrationsOngoing' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletBalancesBalanceLock (477) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (478) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (481) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name HydradxRuntimeRuntimeHoldReason (485) */
  interface HydradxRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly type: 'Preimage' | 'StateTrieMigration';
  }

  /** @name PalletPreimageHoldReason (486) */
  interface PalletPreimageHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly type: 'Preimage';
  }

  /** @name PalletStateTrieMigrationHoldReason (487) */
  interface PalletStateTrieMigrationHoldReason extends Enum {
    readonly isSlashForMigrate: boolean;
    readonly type: 'SlashForMigrate';
  }

  /** @name PalletBalancesIdAmount (490) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (492) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly isIssuanceDeactivated: boolean;
    readonly isDeltaZero: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes' | 'IssuanceDeactivated' | 'DeltaZero';
  }

  /** @name PalletTransactionPaymentReleases (493) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletTransactionMultiPaymentError (494) */
  interface PalletTransactionMultiPaymentError extends Enum {
    readonly isUnsupportedCurrency: boolean;
    readonly isZeroBalance: boolean;
    readonly isAlreadyAccepted: boolean;
    readonly isCoreAssetNotAllowed: boolean;
    readonly isZeroPrice: boolean;
    readonly isFallbackPriceNotFound: boolean;
    readonly isOverflow: boolean;
    readonly isEvmAccountNotAllowed: boolean;
    readonly isEvmPermitExpired: boolean;
    readonly isEvmPermitInvalid: boolean;
    readonly isEvmPermitCallExecutionError: boolean;
    readonly isEvmPermitRunnerError: boolean;
    readonly type: 'UnsupportedCurrency' | 'ZeroBalance' | 'AlreadyAccepted' | 'CoreAssetNotAllowed' | 'ZeroPrice' | 'FallbackPriceNotFound' | 'Overflow' | 'EvmAccountNotAllowed' | 'EvmPermitExpired' | 'EvmPermitInvalid' | 'EvmPermitCallExecutionError' | 'EvmPermitRunnerError';
  }

  /** @name PalletTreasuryProposal (495) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name PalletTreasurySpendStatus (497) */
  interface PalletTreasurySpendStatus extends Struct {
    readonly assetKind: Null;
    readonly amount: u128;
    readonly beneficiary: AccountId32;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PalletTreasuryPaymentState;
  }

  /** @name PalletTreasuryPaymentState (498) */
  interface PalletTreasuryPaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: Null;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name FrameSupportPalletId (499) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (500) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly isFailedToConvertBalance: boolean;
    readonly isSpendExpired: boolean;
    readonly isEarlyPayout: boolean;
    readonly isAlreadyAttempted: boolean;
    readonly isPayoutError: boolean;
    readonly isNotAttempted: boolean;
    readonly isInconclusive: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved' | 'FailedToConvertBalance' | 'SpendExpired' | 'EarlyPayout' | 'AlreadyAttempted' | 'PayoutError' | 'NotAttempted' | 'Inconclusive';
  }

  /** @name PalletUtilityError (501) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletPreimageOldRequestStatus (502) */
  interface PalletPreimageOldRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageRequestStatus (504) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (510) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly isTooMany: boolean;
    readonly isTooFew: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested' | 'TooMany' | 'TooFew';
  }

  /** @name PalletIdentityRegistration (512) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityLegacyIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (521) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: u64;
  }

  /** @name PalletIdentityAuthorityProperties (523) */
  interface PalletIdentityAuthorityProperties extends Struct {
    readonly suffix: Bytes;
    readonly allocation: u32;
  }

  /** @name PalletIdentityError (526) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly isInvalidSuffix: boolean;
    readonly isNotUsernameAuthority: boolean;
    readonly isNoAllocation: boolean;
    readonly isInvalidSignature: boolean;
    readonly isRequiresSignature: boolean;
    readonly isInvalidUsername: boolean;
    readonly isUsernameTaken: boolean;
    readonly isNoUsername: boolean;
    readonly isNotExpired: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed' | 'InvalidSuffix' | 'NotUsernameAuthority' | 'NoAllocation' | 'InvalidSignature' | 'RequiresSignature' | 'InvalidUsername' | 'UsernameTaken' | 'NoUsername' | 'NotExpired';
  }

  /** @name PalletDemocracyReferendumInfo (532) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (533) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (534) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (535) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (539) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (540) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (543) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletElectionsPhragmenSeatHolder (545) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (546) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (547) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletCollectiveVotes (549) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (550) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly isPrimeAccountNotMember: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength' | 'PrimeAccountNotMember';
  }

  /** @name PalletTipsOpenTip (553) */
  interface PalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: AccountId32;
    readonly finder: AccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[AccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PalletTipsError (555) */
  interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isMaxTipAmountExceeded: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'MaxTipAmountExceeded' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletProxyProxyDefinition (558) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: HydradxRuntimeSystemProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (562) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (564) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMultisigMultisig (566) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (568) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletUniquesCollectionDetails (569) */
  interface PalletUniquesCollectionDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly totalDeposit: u128;
    readonly freeHolding: bool;
    readonly items: u32;
    readonly itemMetadatas: u32;
    readonly attributes: u32;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemDetails (571) */
  interface PalletUniquesItemDetails extends Struct {
    readonly owner: AccountId32;
    readonly approved: Option<AccountId32>;
    readonly isFrozen: bool;
    readonly deposit: u128;
  }

  /** @name PalletUniquesCollectionMetadata (572) */
  interface PalletUniquesCollectionMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesItemMetadata (573) */
  interface PalletUniquesItemMetadata extends Struct {
    readonly deposit: u128;
    readonly data: Bytes;
    readonly isFrozen: bool;
  }

  /** @name PalletUniquesError (577) */
  interface PalletUniquesError extends Enum {
    readonly isNoPermission: boolean;
    readonly isUnknownCollection: boolean;
    readonly isAlreadyExists: boolean;
    readonly isWrongOwner: boolean;
    readonly isBadWitness: boolean;
    readonly isInUse: boolean;
    readonly isFrozen: boolean;
    readonly isWrongDelegate: boolean;
    readonly isNoDelegate: boolean;
    readonly isUnapproved: boolean;
    readonly isUnaccepted: boolean;
    readonly isLocked: boolean;
    readonly isMaxSupplyReached: boolean;
    readonly isMaxSupplyAlreadySet: boolean;
    readonly isMaxSupplyTooSmall: boolean;
    readonly isUnknownItem: boolean;
    readonly isNotForSale: boolean;
    readonly isBidTooLow: boolean;
    readonly type: 'NoPermission' | 'UnknownCollection' | 'AlreadyExists' | 'WrongOwner' | 'BadWitness' | 'InUse' | 'Frozen' | 'WrongDelegate' | 'NoDelegate' | 'Unapproved' | 'Unaccepted' | 'Locked' | 'MaxSupplyReached' | 'MaxSupplyAlreadySet' | 'MaxSupplyTooSmall' | 'UnknownItem' | 'NotForSale' | 'BidTooLow';
  }

  /** @name PalletConvictionVotingVoteVoting (579) */
  interface PalletConvictionVotingVoteVoting extends Enum {
    readonly isCasting: boolean;
    readonly asCasting: PalletConvictionVotingVoteCasting;
    readonly isDelegating: boolean;
    readonly asDelegating: PalletConvictionVotingVoteDelegating;
    readonly type: 'Casting' | 'Delegating';
  }

  /** @name PalletConvictionVotingVoteCasting (580) */
  interface PalletConvictionVotingVoteCasting extends Struct {
    readonly votes: Vec<ITuple<[u32, PalletConvictionVotingVoteAccountVote]>>;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingDelegations (584) */
  interface PalletConvictionVotingDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletConvictionVotingVotePriorLock (585) */
  interface PalletConvictionVotingVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletConvictionVotingVoteDelegating (586) */
  interface PalletConvictionVotingVoteDelegating extends Struct {
    readonly balance: u128;
    readonly target: AccountId32;
    readonly conviction: PalletConvictionVotingConviction;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingError (590) */
  interface PalletConvictionVotingError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isNoPermissionYet: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isAlreadyVoting: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isNonsense: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isClassNeeded: boolean;
    readonly isBadClass: boolean;
    readonly type: 'NotOngoing' | 'NotVoter' | 'NoPermission' | 'NoPermissionYet' | 'AlreadyDelegating' | 'AlreadyVoting' | 'InsufficientFunds' | 'NotDelegating' | 'Nonsense' | 'MaxVotesReached' | 'ClassNeeded' | 'BadClass';
  }

  /** @name PalletReferendaReferendumInfo (591) */
  interface PalletReferendaReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatus;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PalletReferendaReferendumStatus (592) */
  interface PalletReferendaReferendumStatus extends Struct {
    readonly track: u16;
    readonly origin: HydradxRuntimeOriginCaller;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PalletReferendaDeposit (593) */
  interface PalletReferendaDeposit extends Struct {
    readonly who: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletReferendaDecidingStatus (596) */
  interface PalletReferendaDecidingStatus extends Struct {
    readonly since: u32;
    readonly confirming: Option<u32>;
  }

  /** @name PalletReferendaTrackInfo (602) */
  interface PalletReferendaTrackInfo extends Struct {
    readonly name: Text;
    readonly maxDeciding: u32;
    readonly decisionDeposit: u128;
    readonly preparePeriod: u32;
    readonly decisionPeriod: u32;
    readonly confirmPeriod: u32;
    readonly minEnactmentPeriod: u32;
    readonly minApproval: PalletReferendaCurve;
    readonly minSupport: PalletReferendaCurve;
  }

  /** @name PalletReferendaCurve (603) */
  interface PalletReferendaCurve extends Enum {
    readonly isLinearDecreasing: boolean;
    readonly asLinearDecreasing: {
      readonly length: Perbill;
      readonly floor: Perbill;
      readonly ceil: Perbill;
    } & Struct;
    readonly isSteppedDecreasing: boolean;
    readonly asSteppedDecreasing: {
      readonly begin: Perbill;
      readonly end: Perbill;
      readonly step: Perbill;
      readonly period: Perbill;
    } & Struct;
    readonly isReciprocal: boolean;
    readonly asReciprocal: {
      readonly factor: i64;
      readonly xOffset: i64;
      readonly yOffset: i64;
    } & Struct;
    readonly type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal';
  }

  /** @name PalletReferendaError (607) */
  interface PalletReferendaError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isHasDeposit: boolean;
    readonly isBadTrack: boolean;
    readonly isFull: boolean;
    readonly isQueueEmpty: boolean;
    readonly isBadReferendum: boolean;
    readonly isNothingToDo: boolean;
    readonly isNoTrack: boolean;
    readonly isUnfinished: boolean;
    readonly isNoPermission: boolean;
    readonly isNoDeposit: boolean;
    readonly isBadStatus: boolean;
    readonly isPreimageNotExist: boolean;
    readonly isPreimageStoredWithDifferentLength: boolean;
    readonly type: 'NotOngoing' | 'HasDeposit' | 'BadTrack' | 'Full' | 'QueueEmpty' | 'BadReferendum' | 'NothingToDo' | 'NoTrack' | 'Unfinished' | 'NoPermission' | 'NoDeposit' | 'BadStatus' | 'PreimageNotExist' | 'PreimageStoredWithDifferentLength';
  }

  /** @name PalletWhitelistError (608) */
  interface PalletWhitelistError extends Enum {
    readonly isUnavailablePreImage: boolean;
    readonly isUndecodableCall: boolean;
    readonly isInvalidCallWeightWitness: boolean;
    readonly isCallIsNotWhitelisted: boolean;
    readonly isCallAlreadyWhitelisted: boolean;
    readonly type: 'UnavailablePreImage' | 'UndecodableCall' | 'InvalidCallWeightWitness' | 'CallIsNotWhitelisted' | 'CallAlreadyWhitelisted';
  }

  /** @name PalletAssetRegistryAssetDetails (609) */
  interface PalletAssetRegistryAssetDetails extends Struct {
    readonly name: Option<Bytes>;
    readonly assetType: PalletAssetRegistryAssetType;
    readonly existentialDeposit: u128;
    readonly symbol: Option<Bytes>;
    readonly decimals: Option<u8>;
    readonly xcmRateLimit: Option<u128>;
    readonly isSufficient: bool;
  }

  /** @name PalletAssetRegistryError (610) */
  interface PalletAssetRegistryError extends Enum {
    readonly isNoIdAvailable: boolean;
    readonly isAssetNotFound: boolean;
    readonly isTooShort: boolean;
    readonly isInvalidSymbol: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isAssetAlreadyRegistered: boolean;
    readonly isInvalidSharedAssetLen: boolean;
    readonly isCannotUpdateLocation: boolean;
    readonly isNotInReservedRange: boolean;
    readonly isLocationAlreadyRegistered: boolean;
    readonly isForbidden: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isForbiddenSufficiencyChange: boolean;
    readonly isAssetAlreadyBanned: boolean;
    readonly isAssetNotBanned: boolean;
    readonly type: 'NoIdAvailable' | 'AssetNotFound' | 'TooShort' | 'InvalidSymbol' | 'AssetNotRegistered' | 'AssetAlreadyRegistered' | 'InvalidSharedAssetLen' | 'CannotUpdateLocation' | 'NotInReservedRange' | 'LocationAlreadyRegistered' | 'Forbidden' | 'InsufficientBalance' | 'ForbiddenSufficiencyChange' | 'AssetAlreadyBanned' | 'AssetNotBanned';
  }

  /** @name PalletClaimsError (611) */
  interface PalletClaimsError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isNoClaimOrAlreadyClaimed: boolean;
    readonly isBalanceOverflow: boolean;
    readonly type: 'InvalidEthereumSignature' | 'NoClaimOrAlreadyClaimed' | 'BalanceOverflow';
  }

  /** @name PalletGenesisHistoryChain (612) */
  interface PalletGenesisHistoryChain extends Struct {
    readonly genesisHash: H256;
    readonly lastBlockHash: H256;
  }

  /** @name PalletCollatorRewardsError (614) */
  type PalletCollatorRewardsError = Null;

  /** @name PalletOmnipoolAssetState (615) */
  interface PalletOmnipoolAssetState extends Struct {
    readonly hubReserve: u128;
    readonly shares: u128;
    readonly protocolShares: u128;
    readonly cap: u128;
    readonly tradable: PalletOmnipoolTradability;
  }

  /** @name PalletOmnipoolSimpleImbalance (616) */
  interface PalletOmnipoolSimpleImbalance extends Struct {
    readonly value: u128;
    readonly negative: bool;
  }

  /** @name PalletOmnipoolPosition (617) */
  interface PalletOmnipoolPosition extends Struct {
    readonly assetId: u32;
    readonly amount: u128;
    readonly shares: u128;
    readonly price: ITuple<[u128, u128]>;
  }

  /** @name PalletOmnipoolError (618) */
  interface PalletOmnipoolError extends Enum {
    readonly isInsufficientBalance: boolean;
    readonly isAssetAlreadyAdded: boolean;
    readonly isAssetNotFound: boolean;
    readonly isMissingBalance: boolean;
    readonly isInvalidInitialAssetPrice: boolean;
    readonly isBuyLimitNotReached: boolean;
    readonly isSellLimitExceeded: boolean;
    readonly isPositionNotFound: boolean;
    readonly isInsufficientShares: boolean;
    readonly isNotAllowed: boolean;
    readonly isForbidden: boolean;
    readonly isAssetWeightCapExceeded: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isSameAssetTradeNotAllowed: boolean;
    readonly isHubAssetUpdateError: boolean;
    readonly isPositiveImbalance: boolean;
    readonly isInvalidSharesAmount: boolean;
    readonly isInvalidHubAssetTradableState: boolean;
    readonly isAssetRefundNotAllowed: boolean;
    readonly isMaxOutRatioExceeded: boolean;
    readonly isMaxInRatioExceeded: boolean;
    readonly isPriceDifferenceTooHigh: boolean;
    readonly isInvalidOraclePrice: boolean;
    readonly isInvalidWithdrawalFee: boolean;
    readonly isFeeOverdraft: boolean;
    readonly isSharesRemaining: boolean;
    readonly isAssetNotFrozen: boolean;
    readonly isZeroAmountOut: boolean;
    readonly isExistentialDepositNotAvailable: boolean;
    readonly isSlippageLimit: boolean;
    readonly type: 'InsufficientBalance' | 'AssetAlreadyAdded' | 'AssetNotFound' | 'MissingBalance' | 'InvalidInitialAssetPrice' | 'BuyLimitNotReached' | 'SellLimitExceeded' | 'PositionNotFound' | 'InsufficientShares' | 'NotAllowed' | 'Forbidden' | 'AssetWeightCapExceeded' | 'AssetNotRegistered' | 'InsufficientLiquidity' | 'InsufficientTradingAmount' | 'SameAssetTradeNotAllowed' | 'HubAssetUpdateError' | 'PositiveImbalance' | 'InvalidSharesAmount' | 'InvalidHubAssetTradableState' | 'AssetRefundNotAllowed' | 'MaxOutRatioExceeded' | 'MaxInRatioExceeded' | 'PriceDifferenceTooHigh' | 'InvalidOraclePrice' | 'InvalidWithdrawalFee' | 'FeeOverdraft' | 'SharesRemaining' | 'AssetNotFrozen' | 'ZeroAmountOut' | 'ExistentialDepositNotAvailable' | 'SlippageLimit';
  }

  /** @name PalletTransactionPauseError (621) */
  interface PalletTransactionPauseError extends Enum {
    readonly isCannotPause: boolean;
    readonly isInvalidCharacter: boolean;
    readonly isNameTooLong: boolean;
    readonly type: 'CannotPause' | 'InvalidCharacter' | 'NameTooLong';
  }

  /** @name PalletDusterError (622) */
  interface PalletDusterError extends Enum {
    readonly isAccountBlacklisted: boolean;
    readonly isAccountNotBlacklisted: boolean;
    readonly isZeroBalance: boolean;
    readonly isBalanceSufficient: boolean;
    readonly isDustAccountNotSet: boolean;
    readonly isReserveAccountNotSet: boolean;
    readonly type: 'AccountBlacklisted' | 'AccountNotBlacklisted' | 'ZeroBalance' | 'BalanceSufficient' | 'DustAccountNotSet' | 'ReserveAccountNotSet';
  }

  /** @name PalletLiquidityMiningGlobalFarmData (623) */
  interface PalletLiquidityMiningGlobalFarmData extends Struct {
    readonly id: u32;
    readonly owner: AccountId32;
    readonly updatedAt: u32;
    readonly totalSharesZ: u128;
    readonly accumulatedRpz: u128;
    readonly rewardCurrency: u32;
    readonly pendingRewards: u128;
    readonly accumulatedPaidRewards: u128;
    readonly yieldPerPeriod: Perquintill;
    readonly plannedYieldingPeriods: u32;
    readonly blocksPerPeriod: u32;
    readonly incentivizedAsset: u32;
    readonly maxRewardPerPeriod: u128;
    readonly minDeposit: u128;
    readonly liveYieldFarmsCount: u32;
    readonly totalYieldFarmsCount: u32;
    readonly priceAdjustment: u128;
    readonly state: PalletLiquidityMiningFarmState;
  }

  /** @name PalletLiquidityMiningFarmState (624) */
  interface PalletLiquidityMiningFarmState extends Enum {
    readonly isActive: boolean;
    readonly isStopped: boolean;
    readonly isTerminated: boolean;
    readonly type: 'Active' | 'Stopped' | 'Terminated';
  }

  /** @name PalletLiquidityMiningYieldFarmData (626) */
  interface PalletLiquidityMiningYieldFarmData extends Struct {
    readonly id: u32;
    readonly updatedAt: u32;
    readonly totalShares: u128;
    readonly totalValuedShares: u128;
    readonly accumulatedRpvs: u128;
    readonly accumulatedRpz: u128;
    readonly loyaltyCurve: Option<PalletLiquidityMiningLoyaltyCurve>;
    readonly multiplier: u128;
    readonly state: PalletLiquidityMiningFarmState;
    readonly entriesCount: u64;
    readonly leftToDistribute: u128;
    readonly totalStopped: u32;
  }

  /** @name PalletLiquidityMiningDepositData (627) */
  interface PalletLiquidityMiningDepositData extends Struct {
    readonly shares: u128;
    readonly ammPoolId: u32;
    readonly yieldFarmEntries: Vec<PalletLiquidityMiningYieldFarmEntry>;
  }

  /** @name PalletLiquidityMiningYieldFarmEntry (629) */
  interface PalletLiquidityMiningYieldFarmEntry extends Struct {
    readonly globalFarmId: u32;
    readonly yieldFarmId: u32;
    readonly valuedShares: u128;
    readonly accumulatedRpvs: u128;
    readonly accumulatedClaimedRewards: u128;
    readonly enteredAt: u32;
    readonly updatedAt: u32;
    readonly stoppedAtCreation: u32;
  }

  /** @name PalletLiquidityMiningError (631) */
  interface PalletLiquidityMiningError extends Enum {
    readonly isGlobalFarmNotFound: boolean;
    readonly isYieldFarmNotFound: boolean;
    readonly isDoubleClaimInPeriod: boolean;
    readonly isLiquidityMiningCanceled: boolean;
    readonly isLiquidityMiningIsActive: boolean;
    readonly isLiquidityMiningIsNotStopped: boolean;
    readonly isInvalidDepositAmount: boolean;
    readonly isForbidden: boolean;
    readonly isInvalidMultiplier: boolean;
    readonly isYieldFarmAlreadyExists: boolean;
    readonly isInvalidInitialRewardPercentage: boolean;
    readonly isGlobalFarmIsNotEmpty: boolean;
    readonly isMissingIncentivizedAsset: boolean;
    readonly isInsufficientRewardCurrencyBalance: boolean;
    readonly isInvalidBlocksPerPeriod: boolean;
    readonly isInvalidYieldPerPeriod: boolean;
    readonly isInvalidTotalRewards: boolean;
    readonly isInvalidPlannedYieldingPeriods: boolean;
    readonly isMaxEntriesPerDeposit: boolean;
    readonly isDoubleLock: boolean;
    readonly isYieldFarmEntryNotFound: boolean;
    readonly isGlobalFarmIsFull: boolean;
    readonly isInvalidMinDeposit: boolean;
    readonly isInvalidPriceAdjustment: boolean;
    readonly isErrorGetAccountId: boolean;
    readonly isIncorrectValuedShares: boolean;
    readonly isRewardCurrencyNotRegistered: boolean;
    readonly isIncentivizedAssetNotRegistered: boolean;
    readonly isInconsistentState: boolean;
    readonly asInconsistentState: PalletLiquidityMiningInconsistentStateError;
    readonly type: 'GlobalFarmNotFound' | 'YieldFarmNotFound' | 'DoubleClaimInPeriod' | 'LiquidityMiningCanceled' | 'LiquidityMiningIsActive' | 'LiquidityMiningIsNotStopped' | 'InvalidDepositAmount' | 'Forbidden' | 'InvalidMultiplier' | 'YieldFarmAlreadyExists' | 'InvalidInitialRewardPercentage' | 'GlobalFarmIsNotEmpty' | 'MissingIncentivizedAsset' | 'InsufficientRewardCurrencyBalance' | 'InvalidBlocksPerPeriod' | 'InvalidYieldPerPeriod' | 'InvalidTotalRewards' | 'InvalidPlannedYieldingPeriods' | 'MaxEntriesPerDeposit' | 'DoubleLock' | 'YieldFarmEntryNotFound' | 'GlobalFarmIsFull' | 'InvalidMinDeposit' | 'InvalidPriceAdjustment' | 'ErrorGetAccountId' | 'IncorrectValuedShares' | 'RewardCurrencyNotRegistered' | 'IncentivizedAssetNotRegistered' | 'InconsistentState';
  }

  /** @name PalletLiquidityMiningInconsistentStateError (632) */
  interface PalletLiquidityMiningInconsistentStateError extends Enum {
    readonly isYieldFarmNotFound: boolean;
    readonly isGlobalFarmNotFound: boolean;
    readonly isLiquidityIsNotActive: boolean;
    readonly isGlobalFarmIsNotActive: boolean;
    readonly isDepositNotFound: boolean;
    readonly isInvalidPeriod: boolean;
    readonly isNotEnoughRewardsInYieldFarm: boolean;
    readonly isInvalidLiveYielFarmsCount: boolean;
    readonly isInvalidTotalYieldFarmsCount: boolean;
    readonly isInvalidYieldFarmEntriesCount: boolean;
    readonly isInvalidTotalShares: boolean;
    readonly isInvalidValuedShares: boolean;
    readonly isInvalidTotalSharesZ: boolean;
    readonly isInvalidPaidAccumulatedRewards: boolean;
    readonly isInvalidFarmId: boolean;
    readonly isInvalidLoyaltyMultiplier: boolean;
    readonly isNoExistentialDepositForAsset: boolean;
    readonly type: 'YieldFarmNotFound' | 'GlobalFarmNotFound' | 'LiquidityIsNotActive' | 'GlobalFarmIsNotActive' | 'DepositNotFound' | 'InvalidPeriod' | 'NotEnoughRewardsInYieldFarm' | 'InvalidLiveYielFarmsCount' | 'InvalidTotalYieldFarmsCount' | 'InvalidYieldFarmEntriesCount' | 'InvalidTotalShares' | 'InvalidValuedShares' | 'InvalidTotalSharesZ' | 'InvalidPaidAccumulatedRewards' | 'InvalidFarmId' | 'InvalidLoyaltyMultiplier' | 'NoExistentialDepositForAsset';
  }

  /** @name HydradxTraitsOracleOraclePeriod (633) */
  interface HydradxTraitsOracleOraclePeriod extends Enum {
    readonly isLastBlock: boolean;
    readonly isShort: boolean;
    readonly isTenMinutes: boolean;
    readonly isHour: boolean;
    readonly isDay: boolean;
    readonly isWeek: boolean;
    readonly type: 'LastBlock' | 'Short' | 'TenMinutes' | 'Hour' | 'Day' | 'Week';
  }

  /** @name PalletOmnipoolLiquidityMiningError (634) */
  interface PalletOmnipoolLiquidityMiningError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isForbidden: boolean;
    readonly isZeroClaimedRewards: boolean;
    readonly isInconsistentState: boolean;
    readonly asInconsistentState: PalletOmnipoolLiquidityMiningInconsistentStateError;
    readonly isOracleNotAvailable: boolean;
    readonly isPriceAdjustmentNotAvailable: boolean;
    readonly isNoFarmEntriesSpecified: boolean;
    readonly type: 'AssetNotFound' | 'Forbidden' | 'ZeroClaimedRewards' | 'InconsistentState' | 'OracleNotAvailable' | 'PriceAdjustmentNotAvailable' | 'NoFarmEntriesSpecified';
  }

  /** @name PalletOmnipoolLiquidityMiningInconsistentStateError (635) */
  interface PalletOmnipoolLiquidityMiningInconsistentStateError extends Enum {
    readonly isMissingLpPosition: boolean;
    readonly isDepositDataNotFound: boolean;
    readonly type: 'MissingLpPosition' | 'DepositDataNotFound';
  }

  /** @name PalletOtcOrder (636) */
  interface PalletOtcOrder extends Struct {
    readonly owner: AccountId32;
    readonly assetIn: u32;
    readonly assetOut: u32;
    readonly amountIn: u128;
    readonly amountOut: u128;
    readonly partiallyFillable: bool;
  }

  /** @name PalletOtcError (637) */
  interface PalletOtcError extends Enum {
    readonly isAssetNotRegistered: boolean;
    readonly isOrderNotFound: boolean;
    readonly isOrderIdOutOfBound: boolean;
    readonly isOrderNotPartiallyFillable: boolean;
    readonly isOrderAmountTooSmall: boolean;
    readonly isMathError: boolean;
    readonly isForbidden: boolean;
    readonly isInsufficientReservedAmount: boolean;
    readonly type: 'AssetNotRegistered' | 'OrderNotFound' | 'OrderIdOutOfBound' | 'OrderNotPartiallyFillable' | 'OrderAmountTooSmall' | 'MathError' | 'Forbidden' | 'InsufficientReservedAmount';
  }

  /** @name PalletCircuitBreakerTradeVolumeLimit (638) */
  interface PalletCircuitBreakerTradeVolumeLimit extends Struct {
    readonly volumeIn: u128;
    readonly volumeOut: u128;
    readonly limit: u128;
  }

  /** @name PalletCircuitBreakerLiquidityLimit (639) */
  interface PalletCircuitBreakerLiquidityLimit extends Struct {
    readonly liquidity: u128;
    readonly limit: u128;
  }

  /** @name PalletCircuitBreakerError (640) */
  interface PalletCircuitBreakerError extends Enum {
    readonly isInvalidLimitValue: boolean;
    readonly isLiquidityLimitNotStoredForAsset: boolean;
    readonly isTokenOutflowLimitReached: boolean;
    readonly isTokenInfluxLimitReached: boolean;
    readonly isMaxLiquidityLimitPerBlockReached: boolean;
    readonly isNotAllowed: boolean;
    readonly type: 'InvalidLimitValue' | 'LiquidityLimitNotStoredForAsset' | 'TokenOutflowLimitReached' | 'TokenInfluxLimitReached' | 'MaxLiquidityLimitPerBlockReached' | 'NotAllowed';
  }

  /** @name PalletRouteExecutorSkipEd (641) */
  interface PalletRouteExecutorSkipEd extends Enum {
    readonly isLock: boolean;
    readonly isLockAndUnlock: boolean;
    readonly isUnlock: boolean;
    readonly type: 'Lock' | 'LockAndUnlock' | 'Unlock';
  }

  /** @name PalletRouteExecutorError (642) */
  interface PalletRouteExecutorError extends Enum {
    readonly isTradingLimitReached: boolean;
    readonly isMaxTradesExceeded: boolean;
    readonly isPoolNotSupported: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isRouteCalculationFailed: boolean;
    readonly isInvalidRoute: boolean;
    readonly isRouteUpdateIsNotSuccessful: boolean;
    readonly isRouteHasNoOracle: boolean;
    readonly isInvalidRouteExecution: boolean;
    readonly isNotAllowed: boolean;
    readonly type: 'TradingLimitReached' | 'MaxTradesExceeded' | 'PoolNotSupported' | 'InsufficientBalance' | 'RouteCalculationFailed' | 'InvalidRoute' | 'RouteUpdateIsNotSuccessful' | 'RouteHasNoOracle' | 'InvalidRouteExecution' | 'NotAllowed';
  }

  /** @name PalletDynamicFeesFeeEntry (643) */
  interface PalletDynamicFeesFeeEntry extends Struct {
    readonly assetFee: Permill;
    readonly protocolFee: Permill;
    readonly timestamp: u32;
  }

  /** @name PalletDynamicFeesFeeParams (644) */
  interface PalletDynamicFeesFeeParams extends Struct {
    readonly minFee: Permill;
    readonly maxFee: Permill;
    readonly decay: u128;
    readonly amplification: u128;
  }

  /** @name PalletDynamicFeesError (645) */
  type PalletDynamicFeesError = Null;

  /** @name PalletStakingStakingData (646) */
  interface PalletStakingStakingData extends Struct {
    readonly totalStake: u128;
    readonly accumulatedRewardPerStake: u128;
    readonly potReservedBalance: u128;
  }

  /** @name PalletStakingPosition (647) */
  interface PalletStakingPosition extends Struct {
    readonly stake: u128;
    readonly actionPoints: u128;
    readonly rewardPerStake: u128;
    readonly createdAt: u32;
    readonly accumulatedSlashPoints: u128;
    readonly accumulatedUnpaidRewards: u128;
    readonly accumulatedLockedRewards: u128;
  }

  /** @name PalletStakingVoting (648) */
  interface PalletStakingVoting extends Struct {
    readonly votes: Vec<ITuple<[u32, PalletStakingVote]>>;
  }

  /** @name PalletStakingVote (651) */
  interface PalletStakingVote extends Struct {
    readonly amount: u128;
    readonly conviction: PalletStakingConviction;
  }

  /** @name PalletStakingConviction (652) */
  interface PalletStakingConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletStakingError (654) */
  interface PalletStakingError extends Enum {
    readonly isInsufficientBalance: boolean;
    readonly isInsufficientStake: boolean;
    readonly isPositionNotFound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isNotInitialized: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isArithmetic: boolean;
    readonly isMissingPotBalance: boolean;
    readonly isPositionAlreadyExists: boolean;
    readonly isForbidden: boolean;
    readonly isExistingVotes: boolean;
    readonly isExistingProcessedVotes: boolean;
    readonly isInconsistentState: boolean;
    readonly asInconsistentState: PalletStakingInconsistentStateError;
    readonly type: 'InsufficientBalance' | 'InsufficientStake' | 'PositionNotFound' | 'MaxVotesReached' | 'NotInitialized' | 'AlreadyInitialized' | 'Arithmetic' | 'MissingPotBalance' | 'PositionAlreadyExists' | 'Forbidden' | 'ExistingVotes' | 'ExistingProcessedVotes' | 'InconsistentState';
  }

  /** @name PalletStakingInconsistentStateError (655) */
  interface PalletStakingInconsistentStateError extends Enum {
    readonly isPositionNotFound: boolean;
    readonly isNegativePendingRewards: boolean;
    readonly isNegativeUnpaidRewards: boolean;
    readonly isTooManyPositions: boolean;
    readonly isArithmetic: boolean;
    readonly type: 'PositionNotFound' | 'NegativePendingRewards' | 'NegativeUnpaidRewards' | 'TooManyPositions' | 'Arithmetic';
  }

  /** @name PalletStableswapPoolInfo (656) */
  interface PalletStableswapPoolInfo extends Struct {
    readonly assets: Vec<u32>;
    readonly initialAmplification: u16;
    readonly finalAmplification: u16;
    readonly initialBlock: u32;
    readonly finalBlock: u32;
    readonly fee: Permill;
  }

  /** @name PalletStableswapError (659) */
  interface PalletStableswapError extends Enum {
    readonly isIncorrectAssets: boolean;
    readonly isMaxAssetsExceeded: boolean;
    readonly isPoolNotFound: boolean;
    readonly isPoolExists: boolean;
    readonly isAssetNotInPool: boolean;
    readonly isShareAssetNotRegistered: boolean;
    readonly isShareAssetInPoolAssets: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isInvalidAssetAmount: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isInsufficientShares: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientLiquidityRemaining: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isBuyLimitNotReached: boolean;
    readonly isSellLimitExceeded: boolean;
    readonly isInvalidInitialLiquidity: boolean;
    readonly isInvalidAmplification: boolean;
    readonly isInsufficientShareBalance: boolean;
    readonly isNotAllowed: boolean;
    readonly isPastBlock: boolean;
    readonly isSameAmplification: boolean;
    readonly isSlippageLimit: boolean;
    readonly isUnknownDecimals: boolean;
    readonly type: 'IncorrectAssets' | 'MaxAssetsExceeded' | 'PoolNotFound' | 'PoolExists' | 'AssetNotInPool' | 'ShareAssetNotRegistered' | 'ShareAssetInPoolAssets' | 'AssetNotRegistered' | 'InvalidAssetAmount' | 'InsufficientBalance' | 'InsufficientShares' | 'InsufficientLiquidity' | 'InsufficientLiquidityRemaining' | 'InsufficientTradingAmount' | 'BuyLimitNotReached' | 'SellLimitExceeded' | 'InvalidInitialLiquidity' | 'InvalidAmplification' | 'InsufficientShareBalance' | 'NotAllowed' | 'PastBlock' | 'SameAmplification' | 'SlippageLimit' | 'UnknownDecimals';
  }

  /** @name PalletBondsError (661) */
  interface PalletBondsError extends Enum {
    readonly isNotRegistered: boolean;
    readonly isNotMature: boolean;
    readonly isInvalidMaturity: boolean;
    readonly isDisallowedAsset: boolean;
    readonly isAssetNotFound: boolean;
    readonly isInvalidBondName: boolean;
    readonly isFailToParseName: boolean;
    readonly type: 'NotRegistered' | 'NotMature' | 'InvalidMaturity' | 'DisallowedAsset' | 'AssetNotFound' | 'InvalidBondName' | 'FailToParseName';
  }

  /** @name PalletOtcSettlementsError (662) */
  interface PalletOtcSettlementsError extends Enum {
    readonly isOrderNotFound: boolean;
    readonly isNotPartiallyFillable: boolean;
    readonly isInvalidRoute: boolean;
    readonly isBalanceInconsistency: boolean;
    readonly isTradeAmountTooHigh: boolean;
    readonly isTradeAmountTooLow: boolean;
    readonly isPriceNotAvailable: boolean;
    readonly type: 'OrderNotFound' | 'NotPartiallyFillable' | 'InvalidRoute' | 'BalanceInconsistency' | 'TradeAmountTooHigh' | 'TradeAmountTooLow' | 'PriceNotAvailable';
  }

  /** @name PalletLbpError (663) */
  interface PalletLbpError extends Enum {
    readonly isCannotCreatePoolWithSameAssets: boolean;
    readonly isNotOwner: boolean;
    readonly isSaleStarted: boolean;
    readonly isSaleNotEnded: boolean;
    readonly isSaleIsNotRunning: boolean;
    readonly isMaxSaleDurationExceeded: boolean;
    readonly isCannotAddZeroLiquidity: boolean;
    readonly isInsufficientAssetBalance: boolean;
    readonly isPoolNotFound: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isInvalidBlockRange: boolean;
    readonly isWeightCalculationError: boolean;
    readonly isInvalidWeight: boolean;
    readonly isZeroAmount: boolean;
    readonly isMaxInRatioExceeded: boolean;
    readonly isMaxOutRatioExceeded: boolean;
    readonly isFeeAmountInvalid: boolean;
    readonly isTradingLimitReached: boolean;
    readonly isOverflow: boolean;
    readonly isNothingToUpdate: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isFeeCollectorWithAssetAlreadyUsed: boolean;
    readonly type: 'CannotCreatePoolWithSameAssets' | 'NotOwner' | 'SaleStarted' | 'SaleNotEnded' | 'SaleIsNotRunning' | 'MaxSaleDurationExceeded' | 'CannotAddZeroLiquidity' | 'InsufficientAssetBalance' | 'PoolNotFound' | 'PoolAlreadyExists' | 'InvalidBlockRange' | 'WeightCalculationError' | 'InvalidWeight' | 'ZeroAmount' | 'MaxInRatioExceeded' | 'MaxOutRatioExceeded' | 'FeeAmountInvalid' | 'TradingLimitReached' | 'Overflow' | 'NothingToUpdate' | 'InsufficientLiquidity' | 'InsufficientTradingAmount' | 'FeeCollectorWithAssetAlreadyUsed';
  }

  /** @name PalletXykError (664) */
  interface PalletXykError extends Enum {
    readonly isCannotCreatePoolWithSameAssets: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientTradingAmount: boolean;
    readonly isZeroLiquidity: boolean;
    readonly isZeroInitialPrice: boolean;
    readonly isCreatePoolAssetAmountInvalid: boolean;
    readonly isInvalidMintedLiquidity: boolean;
    readonly isInvalidLiquidityAmount: boolean;
    readonly isAssetAmountExceededLimit: boolean;
    readonly isAssetAmountNotReachedLimit: boolean;
    readonly isInsufficientAssetBalance: boolean;
    readonly isInsufficientPoolAssetBalance: boolean;
    readonly isInsufficientNativeCurrencyBalance: boolean;
    readonly isTokenPoolNotFound: boolean;
    readonly isTokenPoolAlreadyExists: boolean;
    readonly isAddAssetAmountInvalid: boolean;
    readonly isRemoveAssetAmountInvalid: boolean;
    readonly isSellAssetAmountInvalid: boolean;
    readonly isBuyAssetAmountInvalid: boolean;
    readonly isFeeAmountInvalid: boolean;
    readonly isCannotApplyDiscount: boolean;
    readonly isMaxOutRatioExceeded: boolean;
    readonly isMaxInRatioExceeded: boolean;
    readonly isOverflow: boolean;
    readonly isCannotCreatePool: boolean;
    readonly type: 'CannotCreatePoolWithSameAssets' | 'InsufficientLiquidity' | 'InsufficientTradingAmount' | 'ZeroLiquidity' | 'ZeroInitialPrice' | 'CreatePoolAssetAmountInvalid' | 'InvalidMintedLiquidity' | 'InvalidLiquidityAmount' | 'AssetAmountExceededLimit' | 'AssetAmountNotReachedLimit' | 'InsufficientAssetBalance' | 'InsufficientPoolAssetBalance' | 'InsufficientNativeCurrencyBalance' | 'TokenPoolNotFound' | 'TokenPoolAlreadyExists' | 'AddAssetAmountInvalid' | 'RemoveAssetAmountInvalid' | 'SellAssetAmountInvalid' | 'BuyAssetAmountInvalid' | 'FeeAmountInvalid' | 'CannotApplyDiscount' | 'MaxOutRatioExceeded' | 'MaxInRatioExceeded' | 'Overflow' | 'CannotCreatePool';
  }

  /** @name PalletReferralsError (668) */
  interface PalletReferralsError extends Enum {
    readonly isTooLong: boolean;
    readonly isTooShort: boolean;
    readonly isInvalidCharacter: boolean;
    readonly isAlreadyExists: boolean;
    readonly isInvalidCode: boolean;
    readonly isAlreadyLinked: boolean;
    readonly isZeroAmount: boolean;
    readonly isLinkNotAllowed: boolean;
    readonly isIncorrectRewardCalculation: boolean;
    readonly isIncorrectRewardPercentage: boolean;
    readonly isAlreadyRegistered: boolean;
    readonly isPriceNotFound: boolean;
    readonly isConversionMinTradingAmountNotReached: boolean;
    readonly isConversionZeroAmountReceived: boolean;
    readonly type: 'TooLong' | 'TooShort' | 'InvalidCharacter' | 'AlreadyExists' | 'InvalidCode' | 'AlreadyLinked' | 'ZeroAmount' | 'LinkNotAllowed' | 'IncorrectRewardCalculation' | 'IncorrectRewardPercentage' | 'AlreadyRegistered' | 'PriceNotFound' | 'ConversionMinTradingAmountNotReached' | 'ConversionZeroAmountReceived';
  }

  /** @name PalletLiquidationError (669) */
  interface PalletLiquidationError extends Enum {
    readonly isAssetConversionFailed: boolean;
    readonly isLiquidationCallFailed: boolean;
    readonly isInvalidRoute: boolean;
    readonly isNotProfitable: boolean;
    readonly type: 'AssetConversionFailed' | 'LiquidationCallFailed' | 'InvalidRoute' | 'NotProfitable';
  }

  /** @name OrmlTokensBalanceLock (671) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (673) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (675) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (677) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletCurrenciesModuleError (678) */
  interface PalletCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly isNotSupported: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed' | 'NotSupported';
  }

  /** @name OrmlVestingModuleError (680) */
  interface OrmlVestingModuleError extends Enum {
    readonly isZeroVestingPeriod: boolean;
    readonly isZeroVestingPeriodCount: boolean;
    readonly isInsufficientBalanceToLock: boolean;
    readonly isTooManyVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isMaxVestingSchedulesExceeded: boolean;
    readonly type: 'ZeroVestingPeriod' | 'ZeroVestingPeriodCount' | 'InsufficientBalanceToLock' | 'TooManyVestingSchedules' | 'AmountLow' | 'MaxVestingSchedulesExceeded';
  }

  /** @name PalletEvmCodeMetadata (681) */
  interface PalletEvmCodeMetadata extends Struct {
    readonly size_: u64;
    readonly hash_: H256;
  }

  /** @name PalletEvmError (683) */
  interface PalletEvmError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isFeeOverflow: boolean;
    readonly isPaymentOverflow: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isGasPriceTooLow: boolean;
    readonly isInvalidNonce: boolean;
    readonly isGasLimitTooLow: boolean;
    readonly isGasLimitTooHigh: boolean;
    readonly isInvalidChainId: boolean;
    readonly isInvalidSignature: boolean;
    readonly isReentrancy: boolean;
    readonly isTransactionMustComeFromEOA: boolean;
    readonly isUndefined: boolean;
    readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce' | 'GasLimitTooLow' | 'GasLimitTooHigh' | 'InvalidChainId' | 'InvalidSignature' | 'Reentrancy' | 'TransactionMustComeFromEOA' | 'Undefined';
  }

  /** @name FpRpcTransactionStatus (686) */
  interface FpRpcTransactionStatus extends Struct {
    readonly transactionHash: H256;
    readonly transactionIndex: u32;
    readonly from: H160;
    readonly to: Option<H160>;
    readonly contractAddress: Option<H160>;
    readonly logs: Vec<EthereumLog>;
    readonly logsBloom: EthbloomBloom;
  }

  /** @name EthbloomBloom (689) */
  interface EthbloomBloom extends U8aFixed {}

  /** @name EthereumReceiptReceiptV3 (691) */
  interface EthereumReceiptReceiptV3 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumReceiptEip658ReceiptData;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumReceiptEip658ReceiptData;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumReceiptEip658ReceiptData;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumReceiptEip658ReceiptData (692) */
  interface EthereumReceiptEip658ReceiptData extends Struct {
    readonly statusCode: u8;
    readonly usedGas: U256;
    readonly logsBloom: EthbloomBloom;
    readonly logs: Vec<EthereumLog>;
  }

  /** @name EthereumBlock (693) */
  interface EthereumBlock extends Struct {
    readonly header: EthereumHeader;
    readonly transactions: Vec<EthereumTransactionTransactionV2>;
    readonly ommers: Vec<EthereumHeader>;
  }

  /** @name EthereumHeader (694) */
  interface EthereumHeader extends Struct {
    readonly parentHash: H256;
    readonly ommersHash: H256;
    readonly beneficiary: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logsBloom: EthbloomBloom;
    readonly difficulty: U256;
    readonly number: U256;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthereumTypesHashH64;
  }

  /** @name EthereumTypesHashH64 (695) */
  interface EthereumTypesHashH64 extends U8aFixed {}

  /** @name PalletEthereumError (700) */
  interface PalletEthereumError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isPreLogExists: boolean;
    readonly type: 'InvalidSignature' | 'PreLogExists';
  }

  /** @name PalletEvmAccountsError (701) */
  interface PalletEvmAccountsError extends Enum {
    readonly isTruncatedAccountAlreadyUsed: boolean;
    readonly isAddressAlreadyBound: boolean;
    readonly isBoundAddressCannotBeUsed: boolean;
    readonly isAddressNotWhitelisted: boolean;
    readonly type: 'TruncatedAccountAlreadyUsed' | 'AddressAlreadyBound' | 'BoundAddressCannotBeUsed' | 'AddressNotWhitelisted';
  }

  /** @name PalletXykLiquidityMiningError (702) */
  interface PalletXykLiquidityMiningError extends Enum {
    readonly isCantFindDepositOwner: boolean;
    readonly isInsufficientXykSharesBalance: boolean;
    readonly isXykPoolDoesntExist: boolean;
    readonly isNotDepositOwner: boolean;
    readonly isCantGetXykAssets: boolean;
    readonly isDepositDataNotFound: boolean;
    readonly isZeroClaimedRewards: boolean;
    readonly isAssetNotInAssetPair: boolean;
    readonly isInvalidAssetPair: boolean;
    readonly isAssetNotRegistered: boolean;
    readonly isFailToGetPotId: boolean;
    readonly isNoFarmsSpecified: boolean;
    readonly type: 'CantFindDepositOwner' | 'InsufficientXykSharesBalance' | 'XykPoolDoesntExist' | 'NotDepositOwner' | 'CantGetXykAssets' | 'DepositDataNotFound' | 'ZeroClaimedRewards' | 'AssetNotInAssetPair' | 'InvalidAssetPair' | 'AssetNotRegistered' | 'FailToGetPotId' | 'NoFarmsSpecified';
  }

  /** @name PalletRelaychainInfoError (711) */
  type PalletRelaychainInfoError = Null;

  /** @name PalletDcaError (713) */
  interface PalletDcaError extends Enum {
    readonly isScheduleNotFound: boolean;
    readonly isMinTradeAmountNotReached: boolean;
    readonly isForbidden: boolean;
    readonly isBlockNumberIsNotInFuture: boolean;
    readonly isPriceUnstable: boolean;
    readonly isBumped: boolean;
    readonly isCalculatingPriceError: boolean;
    readonly isTotalAmountIsSmallerThanMinBudget: boolean;
    readonly isBudgetTooLow: boolean;
    readonly isNoFreeBlockFound: boolean;
    readonly isManuallyTerminated: boolean;
    readonly isMaxRetryReached: boolean;
    readonly isTradeLimitReached: boolean;
    readonly isSlippageLimitReached: boolean;
    readonly isNoParentHashFound: boolean;
    readonly isInvalidState: boolean;
    readonly isPeriodTooShort: boolean;
    readonly isStabilityThresholdTooHigh: boolean;
    readonly type: 'ScheduleNotFound' | 'MinTradeAmountNotReached' | 'Forbidden' | 'BlockNumberIsNotInFuture' | 'PriceUnstable' | 'Bumped' | 'CalculatingPriceError' | 'TotalAmountIsSmallerThanMinBudget' | 'BudgetTooLow' | 'NoFreeBlockFound' | 'ManuallyTerminated' | 'MaxRetryReached' | 'TradeLimitReached' | 'SlippageLimitReached' | 'NoParentHashFound' | 'InvalidState' | 'PeriodTooShort' | 'StabilityThresholdTooHigh';
  }

  /** @name PalletSchedulerScheduled (716) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: HydradxRuntimeOriginCaller;
  }

  /** @name PalletSchedulerRetryConfig (718) */
  interface PalletSchedulerRetryConfig extends Struct {
    readonly totalRetries: u8;
    readonly remaining: u8;
    readonly period: u32;
  }

  /** @name PalletSchedulerError (719) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (721) */
  interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly paraHeadHash: Option<H256>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV7UpgradeGoAhead>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (722) */
  interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
    readonly umpMsgCount: u32;
    readonly umpTotalBytes: u32;
    readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (724) */
  interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
    readonly msgCount: u32;
    readonly totalBytes: u32;
  }

  /** @name PolkadotPrimitivesV7UpgradeGoAhead (728) */
  interface PolkadotPrimitivesV7UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (729) */
  interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
    readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    readonly hrmpWatermark: Option<u32>;
    readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV7UpgradeGoAhead>;
  }

  /** @name PolkadotPrimitivesV7UpgradeRestriction (731) */
  interface PolkadotPrimitivesV7UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (732) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV7AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV7AbridgedHrmpChannel]>>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (733) */
  interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
    readonly remainingCount: u32;
    readonly remainingSize: u32;
  }

  /** @name PolkadotPrimitivesV7AbridgedHrmpChannel (736) */
  interface PolkadotPrimitivesV7AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV7AbridgedHostConfiguration (737) */
  interface PolkadotPrimitivesV7AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesV7AsyncBackingAsyncBackingParams;
  }

  /** @name PolkadotPrimitivesV7AsyncBackingAsyncBackingParams (738) */
  interface PolkadotPrimitivesV7AsyncBackingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (744) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (745) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletXcmQueryStatus (746) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (750) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Response;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name PalletXcmVersionMigrationStage (756) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (759) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedLocation;
    readonly locker: XcmVersionedLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (766) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isCannotCheckOutTeleport: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly isInvalidAssetUnknownReserve: boolean;
    readonly isInvalidAssetUnsupportedReserve: boolean;
    readonly isTooManyReserves: boolean;
    readonly isLocalExecutionIncomplete: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'CannotCheckOutTeleport' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse' | 'InvalidAssetUnknownReserve' | 'InvalidAssetUnsupportedReserve' | 'TooManyReserves' | 'LocalExecutionIncomplete';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (771) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (772) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (774) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
  }

  /** @name CumulusPalletXcmpQueueError (775) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isBadQueueConfig: boolean;
    readonly isAlreadySuspended: boolean;
    readonly isAlreadyResumed: boolean;
    readonly type: 'BadQueueConfig' | 'AlreadySuspended' | 'AlreadyResumed';
  }

  /** @name PalletMessageQueueBookState (776) */
  interface PalletMessageQueueBookState extends Struct {
    readonly begin: u32;
    readonly end: u32;
    readonly count: u32;
    readonly readyNeighbours: Option<PalletMessageQueueNeighbours>;
    readonly messageCount: u64;
    readonly size_: u64;
  }

  /** @name PalletMessageQueueNeighbours (778) */
  interface PalletMessageQueueNeighbours extends Struct {
    readonly prev: CumulusPrimitivesCoreAggregateMessageOrigin;
    readonly next: CumulusPrimitivesCoreAggregateMessageOrigin;
  }

  /** @name PalletMessageQueuePage (780) */
  interface PalletMessageQueuePage extends Struct {
    readonly remaining: u32;
    readonly remainingSize: u32;
    readonly firstIndex: u32;
    readonly first: u32;
    readonly last: u32;
    readonly heap: Bytes;
  }

  /** @name PalletMessageQueueError (782) */
  interface PalletMessageQueueError extends Enum {
    readonly isNotReapable: boolean;
    readonly isNoPage: boolean;
    readonly isNoMessage: boolean;
    readonly isAlreadyProcessed: boolean;
    readonly isQueued: boolean;
    readonly isInsufficientWeight: boolean;
    readonly isTemporarilyUnprocessable: boolean;
    readonly isQueuePaused: boolean;
    readonly isRecursiveDisallowed: boolean;
    readonly type: 'NotReapable' | 'NoPage' | 'NoMessage' | 'AlreadyProcessed' | 'Queued' | 'InsufficientWeight' | 'TemporarilyUnprocessable' | 'QueuePaused' | 'RecursiveDisallowed';
  }

  /** @name OrmlXcmModuleError (783) */
  interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isBadVersion: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
  }

  /** @name OrmlXtokensModuleError (784) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly isRateLimited: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedLocation' | 'MinXcmFeeNotDefined' | 'RateLimited';
  }

  /** @name OrmlUnknownTokensModuleError (787) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name PalletCollatorSelectionCandidateInfo (789) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (791) */
  interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewEligibleCollators: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNotInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly isInsertToCandidateListFailed: boolean;
    readonly isRemoveFromCandidateListFailed: boolean;
    readonly isDepositTooLow: boolean;
    readonly isUpdateCandidateListFailed: boolean;
    readonly isInsufficientBond: boolean;
    readonly isTargetIsNotCandidate: boolean;
    readonly isIdenticalDeposit: boolean;
    readonly isInvalidUnreserve: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewEligibleCollators' | 'AlreadyCandidate' | 'NotCandidate' | 'TooManyInvulnerables' | 'AlreadyInvulnerable' | 'NotInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered' | 'InsertToCandidateListFailed' | 'RemoveFromCandidateListFailed' | 'DepositTooLow' | 'UpdateCandidateListFailed' | 'InsufficientBond' | 'TargetIsNotCandidate' | 'IdenticalDeposit' | 'InvalidUnreserve';
  }

  /** @name SpCoreCryptoKeyTypeId (795) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (796) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletEmaOracleOracleEntry (803) */
  interface PalletEmaOracleOracleEntry extends Struct {
    readonly price: HydraDxMathRatio;
    readonly volume: HydradxTraitsOracleVolume;
    readonly liquidity: HydradxTraitsOracleLiquidity;
    readonly updatedAt: u32;
  }

  /** @name HydraDxMathRatio (804) */
  interface HydraDxMathRatio extends Struct {
    readonly n: u128;
    readonly d: u128;
  }

  /** @name HydradxTraitsOracleVolume (805) */
  interface HydradxTraitsOracleVolume extends Struct {
    readonly aIn: u128;
    readonly bOut: u128;
    readonly aOut: u128;
    readonly bIn: u128;
  }

  /** @name HydradxTraitsOracleLiquidity (806) */
  interface HydradxTraitsOracleLiquidity extends Struct {
    readonly a: u128;
    readonly b: u128;
  }

  /** @name PalletEmaOracleError (815) */
  interface PalletEmaOracleError extends Enum {
    readonly isTooManyUniqueEntries: boolean;
    readonly isOnTradeValueZero: boolean;
    readonly isOracleNotFound: boolean;
    readonly type: 'TooManyUniqueEntries' | 'OnTradeValueZero' | 'OracleNotFound';
  }

  /** @name FrameSystemExtensionsCheckNonZeroSender (818) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (819) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (820) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (821) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (824) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (825) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (826) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PalletClaimsValidateClaim (827) */
  type PalletClaimsValidateClaim = Null;

  /** @name FrameMetadataHashExtensionCheckMetadataHash (828) */
  interface FrameMetadataHashExtensionCheckMetadataHash extends Struct {
    readonly mode: FrameMetadataHashExtensionMode;
  }

  /** @name FrameMetadataHashExtensionMode (829) */
  interface FrameMetadataHashExtensionMode extends Enum {
    readonly isDisabled: boolean;
    readonly isEnabled: boolean;
    readonly type: 'Disabled' | 'Enabled';
  }

  /** @name HydradxRuntimeRuntime (831) */
  type HydradxRuntimeRuntime = Null;

} // declare module
