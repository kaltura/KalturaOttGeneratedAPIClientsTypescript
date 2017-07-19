
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTransactionStatus } from './KalturaTransactionStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TransactionUpdateStatusActionArgs  extends KalturaRequestArgs {
    paymentGatewayId : string;
	externalTransactionId : string;
	signature : string;
	status : KalturaTransactionStatus;
}

/** 
* Updates a pending purchase transaction state.
**/
export class TransactionUpdateStatusAction extends KalturaRequest<void> {

    paymentGatewayId : string;
	externalTransactionId : string;
	signature : string;
	status : KalturaTransactionStatus;

    constructor(data : TransactionUpdateStatusActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'transaction' },
				action : { type : 'c', default : 'updateStatus' },
				paymentGatewayId : { type : 's' },
				externalTransactionId : { type : 's' },
				signature : { type : 's' },
				status : { type : 'o', subTypeConstructor : KalturaTransactionStatus, subType : 'KalturaTransactionStatus' }
            }
        );
        return result;
    }
}

