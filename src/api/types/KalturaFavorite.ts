
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFavoriteArgs  extends KalturaObjectBaseArgs {
    assetId? : number;
	extraData? : string;
}


export class KalturaFavorite extends KalturaObjectBase {

    assetId : number;
	extraData : string;
	readonly createDate : number;

    constructor(data? : KalturaFavoriteArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFavorite' },
				assetId : { type : 'n' },
				extraData : { type : 's' },
				createDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFavorite',KalturaFavorite);
