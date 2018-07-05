
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTimeShiftedTvState } from './KalturaTimeShiftedTvState';
import { KalturaLinearChannelType } from './KalturaLinearChannelType';
import { KalturaMediaAsset, KalturaMediaAssetArgs } from './KalturaMediaAsset';

export interface KalturaLinearMediaAssetArgs  extends KalturaMediaAssetArgs {
    enableCdvrState? : KalturaTimeShiftedTvState;
	enableCatchUpState? : KalturaTimeShiftedTvState;
	enableStartOverState? : KalturaTimeShiftedTvState;
	bufferCatchUp? : number;
	bufferTrickPlay? : number;
	enableRecordingPlaybackNonEntitledChannelState? : KalturaTimeShiftedTvState;
	enableTrickPlayState? : KalturaTimeShiftedTvState;
	externalEpgIngestId? : string;
	externalCdvrId? : string;
	channelType? : KalturaLinearChannelType;
}


export class KalturaLinearMediaAsset extends KalturaMediaAsset {

    enableCdvrState : KalturaTimeShiftedTvState;
	enableCatchUpState : KalturaTimeShiftedTvState;
	enableStartOverState : KalturaTimeShiftedTvState;
	bufferCatchUp : number;
	bufferTrickPlay : number;
	enableRecordingPlaybackNonEntitledChannelState : KalturaTimeShiftedTvState;
	enableTrickPlayState : KalturaTimeShiftedTvState;
	externalEpgIngestId : string;
	externalCdvrId : string;
	readonly cdvrEnabled : boolean;
	readonly catchUpEnabled : boolean;
	readonly startOverEnabled : boolean;
	readonly summedCatchUpBuffer : number;
	readonly summedTrickPlayBuffer : number;
	readonly recordingPlaybackNonEntitledChannelEnabled : boolean;
	readonly trickPlayEnabled : boolean;
	channelType : KalturaLinearChannelType;

    constructor(data? : KalturaLinearMediaAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLinearMediaAsset' },
				enableCdvrState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				enableCatchUpState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				enableStartOverState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				bufferCatchUp : { type : 'n' },
				bufferTrickPlay : { type : 'n' },
				enableRecordingPlaybackNonEntitledChannelState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				enableTrickPlayState : { type : 'es', subTypeConstructor : KalturaTimeShiftedTvState, subType : 'KalturaTimeShiftedTvState' },
				externalEpgIngestId : { type : 's' },
				externalCdvrId : { type : 's' },
				cdvrEnabled : { type : 'b', readOnly : true },
				catchUpEnabled : { type : 'b', readOnly : true },
				startOverEnabled : { type : 'b', readOnly : true },
				summedCatchUpBuffer : { type : 'n', readOnly : true },
				summedTrickPlayBuffer : { type : 'n', readOnly : true },
				recordingPlaybackNonEntitledChannelEnabled : { type : 'b', readOnly : true },
				trickPlayEnabled : { type : 'b', readOnly : true },
				channelType : { type : 'es', subTypeConstructor : KalturaLinearChannelType, subType : 'KalturaLinearChannelType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLinearMediaAsset',KalturaLinearMediaAsset);
