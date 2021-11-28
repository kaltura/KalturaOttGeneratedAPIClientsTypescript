
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchPriorityGroup } from './KalturaSearchPriorityGroup';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchPriorityGroupUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	searchPriorityGroup : KalturaSearchPriorityGroup;
}

/**
 * Build request payload for service 'searchPriorityGroup' action 'update'.
 *
 * Usage: Update an existing priority group
 *
 * Server response type:         KalturaSearchPriorityGroup
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SearchPriorityGroupUpdateAction extends KalturaRequest<KalturaSearchPriorityGroup> {

    id : number;
	searchPriorityGroup : KalturaSearchPriorityGroup;

    constructor(data : SearchPriorityGroupUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				searchPriorityGroup : { type : 'o', subTypeConstructor : KalturaSearchPriorityGroup, subType : 'KalturaSearchPriorityGroup' }
            }
        );
        return result;
    }
}

