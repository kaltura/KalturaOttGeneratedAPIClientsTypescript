
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchPriorityGroupOrderedIdsSet } from './KalturaSearchPriorityGroupOrderedIdsSet';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchPriorityGroupOrderedIdsSetGetActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'searchPriorityGroupOrderedIdsSet' action 'get'.
 *
 * Usage: Return the current ordering of priority groups for the partner
 *
 * Server response type:         KalturaSearchPriorityGroupOrderedIdsSet
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchPriorityGroupOrderedIdsSetGetAction extends KalturaRequest<KalturaSearchPriorityGroupOrderedIdsSet> {

    

    constructor(data? : SearchPriorityGroupOrderedIdsSetGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchPriorityGroupOrderedIdsSet', responseConstructor : KalturaSearchPriorityGroupOrderedIdsSet  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchprioritygrouporderedidsset' },
				action : { type : 'c', default : 'get' }
            }
        );
        return result;
    }
}

