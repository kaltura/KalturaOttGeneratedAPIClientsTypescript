
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserDeleteActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Permanently delete a user. User to delete cannot be an exclusive household
* master, and cannot be default user.
**/
export class OttUserDeleteAction extends KalturaRequest<boolean> {

    

    constructor(data? : OttUserDeleteActionArgs)
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
				action : { type : 'c', default : 'delete' }
            }
        );
        return result;
    }
}

