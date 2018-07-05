
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaImageType } from './KalturaImageType';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaImageTypeListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaImageType[];
}


export class KalturaImageTypeListResponse extends KalturaListResponse {

    objects : KalturaImageType[];

    constructor(data? : KalturaImageTypeListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaImageTypeListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaImageType, subType : 'KalturaImageType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageTypeListResponse',KalturaImageTypeListResponse);
