
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPersonalList } from './KalturaPersonalList';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPersonalListListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPersonalList[];
}


export class KalturaPersonalListListResponse extends KalturaListResponse {

    objects : KalturaPersonalList[];

    constructor(data? : KalturaPersonalListListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaPersonalListListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPersonalList, subType : 'KalturaPersonalList' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersonalListListResponse',KalturaPersonalListListResponse);
