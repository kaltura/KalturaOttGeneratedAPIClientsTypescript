
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationStatus } from './KalturaEventNotificationStatus';
import { KalturaOTTObjectSupportNullable, KalturaOTTObjectSupportNullableArgs } from './KalturaOTTObjectSupportNullable';

export interface KalturaEventNotificationArgs  extends KalturaOTTObjectSupportNullableArgs {
    id? : string;
	objectId? : number;
	eventObjectType? : string;
	message? : string;
	status? : KalturaEventNotificationStatus;
	actionType? : string;
}


export class KalturaEventNotification extends KalturaOTTObjectSupportNullable {

    id : string;
	objectId : number;
	eventObjectType : string;
	message : string;
	status : KalturaEventNotificationStatus;
	actionType : string;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaEventNotificationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotification' },
				id : { type : 's' },
				objectId : { type : 'n' },
				eventObjectType : { type : 's' },
				message : { type : 's' },
				status : { type : 'es', subTypeConstructor : KalturaEventNotificationStatus, subType : 'KalturaEventNotificationStatus' },
				actionType : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotification',KalturaEventNotification);
