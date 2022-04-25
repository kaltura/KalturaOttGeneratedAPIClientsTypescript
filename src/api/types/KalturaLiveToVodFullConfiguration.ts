
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveToVodLinearAssetConfiguration } from './KalturaLiveToVodLinearAssetConfiguration';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveToVodFullConfigurationArgs  extends KalturaObjectBaseArgs {
    isL2vEnabled? : boolean;
	retentionPeriodDays? : number;
	metadataClassifier? : string;
	linearAssets? : KalturaLiveToVodLinearAssetConfiguration[];
}


export class KalturaLiveToVodFullConfiguration extends KalturaObjectBase {

    isL2vEnabled : boolean;
	retentionPeriodDays : number;
	metadataClassifier : string;
	linearAssets : KalturaLiveToVodLinearAssetConfiguration[];

    constructor(data? : KalturaLiveToVodFullConfigurationArgs)
    {
        super(data);
        if (typeof this.linearAssets === 'undefined') this.linearAssets = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveToVodFullConfiguration' },
				isL2vEnabled : { type : 'b' },
				retentionPeriodDays : { type : 'n' },
				metadataClassifier : { type : 's' },
				linearAssets : { type : 'a', subTypeConstructor : KalturaLiveToVodLinearAssetConfiguration, subType : 'KalturaLiveToVodLinearAssetConfiguration' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveToVodFullConfiguration',KalturaLiveToVodFullConfiguration);
