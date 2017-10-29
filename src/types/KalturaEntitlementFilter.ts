
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaEntityReferenceBy } from './KalturaEntityReferenceBy';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaEntitlementFilterArgs  extends KalturaFilterArgs {
    entitlementTypeEqual? : KalturaTransactionType;
	entityReferenceEqual? : KalturaEntityReferenceBy;
	isExpiredEqual? : boolean;
}


export class KalturaEntitlementFilter extends KalturaFilter {

    entitlementTypeEqual : KalturaTransactionType;
	entityReferenceEqual : KalturaEntityReferenceBy;
	isExpiredEqual : boolean;

    constructor(data? : KalturaEntitlementFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntitlementFilter' },
				entitlementTypeEqual : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				entityReferenceEqual : { type : 'es', subTypeConstructor : KalturaEntityReferenceBy, subType : 'KalturaEntityReferenceBy' },
				isExpiredEqual : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntitlementFilter',KalturaEntitlementFilter);
