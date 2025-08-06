
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenerateMetadataByDescriptionArgs  extends KalturaObjectBaseArgs {
    externalAssetId? : string;
}


export class KalturaGenerateMetadataByDescription extends KalturaObjectBase {

    externalAssetId : string;

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
				externalAssetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenerateMetadataByDescription',KalturaGenerateMetadataByDescription);
