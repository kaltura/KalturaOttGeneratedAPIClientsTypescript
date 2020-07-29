
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionRemovePermissionItemActionArgs  extends KalturaRequestArgs {
    permissionId : number;
	permissionItemId : number;
}

/**
 * Build request payload for service 'permission' action 'removePermissionItem'.
 *
 * Usage: Removes permission item from permission
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PermissionRemovePermissionItemAction extends KalturaRequest<void> {

    permissionId : number;
	permissionItemId : number;

    constructor(data : PermissionRemovePermissionItemActionArgs)
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
				action : { type : 'c', default : 'removePermissionItem' },
				permissionId : { type : 'n' },
				permissionItemId : { type : 'n' }
            }
        );
        return result;
    }
}

