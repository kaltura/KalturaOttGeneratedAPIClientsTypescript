
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetGroupByArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Abstarct class - represents an asset parameter that can be used for grouping
**/
export class KalturaAssetGroupBy extends KalturaObjectBase {

    

    constructor(data? : KalturaAssetGroupByArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetGroupBy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetGroupBy',KalturaAssetGroupBy);
