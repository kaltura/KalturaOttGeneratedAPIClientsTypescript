
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIot } from './KalturaIot';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaIotListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaIot[];
}


export class KalturaIotListResponse extends KalturaListResponse {

    objects : KalturaIot[];

    constructor(data? : KalturaIotListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaIotListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaIot, subType : 'KalturaIot' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIotListResponse',KalturaIotListResponse);
