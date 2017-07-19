
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserInterest } from './KalturaUserInterest';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUserInterestListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaUserInterest[];
}

/** 
* User interest list
**/
export class KalturaUserInterestListResponse extends KalturaListResponse {

    objects : KalturaUserInterest[];

    constructor(data? : KalturaUserInterestListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUserInterestListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaUserInterest, subType : 'KalturaUserInterest' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserInterestListResponse',KalturaUserInterestListResponse);
