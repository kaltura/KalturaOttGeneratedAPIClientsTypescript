
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGenerateMetadataBySubtitlesArgs  extends KalturaObjectBaseArgs {
    id? : number;
	externalAssetIds? : KalturaStringValue[];
}


export class KalturaGenerateMetadataBySubtitles extends KalturaObjectBase {

    id : number;
	externalAssetIds : KalturaStringValue[];

    constructor(data? : KalturaGenerateMetadataBySubtitlesArgs)
    {
        super(data);
        if (typeof this.externalAssetIds === 'undefined') this.externalAssetIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenerateMetadataBySubtitles' },
				id : { type : 'n' },
				externalAssetIds : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenerateMetadataBySubtitles',KalturaGenerateMetadataBySubtitles);
