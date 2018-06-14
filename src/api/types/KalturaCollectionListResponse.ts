
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCollection } from './KalturaCollection';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCollectionListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCollection[];
}


export class KalturaCollectionListResponse extends KalturaListResponse {

    objects : KalturaCollection[];

    constructor(data? : KalturaCollectionListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCollectionListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCollection, subType : 'KalturaCollection' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCollectionListResponse',KalturaCollectionListResponse);
