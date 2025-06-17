
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAsset } from './KalturaAsset';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeRecommendationsArgs  extends KalturaObjectBaseArgs {
    title? : string;
	assets? : KalturaAsset[];
}


export class KalturaTreeRecommendations extends KalturaObjectBase {

    title : string;
	assets : KalturaAsset[];

    constructor(data? : KalturaTreeRecommendationsArgs)
    {
        super(data);
        if (typeof this.assets === 'undefined') this.assets = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTreeRecommendations' },
				title : { type : 's' },
				assets : { type : 'a', subTypeConstructor : KalturaAsset, subType : 'KalturaAsset' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeRecommendations',KalturaTreeRecommendations);
