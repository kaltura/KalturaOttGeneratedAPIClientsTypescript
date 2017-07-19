
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface HomeNetworkDeleteActionArgs  extends KalturaRequestArgs {
    externalId : string;
}

/** 
* Delete household’s existing home network
**/
export class HomeNetworkDeleteAction extends KalturaRequest<boolean> {

    externalId : string;

    constructor(data : HomeNetworkDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'homenetwork' },
				action : { type : 'c', default : 'delete' },
				externalId : { type : 's' }
            }
        );
        return result;
    }
}

