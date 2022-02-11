
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseAssetOrderArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseAssetOrder extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseAssetOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseAssetOrder' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseAssetOrder',KalturaBaseAssetOrder);
