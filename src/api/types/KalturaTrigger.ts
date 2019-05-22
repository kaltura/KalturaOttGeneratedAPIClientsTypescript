
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTriggerArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaTrigger extends KalturaObjectBase {

    

    constructor(data? : KalturaTriggerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTrigger' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTrigger',KalturaTrigger);
