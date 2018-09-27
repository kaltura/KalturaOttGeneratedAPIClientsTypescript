
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetFilePpvFilterArgs  extends KalturaFilterArgs {
    assetIdEqual? : number;
	assetFileIdEqual? : number;
}


export class KalturaAssetFilePpvFilter extends KalturaFilter {

    assetIdEqual : number;
	assetFileIdEqual : number;

    constructor(data? : KalturaAssetFilePpvFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetFilePpvFilter' },
				assetIdEqual : { type : 'n' },
				assetFileIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetFilePpvFilter',KalturaAssetFilePpvFilter);
