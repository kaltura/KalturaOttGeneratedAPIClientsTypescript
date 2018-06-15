
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPurchaseSession } from './KalturaPurchaseSession';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TransactionGetPurchaseSessionIdActionArgs  extends KalturaRequestArgs {
    purchaseSession : KalturaPurchaseSession;
}

/**
 * Build request payload for service 'transaction' action 'getPurchaseSessionId'.
 *
 * Usage: Retrieve the purchase session identifier
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TransactionGetPurchaseSessionIdAction extends KalturaRequest<number> {

    purchaseSession : KalturaPurchaseSession;

    constructor(data : TransactionGetPurchaseSessionIdActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'transaction' },
				action : { type : 'c', default : 'getPurchaseSessionId' },
				purchaseSession : { type : 'o', subTypeConstructor : KalturaPurchaseSession, subType : 'KalturaPurchaseSession' }
            }
        );
        return result;
    }
}

