
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PersonalListDeleteActionArgs  extends KalturaRequestArgs {
    personalListId : number;
}

/**
 * Build request payload for service 'personalList' action 'delete'.
 *
 * Usage: Remove followed item from user&#39;s personal list
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PersonalListDeleteAction extends KalturaRequest<void> {

    personalListId : number;

    constructor(data : PersonalListDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'personallist' },
				action : { type : 'c', default : 'delete' },
				personalListId : { type : 'n' }
            }
        );
        return result;
    }
}

