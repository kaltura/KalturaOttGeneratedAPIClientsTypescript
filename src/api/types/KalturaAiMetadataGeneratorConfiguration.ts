
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetaFieldNameMap } from './KalturaMetaFieldNameMap';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAiMetadataGeneratorConfigurationArgs  extends KalturaObjectBaseArgs {
    assetStructMetaNameMap? : { [key : string] : KalturaMetaFieldNameMap};
}


export class KalturaAiMetadataGeneratorConfiguration extends KalturaObjectBase {

    assetStructMetaNameMap : { [key : string] : KalturaMetaFieldNameMap};
	readonly supportedLanguages : KalturaStringValue[];

    constructor(data? : KalturaAiMetadataGeneratorConfigurationArgs)
    {
        super(data);
        if (typeof this.supportedLanguages === 'undefined') this.supportedLanguages = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAiMetadataGeneratorConfiguration' },
				assetStructMetaNameMap : { type : 'm', subTypeConstructor : KalturaMetaFieldNameMap, subType : 'KalturaMetaFieldNameMap' },
				supportedLanguages : { type : 'a', readOnly : true, subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAiMetadataGeneratorConfiguration',KalturaAiMetadataGeneratorConfiguration);
