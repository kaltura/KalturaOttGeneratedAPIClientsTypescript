
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementSwapActionArgs  extends KalturaRequestArgs {
    currentProductId : number;
	newProductId : number;
	history : boolean;
}

/** 
* Swap current entitlement (subscription) with new entitlement (subscription) -
* only Grant
**/
export class EntitlementSwapAction extends KalturaRequest<boolean> {

    currentProductId : number;
	newProductId : number;
	history : boolean;

    constructor(data : EntitlementSwapActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'entitlement' },
				action : { type : 'c', default : 'swap' },
				currentProductId : { type : 'n' },
				newProductId : { type : 'n' },
				history : { type : 'b' }
            }
        );
        return result;
    }
}

