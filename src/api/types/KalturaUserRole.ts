
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserRoleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	permissionNames? : string;
	excludedPermissionNames? : string;
}


export class KalturaUserRole extends KalturaObjectBase {

    readonly id : number;
	name : string;
	permissionNames : string;
	excludedPermissionNames : string;

    constructor(data? : KalturaUserRoleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRole' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				permissionNames : { type : 's' },
				excludedPermissionNames : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserRole',KalturaUserRole);
