
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaTopicNotificationMessageFilterArgs  extends KalturaFilterArgs {
    topicNotificationIdEqual? : number;
}


export class KalturaTopicNotificationMessageFilter extends KalturaFilter {

    topicNotificationIdEqual : number;

    constructor(data? : KalturaTopicNotificationMessageFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicNotificationMessageFilter' },
				topicNotificationIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopicNotificationMessageFilter',KalturaTopicNotificationMessageFilter);
