
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTransaction } from './KalturaTransaction';

import { KalturaPurchase } from './KalturaPurchase';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TransactionPurchaseActionArgs  extends KalturaRequestArgs {
    purchase : KalturaPurchase;
}

/**
 * Build request payload for service 'transaction' action 'purchase'.
 *
 * Usage: Purchase specific product or subscription for a household. Upon successful charge entitlements to use the requested product or subscription are granted
 *
 * Server response type:         KalturaTransaction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TransactionPurchaseAction extends KalturaRequest<KalturaTransaction> {

    purchase : KalturaPurchase;

    constructor(data : TransactionPurchaseActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTransaction', responseConstructor : KalturaTransaction  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'transaction' },
				action : { type : 'c', default : 'purchase' },
				purchase : { type : 'o', subTypeConstructor : KalturaPurchase, subType : 'KalturaPurchase' }
            }
        );
        return result;
    }
}

