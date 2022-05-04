
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaT extends KalturaObjectBase {

    

    constructor(data? : KalturaTArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaT' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaT',KalturaT);
