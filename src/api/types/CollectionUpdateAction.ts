
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCollection } from './KalturaCollection';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CollectionUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	collection : KalturaCollection;
}

/**
 * Build request payload for service 'collection' action 'update'.
 *
 * Usage: Update Collection
 *
 * Server response type:         KalturaCollection
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CollectionUpdateAction extends KalturaRequest<KalturaCollection> {

    id : number;
	collection : KalturaCollection;

    constructor(data : CollectionUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCollection', responseConstructor : KalturaCollection  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'collection' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				collection : { type : 'o', subTypeConstructor : KalturaCollection, subType : 'KalturaCollection' }
            }
        );
        return result;
    }
}

