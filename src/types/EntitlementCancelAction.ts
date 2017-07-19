
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementCancelActionArgs  extends KalturaRequestArgs {
    assetId : number;
	transactionType : KalturaTransactionType;
}

/** 
* Immediately cancel a subscription, PPV or collection. Cancel is possible only if
* within cancellation window and content not already consumed
**/
export class EntitlementCancelAction extends KalturaRequest<boolean> {

    assetId : number;
	transactionType : KalturaTransactionType;

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
				transactionType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' }
            }
        );
        return result;
    }
}

