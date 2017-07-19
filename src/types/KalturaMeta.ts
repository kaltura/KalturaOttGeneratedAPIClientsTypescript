
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetaFieldName } from './KalturaMetaFieldName';
import { KalturaMetaType } from './KalturaMetaType';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMetaArgs  extends KalturaObjectBaseArgs {
    name? : string;
	fieldName? : KalturaMetaFieldName;
	type? : KalturaMetaType;
	assetType? : KalturaAssetType;
	features? : string;
	id? : string;
	parentId? : string;
	partnerId? : number;
}

/** 
* Asset meta
**/
export class KalturaMeta extends KalturaObjectBase {

    name : string;
	fieldName : KalturaMetaFieldName;
	type : KalturaMetaType;
	assetType : KalturaAssetType;
	features : string;
	id : string;
	parentId : string;
	partnerId : number;

    constructor(data? : KalturaMetaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMeta' },
				name : { type : 's' },
				fieldName : { type : 'es', subTypeConstructor : KalturaMetaFieldName, subType : 'KalturaMetaFieldName' },
				type : { type : 'es', subTypeConstructor : KalturaMetaType, subType : 'KalturaMetaType' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				features : { type : 's' },
				id : { type : 's' },
				parentId : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMeta',KalturaMeta);
