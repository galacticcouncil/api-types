// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * Asset is already registered.
       **/
      AssetAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Invalid asset name or symbol.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * Asset ID is not registered in the asset-registry.
       **/
      AssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Cannot update asset location
       **/
      CannotUpdateLocation: AugmentedError<ApiType>;
      /**
       * Incorrect number of assets provided to create shared asset.
       **/
      InvalidSharedAssetLen: AugmentedError<ApiType>;
      /**
       * Location already registered with different asset
       **/
      LocationAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Asset ID is not available. This only happens when it reaches the MAX value of given id type.
       **/
      NoIdAvailable: AugmentedError<ApiType>;
      /**
       * Selected asset id is out of reserved range.
       **/
      NotInReservedRange: AugmentedError<ApiType>;
      /**
       * Invalid asset name or symbol.
       **/
      TooLong: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * The delta cannot be zero.
       **/
      DeltaZero: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The issuance cannot be modified since it is already deactivated.
       **/
      IssuanceDeactivated: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    collatorRewards: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    collatorSelection: {
      /**
       * Account is already a candidate.
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * Account is already an Invulnerable.
       **/
      AlreadyInvulnerable: AugmentedError<ApiType>;
      /**
       * New deposit amount would be below the minimum candidacy bond.
       **/
      DepositTooLow: AugmentedError<ApiType>;
      /**
       * The updated deposit amount is equal to the amount already reserved.
       **/
      IdenticalDeposit: AugmentedError<ApiType>;
      /**
       * Could not insert in the candidate list.
       **/
      InsertToCandidateListFailed: AugmentedError<ApiType>;
      /**
       * Deposit amount is too low to take the target's slot in the candidate list.
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * Cannot lower candidacy bond while occupying a future collator slot in the list.
       **/
      InvalidUnreserve: AugmentedError<ApiType>;
      /**
       * Account has no associated validator ID.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * Account is not a candidate.
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * Account is not an Invulnerable.
       **/
      NotInvulnerable: AugmentedError<ApiType>;
      /**
       * Could not remove from the candidate list.
       **/
      RemoveFromCandidateListFailed: AugmentedError<ApiType>;
      /**
       * The target account to be replaced in the candidate list is not a candidate.
       **/
      TargetIsNotCandidate: AugmentedError<ApiType>;
      /**
       * Leaving would result in too few candidates.
       **/
      TooFewEligibleCollators: AugmentedError<ApiType>;
      /**
       * The pallet has too many candidates.
       **/
      TooManyCandidates: AugmentedError<ApiType>;
      /**
       * There are too many Invulnerables.
       **/
      TooManyInvulnerables: AugmentedError<ApiType>;
      /**
       * Could not update the candidate list.
       **/
      UpdateCandidateListFailed: AugmentedError<ApiType>;
      /**
       * Validator ID is not yet registered.
       **/
      ValidatorNotRegistered: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    convictionVoting: {
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed through `remove_vote`.
       **/
      AlreadyVoting: AugmentedError<ApiType>;
      /**
       * The class ID supplied is invalid.
       **/
      BadClass: AugmentedError<ApiType>;
      /**
       * The class must be supplied since it is not easily determinable from the state.
       **/
      ClassNeeded: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action right now but will do in the future.
       **/
      NoPermissionYet: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Poll is not ongoing.
       **/
      NotOngoing: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the poll.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currencies: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Deposit result is not expected
       **/
      DepositFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    duster: {
      /**
       * Account is excluded from dusting.
       **/
      AccountBlacklisted: AugmentedError<ApiType>;
      /**
       * Account is not present in the non-dustable list.
       **/
      AccountNotBlacklisted: AugmentedError<ApiType>;
      /**
       * The balance is sufficient to keep account open.
       **/
      BalanceSufficient: AugmentedError<ApiType>;
      /**
       * Dust account is not set.
       **/
      DustAccountNotSet: AugmentedError<ApiType>;
      /**
       * Reserve account is not set.
       **/
      ReserveAccountNotSet: AugmentedError<ApiType>;
      /**
       * The balance is zero.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    emaOracle: {
      OnTradeValueZero: AugmentedError<ApiType>;
      OracleNotFound: AugmentedError<ApiType>;
      TooManyUniqueEntries: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The signature on a username was not valid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * The provided suffix is too long.
       **/
      InvalidSuffix: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The username does not meet the requirements.
       **/
      InvalidUsername: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * The authority cannot allocate any more usernames.
       **/
      NoAllocation: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * The username cannot be forcefully removed because it can still be accepted.
       **/
      NotExpired: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * The sender does not have permission to issue a username.
       **/
      NotUsernameAuthority: AugmentedError<ApiType>;
      /**
       * The requested username does not exist.
       **/
      NoUsername: AugmentedError<ApiType>;
      /**
       * Setting this username requires a signature, but none was provided.
       **/
      RequiresSignature: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * The username is already taken.
       **/
      UsernameTaken: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    lbp: {
      /**
       * Liquidity being added should not be zero
       **/
      CannotAddZeroLiquidity: AugmentedError<ApiType>;
      /**
       * Pool assets can not be the same
       **/
      CannotCreatePoolWithSameAssets: AugmentedError<ApiType>;
      /**
       * Invalid fee amount
       **/
      FeeAmountInvalid: AugmentedError<ApiType>;
      /**
       * Not more than one fee collector per asset id
       **/
      FeeCollectorWithAssetAlreadyUsed: AugmentedError<ApiType>;
      /**
       * Asset balance too low
       **/
      InsufficientAssetBalance: AugmentedError<ApiType>;
      /**
       * Liquidity has not reached the required minimum.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Amount is less than minimum trading limit.
       **/
      InsufficientTradingAmount: AugmentedError<ApiType>;
      /**
       * Invalid block range
       **/
      InvalidBlockRange: AugmentedError<ApiType>;
      /**
       * Weight set is out of range
       **/
      InvalidWeight: AugmentedError<ApiType>;
      /**
       * Trade amount is too high
       **/
      MaxInRatioExceeded: AugmentedError<ApiType>;
      /**
       * Trade amount is too high
       **/
      MaxOutRatioExceeded: AugmentedError<ApiType>;
      /**
       * Sale duration is too long
       **/
      MaxSaleDurationExceeded: AugmentedError<ApiType>;
      /**
       * Nothing to update
       **/
      NothingToUpdate: AugmentedError<ApiType>;
      /**
       * Account is not a pool owner
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * An unexpected integer overflow occurred
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Pool has been already created
       **/
      PoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Pool does not exist
       **/
      PoolNotFound: AugmentedError<ApiType>;
      /**
       * Sale is not running
       **/
      SaleIsNotRunning: AugmentedError<ApiType>;
      /**
       * Sale is still in progress
       **/
      SaleNotEnded: AugmentedError<ApiType>;
      /**
       * Sale already started
       **/
      SaleStarted: AugmentedError<ApiType>;
      /**
       * Trading limit reached
       **/
      TradingLimitReached: AugmentedError<ApiType>;
      /**
       * Calculation error
       **/
      WeightCalculationError: AugmentedError<ApiType>;
      /**
       * Can not perform a trade with zero amount
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    marketplace: {
      /**
       * User has to be the token owner to accept an offer
       **/
      AcceptNotAuthorized: AugmentedError<ApiType>;
      /**
       * User already made an offer for this token
       **/
      AlreadyOffered: AugmentedError<ApiType>;
      /**
       * Cannot buy a token from yourself
       **/
      BuyFromSelf: AugmentedError<ApiType>;
      /**
       * Collection or item does not exist
       **/
      CollectionOrItemUnknown: AugmentedError<ApiType>;
      /**
       * Token is currently not for sale
       **/
      NotForSale: AugmentedError<ApiType>;
      /**
       * Royalty not in 0-9_999 range
       **/
      NotInRange: AugmentedError<ApiType>;
      /**
       * Account is not the owner of the token
       **/
      NotTheTokenOwner: AugmentedError<ApiType>;
      /**
       * Offer is no longer valid
       **/
      OfferExpired: AugmentedError<ApiType>;
      /**
       * Offer is lower than the minimum threshold
       **/
      OfferTooLow: AugmentedError<ApiType>;
      /**
       * Royalty can be set only once
       **/
      RoyaltyAlreadySet: AugmentedError<ApiType>;
      /**
       * No offer for this token found from the user
       **/
      UnknownOffer: AugmentedError<ApiType>;
      /**
       * User has to be offer maker or token owner to withdraw an offer
       **/
      WithdrawNotAuthorized: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    messageQueue: {
      /**
       * The message was already processed and cannot be processed again.
       **/
      AlreadyProcessed: AugmentedError<ApiType>;
      /**
       * There is temporarily not enough weight to continue servicing messages.
       **/
      InsufficientWeight: AugmentedError<ApiType>;
      /**
       * The referenced message could not be found.
       **/
      NoMessage: AugmentedError<ApiType>;
      /**
       * Page to be reaped does not exist.
       **/
      NoPage: AugmentedError<ApiType>;
      /**
       * Page is not reapable because it has items remaining to be processed and is not old
       * enough.
       **/
      NotReapable: AugmentedError<ApiType>;
      /**
       * The message is queued for future execution.
       **/
      Queued: AugmentedError<ApiType>;
      /**
       * The queue is paused and no message can be executed from it.
       * 
       * This can change at any time and may resolve in the future by re-trying.
       **/
      QueuePaused: AugmentedError<ApiType>;
      /**
       * Another call is in progress and needs to finish before this call can happen.
       **/
      RecursiveDisallowed: AugmentedError<ApiType>;
      /**
       * This message is temporarily unprocessable.
       * 
       * Such errors are expected, but not guaranteed, to resolve themselves eventually through
       * retrying.
       **/
      TemporarilyUnprocessable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multiTransactionPayment: {
      /**
       * Currency is already in the list of accepted currencies.
       **/
      AlreadyAccepted: AugmentedError<ApiType>;
      /**
       * It is not allowed to add Core Asset as accepted currency. Core asset is accepted by design.
       **/
      CoreAssetNotAllowed: AugmentedError<ApiType>;
      /**
       * It is not allowed to change payment currency of an EVM account.
       **/
      EvmAccountNotAllowed: AugmentedError<ApiType>;
      /**
       * EVM permit call failed.
       **/
      EvmPermitCallExecutionError: AugmentedError<ApiType>;
      /**
       * EVM permit expired.
       **/
      EvmPermitExpired: AugmentedError<ApiType>;
      /**
       * EVM permit is invalid.
       **/
      EvmPermitInvalid: AugmentedError<ApiType>;
      /**
       * EVM permit call failed.
       **/
      EvmPermitRunnerError: AugmentedError<ApiType>;
      /**
       * Fallback price was not found.
       **/
      FallbackPriceNotFound: AugmentedError<ApiType>;
      /**
       * Math overflow
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Selected currency is not supported.
       **/
      UnsupportedCurrency: AugmentedError<ApiType>;
      /**
       * Account balance should be non-zero.
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * Fallback price cannot be zero.
       **/
      ZeroPrice: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nft: {
      /**
       * Collection does not exist
       **/
      CollectionUnknown: AugmentedError<ApiType>;
      /**
       * ID reserved for runtime
       **/
      IdReserved: AugmentedError<ApiType>;
      /**
       * Item does not exist
       **/
      ItemUnknown: AugmentedError<ApiType>;
      /**
       * Count of collections overflown
       **/
      NoAvailableCollectionId: AugmentedError<ApiType>;
      /**
       * Count of items overflown
       **/
      NoAvailableItemId: AugmentedError<ApiType>;
      /**
       * Operation not permitted
       **/
      NotPermitted: AugmentedError<ApiType>;
      /**
       * Collection still contains minted tokens
       **/
      TokenCollectionNotEmpty: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ormlXcm: {
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * The message and destination was recognized as being reachable but
       * the operation could not be completed.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * The message and destination combination was not recognized as being
       * reachable.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block.
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending.
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function.
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block.
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not check-out the assets for teleportation to the destination chain.
       **/
      CannotCheckOutTeleport: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `Location` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The operation required fees to be paid which the initiator could not meet.
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * The unlock operation cannot succeed because there are still consumers of the lock.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Invalid asset, reserve chain could not be determined for it.
       **/
      InvalidAssetUnknownReserve: AugmentedError<ApiType>;
      /**
       * Invalid asset, do not support remote asset reserves with different fees reserves.
       **/
      InvalidAssetUnsupportedReserve: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * Local XCM execution incomplete.
       **/
      LocalExecutionIncomplete: AugmentedError<ApiType>;
      /**
       * A remote lock with the corresponding data could not be found.
       **/
      LockNotFound: AugmentedError<ApiType>;
      /**
       * The owner does not own (all) of the asset that they wish to do the operation on.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message.
       * Perhaps a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The asset owner has too many locks on the asset.
       **/
      TooManyLocks: AugmentedError<ApiType>;
      /**
       * Too many assets with different reserve locations have been attempted for transfer.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Too few hashes were requested to be upgraded (i.e. zero).
       **/
      TooFew: AugmentedError<ApiType>;
      /**
       * More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    referenda: {
      /**
       * The referendum index provided is invalid in this context.
       **/
      BadReferendum: AugmentedError<ApiType>;
      /**
       * The referendum status is invalid for this operation.
       **/
      BadStatus: AugmentedError<ApiType>;
      /**
       * The track identifier given was invalid.
       **/
      BadTrack: AugmentedError<ApiType>;
      /**
       * There are already a full complement of referenda in progress for this track.
       **/
      Full: AugmentedError<ApiType>;
      /**
       * Referendum's decision deposit is already paid.
       **/
      HasDeposit: AugmentedError<ApiType>;
      /**
       * The deposit cannot be refunded since none was made.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The deposit refunder is not the depositor.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * There was nothing to do in the advancement.
       **/
      NothingToDo: AugmentedError<ApiType>;
      /**
       * Referendum is not ongoing.
       **/
      NotOngoing: AugmentedError<ApiType>;
      /**
       * No track exists for the proposal origin.
       **/
      NoTrack: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * The preimage is stored with a different length than the one provided.
       **/
      PreimageStoredWithDifferentLength: AugmentedError<ApiType>;
      /**
       * The queue of the track is empty.
       **/
      QueueEmpty: AugmentedError<ApiType>;
      /**
       * Any deposit cannot be refunded until after the decision is over.
       **/
      Unfinished: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    relayChainInfo: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    router: {
      /**
       * The user has not enough balance to execute the trade
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * The route is invalid
       **/
      InvalidRoute: AugmentedError<ApiType>;
      /**
       * The route execution failed in the underlying AMM
       **/
      InvalidRouteExecution: AugmentedError<ApiType>;
      /**
       * The the max number of trades limit is reached
       **/
      MaxTradesExceeded: AugmentedError<ApiType>;
      /**
       * Trading same assets is not allowed.
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * The AMM pool is not supported for executing trades
       **/
      PoolNotSupported: AugmentedError<ApiType>;
      /**
       * The calculation of route trade amounts failed in the underlying AMM
       **/
      RouteCalculationFailed: AugmentedError<ApiType>;
      /**
       * Route contains assets that has no oracle data
       **/
      RouteHasNoOracle: AugmentedError<ApiType>;
      /**
       * The route update was not successful
       **/
      RouteUpdateIsNotSuccessful: AugmentedError<ApiType>;
      /**
       * The trading limit has been reached
       **/
      TradingLimitReached: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    stateTrieMigration: {
      /**
       * Bad child root provided.
       **/
      BadChildRoot: AugmentedError<ApiType>;
      /**
       * Bad witness data provided.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * A key was longer than the configured maximum.
       * 
       * This means that the migration halted at the current [`Progress`] and
       * can be resumed with a larger [`crate::Config::MaxKeyLen`] value.
       * Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.
       * The value should only be increased to avoid a storage migration for the currently
       * stored [`crate::Progress::LastKey`].
       **/
      KeyTooLong: AugmentedError<ApiType>;
      /**
       * Max signed limits not respected.
       **/
      MaxSignedLimits: AugmentedError<ApiType>;
      /**
       * submitter does not have enough funds.
       **/
      NotEnoughFunds: AugmentedError<ApiType>;
      /**
       * Signed migration is not allowed because the maximum limit is not set yet.
       **/
      SignedMigrationNotAllowed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * A multi-block migration is ongoing and prevents the current code from being replaced.
       **/
      MultiBlockMigrationsOngoing: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * No upgrade authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * The submitted code is not authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    transactionPause: {
      /**
       * can not pause
       **/
      CannotPause: AugmentedError<ApiType>;
      /**
       * invalid character encoding
       **/
      InvalidCharacter: AugmentedError<ApiType>;
      /**
       * pallet name or function name is too long
       **/
      NameTooLong: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The payment has already been attempted.
       **/
      AlreadyAttempted: AugmentedError<ApiType>;
      /**
       * The spend is not yet eligible for payout.
       **/
      EarlyPayout: AugmentedError<ApiType>;
      /**
       * The balance of the asset kind is not convertible to the balance of the native asset.
       **/
      FailedToConvertBalance: AugmentedError<ApiType>;
      /**
       * The payment has neither failed nor succeeded yet.
       **/
      Inconclusive: AugmentedError<ApiType>;
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal, bounty or spend at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * The payout was not yet attempted/claimed.
       **/
      NotAttempted: AugmentedError<ApiType>;
      /**
       * There was some issue with the mechanism of payment.
       **/
      PayoutError: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * The spend has expired and cannot be claimed.
       **/
      SpendExpired: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    uniques: {
      /**
       * The item ID has already been used for an item.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * The provided bid is too low.
       **/
      BidTooLow: AugmentedError<ApiType>;
      /**
       * The item or collection is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The item ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The item is locked.
       **/
      Locked: AugmentedError<ApiType>;
      /**
       * The max supply has already been set.
       **/
      MaxSupplyAlreadySet: AugmentedError<ApiType>;
      /**
       * All items have been minted.
       **/
      MaxSupplyReached: AugmentedError<ApiType>;
      /**
       * The provided max supply is less to the amount of items a collection already has.
       **/
      MaxSupplyTooSmall: AugmentedError<ApiType>;
      /**
       * There is no delegate approved.
       **/
      NoDelegate: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Item is not for sale.
       **/
      NotForSale: AugmentedError<ApiType>;
      /**
       * The named owner has not signed ownership of the collection is acceptable.
       **/
      Unaccepted: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownCollection: AugmentedError<ApiType>;
      /**
       * The given item ID is unknown.
       **/
      UnknownItem: AugmentedError<ApiType>;
      /**
       * The delegate turned out to be different to what was expected.
       **/
      WrongDelegate: AugmentedError<ApiType>;
      /**
       * The owner turned out to be different to what was expected.
       **/
      WrongOwner: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    unknownTokens: {
      /**
       * The operation will cause balance to overflow.
       **/
      BalanceOverflow: AugmentedError<ApiType>;
      /**
       * The balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Unhandled asset.
       **/
      UnhandledAsset: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * The vested transfer amount is too low
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * Insufficient amount of balance to lock
       **/
      InsufficientBalanceToLock: AugmentedError<ApiType>;
      /**
       * Failed because the maximum vesting schedules was exceeded
       **/
      MaxVestingSchedulesExceeded: AugmentedError<ApiType>;
      /**
       * This account have too many vesting schedules
       **/
      TooManyVestingSchedules: AugmentedError<ApiType>;
      /**
       * Vesting period is zero
       **/
      ZeroVestingPeriod: AugmentedError<ApiType>;
      /**
       * Number of vests is zero
       **/
      ZeroVestingPeriodCount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    whitelist: {
      /**
       * The call was already whitelisted; No-Op.
       **/
      CallAlreadyWhitelisted: AugmentedError<ApiType>;
      /**
       * The call was not whitelisted.
       **/
      CallIsNotWhitelisted: AugmentedError<ApiType>;
      /**
       * The weight of the decoded call was higher than the witness.
       **/
      InvalidCallWeightWitness: AugmentedError<ApiType>;
      /**
       * The preimage of the call hash could not be loaded.
       **/
      UnavailablePreImage: AugmentedError<ApiType>;
      /**
       * The call could not be decoded.
       **/
      UndecodableCall: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmpQueue: {
      /**
       * The execution is already resumed.
       **/
      AlreadyResumed: AugmentedError<ApiType>;
      /**
       * The execution is already suspended.
       **/
      AlreadySuspended: AugmentedError<ApiType>;
      /**
       * Setting the queue config failed since one of its values was invalid.
       **/
      BadQueueConfig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Asset has no reserve location.
       **/
      AssetHasNoReserve: AugmentedError<ApiType>;
      /**
       * The specified index does not exist in a Assets struct.
       **/
      AssetIndexNonExistent: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the
       * destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `Location` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * We tried sending distinct asset and fee but they have different
       * reserve chains.
       **/
      DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
      /**
       * Fee is not enough.
       **/
      FeeNotEnough: AugmentedError<ApiType>;
      /**
       * Could not get ancestry of asset reserve location.
       **/
      InvalidAncestry: AugmentedError<ApiType>;
      /**
       * The Asset is invalid.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Invalid transfer destination.
       **/
      InvalidDest: AugmentedError<ApiType>;
      /**
       * MinXcmFee not registered for certain reserve location
       **/
      MinXcmFeeNotDefined: AugmentedError<ApiType>;
      /**
       * Not cross-chain transfer.
       **/
      NotCrossChainTransfer: AugmentedError<ApiType>;
      /**
       * Currency is not cross-chain transferable.
       **/
      NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
      /**
       * Not supported Location
       **/
      NotSupportedLocation: AugmentedError<ApiType>;
      /**
       * Asset transfer is limited by RateLimiter.
       **/
      RateLimited: AugmentedError<ApiType>;
      /**
       * The number of assets to be sent is over the maximum.
       **/
      TooManyAssetsBeingSent: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      XcmExecutionFailed: AugmentedError<ApiType>;
      /**
       * The transfering asset amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * The fee is zero.
       **/
      ZeroFee: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xyk: {
      /**
       * Overflow
       **/
      AddAssetAmountInvalid: AugmentedError<ApiType>;
      /**
       * Asset amount has exceeded given limit.
       **/
      AssetAmountExceededLimit: AugmentedError<ApiType>;
      /**
       * Asset amount has not reached given limit.
       **/
      AssetAmountNotReachedLimit: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      BuyAssetAmountInvalid: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      CannotApplyDiscount: AugmentedError<ApiType>;
      /**
       * Pool cannot be created due to outside factors.
       **/
      CannotCreatePool: AugmentedError<ApiType>;
      /**
       * It is not allowed to create a pool between same assets.
       **/
      CannotCreatePoolWithSameAssets: AugmentedError<ApiType>;
      /**
       * Overflow
       * Not used, kept for backward compatibility
       **/
      CreatePoolAssetAmountInvalid: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      FeeAmountInvalid: AugmentedError<ApiType>;
      /**
       * Asset balance is not sufficient.
       **/
      InsufficientAssetBalance: AugmentedError<ApiType>;
      /**
       * Liquidity has not reached the required minimum.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Not enough core asset liquidity in the pool.
       **/
      InsufficientNativeCurrencyBalance: AugmentedError<ApiType>;
      /**
       * Not enough asset liquidity in the pool.
       **/
      InsufficientPoolAssetBalance: AugmentedError<ApiType>;
      /**
       * Amount is less than min trading limit.
       **/
      InsufficientTradingAmount: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      InvalidLiquidityAmount: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      InvalidMintedLiquidity: AugmentedError<ApiType>;
      /**
       * Max fraction of pool to sell in single transaction has been exceeded.
       **/
      MaxInRatioExceeded: AugmentedError<ApiType>;
      /**
       * Max fraction of pool to buy in single transaction has been exceeded.
       **/
      MaxOutRatioExceeded: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      RemoveAssetAmountInvalid: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      SellAssetAmountInvalid: AugmentedError<ApiType>;
      /**
       * Liquidity pool for given assets already exists.
       **/
      TokenPoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Liquidity pool for given assets does not exist.
       **/
      TokenPoolNotFound: AugmentedError<ApiType>;
      /**
       * It is not allowed to create a pool with zero initial price.
       * Not used, kept for backward compatibility
       **/
      ZeroInitialPrice: AugmentedError<ApiType>;
      /**
       * Liquidity is zero.
       **/
      ZeroLiquidity: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xykLiquidityMining: {
      /**
       * Asset is not in the `AssetPair`.
       **/
      AssetNotInAssetPair: AugmentedError<ApiType>;
      /**
       * Nft pallet didn't return an owner.
       **/
      CantFindDepositOwner: AugmentedError<ApiType>;
      /**
       * XYK did not return assets for given pool id
       **/
      CantGetXykAssets: AugmentedError<ApiType>;
      /**
       * Deposit data not found
       **/
      DepositDataNotFound: AugmentedError<ApiType>;
      /**
       * Account balance of XYK pool shares is not sufficient.
       **/
      InsufficientXykSharesBalance: AugmentedError<ApiType>;
      /**
       * Provided `AssetPair` is not used by the deposit.
       **/
      InvalidAssetPair: AugmentedError<ApiType>;
      /**
       * Account is not deposit owner.
       **/
      NotDepositOwner: AugmentedError<ApiType>;
      /**
       * XYK pool does not exist
       **/
      XykPoolDoesntExist: AugmentedError<ApiType>;
      /**
       * Calculated reward to claim is 0.
       **/
      ZeroClaimedRewards: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xykWarehouseLM: {
      /**
       * Multiple claims in the same period is not allowed.
       **/
      DoubleClaimInPeriod: AugmentedError<ApiType>;
      /**
       * Trying to lock LP shares into already locked yield farm.
       **/
      DoubleLock: AugmentedError<ApiType>;
      /**
       * Account creation from id failed.
       **/
      ErrorGetAccountId: AugmentedError<ApiType>;
      /**
       * Account is not allowed to perform action.
       **/
      Forbidden: AugmentedError<ApiType>;
      /**
       * Max number of yield farms in global farm was reached. Global farm can't accept new
       * yield farms until some yield farm is not removed from storage.
       **/
      GlobalFarmIsFull: AugmentedError<ApiType>;
      /**
       * One or more yield farms exist in global farm.
       **/
      GlobalFarmIsNotEmpty: AugmentedError<ApiType>;
      /**
       * Global farm does not exist.
       **/
      GlobalFarmNotFound: AugmentedError<ApiType>;
      /**
       * `incentivized_asset` is not registered in asset registry.
       **/
      IncentivizedAssetNotRegistered: AugmentedError<ApiType>;
      /**
       * Action cannot be completed because unexpected error has occurred. This should be reported
       * to protocol maintainers.
       **/
      InconsistentState: AugmentedError<ApiType>;
      /**
       * Value of deposited shares amount in reward currency is bellow min. limit.
       **/
      IncorrectValuedShares: AugmentedError<ApiType>;
      /**
       * Reward currency balance is not sufficient.
       **/
      InsufficientRewardCurrencyBalance: AugmentedError<ApiType>;
      /**
       * Blocks per period can't be 0.
       **/
      InvalidBlocksPerPeriod: AugmentedError<ApiType>;
      /**
       * LP shares amount is not valid.
       **/
      InvalidDepositAmount: AugmentedError<ApiType>;
      /**
       * Loyalty curve's initial reward percentage is not valid. Valid range is: [0, 1).
       **/
      InvalidInitialRewardPercentage: AugmentedError<ApiType>;
      /**
       * Invalid min. deposit was set for global farm.
       **/
      InvalidMinDeposit: AugmentedError<ApiType>;
      /**
       * Yield farm multiplier can't be 0.
       **/
      InvalidMultiplier: AugmentedError<ApiType>;
      /**
       * Planned yielding periods is less than `MinPlannedYieldingPeriods`.
       **/
      InvalidPlannedYieldingPeriods: AugmentedError<ApiType>;
      /**
       * Price adjustment multiplier can't be 0.
       **/
      InvalidPriceAdjustment: AugmentedError<ApiType>;
      /**
       * Total rewards is less than `MinTotalFarmRewards`.
       **/
      InvalidTotalRewards: AugmentedError<ApiType>;
      /**
       * Yield per period can't be 0.
       **/
      InvalidYieldPerPeriod: AugmentedError<ApiType>;
      /**
       * Liquidity mining is canceled.
       **/
      LiquidityMiningCanceled: AugmentedError<ApiType>;
      /**
       * Liquidity mining is not canceled.
       **/
      LiquidityMiningIsActive: AugmentedError<ApiType>;
      /**
       * Liquidity mining is in `active` or `terminated` state and action cannot be completed.
       **/
      LiquidityMiningIsNotStopped: AugmentedError<ApiType>;
      /**
       * Maximum number of locks reached for deposit.
       **/
      MaxEntriesPerDeposit: AugmentedError<ApiType>;
      /**
       * Farm's `incentivized_asset` is missing in provided asset pair.
       **/
      MissingIncentivizedAsset: AugmentedError<ApiType>;
      /**
       * `reward_currency` is not registered in asset registry.
       **/
      RewardCurrencyNotRegistered: AugmentedError<ApiType>;
      /**
       * Yield farm with given `amm_pool_id` already exists in global farm.
       **/
      YieldFarmAlreadyExists: AugmentedError<ApiType>;
      /**
       * Yield farm entry doesn't exist for given deposit.
       **/
      YieldFarmEntryNotFound: AugmentedError<ApiType>;
      /**
       * Yield farm does not exist.
       **/
      YieldFarmNotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
