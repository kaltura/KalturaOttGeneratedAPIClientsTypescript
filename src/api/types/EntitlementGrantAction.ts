
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
 * Build request payload for service 'entitlement' action 'grant'.
 *
 * Usage: Grant household for an entitlement for a PPV, Subscription or programAssetGroupOffer
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
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

