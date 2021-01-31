
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryManagement } from './KalturaCategoryManagement';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaCatalogPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    singleMultilingualMode? : boolean;
	categoryManagement? : KalturaCategoryManagement;
}


export class KalturaCatalogPartnerConfig extends KalturaPartnerConfiguration {

    singleMultilingualMode : boolean;
	categoryManagement : KalturaCategoryManagement;

    constructor(data? : KalturaCatalogPartnerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCatalogPartnerConfig' },
				singleMultilingualMode : { type : 'b' },
				categoryManagement : { type : 'o', subTypeConstructor : KalturaCategoryManagement, subType : 'KalturaCategoryManagement' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCatalogPartnerConfig',KalturaCatalogPartnerConfig);
