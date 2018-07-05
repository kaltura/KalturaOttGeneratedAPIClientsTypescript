
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaContentResourceArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaContentResource extends KalturaObjectBase {

    

    constructor(data? : KalturaContentResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContentResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaContentResource',KalturaContentResource);
