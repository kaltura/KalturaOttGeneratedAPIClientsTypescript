
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseAssetStructFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBaseAssetStructFilter extends KalturaFilter {

    

    constructor(data? : KalturaBaseAssetStructFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseAssetStructFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseAssetStructFilter',KalturaBaseAssetStructFilter);
