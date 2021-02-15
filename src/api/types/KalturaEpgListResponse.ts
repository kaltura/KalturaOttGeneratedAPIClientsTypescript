
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEpg } from './KalturaEpg';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEpgListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaEpg[];
}


export class KalturaEpgListResponse extends KalturaListResponse {

    objects : KalturaEpg[];

    constructor(data? : KalturaEpgListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaEpgListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaEpg, subType : 'KalturaEpg' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEpgListResponse',KalturaEpgListResponse);
