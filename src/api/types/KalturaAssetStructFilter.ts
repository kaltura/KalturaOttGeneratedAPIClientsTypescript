
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectVirtualAssetInfoType } from './KalturaObjectVirtualAssetInfoType';
import { KalturaBaseAssetStructFilter, KalturaBaseAssetStructFilterArgs } from './KalturaBaseAssetStructFilter';

export interface KalturaAssetStructFilterArgs  extends KalturaBaseAssetStructFilterArgs {
    idIn? : string;
	metaIdEqual? : number;
	isProtectedEqual? : boolean;
	objectVirtualAssetInfoTypeEqual? : KalturaObjectVirtualAssetInfoType;
}


export class KalturaAssetStructFilter extends KalturaBaseAssetStructFilter {

    idIn : string;
	metaIdEqual : number;
	isProtectedEqual : boolean;
	objectVirtualAssetInfoTypeEqual : KalturaObjectVirtualAssetInfoType;

    constructor(data? : KalturaAssetStructFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetStructFilter' },
				idIn : { type : 's' },
				metaIdEqual : { type : 'n' },
				isProtectedEqual : { type : 'b' },
				objectVirtualAssetInfoTypeEqual : { type : 'es', subTypeConstructor : KalturaObjectVirtualAssetInfoType, subType : 'KalturaObjectVirtualAssetInfoType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetStructFilter',KalturaAssetStructFilter);
