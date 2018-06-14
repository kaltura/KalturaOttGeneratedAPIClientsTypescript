
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserRole } from './KalturaUserRole';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserRoleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	role : KalturaUserRole;
}

/**
 * Build request payload for service 'userRole' action 'update'.
 *
 * Usage: Update role
 *
 * Server response type:         KalturaUserRole
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserRoleUpdateAction extends KalturaRequest<KalturaUserRole> {

    id : number;
	role : KalturaUserRole;

    constructor(data : UserRoleUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				role : { type : 'o', subTypeConstructor : KalturaUserRole, subType : 'KalturaUserRole' }
            }
        );
        return result;
    }
}

