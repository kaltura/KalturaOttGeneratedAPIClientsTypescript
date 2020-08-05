
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectVirtualAssetInfoType } from './KalturaObjectVirtualAssetInfoType';
import { KalturaLongValue } from './KalturaLongValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaObjectVirtualAssetInfoArgs  extends KalturaObjectBaseArgs {
    assetStructId? : number;
	metaId? : number;
	type? : KalturaObjectVirtualAssetInfoType;
	extendedTypes? : { [key : string] : KalturaLongValue};
}


export class KalturaObjectVirtualAssetInfo extends KalturaObjectBase {

    assetStructId : number;
	metaId : number;
	type : KalturaObjectVirtualAssetInfoType;
	extendedTypes : { [key : string] : KalturaLongValue};

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
				type : { type : 'es', subTypeConstructor : KalturaObjectVirtualAssetInfoType, subType : 'KalturaObjectVirtualAssetInfoType' },
				extendedTypes : { type : 'm', subTypeConstructor : KalturaLongValue, subType : 'KalturaLongValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObjectVirtualAssetInfo',KalturaObjectVirtualAssetInfo);
