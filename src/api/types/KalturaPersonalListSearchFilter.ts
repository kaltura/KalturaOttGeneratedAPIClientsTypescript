
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSearchAssetFilter, KalturaBaseSearchAssetFilterArgs } from './KalturaBaseSearchAssetFilter';

export interface KalturaPersonalListSearchFilterArgs  extends KalturaBaseSearchAssetFilterArgs {
    partnerListTypeIn? : string;
}


export class KalturaPersonalListSearchFilter extends KalturaBaseSearchAssetFilter {

    partnerListTypeIn : string;

    constructor(data? : KalturaPersonalListSearchFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalListSearchFilter' },
				partnerListTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersonalListSearchFilter',KalturaPersonalListSearchFilter);
