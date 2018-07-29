
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSearchAssetFilter, KalturaBaseSearchAssetFilterArgs } from './KalturaBaseSearchAssetFilter';

export interface KalturaSearchAssetFilterArgs  extends KalturaBaseSearchAssetFilterArgs {
    kSql? : string;
	typeIn? : string;
}


export class KalturaSearchAssetFilter extends KalturaBaseSearchAssetFilter {

    kSql : string;
	typeIn : string;

    constructor(data? : KalturaSearchAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchAssetFilter' },
				kSql : { type : 's' },
				typeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchAssetFilter',KalturaSearchAssetFilter);
