
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaManualCollectionAssetType } from './KalturaManualCollectionAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaManualCollectionAssetArgs  extends KalturaObjectBaseArgs {
    id? : string;
	type? : KalturaManualCollectionAssetType;
}


export class KalturaManualCollectionAsset extends KalturaObjectBase {

    id : string;
	type : KalturaManualCollectionAssetType;

    constructor(data? : KalturaManualCollectionAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaManualCollectionAsset' },
				id : { type : 's' },
				type : { type : 'es', subTypeConstructor : KalturaManualCollectionAssetType, subType : 'KalturaManualCollectionAssetType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaManualCollectionAsset',KalturaManualCollectionAsset);
