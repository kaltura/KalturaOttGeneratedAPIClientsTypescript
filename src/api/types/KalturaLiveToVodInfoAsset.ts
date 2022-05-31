
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveToVodInfoAssetArgs  extends KalturaObjectBaseArgs {
    linearAssetId? : number;
	epgId? : string;
	epgChannelId? : number;
	crid? : string;
	originalStartDate? : number;
	originalEndDate? : number;
	paddingBeforeProgramStarts? : number;
	paddingAfterProgramEnds? : number;
}


export class KalturaLiveToVodInfoAsset extends KalturaObjectBase {

    linearAssetId : number;
	epgId : string;
	epgChannelId : number;
	crid : string;
	originalStartDate : number;
	originalEndDate : number;
	paddingBeforeProgramStarts : number;
	paddingAfterProgramEnds : number;

    constructor(data? : KalturaLiveToVodInfoAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveToVodInfoAsset' },
				linearAssetId : { type : 'n' },
				epgId : { type : 's' },
				epgChannelId : { type : 'n' },
				crid : { type : 's' },
				originalStartDate : { type : 'n' },
				originalEndDate : { type : 'n' },
				paddingBeforeProgramStarts : { type : 'n' },
				paddingAfterProgramEnds : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveToVodInfoAsset',KalturaLiveToVodInfoAsset);
