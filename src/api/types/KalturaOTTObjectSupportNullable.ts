
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaOTTObjectSupportNullableArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaOTTObjectSupportNullable extends KalturaObjectBase {

    

    constructor(data? : KalturaOTTObjectSupportNullableArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaOTTObjectSupportNullable' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaOTTObjectSupportNullable',KalturaOTTObjectSupportNullable);
