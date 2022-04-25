
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTimeShiftedTvState } from './KalturaTimeShiftedTvState';
import { KalturaLinearChannelType } from './KalturaLinearChannelType';
import { KalturaMediaAsset, KalturaMediaAssetArgs } from './KalturaMediaAsset';

export interface KalturaLiveAssetArgs  extends KalturaMediaAssetArgs {
    enableCdvrState? : KalturaTimeShiftedTvState;
	enableCatchUpState? : KalturaTimeShiftedTvState;
	enableStartOverState? : KalturaTimeShiftedTvState;
	bufferCatchUpSetting? : number;
	paddingBeforeProgramStartsSetting? : number;
	paddingAfterProgramEndsSetting? : number;
	bufferTrickPlaySetting? : number;
	enableRecordingPlaybackNonEntitledChannelState? : KalturaTimeShiftedTvState;
	enableTrickPlayState? : KalturaTimeShiftedTvState;
	externalEpgIngestId? : string;
	externalCdvrId? : string;
	channelType? : KalturaLinearChannelType;
}


export class KalturaLiveAsset extends KalturaMediaAsset {

    enableCdvrState : KalturaTimeShiftedTvState;
	enableCatchUpState : KalturaTimeShiftedTvState;
	enableStartOverState : KalturaTimeShiftedTvState;
	bufferCatchUpSetting : number;
	paddingBeforeProgramStartsSetting : number;
	paddingAfterProgramEndsSetting : number;
	bufferTrickPlaySetting : number;
	enableRecordingPlaybackNonEntitledChannelState : KalturaTimeShiftedTvState;
	enableTrickPlayState : KalturaTimeShiftedTvState;
	externalEpgIngestId : string;
	externalCdvrId : string;
	readonly enableCdvr : boolean;
	readonly enableCatchUp : boolean;
	readonly enableStartOver : boolean;
	readonly catchUpBuffer : number;
	readonly paddingBeforeProgramStarts : number;
	readonly paddingAfterProgramEnds : number;
	readonly trickPlayBuffer : number;
	readonly enableRecordingPlaybackNonEntitledChannel : boolean;
	readonly enableTrickPlay : boolean;
	channelType : KalturaLinearChannelType;

    constructor(data? : KalturaLiveAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveAsset' },
				enableCdvrState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				enableCatchUpState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				enableStartOverState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				bufferCatchUpSetting : { type : 'n' },
				paddingBeforeProgramStartsSetting : { type : 'n' },
				paddingAfterProgramEndsSetting : { type : 'n' },
				bufferTrickPlaySetting : { type : 'n' },
				enableRecordingPlaybackNonEntitledChannelState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				enableTrickPlayState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				externalEpgIngestId : { type : 's' },
				externalCdvrId : { type : 's' },
				enableCdvr : { type : 'b', readOnly : true },
				enableCatchUp : { type : 'b', readOnly : true },
				enableStartOver : { type : 'b', readOnly : true },
				catchUpBuffer : { type : 'n', readOnly : true },
				paddingBeforeProgramStarts : { type : 'n', readOnly : true },
				paddingAfterProgramEnds : { type : 'n', readOnly : true },
				trickPlayBuffer : { type : 'n', readOnly : true },
				enableRecordingPlaybackNonEntitledChannel : { type : 'b', readOnly : true },
				enableTrickPlay : { type : 'b', readOnly : true },
				channelType : { type : 'es', subTypeConstructor : KalturaLinearChannelType, subType : 'KalturaLinearChannelType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveAsset',KalturaLiveAsset);
