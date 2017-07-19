
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaInboxMessage } from './KalturaInboxMessage';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaInboxMessageListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaInboxMessage[];
}

/** 
* List of inbox message.
**/
export class KalturaInboxMessageListResponse extends KalturaListResponse {

    objects : KalturaInboxMessage[];

    constructor(data? : KalturaInboxMessageListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInboxMessageListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaInboxMessage, subType : 'KalturaInboxMessage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaInboxMessageListResponse',KalturaInboxMessageListResponse);
