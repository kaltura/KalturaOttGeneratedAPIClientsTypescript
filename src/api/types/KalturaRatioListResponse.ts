
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRatio } from './KalturaRatio';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaRatioListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaRatio[];
}


export class KalturaRatioListResponse extends KalturaListResponse {

    objects : KalturaRatio[];

    constructor(data? : KalturaRatioListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaRatioListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaRatio, subType : 'KalturaRatio' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRatioListResponse',KalturaRatioListResponse);
