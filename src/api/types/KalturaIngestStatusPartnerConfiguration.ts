
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestStatusEpgConfiguration } from './KalturaIngestStatusEpgConfiguration';
import { KalturaIngestStatusVodConfiguration } from './KalturaIngestStatusVodConfiguration';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestStatusPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    epg? : KalturaIngestStatusEpgConfiguration;
	vod? : KalturaIngestStatusVodConfiguration;
}


export class KalturaIngestStatusPartnerConfiguration extends KalturaObjectBase {

    epg : KalturaIngestStatusEpgConfiguration;
	vod : KalturaIngestStatusVodConfiguration;

    constructor(data? : KalturaIngestStatusPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestStatusPartnerConfiguration' },
				epg : { type : 'o', subTypeConstructor : KalturaIngestStatusEpgConfiguration, subType : 'KalturaIngestStatusEpgConfiguration' },
				vod : { type : 'o', subTypeConstructor : KalturaIngestStatusVodConfiguration, subType : 'KalturaIngestStatusVodConfiguration' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestStatusPartnerConfiguration',KalturaIngestStatusPartnerConfiguration);
