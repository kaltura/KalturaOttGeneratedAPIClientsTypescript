
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveToVodLinearAssetConfigurationArgs  extends KalturaObjectBaseArgs {
    linearAssetId? : number;
	isL2vEnabled? : boolean;
	retentionPeriodDays? : number;
}


export class KalturaLiveToVodLinearAssetConfiguration extends KalturaObjectBase {

    linearAssetId : number;
	isL2vEnabled : boolean;
	retentionPeriodDays : number;

    constructor(data? : KalturaLiveToVodLinearAssetConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveToVodLinearAssetConfiguration' },
				linearAssetId : { type : 'n' },
				isL2vEnabled : { type : 'b' },
				retentionPeriodDays : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveToVodLinearAssetConfiguration',KalturaLiveToVodLinearAssetConfiguration);
