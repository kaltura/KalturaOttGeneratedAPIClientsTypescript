
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Partner  base configuration
**/
export class KalturaPartnerConfiguration extends KalturaObjectBase {

    

    constructor(data? : KalturaPartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerConfiguration' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerConfiguration',KalturaPartnerConfiguration);
