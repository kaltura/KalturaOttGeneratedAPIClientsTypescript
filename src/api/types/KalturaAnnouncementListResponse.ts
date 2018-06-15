
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAnnouncement } from './KalturaAnnouncement';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaAnnouncementListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaAnnouncement[];
}


export class KalturaAnnouncementListResponse extends KalturaListResponse {

    objects : KalturaAnnouncement[];

    constructor(data? : KalturaAnnouncementListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaAnnouncementListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaAnnouncement, subType : 'KalturaAnnouncement' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAnnouncementListResponse',KalturaAnnouncementListResponse);
