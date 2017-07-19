
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaTransactionType } from './KalturaTransactionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TransactionSetWaiverActionArgs  extends KalturaRequestArgs {
    assetId : number;
	transactionType : KalturaTransactionType;
}

/** 
* This method shall set the waiver flag on the user entitlement table and the
* waiver date field to the current date.
**/
export class TransactionSetWaiverAction extends KalturaRequest<boolean> {

    assetId : number;
	transactionType : KalturaTransactionType;

    constructor(data : TransactionSetWaiverActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'transaction' },
				action : { type : 'c', default : 'setWaiver' },
				assetId : { type : 'n' },
				transactionType : { type : 'es', subTypeConstructor : KalturaTransactionType, subType : 'KalturaTransactionType' }
            }
        );
        return result;
    }
}

