
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaSearchHistoryFilter } from './KalturaSearchHistoryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchHistoryCleanActionArgs  extends KalturaRequestArgs {
    filter? : KalturaSearchHistoryFilter;
}

/**
 * Build request payload for service 'searchHistory' action 'clean'.
 *
 * Usage: Clean the user’s search history
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchHistoryCleanAction extends KalturaRequest<boolean> {

    filter : KalturaSearchHistoryFilter;

    constructor(data? : SearchHistoryCleanActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchhistory' },
				action : { type : 'c', default : 'clean' },
				filter : { type : 'o', subTypeConstructor : KalturaSearchHistoryFilter, subType : 'KalturaSearchHistoryFilter' }
            }
        );
        return result;
    }
}

