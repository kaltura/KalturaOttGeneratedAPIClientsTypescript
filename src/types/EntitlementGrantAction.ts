
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementGrantActionArgs  extends KalturaRequestArgs {
    productId : number;
	productType : KalturaTransactionType;
	history : boolean;
	contentId? : number;
}

/** 
* Grant household for an entitlement for a PPV or Subscription.
**/
export class EntitlementGrantAction extends KalturaRequest<boolean> {

    productId : number;
	productType : KalturaTransactionType;
	history : boolean;
	contentId : number;

    constructor(data : EntitlementGrantActionArgs)
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
				action : { type : 'c', default : 'grant' },
				productId : { type : 'n' },
				productType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' },
				history : { type : 'b' },
				contentId : { type : 'n' }
            }
        );
        return result;
    }
}

