
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCountryListResponse } from './KalturaCountryListResponse';

import { KalturaCountryFilter } from './KalturaCountryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CountryListActionArgs  extends KalturaRequestArgs {
    filter : KalturaCountryFilter;
}

/** 
* Get the list of countries for the partner with option to filter by countries
* identifiers
**/
export class CountryListAction extends KalturaRequest<KalturaCountryListResponse> {

    filter : KalturaCountryFilter;

    constructor(data : CountryListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCountryListResponse', responseConstructor : KalturaCountryListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'country' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaCountryFilter, subType : 'KalturaCountryFilter' }
            }
        );
        return result;
    }
}

