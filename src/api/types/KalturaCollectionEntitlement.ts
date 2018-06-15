
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntitlement, KalturaEntitlementArgs } from './KalturaEntitlement';

export interface KalturaCollectionEntitlementArgs  extends KalturaEntitlementArgs {
    
}


export class KalturaCollectionEntitlement extends KalturaEntitlement {

    

    constructor(data? : KalturaCollectionEntitlementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCollectionEntitlement' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollectionEntitlement',KalturaCollectionEntitlement);
