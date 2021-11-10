
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCollection } from './KalturaCollection';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CollectionAddActionArgs  extends KalturaRequestArgs {
    collection : KalturaCollection;
}

/**
 * Build request payload for service 'collection' action 'add'.
 *
 * Usage: Internal API !!! Insert new collection for partner
 *
 * Server response type:         KalturaCollection
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CollectionAddAction extends KalturaRequest<KalturaCollection> {

    collection : KalturaCollection;

    constructor(data : CollectionAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				collection : { type : 'o', subTypeConstructor : KalturaCollection, subType : 'KalturaCollection' }
            }
        );
        return result;
    }
}

