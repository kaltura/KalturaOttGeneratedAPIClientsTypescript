
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDynamicList } from './KalturaDynamicList';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DynamicListUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	objectToUpdate : KalturaDynamicList;
}

/**
 * Build request payload for service 'dynamicList' action 'update'.
 *
 * Usage: Update an object
 *
 * Server response type:         KalturaDynamicList
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DynamicListUpdateAction extends KalturaRequest<KalturaDynamicList> {

    id : number;
	objectToUpdate : KalturaDynamicList;

    constructor(data : DynamicListUpdateActionArgs)
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
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				objectToUpdate : { type : 'o', subTypeConstructor : KalturaDynamicList, subType : 'KalturaDynamicList' }
            }
        );
        return result;
    }
}

