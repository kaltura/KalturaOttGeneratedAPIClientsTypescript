
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSubscribeReferenceArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSubscribeReference extends KalturaObjectBase {

    

    constructor(data? : KalturaSubscribeReferenceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSubscribeReference' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSubscribeReference',KalturaSubscribeReference);
