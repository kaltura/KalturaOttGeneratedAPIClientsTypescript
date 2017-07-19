
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaLanguageFilterArgs  extends KalturaFilterArgs {
    codeIn? : string;
}

/** 
* Language filter
**/
export class KalturaLanguageFilter extends KalturaFilter {

    codeIn : string;

    constructor(data? : KalturaLanguageFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLanguageFilter' },
				codeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLanguageFilter',KalturaLanguageFilter);
