
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAnnouncementStatus } from './KalturaAnnouncementStatus';
import { KalturaAnnouncementRecipientsType } from './KalturaAnnouncementRecipientsType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAnnouncementArgs  extends KalturaObjectBaseArgs {
    name? : string;
	message? : string;
	enabled? : boolean;
	startTime? : number;
	timezone? : string;
	recipients? : KalturaAnnouncementRecipientsType;
}


export class KalturaAnnouncement extends KalturaObjectBase {

    name : string;
	message : string;
	enabled : boolean;
	startTime : number;
	timezone : string;
	readonly status : KalturaAnnouncementStatus;
	recipients : KalturaAnnouncementRecipientsType;
	readonly id : number;

    constructor(data? : KalturaAnnouncementArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAnnouncement' },
				name : { type : 's' },
				message : { type : 's' },
				enabled : { type : 'b' },
				startTime : { type : 'n' },
				timezone : { type : 's' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaAnnouncementStatus, subType : 'KalturaAnnouncementStatus' },
				recipients : { type : 'es', subTypeConstructor : KalturaAnnouncementRecipientsType, subType : 'KalturaAnnouncementRecipientsType' },
				id : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnnouncement',KalturaAnnouncement);
