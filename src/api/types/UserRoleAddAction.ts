
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleAddActionArgs  extends KalturaRequestArgs {
    role : KalturaUserRole;
}

/**
 * Build request payload for service 'userRole' action 'add'.
 *
 * Usage: Creates a new role
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserRoleAddAction extends KalturaRequest<KalturaUserRole> {

    role : KalturaUserRole;

    constructor(data : UserRoleAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaUserRole', responseConstructor : KalturaUserRole  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userrole' },
				action : { type : 'c', default : 'add' },
				role : { type : 'o', subTypeConstructor : KalturaUserRole, subType : 'KalturaUserRole' }
            }
        );
        return result;
    }
}

