
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OttUserLogoutActionArgs  extends KalturaRequestArgs {
    
}

/** 
* Logout the calling user.
**/
export class OttUserLogoutAction extends KalturaRequest<boolean> {

    

    constructor(data? : OttUserLogoutActionArgs)
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
				action : { type : 'c', default : 'logout' }
            }
        );
        return result;
    }
}

