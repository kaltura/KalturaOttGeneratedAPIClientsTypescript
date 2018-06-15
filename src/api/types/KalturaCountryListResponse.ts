
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCountry } from './KalturaCountry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCountryListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaCountry[];
}


export class KalturaCountryListResponse extends KalturaListResponse {

    objects : KalturaCountry[];

    constructor(data? : KalturaCountryListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaCountryListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaCountry, subType : 'KalturaCountry' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCountryListResponse',KalturaCountryListResponse);
