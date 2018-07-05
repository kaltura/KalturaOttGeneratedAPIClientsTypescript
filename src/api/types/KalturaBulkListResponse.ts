
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulk } from './KalturaBulk';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBulkListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaBulk[];
}


export class KalturaBulkListResponse extends KalturaListResponse {

    objects : KalturaBulk[];

    constructor(data? : KalturaBulkListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBulkListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaBulk, subType : 'KalturaBulk' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkListResponse',KalturaBulkListResponse);
