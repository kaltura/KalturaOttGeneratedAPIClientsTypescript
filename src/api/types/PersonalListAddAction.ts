
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPersonalList } from './KalturaPersonalList';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PersonalListAddActionArgs  extends KalturaRequestArgs {
    personalList : KalturaPersonalList;
}

/**
 * Build request payload for service 'personalList' action 'add'.
 *
 * Usage: Add a user&#39;s personal list item to follow
 *
 * Server response type:         KalturaPersonalList
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PersonalListAddAction extends KalturaRequest<KalturaPersonalList> {

    personalList : KalturaPersonalList;

    constructor(data : PersonalListAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPersonalList', responseConstructor : KalturaPersonalList  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'personallist' },
				action : { type : 'c', default : 'add' },
				personalList : { type : 'o', subTypeConstructor : KalturaPersonalList, subType : 'KalturaPersonalList' }
            }
        );
        return result;
    }
}

