// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/types/registry";

import type {
  CumulusPalletParachainSystemCall,
  CumulusPalletParachainSystemError,
  CumulusPalletParachainSystemEvent,
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot,
  CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity,
  CumulusPalletParachainSystemUnincludedSegmentAncestor,
  CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate,
  CumulusPalletParachainSystemUnincludedSegmentSegmentTracker,
  CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth,
  CumulusPalletWeightReclaimStorageWeightReclaim,
  CumulusPalletXcmCall,
  CumulusPalletXcmEvent,
  CumulusPalletXcmOrigin,
  CumulusPalletXcmpQueueError,
  CumulusPalletXcmpQueueEvent,
  CumulusPalletXcmpQueueOutboundChannelDetails,
  CumulusPalletXcmpQueueOutboundState,
  CumulusPalletXcmpQueueQueueConfigData,
  CumulusPrimitivesCoreAggregateMessageOrigin,
  CumulusPrimitivesParachainInherentParachainInherentData,
  EthbloomBloom,
  EthereumBlock,
  EthereumHeader,
  EthereumLog,
  EthereumReceiptEip658ReceiptData,
  EthereumReceiptReceiptV4,
  EthereumTransactionEip1559Eip1559Transaction,
  EthereumTransactionEip2930AccessListItem,
  EthereumTransactionEip2930Eip2930Transaction,
  EthereumTransactionEip2930MalleableTransactionSignature,
  EthereumTransactionEip2930TransactionSignature,
  EthereumTransactionEip7702AuthorizationListItem,
  EthereumTransactionEip7702Eip7702Transaction,
  EthereumTransactionLegacyLegacyTransaction,
  EthereumTransactionLegacyTransactionAction,
  EthereumTransactionLegacyTransactionSignature,
  EthereumTransactionTransactionV3,
  EthereumTypesHashH64,
  EvmCoreErrorExitError,
  EvmCoreErrorExitFatal,
  EvmCoreErrorExitReason,
  EvmCoreErrorExitRevert,
  EvmCoreErrorExitSucceed,
  FpRpcTransactionStatus,
  FrameMetadataHashExtensionCheckMetadataHash,
  FrameMetadataHashExtensionMode,
  FrameSupportDispatchDispatchClass,
  FrameSupportDispatchPays,
  FrameSupportDispatchPerDispatchClassU32,
  FrameSupportDispatchPerDispatchClassWeight,
  FrameSupportDispatchPerDispatchClassWeightsPerClass,
  FrameSupportDispatchPostDispatchInfo,
  FrameSupportDispatchRawOrigin,
  FrameSupportMessagesProcessMessageError,
  FrameSupportPalletId,
  FrameSupportPreimagesBounded,
  FrameSupportScheduleDispatchTime,
  FrameSupportStorageDisabled,
  FrameSupportTokensMiscBalanceStatus,
  FrameSupportTokensMiscIdAmount,
  FrameSystemAccountInfo,
  FrameSystemCall,
  FrameSystemCodeUpgradeAuthorization,
  FrameSystemDispatchEventInfo,
  FrameSystemError,
  FrameSystemEvent,
  FrameSystemEventRecord,
  FrameSystemExtensionsCheckGenesis,
  FrameSystemExtensionsCheckNonZeroSender,
  FrameSystemExtensionsCheckNonce,
  FrameSystemExtensionsCheckSpecVersion,
  FrameSystemExtensionsCheckTxVersion,
  FrameSystemExtensionsCheckWeight,
  FrameSystemLastRuntimeUpgradeInfo,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsWeightsPerClass,
  FrameSystemPhase,
  HydraDxMathOmnipoolTypesSignedBalance,
  HydraDxMathRatio,
  HydraDxMathStableswapTypesAssetReserve,
  HydradxRuntimeGovernanceOriginsPalletCustomOriginsOrigin,
  HydradxRuntimeOpaqueSessionKeys,
  HydradxRuntimeOriginCaller,
  HydradxRuntimeRuntime,
  HydradxRuntimeRuntimeHoldReason,
  HydradxRuntimeSystemProxyType,
  HydradxRuntimeXcmAssetLocation,
  HydradxTraitsOracleLiquidity,
  HydradxTraitsOracleOraclePeriod,
  HydradxTraitsOracleVolume,
  HydradxTraitsRouterAssetPair,
  HydradxTraitsRouterPoolType,
  HydradxTraitsRouterTrade,
  HydradxTraitsStableswapAssetAmount,
  OrmlTokensAccountData,
  OrmlTokensBalanceLock,
  OrmlTokensModuleCall,
  OrmlTokensModuleError,
  OrmlTokensModuleEvent,
  OrmlTokensReserveData,
  OrmlUnknownTokensModuleError,
  OrmlUnknownTokensModuleEvent,
  OrmlVestingModuleCall,
  OrmlVestingModuleError,
  OrmlVestingModuleEvent,
  OrmlVestingVestingSchedule,
  OrmlXcmModuleCall,
  OrmlXcmModuleError,
  OrmlXcmModuleEvent,
  OrmlXtokensModuleCall,
  OrmlXtokensModuleError,
  OrmlXtokensModuleEvent,
  PalletAssetRegistryAssetDetails,
  PalletAssetRegistryAssetType,
  PalletAssetRegistryCall,
  PalletAssetRegistryError,
  PalletAssetRegistryEvent,
  PalletBalancesAccountData,
  PalletBalancesAdjustmentDirection,
  PalletBalancesBalanceLock,
  PalletBalancesCall,
  PalletBalancesError,
  PalletBalancesEvent,
  PalletBalancesReasons,
  PalletBalancesReserveData,
  PalletBondsCall,
  PalletBondsError,
  PalletBondsEvent,
  PalletBroadcastAsset,
  PalletBroadcastCall,
  PalletBroadcastDestination,
  PalletBroadcastError,
  PalletBroadcastEvent,
  PalletBroadcastExecutionType,
  PalletBroadcastFee,
  PalletBroadcastFiller,
  PalletBroadcastTradeOperation,
  PalletCircuitBreakerCall,
  PalletCircuitBreakerError,
  PalletCircuitBreakerEvent,
  PalletCircuitBreakerGlobalAssetCategory,
  PalletCircuitBreakerGlobalWithdrawLimitParameters,
  PalletCircuitBreakerLiquidityLimit,
  PalletCircuitBreakerLockdownStatus,
  PalletCircuitBreakerTradeVolumeLimit,
  PalletClaimsCall,
  PalletClaimsEcdsaSignature,
  PalletClaimsError,
  PalletClaimsEthereumAddress,
  PalletClaimsEvent,
  PalletClaimsValidateClaim,
  PalletCollatorRewardsError,
  PalletCollatorRewardsEvent,
  PalletCollatorSelectionCall,
  PalletCollatorSelectionCandidateInfo,
  PalletCollatorSelectionError,
  PalletCollatorSelectionEvent,
  PalletCollectiveCall,
  PalletCollectiveError,
  PalletCollectiveEvent,
  PalletCollectiveHoldReason,
  PalletCollectiveRawOrigin,
  PalletCollectiveVotes,
  PalletConvictionVotingCall,
  PalletConvictionVotingConviction,
  PalletConvictionVotingDelegations,
  PalletConvictionVotingError,
  PalletConvictionVotingEvent,
  PalletConvictionVotingTally,
  PalletConvictionVotingVoteAccountVote,
  PalletConvictionVotingVoteCasting,
  PalletConvictionVotingVoteDelegating,
  PalletConvictionVotingVotePriorLock,
  PalletConvictionVotingVoteVoting,
  PalletCurrenciesModuleCall,
  PalletCurrenciesModuleError,
  PalletCurrenciesModuleEvent,
  PalletDcaCall,
  PalletDcaError,
  PalletDcaEvent,
  PalletDcaOrder,
  PalletDcaSchedule,
  PalletDemocracyCall,
  PalletDemocracyConviction,
  PalletDemocracyDelegations,
  PalletDemocracyError,
  PalletDemocracyEvent,
  PalletDemocracyMetadataOwner,
  PalletDemocracyReferendumInfo,
  PalletDemocracyReferendumStatus,
  PalletDemocracyTally,
  PalletDemocracyVoteAccountVote,
  PalletDemocracyVotePriorLock,
  PalletDemocracyVoteThreshold,
  PalletDemocracyVoteVoting,
  PalletDispatcherCall,
  PalletDispatcherError,
  PalletDispatcherEvent,
  PalletDispenserCall,
  PalletDispenserDispenserConfigData,
  PalletDispenserError,
  PalletDispenserEvent,
  PalletDispenserEvmTransactionParams,
  PalletDusterCall,
  PalletDusterError,
  PalletDusterEvent,
  PalletDynamicFeesAssetFeeConfig,
  PalletDynamicFeesCall,
  PalletDynamicFeesError,
  PalletDynamicFeesEvent,
  PalletDynamicFeesFeeEntry,
  PalletDynamicFeesFeeParams,
  PalletEmaOracleCall,
  PalletEmaOracleError,
  PalletEmaOracleEvent,
  PalletEmaOracleOracleEntry,
  PalletEthereumCall,
  PalletEthereumError,
  PalletEthereumEvent,
  PalletEthereumRawOrigin,
  PalletEvmAccountsCall,
  PalletEvmAccountsError,
  PalletEvmAccountsEvent,
  PalletEvmCall,
  PalletEvmCodeMetadata,
  PalletEvmError,
  PalletEvmEvent,
  PalletGenesisHistoryCall,
  PalletGenesisHistoryChain,
  PalletHsmArbitrage,
  PalletHsmCall,
  PalletHsmCollateralInfo,
  PalletHsmError,
  PalletHsmEvent,
  PalletIdentityAuthorityProperties,
  PalletIdentityCall,
  PalletIdentityError,
  PalletIdentityEvent,
  PalletIdentityJudgement,
  PalletIdentityLegacyIdentityInfo,
  PalletIdentityProvider,
  PalletIdentityRegistrarInfo,
  PalletIdentityRegistration,
  PalletIdentityUsernameInformation,
  PalletLbpCall,
  PalletLbpError,
  PalletLbpEvent,
  PalletLbpPool,
  PalletLbpWeightCurveType,
  PalletLiquidationCall,
  PalletLiquidationError,
  PalletLiquidationEvent,
  PalletLiquidityMiningCall,
  PalletLiquidityMiningDepositData,
  PalletLiquidityMiningError,
  PalletLiquidityMiningEvent,
  PalletLiquidityMiningFarmState,
  PalletLiquidityMiningGlobalFarmData,
  PalletLiquidityMiningInconsistentStateError,
  PalletLiquidityMiningLoyaltyCurve,
  PalletLiquidityMiningYieldFarmData,
  PalletLiquidityMiningYieldFarmEntry,
  PalletMessageQueueBookState,
  PalletMessageQueueCall,
  PalletMessageQueueError,
  PalletMessageQueueEvent,
  PalletMessageQueueNeighbours,
  PalletMessageQueuePage,
  PalletMigrationsActiveCursor,
  PalletMigrationsCall,
  PalletMigrationsError,
  PalletMigrationsEvent,
  PalletMigrationsHistoricCleanupSelector,
  PalletMigrationsMigrationCursor,
  PalletMultisigCall,
  PalletMultisigError,
  PalletMultisigEvent,
  PalletMultisigMultisig,
  PalletMultisigTimepoint,
  PalletOmnipoolAssetState,
  PalletOmnipoolCall,
  PalletOmnipoolError,
  PalletOmnipoolEvent,
  PalletOmnipoolLiquidityMiningCall,
  PalletOmnipoolLiquidityMiningError,
  PalletOmnipoolLiquidityMiningEvent,
  PalletOmnipoolLiquidityMiningInconsistentStateError,
  PalletOmnipoolPosition,
  PalletOmnipoolSlipFeeConfig,
  PalletOmnipoolTradability,
  PalletOtcCall,
  PalletOtcError,
  PalletOtcEvent,
  PalletOtcOrder,
  PalletOtcSettlementsCall,
  PalletOtcSettlementsError,
  PalletOtcSettlementsEvent,
  PalletPreimageCall,
  PalletPreimageError,
  PalletPreimageEvent,
  PalletPreimageHoldReason,
  PalletPreimageOldRequestStatus,
  PalletPreimageRequestStatus,
  PalletProxyAnnouncement,
  PalletProxyCall,
  PalletProxyDepositKind,
  PalletProxyError,
  PalletProxyEvent,
  PalletProxyProxyDefinition,
  PalletReferendaCall,
  PalletReferendaCurve,
  PalletReferendaDecidingStatus,
  PalletReferendaDeposit,
  PalletReferendaError,
  PalletReferendaEvent,
  PalletReferendaReferendumInfo,
  PalletReferendaReferendumStatus,
  PalletReferendaTrackDetails,
  PalletReferralsAssetAmount,
  PalletReferralsCall,
  PalletReferralsError,
  PalletReferralsEvent,
  PalletReferralsFeeDistribution,
  PalletReferralsLevel,
  PalletRelaychainInfoCall,
  PalletRelaychainInfoError,
  PalletRelaychainInfoEvent,
  PalletRouteExecutorCall,
  PalletRouteExecutorError,
  PalletRouteExecutorEvent,
  PalletSchedulerCall,
  PalletSchedulerError,
  PalletSchedulerEvent,
  PalletSchedulerRetryConfig,
  PalletSchedulerScheduled,
  PalletSessionCall,
  PalletSessionError,
  PalletSessionEvent,
  PalletSignetAffinePoint,
  PalletSignetCall,
  PalletSignetError,
  PalletSignetErrorResponse,
  PalletSignetEvent,
  PalletSignetSignature,
  PalletStableswapCall,
  PalletStableswapError,
  PalletStableswapEvent,
  PalletStableswapPegSource,
  PalletStableswapPoolInfo,
  PalletStableswapPoolPegInfo,
  PalletStableswapPoolSnapshot,
  PalletStableswapTradability,
  PalletStakingCall,
  PalletStakingConviction,
  PalletStakingError,
  PalletStakingEvent,
  PalletStakingInconsistentStateError,
  PalletStakingPosition,
  PalletStakingStakingData,
  PalletStakingVote,
  PalletStakingVoting,
  PalletStateTrieMigrationCall,
  PalletStateTrieMigrationError,
  PalletStateTrieMigrationEvent,
  PalletStateTrieMigrationHoldReason,
  PalletStateTrieMigrationMigrationCompute,
  PalletStateTrieMigrationMigrationLimits,
  PalletStateTrieMigrationMigrationTask,
  PalletStateTrieMigrationProgress,
  PalletTimestampCall,
  PalletTransactionMultiPaymentCall,
  PalletTransactionMultiPaymentError,
  PalletTransactionMultiPaymentEvent,
  PalletTransactionPauseCall,
  PalletTransactionPauseError,
  PalletTransactionPauseEvent,
  PalletTransactionPaymentChargeTransactionPayment,
  PalletTransactionPaymentEvent,
  PalletTransactionPaymentReleases,
  PalletTreasuryCall,
  PalletTreasuryError,
  PalletTreasuryEvent,
  PalletTreasuryPaymentState,
  PalletTreasuryProposal,
  PalletTreasurySpendStatus,
  PalletUniquesCall,
  PalletUniquesCollectionDetails,
  PalletUniquesCollectionMetadata,
  PalletUniquesDestroyWitness,
  PalletUniquesError,
  PalletUniquesEvent,
  PalletUniquesItemDetails,
  PalletUniquesItemMetadata,
  PalletUtilityCall,
  PalletUtilityError,
  PalletUtilityEvent,
  PalletWhitelistCall,
  PalletWhitelistError,
  PalletWhitelistEvent,
  PalletXcmAuthorizedAliasesEntry,
  PalletXcmCall,
  PalletXcmError,
  PalletXcmEvent,
  PalletXcmHoldReason,
  PalletXcmMaxAuthorizedAliases,
  PalletXcmOrigin,
  PalletXcmQueryStatus,
  PalletXcmRemoteLockedFungibleRecord,
  PalletXcmVersionMigrationStage,
  PalletXykAssetPair,
  PalletXykCall,
  PalletXykError,
  PalletXykEvent,
  PalletXykLiquidityMiningCall,
  PalletXykLiquidityMiningError,
  PalletXykLiquidityMiningEvent,
  PolkadotCorePrimitivesInboundDownwardMessage,
  PolkadotCorePrimitivesInboundHrmpMessage,
  PolkadotCorePrimitivesOutboundHrmpMessage,
  PolkadotPrimitivesV8AbridgedHostConfiguration,
  PolkadotPrimitivesV8AbridgedHrmpChannel,
  PolkadotPrimitivesV8AsyncBackingAsyncBackingParams,
  PolkadotPrimitivesV8PersistedValidationData,
  PolkadotPrimitivesV8UpgradeGoAhead,
  PolkadotPrimitivesV8UpgradeRestriction,
  SpArithmeticArithmeticError,
  SpConsensusAuraSr25519AppSr25519Public,
  SpCoreCryptoKeyTypeId,
  SpRuntimeBlakeTwo256,
  SpRuntimeDigest,
  SpRuntimeDigestDigestItem,
  SpRuntimeDispatchError,
  SpRuntimeDispatchErrorWithPostInfo,
  SpRuntimeModuleError,
  SpRuntimeMultiSignature,
  SpRuntimeProvingTrieTrieError,
  SpRuntimeTokenError,
  SpRuntimeTransactionalError,
  SpTrieStorageProof,
  SpVersionRuntimeVersion,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
  StagingParachainInfoCall,
  StagingXcmExecutorAssetTransferTransferType,
  StagingXcmV3MultiLocation,
  StagingXcmV4Asset,
  StagingXcmV4AssetAssetFilter,
  StagingXcmV4AssetAssetId,
  StagingXcmV4AssetAssetInstance,
  StagingXcmV4AssetAssets,
  StagingXcmV4AssetFungibility,
  StagingXcmV4AssetWildAsset,
  StagingXcmV4AssetWildFungibility,
  StagingXcmV4Instruction,
  StagingXcmV4Junction,
  StagingXcmV4JunctionNetworkId,
  StagingXcmV4Junctions,
  StagingXcmV4Location,
  StagingXcmV4PalletInfo,
  StagingXcmV4QueryResponseInfo,
  StagingXcmV4Response,
  StagingXcmV4Xcm,
  StagingXcmV5Asset,
  StagingXcmV5AssetAssetFilter,
  StagingXcmV5AssetAssetId,
  StagingXcmV5AssetAssetInstance,
  StagingXcmV5AssetAssetTransferFilter,
  StagingXcmV5AssetAssets,
  StagingXcmV5AssetFungibility,
  StagingXcmV5AssetWildAsset,
  StagingXcmV5AssetWildFungibility,
  StagingXcmV5Hint,
  StagingXcmV5Instruction,
  StagingXcmV5Junction,
  StagingXcmV5JunctionNetworkId,
  StagingXcmV5Junctions,
  StagingXcmV5Location,
  StagingXcmV5PalletInfo,
  StagingXcmV5QueryResponseInfo,
  StagingXcmV5Response,
  StagingXcmV5TraitsOutcome,
  StagingXcmV5Xcm,
  XcmDoubleEncoded,
  XcmRuntimeApisAuthorizedAliasesOriginAliaser,
  XcmV3Instruction,
  XcmV3Junction,
  XcmV3JunctionBodyId,
  XcmV3JunctionBodyPart,
  XcmV3JunctionNetworkId,
  XcmV3Junctions,
  XcmV3MaybeErrorCode,
  XcmV3MultiAsset,
  XcmV3MultiassetAssetId,
  XcmV3MultiassetAssetInstance,
  XcmV3MultiassetFungibility,
  XcmV3MultiassetMultiAssetFilter,
  XcmV3MultiassetMultiAssets,
  XcmV3MultiassetWildFungibility,
  XcmV3MultiassetWildMultiAsset,
  XcmV3OriginKind,
  XcmV3PalletInfo,
  XcmV3QueryResponseInfo,
  XcmV3Response,
  XcmV3TraitsError,
  XcmV3TraitsSendError,
  XcmV3WeightLimit,
  XcmV3Xcm,
  XcmV5TraitsError,
  XcmVersionedAsset,
  XcmVersionedAssetId,
  XcmVersionedAssets,
  XcmVersionedLocation,
  XcmVersionedResponse,
  XcmVersionedXcm,
} from "@polkadot/types/lookup";

declare module "@polkadot/types/types/registry" {
  interface InterfaceTypes {
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
    CumulusPalletParachainSystemUnincludedSegmentAncestor: CumulusPalletParachainSystemUnincludedSegmentAncestor;
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate;
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: CumulusPalletParachainSystemUnincludedSegmentSegmentTracker;
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
    CumulusPalletWeightReclaimStorageWeightReclaim: CumulusPalletWeightReclaimStorageWeightReclaim;
    CumulusPalletXcmCall: CumulusPalletXcmCall;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesCoreAggregateMessageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    EthbloomBloom: EthbloomBloom;
    EthereumBlock: EthereumBlock;
    EthereumHeader: EthereumHeader;
    EthereumLog: EthereumLog;
    EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData;
    EthereumReceiptReceiptV4: EthereumReceiptReceiptV4;
    EthereumTransactionEip1559Eip1559Transaction: EthereumTransactionEip1559Eip1559Transaction;
    EthereumTransactionEip2930AccessListItem: EthereumTransactionEip2930AccessListItem;
    EthereumTransactionEip2930Eip2930Transaction: EthereumTransactionEip2930Eip2930Transaction;
    EthereumTransactionEip2930MalleableTransactionSignature: EthereumTransactionEip2930MalleableTransactionSignature;
    EthereumTransactionEip2930TransactionSignature: EthereumTransactionEip2930TransactionSignature;
    EthereumTransactionEip7702AuthorizationListItem: EthereumTransactionEip7702AuthorizationListItem;
    EthereumTransactionEip7702Eip7702Transaction: EthereumTransactionEip7702Eip7702Transaction;
    EthereumTransactionLegacyLegacyTransaction: EthereumTransactionLegacyLegacyTransaction;
    EthereumTransactionLegacyTransactionAction: EthereumTransactionLegacyTransactionAction;
    EthereumTransactionLegacyTransactionSignature: EthereumTransactionLegacyTransactionSignature;
    EthereumTransactionTransactionV3: EthereumTransactionTransactionV3;
    EthereumTypesHashH64: EthereumTypesHashH64;
    EvmCoreErrorExitError: EvmCoreErrorExitError;
    EvmCoreErrorExitFatal: EvmCoreErrorExitFatal;
    EvmCoreErrorExitReason: EvmCoreErrorExitReason;
    EvmCoreErrorExitRevert: EvmCoreErrorExitRevert;
    EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed;
    FpRpcTransactionStatus: FpRpcTransactionStatus;
    FrameMetadataHashExtensionCheckMetadataHash: FrameMetadataHashExtensionCheckMetadataHash;
    FrameMetadataHashExtensionMode: FrameMetadataHashExtensionMode;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchPostDispatchInfo: FrameSupportDispatchPostDispatchInfo;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportMessagesProcessMessageError: FrameSupportMessagesProcessMessageError;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportScheduleDispatchTime: FrameSupportScheduleDispatchTime;
    FrameSupportStorageDisabled: FrameSupportStorageDisabled;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSupportTokensMiscIdAmount: FrameSupportTokensMiscIdAmount;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemCodeUpgradeAuthorization: FrameSystemCodeUpgradeAuthorization;
    FrameSystemDispatchEventInfo: FrameSystemDispatchEventInfo;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    HydraDxMathOmnipoolTypesSignedBalance: HydraDxMathOmnipoolTypesSignedBalance;
    HydraDxMathRatio: HydraDxMathRatio;
    HydraDxMathStableswapTypesAssetReserve: HydraDxMathStableswapTypesAssetReserve;
    HydradxRuntimeGovernanceOriginsPalletCustomOriginsOrigin: HydradxRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    HydradxRuntimeOpaqueSessionKeys: HydradxRuntimeOpaqueSessionKeys;
    HydradxRuntimeOriginCaller: HydradxRuntimeOriginCaller;
    HydradxRuntimeRuntime: HydradxRuntimeRuntime;
    HydradxRuntimeRuntimeHoldReason: HydradxRuntimeRuntimeHoldReason;
    HydradxRuntimeSystemProxyType: HydradxRuntimeSystemProxyType;
    HydradxRuntimeXcmAssetLocation: HydradxRuntimeXcmAssetLocation;
    HydradxTraitsOracleLiquidity: HydradxTraitsOracleLiquidity;
    HydradxTraitsOracleOraclePeriod: HydradxTraitsOracleOraclePeriod;
    HydradxTraitsOracleVolume: HydradxTraitsOracleVolume;
    HydradxTraitsRouterAssetPair: HydradxTraitsRouterAssetPair;
    HydradxTraitsRouterPoolType: HydradxTraitsRouterPoolType;
    HydradxTraitsRouterTrade: HydradxTraitsRouterTrade;
    HydradxTraitsStableswapAssetAmount: HydradxTraitsStableswapAssetAmount;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlUnknownTokensModuleError: OrmlUnknownTokensModuleError;
    OrmlUnknownTokensModuleEvent: OrmlUnknownTokensModuleEvent;
    OrmlVestingModuleCall: OrmlVestingModuleCall;
    OrmlVestingModuleError: OrmlVestingModuleError;
    OrmlVestingModuleEvent: OrmlVestingModuleEvent;
    OrmlVestingVestingSchedule: OrmlVestingVestingSchedule;
    OrmlXcmModuleCall: OrmlXcmModuleCall;
    OrmlXcmModuleError: OrmlXcmModuleError;
    OrmlXcmModuleEvent: OrmlXcmModuleEvent;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletAssetRegistryAssetDetails: PalletAssetRegistryAssetDetails;
    PalletAssetRegistryAssetType: PalletAssetRegistryAssetType;
    PalletAssetRegistryCall: PalletAssetRegistryCall;
    PalletAssetRegistryError: PalletAssetRegistryError;
    PalletAssetRegistryEvent: PalletAssetRegistryEvent;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesAdjustmentDirection: PalletBalancesAdjustmentDirection;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBondsCall: PalletBondsCall;
    PalletBondsError: PalletBondsError;
    PalletBondsEvent: PalletBondsEvent;
    PalletBroadcastAsset: PalletBroadcastAsset;
    PalletBroadcastCall: PalletBroadcastCall;
    PalletBroadcastDestination: PalletBroadcastDestination;
    PalletBroadcastError: PalletBroadcastError;
    PalletBroadcastEvent: PalletBroadcastEvent;
    PalletBroadcastExecutionType: PalletBroadcastExecutionType;
    PalletBroadcastFee: PalletBroadcastFee;
    PalletBroadcastFiller: PalletBroadcastFiller;
    PalletBroadcastTradeOperation: PalletBroadcastTradeOperation;
    PalletCircuitBreakerCall: PalletCircuitBreakerCall;
    PalletCircuitBreakerError: PalletCircuitBreakerError;
    PalletCircuitBreakerEvent: PalletCircuitBreakerEvent;
    PalletCircuitBreakerGlobalAssetCategory: PalletCircuitBreakerGlobalAssetCategory;
    PalletCircuitBreakerGlobalWithdrawLimitParameters: PalletCircuitBreakerGlobalWithdrawLimitParameters;
    PalletCircuitBreakerLiquidityLimit: PalletCircuitBreakerLiquidityLimit;
    PalletCircuitBreakerLockdownStatus: PalletCircuitBreakerLockdownStatus;
    PalletCircuitBreakerTradeVolumeLimit: PalletCircuitBreakerTradeVolumeLimit;
    PalletClaimsCall: PalletClaimsCall;
    PalletClaimsEcdsaSignature: PalletClaimsEcdsaSignature;
    PalletClaimsError: PalletClaimsError;
    PalletClaimsEthereumAddress: PalletClaimsEthereumAddress;
    PalletClaimsEvent: PalletClaimsEvent;
    PalletClaimsValidateClaim: PalletClaimsValidateClaim;
    PalletCollatorRewardsError: PalletCollatorRewardsError;
    PalletCollatorRewardsEvent: PalletCollatorRewardsEvent;
    PalletCollatorSelectionCall: PalletCollatorSelectionCall;
    PalletCollatorSelectionCandidateInfo: PalletCollatorSelectionCandidateInfo;
    PalletCollatorSelectionError: PalletCollatorSelectionError;
    PalletCollatorSelectionEvent: PalletCollatorSelectionEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveHoldReason: PalletCollectiveHoldReason;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletConvictionVotingCall: PalletConvictionVotingCall;
    PalletConvictionVotingConviction: PalletConvictionVotingConviction;
    PalletConvictionVotingDelegations: PalletConvictionVotingDelegations;
    PalletConvictionVotingError: PalletConvictionVotingError;
    PalletConvictionVotingEvent: PalletConvictionVotingEvent;
    PalletConvictionVotingTally: PalletConvictionVotingTally;
    PalletConvictionVotingVoteAccountVote: PalletConvictionVotingVoteAccountVote;
    PalletConvictionVotingVoteCasting: PalletConvictionVotingVoteCasting;
    PalletConvictionVotingVoteDelegating: PalletConvictionVotingVoteDelegating;
    PalletConvictionVotingVotePriorLock: PalletConvictionVotingVotePriorLock;
    PalletConvictionVotingVoteVoting: PalletConvictionVotingVoteVoting;
    PalletCurrenciesModuleCall: PalletCurrenciesModuleCall;
    PalletCurrenciesModuleError: PalletCurrenciesModuleError;
    PalletCurrenciesModuleEvent: PalletCurrenciesModuleEvent;
    PalletDcaCall: PalletDcaCall;
    PalletDcaError: PalletDcaError;
    PalletDcaEvent: PalletDcaEvent;
    PalletDcaOrder: PalletDcaOrder;
    PalletDcaSchedule: PalletDcaSchedule;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyMetadataOwner: PalletDemocracyMetadataOwner;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletDispatcherCall: PalletDispatcherCall;
    PalletDispatcherError: PalletDispatcherError;
    PalletDispatcherEvent: PalletDispatcherEvent;
    PalletDispenserCall: PalletDispenserCall;
    PalletDispenserDispenserConfigData: PalletDispenserDispenserConfigData;
    PalletDispenserError: PalletDispenserError;
    PalletDispenserEvent: PalletDispenserEvent;
    PalletDispenserEvmTransactionParams: PalletDispenserEvmTransactionParams;
    PalletDusterCall: PalletDusterCall;
    PalletDusterError: PalletDusterError;
    PalletDusterEvent: PalletDusterEvent;
    PalletDynamicFeesAssetFeeConfig: PalletDynamicFeesAssetFeeConfig;
    PalletDynamicFeesCall: PalletDynamicFeesCall;
    PalletDynamicFeesError: PalletDynamicFeesError;
    PalletDynamicFeesEvent: PalletDynamicFeesEvent;
    PalletDynamicFeesFeeEntry: PalletDynamicFeesFeeEntry;
    PalletDynamicFeesFeeParams: PalletDynamicFeesFeeParams;
    PalletEmaOracleCall: PalletEmaOracleCall;
    PalletEmaOracleError: PalletEmaOracleError;
    PalletEmaOracleEvent: PalletEmaOracleEvent;
    PalletEmaOracleOracleEntry: PalletEmaOracleOracleEntry;
    PalletEthereumCall: PalletEthereumCall;
    PalletEthereumError: PalletEthereumError;
    PalletEthereumEvent: PalletEthereumEvent;
    PalletEthereumRawOrigin: PalletEthereumRawOrigin;
    PalletEvmAccountsCall: PalletEvmAccountsCall;
    PalletEvmAccountsError: PalletEvmAccountsError;
    PalletEvmAccountsEvent: PalletEvmAccountsEvent;
    PalletEvmCall: PalletEvmCall;
    PalletEvmCodeMetadata: PalletEvmCodeMetadata;
    PalletEvmError: PalletEvmError;
    PalletEvmEvent: PalletEvmEvent;
    PalletGenesisHistoryCall: PalletGenesisHistoryCall;
    PalletGenesisHistoryChain: PalletGenesisHistoryChain;
    PalletHsmArbitrage: PalletHsmArbitrage;
    PalletHsmCall: PalletHsmCall;
    PalletHsmCollateralInfo: PalletHsmCollateralInfo;
    PalletHsmError: PalletHsmError;
    PalletHsmEvent: PalletHsmEvent;
    PalletIdentityAuthorityProperties: PalletIdentityAuthorityProperties;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityLegacyIdentityInfo: PalletIdentityLegacyIdentityInfo;
    PalletIdentityProvider: PalletIdentityProvider;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletIdentityUsernameInformation: PalletIdentityUsernameInformation;
    PalletLbpCall: PalletLbpCall;
    PalletLbpError: PalletLbpError;
    PalletLbpEvent: PalletLbpEvent;
    PalletLbpPool: PalletLbpPool;
    PalletLbpWeightCurveType: PalletLbpWeightCurveType;
    PalletLiquidationCall: PalletLiquidationCall;
    PalletLiquidationError: PalletLiquidationError;
    PalletLiquidationEvent: PalletLiquidationEvent;
    PalletLiquidityMiningCall: PalletLiquidityMiningCall;
    PalletLiquidityMiningDepositData: PalletLiquidityMiningDepositData;
    PalletLiquidityMiningError: PalletLiquidityMiningError;
    PalletLiquidityMiningEvent: PalletLiquidityMiningEvent;
    PalletLiquidityMiningFarmState: PalletLiquidityMiningFarmState;
    PalletLiquidityMiningGlobalFarmData: PalletLiquidityMiningGlobalFarmData;
    PalletLiquidityMiningInconsistentStateError: PalletLiquidityMiningInconsistentStateError;
    PalletLiquidityMiningLoyaltyCurve: PalletLiquidityMiningLoyaltyCurve;
    PalletLiquidityMiningYieldFarmData: PalletLiquidityMiningYieldFarmData;
    PalletLiquidityMiningYieldFarmEntry: PalletLiquidityMiningYieldFarmEntry;
    PalletMessageQueueBookState: PalletMessageQueueBookState;
    PalletMessageQueueCall: PalletMessageQueueCall;
    PalletMessageQueueError: PalletMessageQueueError;
    PalletMessageQueueEvent: PalletMessageQueueEvent;
    PalletMessageQueueNeighbours: PalletMessageQueueNeighbours;
    PalletMessageQueuePage: PalletMessageQueuePage;
    PalletMigrationsActiveCursor: PalletMigrationsActiveCursor;
    PalletMigrationsCall: PalletMigrationsCall;
    PalletMigrationsError: PalletMigrationsError;
    PalletMigrationsEvent: PalletMigrationsEvent;
    PalletMigrationsHistoricCleanupSelector: PalletMigrationsHistoricCleanupSelector;
    PalletMigrationsMigrationCursor: PalletMigrationsMigrationCursor;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletOmnipoolAssetState: PalletOmnipoolAssetState;
    PalletOmnipoolCall: PalletOmnipoolCall;
    PalletOmnipoolError: PalletOmnipoolError;
    PalletOmnipoolEvent: PalletOmnipoolEvent;
    PalletOmnipoolLiquidityMiningCall: PalletOmnipoolLiquidityMiningCall;
    PalletOmnipoolLiquidityMiningError: PalletOmnipoolLiquidityMiningError;
    PalletOmnipoolLiquidityMiningEvent: PalletOmnipoolLiquidityMiningEvent;
    PalletOmnipoolLiquidityMiningInconsistentStateError: PalletOmnipoolLiquidityMiningInconsistentStateError;
    PalletOmnipoolPosition: PalletOmnipoolPosition;
    PalletOmnipoolSlipFeeConfig: PalletOmnipoolSlipFeeConfig;
    PalletOmnipoolTradability: PalletOmnipoolTradability;
    PalletOtcCall: PalletOtcCall;
    PalletOtcError: PalletOtcError;
    PalletOtcEvent: PalletOtcEvent;
    PalletOtcOrder: PalletOtcOrder;
    PalletOtcSettlementsCall: PalletOtcSettlementsCall;
    PalletOtcSettlementsError: PalletOtcSettlementsError;
    PalletOtcSettlementsEvent: PalletOtcSettlementsEvent;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageHoldReason: PalletPreimageHoldReason;
    PalletPreimageOldRequestStatus: PalletPreimageOldRequestStatus;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyDepositKind: PalletProxyDepositKind;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletReferendaCall: PalletReferendaCall;
    PalletReferendaCurve: PalletReferendaCurve;
    PalletReferendaDecidingStatus: PalletReferendaDecidingStatus;
    PalletReferendaDeposit: PalletReferendaDeposit;
    PalletReferendaError: PalletReferendaError;
    PalletReferendaEvent: PalletReferendaEvent;
    PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
    PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
    PalletReferendaTrackDetails: PalletReferendaTrackDetails;
    PalletReferralsAssetAmount: PalletReferralsAssetAmount;
    PalletReferralsCall: PalletReferralsCall;
    PalletReferralsError: PalletReferralsError;
    PalletReferralsEvent: PalletReferralsEvent;
    PalletReferralsFeeDistribution: PalletReferralsFeeDistribution;
    PalletReferralsLevel: PalletReferralsLevel;
    PalletRelaychainInfoCall: PalletRelaychainInfoCall;
    PalletRelaychainInfoError: PalletRelaychainInfoError;
    PalletRelaychainInfoEvent: PalletRelaychainInfoEvent;
    PalletRouteExecutorCall: PalletRouteExecutorCall;
    PalletRouteExecutorError: PalletRouteExecutorError;
    PalletRouteExecutorEvent: PalletRouteExecutorEvent;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerRetryConfig: PalletSchedulerRetryConfig;
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSignetAffinePoint: PalletSignetAffinePoint;
    PalletSignetCall: PalletSignetCall;
    PalletSignetError: PalletSignetError;
    PalletSignetErrorResponse: PalletSignetErrorResponse;
    PalletSignetEvent: PalletSignetEvent;
    PalletSignetSignature: PalletSignetSignature;
    PalletStableswapCall: PalletStableswapCall;
    PalletStableswapError: PalletStableswapError;
    PalletStableswapEvent: PalletStableswapEvent;
    PalletStableswapPegSource: PalletStableswapPegSource;
    PalletStableswapPoolInfo: PalletStableswapPoolInfo;
    PalletStableswapPoolPegInfo: PalletStableswapPoolPegInfo;
    PalletStableswapPoolSnapshot: PalletStableswapPoolSnapshot;
    PalletStableswapTradability: PalletStableswapTradability;
    PalletStakingCall: PalletStakingCall;
    PalletStakingConviction: PalletStakingConviction;
    PalletStakingError: PalletStakingError;
    PalletStakingEvent: PalletStakingEvent;
    PalletStakingInconsistentStateError: PalletStakingInconsistentStateError;
    PalletStakingPosition: PalletStakingPosition;
    PalletStakingStakingData: PalletStakingStakingData;
    PalletStakingVote: PalletStakingVote;
    PalletStakingVoting: PalletStakingVoting;
    PalletStateTrieMigrationCall: PalletStateTrieMigrationCall;
    PalletStateTrieMigrationError: PalletStateTrieMigrationError;
    PalletStateTrieMigrationEvent: PalletStateTrieMigrationEvent;
    PalletStateTrieMigrationHoldReason: PalletStateTrieMigrationHoldReason;
    PalletStateTrieMigrationMigrationCompute: PalletStateTrieMigrationMigrationCompute;
    PalletStateTrieMigrationMigrationLimits: PalletStateTrieMigrationMigrationLimits;
    PalletStateTrieMigrationMigrationTask: PalletStateTrieMigrationMigrationTask;
    PalletStateTrieMigrationProgress: PalletStateTrieMigrationProgress;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionMultiPaymentCall: PalletTransactionMultiPaymentCall;
    PalletTransactionMultiPaymentError: PalletTransactionMultiPaymentError;
    PalletTransactionMultiPaymentEvent: PalletTransactionMultiPaymentEvent;
    PalletTransactionPauseCall: PalletTransactionPauseCall;
    PalletTransactionPauseError: PalletTransactionPauseError;
    PalletTransactionPauseEvent: PalletTransactionPauseEvent;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryPaymentState: PalletTreasuryPaymentState;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletTreasurySpendStatus: PalletTreasurySpendStatus;
    PalletUniquesCall: PalletUniquesCall;
    PalletUniquesCollectionDetails: PalletUniquesCollectionDetails;
    PalletUniquesCollectionMetadata: PalletUniquesCollectionMetadata;
    PalletUniquesDestroyWitness: PalletUniquesDestroyWitness;
    PalletUniquesError: PalletUniquesError;
    PalletUniquesEvent: PalletUniquesEvent;
    PalletUniquesItemDetails: PalletUniquesItemDetails;
    PalletUniquesItemMetadata: PalletUniquesItemMetadata;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletWhitelistCall: PalletWhitelistCall;
    PalletWhitelistError: PalletWhitelistError;
    PalletWhitelistEvent: PalletWhitelistEvent;
    PalletXcmAuthorizedAliasesEntry: PalletXcmAuthorizedAliasesEntry;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmHoldReason: PalletXcmHoldReason;
    PalletXcmMaxAuthorizedAliases: PalletXcmMaxAuthorizedAliases;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PalletXykAssetPair: PalletXykAssetPair;
    PalletXykCall: PalletXykCall;
    PalletXykError: PalletXykError;
    PalletXykEvent: PalletXykEvent;
    PalletXykLiquidityMiningCall: PalletXykLiquidityMiningCall;
    PalletXykLiquidityMiningError: PalletXykLiquidityMiningError;
    PalletXykLiquidityMiningEvent: PalletXykLiquidityMiningEvent;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotPrimitivesV8AbridgedHostConfiguration: PolkadotPrimitivesV8AbridgedHostConfiguration;
    PolkadotPrimitivesV8AbridgedHrmpChannel: PolkadotPrimitivesV8AbridgedHrmpChannel;
    PolkadotPrimitivesV8AsyncBackingAsyncBackingParams: PolkadotPrimitivesV8AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV8PersistedValidationData: PolkadotPrimitivesV8PersistedValidationData;
    PolkadotPrimitivesV8UpgradeGoAhead: PolkadotPrimitivesV8UpgradeGoAhead;
    PolkadotPrimitivesV8UpgradeRestriction: PolkadotPrimitivesV8UpgradeRestriction;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeDispatchErrorWithPostInfo: SpRuntimeDispatchErrorWithPostInfo;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeProvingTrieTrieError: SpRuntimeProvingTrieTrieError;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    StagingParachainInfoCall: StagingParachainInfoCall;
    StagingXcmExecutorAssetTransferTransferType: StagingXcmExecutorAssetTransferTransferType;
    StagingXcmV3MultiLocation: StagingXcmV3MultiLocation;
    StagingXcmV4Asset: StagingXcmV4Asset;
    StagingXcmV4AssetAssetFilter: StagingXcmV4AssetAssetFilter;
    StagingXcmV4AssetAssetId: StagingXcmV4AssetAssetId;
    StagingXcmV4AssetAssetInstance: StagingXcmV4AssetAssetInstance;
    StagingXcmV4AssetAssets: StagingXcmV4AssetAssets;
    StagingXcmV4AssetFungibility: StagingXcmV4AssetFungibility;
    StagingXcmV4AssetWildAsset: StagingXcmV4AssetWildAsset;
    StagingXcmV4AssetWildFungibility: StagingXcmV4AssetWildFungibility;
    StagingXcmV4Instruction: StagingXcmV4Instruction;
    StagingXcmV4Junction: StagingXcmV4Junction;
    StagingXcmV4JunctionNetworkId: StagingXcmV4JunctionNetworkId;
    StagingXcmV4Junctions: StagingXcmV4Junctions;
    StagingXcmV4Location: StagingXcmV4Location;
    StagingXcmV4PalletInfo: StagingXcmV4PalletInfo;
    StagingXcmV4QueryResponseInfo: StagingXcmV4QueryResponseInfo;
    StagingXcmV4Response: StagingXcmV4Response;
    StagingXcmV4Xcm: StagingXcmV4Xcm;
    StagingXcmV5Asset: StagingXcmV5Asset;
    StagingXcmV5AssetAssetFilter: StagingXcmV5AssetAssetFilter;
    StagingXcmV5AssetAssetId: StagingXcmV5AssetAssetId;
    StagingXcmV5AssetAssetInstance: StagingXcmV5AssetAssetInstance;
    StagingXcmV5AssetAssetTransferFilter: StagingXcmV5AssetAssetTransferFilter;
    StagingXcmV5AssetAssets: StagingXcmV5AssetAssets;
    StagingXcmV5AssetFungibility: StagingXcmV5AssetFungibility;
    StagingXcmV5AssetWildAsset: StagingXcmV5AssetWildAsset;
    StagingXcmV5AssetWildFungibility: StagingXcmV5AssetWildFungibility;
    StagingXcmV5Hint: StagingXcmV5Hint;
    StagingXcmV5Instruction: StagingXcmV5Instruction;
    StagingXcmV5Junction: StagingXcmV5Junction;
    StagingXcmV5JunctionNetworkId: StagingXcmV5JunctionNetworkId;
    StagingXcmV5Junctions: StagingXcmV5Junctions;
    StagingXcmV5Location: StagingXcmV5Location;
    StagingXcmV5PalletInfo: StagingXcmV5PalletInfo;
    StagingXcmV5QueryResponseInfo: StagingXcmV5QueryResponseInfo;
    StagingXcmV5Response: StagingXcmV5Response;
    StagingXcmV5TraitsOutcome: StagingXcmV5TraitsOutcome;
    StagingXcmV5Xcm: StagingXcmV5Xcm;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmRuntimeApisAuthorizedAliasesOriginAliaser: XcmRuntimeApisAuthorizedAliasesOriginAliaser;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3OriginKind: XcmV3OriginKind;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsSendError: XcmV3TraitsSendError;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmV5TraitsError: XcmV5TraitsError;
    XcmVersionedAsset: XcmVersionedAsset;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedAssets: XcmVersionedAssets;
    XcmVersionedLocation: XcmVersionedLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
