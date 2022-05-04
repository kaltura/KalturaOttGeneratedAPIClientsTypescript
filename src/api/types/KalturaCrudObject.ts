
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaCrudObjectArgs  extends KalturaOTTObjectSupportNullableArgs {
    
}


export class KalturaCrudObject extends KalturaOTTObjectSupportNullable {

    

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
