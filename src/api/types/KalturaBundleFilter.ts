
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBundleType } from './KalturaBundleType';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaBundleFilterArgs  extends KalturaAssetFilterArgs {
    idEqual? : number;
	typeIn? : string;
	bundleTypeEqual? : KalturaBundleType;
}


export class KalturaBundleFilter extends KalturaAssetFilter {

    idEqual : number;
	typeIn : string;
	bundleTypeEqual : KalturaBundleType;

    constructor(data? : KalturaBundleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBundleFilter' },
				idEqual : { type : 'n' },
				typeIn : { type : 's' },
				bundleTypeEqual : { type : 'es', subTypeConstructor : KalturaBundleType, subType : 'KalturaBundleType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBundleFilter',KalturaBundleFilter);
