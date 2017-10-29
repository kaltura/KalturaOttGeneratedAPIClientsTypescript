
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReminder } from './KalturaReminder';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaReminderListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaReminder[];
}


export class KalturaReminderListResponse extends KalturaListResponse {

    objects : KalturaReminder[];

    constructor(data? : KalturaReminderListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaReminderListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaReminder, subType : 'KalturaReminder' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReminderListResponse',KalturaReminderListResponse);
