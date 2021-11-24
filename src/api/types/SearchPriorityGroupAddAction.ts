
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchPriorityGroup } from './KalturaSearchPriorityGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchPriorityGroupAddActionArgs  extends KalturaRequestArgs {
    searchPriorityGroup : KalturaSearchPriorityGroup;
}

/**
 * Build request payload for service 'searchPriorityGroup' action 'add'.
 *
 * Usage: Add a new priority group
 *
 * Server response type:         KalturaSearchPriorityGroup
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchPriorityGroupAddAction extends KalturaRequest<KalturaSearchPriorityGroup> {

    searchPriorityGroup : KalturaSearchPriorityGroup;

    constructor(data : SearchPriorityGroupAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSearchPriorityGroup', responseConstructor : KalturaSearchPriorityGroup  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'searchprioritygroup' },
				action : { type : 'c', default : 'add' },
				searchPriorityGroup : { type : 'o', subTypeConstructor : KalturaSearchPriorityGroup, subType : 'KalturaSearchPriorityGroup' }
            }
        );
        return result;
    }
}

