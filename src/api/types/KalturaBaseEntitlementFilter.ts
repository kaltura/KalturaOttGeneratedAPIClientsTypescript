
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseEntitlementFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBaseEntitlementFilter extends KalturaFilter {

    

    constructor(data? : KalturaBaseEntitlementFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntitlementFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntitlementFilter',KalturaBaseEntitlementFilter);
