
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSmsAdapterProfile } from './KalturaSmsAdapterProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSmsAdapterProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSmsAdapterProfile[];
}


export class KalturaSmsAdapterProfileListResponse extends KalturaListResponse {

    objects : KalturaSmsAdapterProfile[];

    constructor(data? : KalturaSmsAdapterProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSmsAdapterProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSmsAdapterProfile, subType : 'KalturaSmsAdapterProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSmsAdapterProfileListResponse',KalturaSmsAdapterProfileListResponse);
