
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMeta } from './KalturaMeta';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMetaListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaMeta[];
}


export class KalturaMetaListResponse extends KalturaListResponse {

    objects : KalturaMeta[];

    constructor(data? : KalturaMetaListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMetaListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaMeta, subType : 'KalturaMeta' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetaListResponse',KalturaMetaListResponse);
