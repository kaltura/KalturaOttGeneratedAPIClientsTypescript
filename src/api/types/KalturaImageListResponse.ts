
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaImage } from './KalturaImage';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaImageListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaImage[];
}


export class KalturaImageListResponse extends KalturaListResponse {

    objects : KalturaImage[];

    constructor(data? : KalturaImageListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaImageListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaImage, subType : 'KalturaImage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageListResponse',KalturaImageListResponse);
