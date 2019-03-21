
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestProfile } from './KalturaIngestProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaIngestProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaIngestProfile[];
}


export class KalturaIngestProfileListResponse extends KalturaListResponse {

    objects : KalturaIngestProfile[];

    constructor(data? : KalturaIngestProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaIngestProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaIngestProfile, subType : 'KalturaIngestProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestProfileListResponse',KalturaIngestProfileListResponse);
