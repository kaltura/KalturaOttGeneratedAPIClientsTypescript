
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaUrlResourceArgs  extends KalturaContentResourceArgs {
    url? : string;
}


export class KalturaUrlResource extends KalturaContentResource {

    url : string;

    constructor(data? : KalturaUrlResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlResource' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlResource',KalturaUrlResource);
