
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionAddPermissionItemActionArgs  extends KalturaRequestArgs {
    permissionId : number;
	permissionItemId : number;
}

/**
 * Build request payload for service 'permission' action 'addPermissionItem'.
 *
 * Usage: Adds permission item to permission
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionAddPermissionItemAction extends KalturaRequest<void> {

    permissionId : number;
	permissionItemId : number;

    constructor(data : PermissionAddPermissionItemActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'permission' },
				action : { type : 'c', default : 'addPermissionItem' },
				permissionId : { type : 'n' },
				permissionItemId : { type : 'n' }
            }
        );
        return result;
    }
}

