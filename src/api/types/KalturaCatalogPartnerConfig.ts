
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryManagement } from './KalturaCategoryManagement';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaCatalogPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    singleMultilingualMode? : boolean;
	categoryManagement? : KalturaCategoryManagement;
	epgMultilingualFallbackSupport? : boolean;
	uploadExportDatalake? : boolean;
}


export class KalturaCatalogPartnerConfig extends KalturaPartnerConfiguration {

    singleMultilingualMode : boolean;
	categoryManagement : KalturaCategoryManagement;
	epgMultilingualFallbackSupport : boolean;
	uploadExportDatalake : boolean;

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
				categoryManagement : { type : 'o', subTypeConstructor : KalturaCategoryManagement, subType : 'KalturaCategoryManagement' },
				epgMultilingualFallbackSupport : { type : 'b' },
				uploadExportDatalake : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCatalogPartnerConfig',KalturaCatalogPartnerConfig);
