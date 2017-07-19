
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaRelatedFilterArgs  extends KalturaAssetFilterArgs {
    kSql? : string;
	idEqual? : number;
	typeIn? : string;
}


export class KalturaRelatedFilter extends KalturaAssetFilter {

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
