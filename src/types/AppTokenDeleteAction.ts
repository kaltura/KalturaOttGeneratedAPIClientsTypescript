
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AppTokenDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Delete application authentication token by id
**/
export class AppTokenDeleteAction extends KalturaRequest<boolean> {

    id : string;

    constructor(data : AppTokenDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'apptoken' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}

