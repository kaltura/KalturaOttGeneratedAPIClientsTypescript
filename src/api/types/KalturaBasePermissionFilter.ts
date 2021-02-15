
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBasePermissionFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBasePermissionFilter extends KalturaFilter {

    

    constructor(data? : KalturaBasePermissionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBasePermissionFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBasePermissionFilter',KalturaBasePermissionFilter);
