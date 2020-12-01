
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaStreamingDeviceFilterArgs  extends KalturaFilterArgs {
    assetTypeEqual? : KalturaAssetType;
}


export class KalturaStreamingDeviceFilter extends KalturaFilter {

    assetTypeEqual : KalturaAssetType;

    constructor(data? : KalturaStreamingDeviceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStreamingDeviceFilter' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaStreamingDeviceFilter',KalturaStreamingDeviceFilter);
