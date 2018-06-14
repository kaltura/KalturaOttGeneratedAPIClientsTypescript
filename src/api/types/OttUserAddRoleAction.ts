
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserAddRoleActionArgs  extends KalturaRequestArgs {
    roleId : number;
}

/**
 * Build request payload for service 'ottUser' action 'addRole'.
 *
 * Usage: Edit user details
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class OttUserAddRoleAction extends KalturaRequest<boolean> {

    roleId : number;

    constructor(data : OttUserAddRoleActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ottuser' },
				action : { type : 'c', default : 'addRole' },
				roleId : { type : 'n' }
            }
        );
        return result;
    }
}

