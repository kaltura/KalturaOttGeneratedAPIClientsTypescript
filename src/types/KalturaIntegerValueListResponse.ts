
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaIntegerValueListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaIntegerValue[];
}


export class KalturaIntegerValueListResponse extends KalturaListResponse {

    objects : KalturaIntegerValue[];

    constructor(data? : KalturaIntegerValueListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaIntegerValueListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIntegerValueListResponse',KalturaIntegerValueListResponse);
