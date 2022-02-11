
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetOrderByType } from './KalturaAssetOrderByType';
import { KalturaBaseAssetOrder, KalturaBaseAssetOrderArgs } from './KalturaBaseAssetOrder';

export interface KalturaAssetOrderArgs  extends KalturaBaseAssetOrderArgs {
    orderBy? : KalturaAssetOrderByType;
}


export class KalturaAssetOrder extends KalturaBaseAssetOrder {

    orderBy : KalturaAssetOrderByType;

    constructor(data? : KalturaAssetOrderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetOrder' },
				orderBy : { type : 'es', subTypeConstructor : KalturaAssetOrderByType, subType : 'KalturaAssetOrderByType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetOrder',KalturaAssetOrder);
