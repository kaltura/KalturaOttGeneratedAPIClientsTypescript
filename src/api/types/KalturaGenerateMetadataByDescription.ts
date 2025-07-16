
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenerateMetadataByDescriptionArgs  extends KalturaObjectBaseArgs {
    externalAssetId? : KalturaStringValue;
}


export class KalturaGenerateMetadataByDescription extends KalturaObjectBase {

    externalAssetId : KalturaStringValue;

    constructor(data? : KalturaGenerateMetadataByDescriptionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenerateMetadataByDescription' },
				externalAssetId : { type : 'o', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenerateMetadataByDescription',KalturaGenerateMetadataByDescription);
