
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTransaction } from './KalturaTransaction';

import { KalturaExternalReceipt } from './KalturaExternalReceipt';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TransactionValidateReceiptActionArgs  extends KalturaRequestArgs {
    externalReceipt : KalturaExternalReceipt;
}

/**
 * Build request payload for service 'transaction' action 'validateReceipt'.
 *
 * Usage: Verifies PPV/Subscription/Collection client purchase (such as InApp) and entitles the user
 *
 * Server response type:         KalturaTransaction
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class TransactionValidateReceiptAction extends KalturaRequest<KalturaTransaction> {

    externalReceipt : KalturaExternalReceipt;

    constructor(data : TransactionValidateReceiptActionArgs)
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
				action : { type : 'c', default : 'validateReceipt' },
				externalReceipt : { type : 'o', subTypeConstructor : KalturaExternalReceipt, subType : 'KalturaExternalReceipt' }
            }
        );
        return result;
    }
}

