
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCrudObjectArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaCrudObject extends KalturaObjectBase {

    

    constructor(data? : KalturaCrudObjectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrudObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCrudObject',KalturaCrudObject);
