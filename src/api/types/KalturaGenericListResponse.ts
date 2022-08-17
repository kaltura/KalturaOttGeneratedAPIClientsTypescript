
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaT } from './KalturaT';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaGenericListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaT[];
}


export class KalturaGenericListResponse extends KalturaListResponse {

    objects : KalturaT[];

    constructor(data? : KalturaGenericListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaGenericListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaT, subType : 'KalturaT' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericListResponse',KalturaGenericListResponse);
