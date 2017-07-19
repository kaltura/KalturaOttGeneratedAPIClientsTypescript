
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SubscriptionSetDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete a subscriptionSet
**/
export class SubscriptionSetDeleteAction extends KalturaRequest<boolean> {

    id : number;

    constructor(data : SubscriptionSetDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'subscriptionset' },
				action : { type : 'c', default : 'delete' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}

