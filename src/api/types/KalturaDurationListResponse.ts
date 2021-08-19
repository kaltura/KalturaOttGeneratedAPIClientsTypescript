
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDuration } from './KalturaDuration';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDurationListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaDuration[];
}


export class KalturaDurationListResponse extends KalturaListResponse {

    objects : KalturaDuration[];

    constructor(data? : KalturaDurationListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDurationListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaDuration, subType : 'KalturaDuration' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDurationListResponse',KalturaDurationListResponse);
