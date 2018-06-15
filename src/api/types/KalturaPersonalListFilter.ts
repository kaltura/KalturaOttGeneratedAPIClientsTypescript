
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPersonalListFilterArgs  extends KalturaFilterArgs {
    partnerListTypeIn? : string;
}


export class KalturaPersonalListFilter extends KalturaFilter {

    partnerListTypeIn : string;

    constructor(data? : KalturaPersonalListFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalListFilter' },
				partnerListTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersonalListFilter',KalturaPersonalListFilter);
