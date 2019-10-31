
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEventObjectArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEventObject extends KalturaObjectBase {

    

    constructor(data? : KalturaEventObjectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventObject',KalturaEventObject);
