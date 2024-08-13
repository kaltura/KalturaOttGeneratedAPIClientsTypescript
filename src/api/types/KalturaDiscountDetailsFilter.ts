
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssociatedShopEntities } from './KalturaAssociatedShopEntities';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaDiscountDetailsFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	associatedShopEntities? : KalturaAssociatedShopEntities;
}


export class KalturaDiscountDetailsFilter extends KalturaFilter {

    idIn : string;
	associatedShopEntities : KalturaAssociatedShopEntities;

    constructor(data? : KalturaDiscountDetailsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDiscountDetailsFilter' },
				idIn : { type : 's' },
				associatedShopEntities : { type : 'o', subTypeConstructor : KalturaAssociatedShopEntities, subType : 'KalturaAssociatedShopEntities' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDiscountDetailsFilter',KalturaDiscountDetailsFilter);
