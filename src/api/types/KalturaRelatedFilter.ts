
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSearchAssetFilter, KalturaBaseSearchAssetFilterArgs } from './KalturaBaseSearchAssetFilter';

export interface KalturaRelatedFilterArgs  extends KalturaBaseSearchAssetFilterArgs {
    kSql? : string;
	idEqual? : number;
	typeIn? : string;
}


export class KalturaRelatedFilter extends KalturaBaseSearchAssetFilter {

    kSql : string;
	idEqual : number;
	typeIn : string;

    constructor(data? : KalturaRelatedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedFilter' },
				kSql : { type : 's' },
				idEqual : { type : 'n' },
				typeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRelatedFilter',KalturaRelatedFilter);
