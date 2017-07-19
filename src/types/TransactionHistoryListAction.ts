
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBillingTransactionListResponse } from './KalturaBillingTransactionListResponse';

import { KalturaTransactionHistoryFilter } from './KalturaTransactionHistoryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TransactionHistoryListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaTransactionHistoryFilter;
	pager? : KalturaFilterPager;
}

/** 
* Gets user or household transaction history.
**/
export class TransactionHistoryListAction extends KalturaRequest<KalturaBillingTransactionListResponse> {

    filter : KalturaTransactionHistoryFilter;
	pager : KalturaFilterPager;

    constructor(data? : TransactionHistoryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBillingTransactionListResponse', responseConstructor : KalturaBillingTransactionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'transactionhistory' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaTransactionHistoryFilter, subType : 'KalturaTransactionHistoryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}

