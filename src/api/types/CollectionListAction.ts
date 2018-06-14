
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCollectionListResponse } from './KalturaCollectionListResponse';

import { KalturaCollectionFilter } from './KalturaCollectionFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CollectionListActionArgs  extends KalturaRequestArgs {
    filter : KalturaCollectionFilter;
}

/**
 * Build request payload for service 'collection' action 'list'.
 *
 * Usage: Returns a list of subscriptions requested by Subscription ID or file ID
 *
 * Server response type:         KalturaCollectionListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CollectionListAction extends KalturaRequest<KalturaCollectionListResponse> {

    filter : KalturaCollectionFilter;

    constructor(data : CollectionListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCollectionListResponse', responseConstructor : KalturaCollectionListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'collection' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCollectionFilter, subType : 'KalturaCollectionFilter' }
            }
        );
        return result;
    }
}

