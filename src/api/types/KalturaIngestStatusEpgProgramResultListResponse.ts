
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIngestEpgProgramResult } from './KalturaIngestEpgProgramResult';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaIngestStatusEpgProgramResultListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaIngestEpgProgramResult[];
}


export class KalturaIngestStatusEpgProgramResultListResponse extends KalturaListResponse {

    objects : KalturaIngestEpgProgramResult[];

    constructor(data? : KalturaIngestStatusEpgProgramResultListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaIngestStatusEpgProgramResultListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaIngestEpgProgramResult, subType : 'KalturaIngestEpgProgramResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestStatusEpgProgramResultListResponse',KalturaIngestStatusEpgProgramResultListResponse);
