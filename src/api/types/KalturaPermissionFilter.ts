
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPermissionFilterArgs  extends KalturaFilterArgs {
    currentUserPermissionsContains? : boolean;
}


export class KalturaPermissionFilter extends KalturaFilter {

    currentUserPermissionsContains : boolean;

    constructor(data? : KalturaPermissionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionFilter' },
				currentUserPermissionsContains : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionFilter',KalturaPermissionFilter);
