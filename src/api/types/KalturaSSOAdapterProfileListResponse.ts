
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSSOAdapterProfile } from './KalturaSSOAdapterProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSSOAdapterProfileListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaSSOAdapterProfile[];
}


export class KalturaSSOAdapterProfileListResponse extends KalturaListResponse {

    objects : KalturaSSOAdapterProfile[];

    constructor(data? : KalturaSSOAdapterProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSSOAdapterProfileListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaSSOAdapterProfile, subType : 'KalturaSSOAdapterProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSSOAdapterProfileListResponse',KalturaSSOAdapterProfileListResponse);
