
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectVirtualAssetInfo } from './KalturaObjectVirtualAssetInfo';
import { KalturaPartnerConfiguration, KalturaPartnerConfigurationArgs } from './KalturaPartnerConfiguration';

export interface KalturaObjectVirtualAssetPartnerConfigArgs  extends KalturaPartnerConfigurationArgs {
    objectVirtualAssets? : KalturaObjectVirtualAssetInfo[];
}


export class KalturaObjectVirtualAssetPartnerConfig extends KalturaPartnerConfiguration {

    objectVirtualAssets : KalturaObjectVirtualAssetInfo[];

    constructor(data? : KalturaObjectVirtualAssetPartnerConfigArgs)
    {
        super(data);
        if (typeof this.objectVirtualAssets === 'undefined') this.objectVirtualAssets = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaObjectVirtualAssetPartnerConfig' },
				objectVirtualAssets : { type : 'a', subTypeConstructor : KalturaObjectVirtualAssetInfo, subType : 'KalturaObjectVirtualAssetInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObjectVirtualAssetPartnerConfig',KalturaObjectVirtualAssetPartnerConfig);
