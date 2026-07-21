
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataFieldConfigurationMap } from './KalturaMetadataFieldConfigurationMap';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAiMetadataGeneratorConfigurationArgs  extends KalturaObjectBaseArgs {
    assetStructConfigMap? : { [key : string] : KalturaMetadataFieldConfigurationMap};
}


export class KalturaAiMetadataGeneratorConfiguration extends KalturaObjectBase {

    assetStructConfigMap : { [key : string] : KalturaMetadataFieldConfigurationMap};
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
				assetStructConfigMap : { type : 'm', subTypeConstructor : KalturaMetadataFieldConfigurationMap, subType : 'KalturaMetadataFieldConfigurationMap' },
				supportedLanguages : { type : 'a', readOnly : true, subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAiMetadataGeneratorConfiguration',KalturaAiMetadataGeneratorConfiguration);
