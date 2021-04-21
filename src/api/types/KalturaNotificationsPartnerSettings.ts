
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaNotificationsPartnerSettingsArgs  extends KalturaObjectBaseArgs {
    pushNotificationEnabled? : boolean;
	pushSystemAnnouncementsEnabled? : boolean;
	pushStartHour? : number;
	pushEndHour? : number;
	inboxEnabled? : boolean;
	messageTTLDays? : number;
	automaticIssueFollowNotification? : boolean;
	topicExpirationDurationDays? : number;
	reminderEnabled? : boolean;
	reminderOffsetSec? : number;
	pushAdapterUrl? : string;
	churnMailTemplateName? : string;
	churnMailSubject? : string;
	senderEmail? : string;
	mailSenderName? : string;
	mailNotificationAdapterId? : number;
	smsEnabled? : boolean;
}


export class KalturaNotificationsPartnerSettings extends KalturaObjectBase {

    pushNotificationEnabled : boolean;
	pushSystemAnnouncementsEnabled : boolean;
	pushStartHour : number;
	pushEndHour : number;
	inboxEnabled : boolean;
	messageTTLDays : number;
	automaticIssueFollowNotification : boolean;
	topicExpirationDurationDays : number;
	reminderEnabled : boolean;
	reminderOffsetSec : number;
	pushAdapterUrl : string;
	churnMailTemplateName : string;
	churnMailSubject : string;
	senderEmail : string;
	mailSenderName : string;
	mailNotificationAdapterId : number;
	smsEnabled : boolean;

    constructor(data? : KalturaNotificationsPartnerSettingsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNotificationsPartnerSettings' },
				pushNotificationEnabled : { type : 'b' },
				pushSystemAnnouncementsEnabled : { type : 'b' },
				pushStartHour : { type : 'n' },
				pushEndHour : { type : 'n' },
				inboxEnabled : { type : 'b' },
				messageTTLDays : { type : 'n' },
				automaticIssueFollowNotification : { type : 'b' },
				topicExpirationDurationDays : { type : 'n' },
				reminderEnabled : { type : 'b' },
				reminderOffsetSec : { type : 'n' },
				pushAdapterUrl : { type : 's' },
				churnMailTemplateName : { type : 's' },
				churnMailSubject : { type : 's' },
				senderEmail : { type : 's' },
				mailSenderName : { type : 's' },
				mailNotificationAdapterId : { type : 'n' },
				smsEnabled : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNotificationsPartnerSettings',KalturaNotificationsPartnerSettings);
