
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementCancelActionArgs  extends KalturaRequestArgs {
    assetId : number;
	productType : KalturaTransactionType;
}

/**
 * Build request payload for service 'entitlement' action 'cancel'.
 *
 * Usage: Immediately cancel a subscription, PPV, collection or programAssetGroupOffer. Cancel is possible only if within cancellation window and content not already consumed
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class EntitlementCancelAction extends KalturaRequest<boolean> {

    assetId : number;
	productType : KalturaTransactionType;

    constructor(data : EntitlementCancelActionArgs)
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
				action : { type : 'c', default : 'cancel' },
				assetId : { type : 'n' },
				productType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' }
            }
        );
        return result;
    }
}

