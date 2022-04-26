
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaProductMarkup } from './KalturaProductMarkup';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetPersonalMarkupArgs  extends KalturaObjectBaseArgs {
    products? : KalturaProductMarkup[];
}


export class KalturaAssetPersonalMarkup extends KalturaObjectBase {

    readonly assetId : number;
	readonly assetType : KalturaAssetType;
	products : KalturaProductMarkup[];

    constructor(data? : KalturaAssetPersonalMarkupArgs)
    {
        super(data);
        if (typeof this.products === 'undefined') this.products = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetPersonalMarkup' },
				assetId : { type : 'n', readOnly : true },
				assetType : { type : 'es', readOnly : true, subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				products : { type : 'a', subTypeConstructor : KalturaProductMarkup, subType : 'KalturaProductMarkup' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetPersonalMarkup',KalturaAssetPersonalMarkup);
