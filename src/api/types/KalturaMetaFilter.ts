
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetaFieldName } from './KalturaMetaFieldName';
import { KalturaMetaType } from './KalturaMetaType';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaMetaFilterArgs  extends KalturaFilterArgs {
    fieldNameEqual? : KalturaMetaFieldName;
	fieldNameNotEqual? : KalturaMetaFieldName;
	typeEqual? : KalturaMetaType;
	assetTypeEqual? : KalturaAssetType;
	featuresIn? : string;
}


export class KalturaMetaFilter extends KalturaFilter {

    fieldNameEqual : KalturaMetaFieldName;
	fieldNameNotEqual : KalturaMetaFieldName;
	typeEqual : KalturaMetaType;
	assetTypeEqual : KalturaAssetType;
	featuresIn : string;

    constructor(data? : KalturaMetaFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetaFilter' },
				fieldNameEqual : { type : 'es', subTypeConstructor : KalturaMetaFieldName, subType : 'KalturaMetaFieldName' },
				fieldNameNotEqual : { type : 'es', subTypeConstructor : KalturaMetaFieldName, subType : 'KalturaMetaFieldName' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaMetaType, subType : 'KalturaMetaType' },
				assetTypeEqual : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				featuresIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetaFilter',KalturaMetaFilter);
