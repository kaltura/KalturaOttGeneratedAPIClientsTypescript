
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserLog } from './KalturaUserLog';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserLogListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaUserLog[];
}


export class KalturaUserLogListResponse extends KalturaListResponse {

    objects : KalturaUserLog[];

    constructor(data? : KalturaUserLogListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserLogListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaUserLog, subType : 'KalturaUserLog' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserLogListResponse',KalturaUserLogListResponse);
