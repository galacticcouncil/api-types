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
  EthereumReceiptReceiptV3,
  EthereumTransactionAccessListItem,
  EthereumTransactionEip1559Transaction,
  EthereumTransactionEip2930Transaction,
  EthereumTransactionLegacyTransaction,
  EthereumTransactionTransactionAction,
  EthereumTransactionTransactionSignature,
  EthereumTransactionTransactionV2,
  EthereumTypesHashH64,
  EvmCoreErrorExitError,
  EvmCoreErrorExitFatal,
  EvmCoreErrorExitReason,
  EvmCoreErrorExitRevert,
  EvmCoreErrorExitSucceed,
  FpRpcTransactionStatus,
  FrameSupportDispatchDispatchClass,
  FrameSupportDispatchDispatchInfo,
  FrameSupportDispatchPays,
  FrameSupportDispatchPerDispatchClassU32,
  FrameSupportDispatchPerDispatchClassWeight,
  FrameSupportDispatchPerDispatchClassWeightsPerClass,
  FrameSupportDispatchRawOrigin,
  FrameSupportMessagesProcessMessageError,
  FrameSupportPalletId,
  FrameSupportPreimagesBounded,
  FrameSupportTokensMiscBalanceStatus,
  FrameSystemAccountInfo,
  FrameSystemCall,
  FrameSystemCodeUpgradeAuthorization,
  FrameSystemError,
  FrameSystemEvent,
  FrameSystemEventRecord,
  FrameSystemExtensionsCheckGenesis,
  FrameSystemExtensionsCheckNonce,
  FrameSystemExtensionsCheckSpecVersion,
  FrameSystemExtensionsCheckTxVersion,
  FrameSystemExtensionsCheckWeight,
  FrameSystemLastRuntimeUpgradeInfo,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsWeightsPerClass,
  FrameSystemPhase,
  HydraDxMathRatio,
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
  PalletBalancesIdAmount,
  PalletBalancesReasons,
  PalletBalancesReserveData,
  PalletBondsCall,
  PalletBondsError,
  PalletBondsEvent,
  PalletCircuitBreakerCall,
  PalletCircuitBreakerError,
  PalletCircuitBreakerEvent,
  PalletCircuitBreakerLiquidityLimit,
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
  PalletCollectiveRawOrigin,
  PalletCollectiveVotes,
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
  PalletDusterCall,
  PalletDusterError,
  PalletDusterEvent,
  PalletDynamicFeesCall,
  PalletDynamicFeesError,
  PalletDynamicFeesEvent,
  PalletDynamicFeesFeeEntry,
  PalletDynamicFeesFeeParams,
  PalletElectionsPhragmenCall,
  PalletElectionsPhragmenError,
  PalletElectionsPhragmenEvent,
  PalletElectionsPhragmenRenouncing,
  PalletElectionsPhragmenSeatHolder,
  PalletElectionsPhragmenVoter,
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
  PalletIdentityAuthorityProperties,
  PalletIdentityCall,
  PalletIdentityError,
  PalletIdentityEvent,
  PalletIdentityJudgement,
  PalletIdentityLegacyIdentityInfo,
  PalletIdentityRegistrarInfo,
  PalletIdentityRegistration,
  PalletLbpCall,
  PalletLbpError,
  PalletLbpEvent,
  PalletLbpPool,
  PalletLbpWeightCurveType,
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
  PalletOmnipoolSimpleImbalance,
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
  PalletProxyError,
  PalletProxyEvent,
  PalletProxyProxyDefinition,
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
  PalletSchedulerScheduled,
  PalletSessionCall,
  PalletSessionError,
  PalletSessionEvent,
  PalletStableswapAssetAmount,
  PalletStableswapCall,
  PalletStableswapError,
  PalletStableswapEvent,
  PalletStableswapPoolInfo,
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
  PalletTipsCall,
  PalletTipsError,
  PalletTipsEvent,
  PalletTipsOpenTip,
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
  PalletXcmCall,
  PalletXcmError,
  PalletXcmEvent,
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
  PolkadotPrimitivesV6AbridgedHostConfiguration,
  PolkadotPrimitivesV6AbridgedHrmpChannel,
  PolkadotPrimitivesV6AsyncBackingAsyncBackingParams,
  PolkadotPrimitivesV6PersistedValidationData,
  PolkadotPrimitivesV6UpgradeGoAhead,
  PolkadotPrimitivesV6UpgradeRestriction,
  SpArithmeticArithmeticError,
  SpConsensusAuraSr25519AppSr25519Public,
  SpCoreCryptoKeyTypeId,
  SpCoreEcdsaSignature,
  SpCoreEd25519Signature,
  SpCoreSr25519Public,
  SpCoreSr25519Signature,
  SpCoreVoid,
  SpRuntimeBlakeTwo256,
  SpRuntimeDigest,
  SpRuntimeDigestDigestItem,
  SpRuntimeDispatchError,
  SpRuntimeModuleError,
  SpRuntimeMultiSignature,
  SpRuntimeTokenError,
  SpRuntimeTransactionalError,
  SpTrieStorageProof,
  SpVersionRuntimeVersion,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
  StagingParachainInfoCall,
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
  StagingXcmV4TraitsOutcome,
  StagingXcmV4Xcm,
  XcmDoubleEncoded,
  XcmV2BodyId,
  XcmV2BodyPart,
  XcmV2Instruction,
  XcmV2Junction,
  XcmV2MultiAsset,
  XcmV2MultiLocation,
  XcmV2MultiassetAssetId,
  XcmV2MultiassetAssetInstance,
  XcmV2MultiassetFungibility,
  XcmV2MultiassetMultiAssetFilter,
  XcmV2MultiassetMultiAssets,
  XcmV2MultiassetWildFungibility,
  XcmV2MultiassetWildMultiAsset,
  XcmV2MultilocationJunctions,
  XcmV2NetworkId,
  XcmV2OriginKind,
  XcmV2Response,
  XcmV2TraitsError,
  XcmV2WeightLimit,
  XcmV2Xcm,
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
  XcmV3PalletInfo,
  XcmV3QueryResponseInfo,
  XcmV3Response,
  XcmV3TraitsError,
  XcmV3WeightLimit,
  XcmV3Xcm,
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
    EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
    EthereumTransactionAccessListItem: EthereumTransactionAccessListItem;
    EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction;
    EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction;
    EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction;
    EthereumTransactionTransactionAction: EthereumTransactionTransactionAction;
    EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature;
    EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
    EthereumTypesHashH64: EthereumTypesHashH64;
    EvmCoreErrorExitError: EvmCoreErrorExitError;
    EvmCoreErrorExitFatal: EvmCoreErrorExitFatal;
    EvmCoreErrorExitReason: EvmCoreErrorExitReason;
    EvmCoreErrorExitRevert: EvmCoreErrorExitRevert;
    EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed;
    FpRpcTransactionStatus: FpRpcTransactionStatus;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportMessagesProcessMessageError: FrameSupportMessagesProcessMessageError;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemCodeUpgradeAuthorization: FrameSystemCodeUpgradeAuthorization;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    HydraDxMathRatio: HydraDxMathRatio;
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
    PalletBalancesIdAmount: PalletBalancesIdAmount;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBondsCall: PalletBondsCall;
    PalletBondsError: PalletBondsError;
    PalletBondsEvent: PalletBondsEvent;
    PalletCircuitBreakerCall: PalletCircuitBreakerCall;
    PalletCircuitBreakerError: PalletCircuitBreakerError;
    PalletCircuitBreakerEvent: PalletCircuitBreakerEvent;
    PalletCircuitBreakerLiquidityLimit: PalletCircuitBreakerLiquidityLimit;
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
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
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
    PalletDusterCall: PalletDusterCall;
    PalletDusterError: PalletDusterError;
    PalletDusterEvent: PalletDusterEvent;
    PalletDynamicFeesCall: PalletDynamicFeesCall;
    PalletDynamicFeesError: PalletDynamicFeesError;
    PalletDynamicFeesEvent: PalletDynamicFeesEvent;
    PalletDynamicFeesFeeEntry: PalletDynamicFeesFeeEntry;
    PalletDynamicFeesFeeParams: PalletDynamicFeesFeeParams;
    PalletElectionsPhragmenCall: PalletElectionsPhragmenCall;
    PalletElectionsPhragmenError: PalletElectionsPhragmenError;
    PalletElectionsPhragmenEvent: PalletElectionsPhragmenEvent;
    PalletElectionsPhragmenRenouncing: PalletElectionsPhragmenRenouncing;
    PalletElectionsPhragmenSeatHolder: PalletElectionsPhragmenSeatHolder;
    PalletElectionsPhragmenVoter: PalletElectionsPhragmenVoter;
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
    PalletIdentityAuthorityProperties: PalletIdentityAuthorityProperties;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityLegacyIdentityInfo: PalletIdentityLegacyIdentityInfo;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletLbpCall: PalletLbpCall;
    PalletLbpError: PalletLbpError;
    PalletLbpEvent: PalletLbpEvent;
    PalletLbpPool: PalletLbpPool;
    PalletLbpWeightCurveType: PalletLbpWeightCurveType;
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
    PalletOmnipoolSimpleImbalance: PalletOmnipoolSimpleImbalance;
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
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
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
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletStableswapAssetAmount: PalletStableswapAssetAmount;
    PalletStableswapCall: PalletStableswapCall;
    PalletStableswapError: PalletStableswapError;
    PalletStableswapEvent: PalletStableswapEvent;
    PalletStableswapPoolInfo: PalletStableswapPoolInfo;
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
    PalletTipsCall: PalletTipsCall;
    PalletTipsError: PalletTipsError;
    PalletTipsEvent: PalletTipsEvent;
    PalletTipsOpenTip: PalletTipsOpenTip;
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
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
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
    PolkadotPrimitivesV6AbridgedHostConfiguration: PolkadotPrimitivesV6AbridgedHostConfiguration;
    PolkadotPrimitivesV6AbridgedHrmpChannel: PolkadotPrimitivesV6AbridgedHrmpChannel;
    PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV6PersistedValidationData: PolkadotPrimitivesV6PersistedValidationData;
    PolkadotPrimitivesV6UpgradeGoAhead: PolkadotPrimitivesV6UpgradeGoAhead;
    PolkadotPrimitivesV6UpgradeRestriction: PolkadotPrimitivesV6UpgradeRestriction;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    StagingParachainInfoCall: StagingParachainInfoCall;
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
    StagingXcmV4TraitsOutcome: StagingXcmV4TraitsOutcome;
    StagingXcmV4Xcm: StagingXcmV4Xcm;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
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
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAsset: XcmVersionedAsset;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedAssets: XcmVersionedAssets;
    XcmVersionedLocation: XcmVersionedLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
