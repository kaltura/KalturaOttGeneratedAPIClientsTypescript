
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveToVodPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    isL2vEnabled? : boolean;
	retentionPeriodDays? : number;
	metadataClassifier? : string;
}


export class KalturaLiveToVodPartnerConfiguration extends KalturaObjectBase {

    isL2vEnabled : boolean;
	retentionPeriodDays : number;
	metadataClassifier : string;

    constructor(data? : KalturaLiveToVodPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveToVodPartnerConfiguration' },
				isL2vEnabled : { type : 'b' },
				retentionPeriodDays : { type : 'n' },
				metadataClassifier : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveToVodPartnerConfiguration',KalturaLiveToVodPartnerConfiguration);
