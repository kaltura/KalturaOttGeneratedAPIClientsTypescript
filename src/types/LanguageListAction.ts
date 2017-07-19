
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLanguageListResponse } from './KalturaLanguageListResponse';

import { KalturaLanguageFilter } from './KalturaLanguageFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LanguageListActionArgs  extends KalturaRequestArgs {
    filter : KalturaLanguageFilter;
}

/** 
* Get the list of languages for the partner with option to filter by language
* codes
**/
export class LanguageListAction extends KalturaRequest<KalturaLanguageListResponse> {

    filter : KalturaLanguageFilter;

    constructor(data : LanguageListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLanguageListResponse', responseConstructor : KalturaLanguageListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'language' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaLanguageFilter, subType : 'KalturaLanguageFilter' }
            }
        );
        return result;
    }
}

