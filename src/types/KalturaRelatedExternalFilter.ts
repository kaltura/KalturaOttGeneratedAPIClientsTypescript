
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaRelatedExternalFilterArgs  extends KalturaAssetFilterArgs {
    idEqual? : number;
	typeIn? : string;
	utcOffsetEqual? : number;
	freeText? : string;
}


export class KalturaRelatedExternalFilter extends KalturaAssetFilter {

    idEqual : number;
	typeIn : string;
	utcOffsetEqual : number;
	freeText : string;

    constructor(data? : KalturaRelatedExternalFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRelatedExternalFilter' },
				idEqual : { type : 'n' },
				typeIn : { type : 's' },
				utcOffsetEqual : { type : 'n' },
				freeText : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRelatedExternalFilter',KalturaRelatedExternalFilter);
