
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataFieldConfig } from './KalturaMetadataFieldConfig';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetadataFieldConfigurationMapArgs  extends KalturaObjectBaseArgs {
    genre? : KalturaMetadataFieldConfig;
	subGenre? : KalturaMetadataFieldConfig;
	sentiment? : KalturaMetadataFieldConfig;
	suggestedTitle? : KalturaMetadataFieldConfig;
	description? : KalturaMetadataFieldConfig;
	oneLiner? : KalturaMetadataFieldConfig;
	keywords? : KalturaMetadataFieldConfig;
	sensitiveContent? : KalturaMetadataFieldConfig;
}


export class KalturaMetadataFieldConfigurationMap extends KalturaObjectBase {

    genre : KalturaMetadataFieldConfig;
	subGenre : KalturaMetadataFieldConfig;
	sentiment : KalturaMetadataFieldConfig;
	suggestedTitle : KalturaMetadataFieldConfig;
	description : KalturaMetadataFieldConfig;
	oneLiner : KalturaMetadataFieldConfig;
	keywords : KalturaMetadataFieldConfig;
	sensitiveContent : KalturaMetadataFieldConfig;

    constructor(data? : KalturaMetadataFieldConfigurationMapArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataFieldConfigurationMap' },
				genre : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' },
				subGenre : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' },
				sentiment : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' },
				suggestedTitle : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' },
				description : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' },
				oneLiner : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' },
				keywords : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' },
				sensitiveContent : { type : 'o', subTypeConstructor : KalturaMetadataFieldConfig, subType : 'KalturaMetadataFieldConfig' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataFieldConfigurationMap',KalturaMetadataFieldConfigurationMap);
