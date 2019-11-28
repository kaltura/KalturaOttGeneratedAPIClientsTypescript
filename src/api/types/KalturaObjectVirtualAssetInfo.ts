
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectVirtualAssetInfoType } from './KalturaObjectVirtualAssetInfoType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaObjectVirtualAssetInfoArgs  extends KalturaObjectBaseArgs {
    assetStructId? : number;
	metaId? : number;
	type? : KalturaObjectVirtualAssetInfoType;
}


export class KalturaObjectVirtualAssetInfo extends KalturaObjectBase {

    assetStructId : number;
	metaId : number;
	type : KalturaObjectVirtualAssetInfoType;

    constructor(data? : KalturaObjectVirtualAssetInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaObjectVirtualAssetInfo' },
				assetStructId : { type : 'n' },
				metaId : { type : 'n' },
				type : { type : 'es', subTypeConstructor : KalturaObjectVirtualAssetInfoType, subType : 'KalturaObjectVirtualAssetInfoType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObjectVirtualAssetInfo',KalturaObjectVirtualAssetInfo);
