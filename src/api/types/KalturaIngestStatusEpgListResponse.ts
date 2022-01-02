
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestEpg } from './KalturaIngestEpg';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaIngestStatusEpgListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaIngestEpg[];
}


export class KalturaIngestStatusEpgListResponse extends KalturaListResponse {

    objects : KalturaIngestEpg[];

    constructor(data? : KalturaIngestStatusEpgListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaIngestStatusEpgListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaIngestEpg, subType : 'KalturaIngestEpg' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestStatusEpgListResponse',KalturaIngestStatusEpgListResponse);
