
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPurchase } from './KalturaPurchase';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TransactionDowngradeActionArgs  extends KalturaRequestArgs {
    purchase : KalturaPurchase;
}

/** 
* downgrade specific subscription for a household. entitlements will be updated on
* the existing subscription end date.
**/
export class TransactionDowngradeAction extends KalturaRequest<void> {

    purchase : KalturaPurchase;

    constructor(data : TransactionDowngradeActionArgs)
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
				action : { type : 'c', default : 'downgrade' },
				purchase : { type : 'o', subTypeConstructor : KalturaPurchase, subType : 'KalturaPurchase' }
            }
        );
        return result;
    }
}

