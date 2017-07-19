
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserAddRoleActionArgs  extends KalturaRequestArgs {
    roleId : number;
}

/** 
* Edit user details.
**/
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

