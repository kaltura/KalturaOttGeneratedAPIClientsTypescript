
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserRoleType } from './KalturaUserRoleType';
import { KalturaUserRoleProfile } from './KalturaUserRoleProfile';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserRoleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	permissionNames? : string;
	excludedPermissionNames? : string;
	profile? : KalturaUserRoleProfile;
}


export class KalturaUserRole extends KalturaObjectBase {

    readonly id : number;
	name : string;
	permissionNames : string;
	excludedPermissionNames : string;
	readonly type : KalturaUserRoleType;
	profile : KalturaUserRoleProfile;

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
				excludedPermissionNames : { type : 's' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaUserRoleType, subType : 'KalturaUserRoleType' },
				profile : { type : 'es', subTypeConstructor : KalturaUserRoleProfile, subType : 'KalturaUserRoleProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserRole',KalturaUserRole);
