
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntitlementForceCancelActionArgs  extends KalturaRequestArgs {
    assetId : number;
	transactionType : KalturaTransactionType;
}

/** 
* Immediately cancel a subscription, PPV or collection. Cancel applies regardless
* of cancellation window and content consumption status
**/
export class EntitlementForceCancelAction extends KalturaRequest<boolean> {

    assetId : number;
	transactionType : KalturaTransactionType;

    constructor(data : EntitlementForceCancelActionArgs)
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
				action : { type : 'c', default : 'forceCancel' },
				assetId : { type : 'n' },
				transactionType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' }
            }
        );
        return result;
    }
}

