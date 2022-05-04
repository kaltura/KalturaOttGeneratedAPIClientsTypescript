
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDynamicList } from './KalturaDynamicList';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DynamicListAddActionArgs  extends KalturaRequestArgs {
    objectToAdd : KalturaDynamicList;
}

/**
 * Build request payload for service 'dynamicList' action 'add'.
 *
 * Usage: Add an object
 *
 * Server response type:         KalturaDynamicList
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DynamicListAddAction extends KalturaRequest<KalturaDynamicList> {

    objectToAdd : KalturaDynamicList;

    constructor(data : DynamicListAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDynamicList', responseConstructor : KalturaDynamicList  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'dynamiclist' },
				action : { type : 'c', default : 'add' },
				objectToAdd : { type : 'o', subTypeConstructor : KalturaDynamicList, subType : 'KalturaDynamicList' }
            }
        );
        return result;
    }
}

