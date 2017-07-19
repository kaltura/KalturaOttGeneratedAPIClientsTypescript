
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaSearchAssetFilterArgs  extends KalturaAssetFilterArgs {
    kSql? : string;
	typeIn? : string;
	idIn? : string;
}


export class KalturaSearchAssetFilter extends KalturaAssetFilter {

    kSql : string;
	typeIn : string;
	idIn : string;

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
				typeIn : { type : 's' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchAssetFilter',KalturaSearchAssetFilter);
