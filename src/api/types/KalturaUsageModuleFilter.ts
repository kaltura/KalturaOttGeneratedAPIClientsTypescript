
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssociatedShopEntities } from './KalturaAssociatedShopEntities';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUsageModuleFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	associatedShopEntities? : KalturaAssociatedShopEntities;
}


export class KalturaUsageModuleFilter extends KalturaFilter {

    idEqual : number;
	associatedShopEntities : KalturaAssociatedShopEntities;

    constructor(data? : KalturaUsageModuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUsageModuleFilter' },
				idEqual : { type : 'n' },
				associatedShopEntities : { type : 'o', subTypeConstructor : KalturaAssociatedShopEntities, subType : 'KalturaAssociatedShopEntities' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUsageModuleFilter',KalturaUsageModuleFilter);
