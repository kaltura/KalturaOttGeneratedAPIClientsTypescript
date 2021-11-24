
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchPriorityGroupOrderedIdsSet } from './KalturaSearchPriorityGroupOrderedIdsSet';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchPriorityGroupOrderedIdsSetSetActionArgs  extends KalturaRequestArgs {
    orderedList : KalturaSearchPriorityGroupOrderedIdsSet;
}

/**
 * Build request payload for service 'searchPriorityGroupOrderedIdsSet' action 'set'.
 *
 * Usage: Set the ordering of priority groups for the partner
 *
 * Server response type:         KalturaSearchPriorityGroupOrderedIdsSet
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchPriorityGroupOrderedIdsSetSetAction extends KalturaRequest<KalturaSearchPriorityGroupOrderedIdsSet> {

    orderedList : KalturaSearchPriorityGroupOrderedIdsSet;

    constructor(data : SearchPriorityGroupOrderedIdsSetSetActionArgs)
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
				action : { type : 'c', default : 'set' },
				orderedList : { type : 'o', subTypeConstructor : KalturaSearchPriorityGroupOrderedIdsSet, subType : 'KalturaSearchPriorityGroupOrderedIdsSet' }
            }
        );
        return result;
    }
}

