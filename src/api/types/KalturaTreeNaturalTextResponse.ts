
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTreeRecommendations } from './KalturaTreeRecommendations';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeNaturalTextResponseArgs  extends KalturaObjectBaseArgs {
    treeId? : string;
	recommendations? : KalturaTreeRecommendations;
}


export class KalturaTreeNaturalTextResponse extends KalturaObjectBase {

    treeId : string;
	recommendations : KalturaTreeRecommendations;

    constructor(data? : KalturaTreeNaturalTextResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTreeNaturalTextResponse' },
				treeId : { type : 's' },
				recommendations : { type : 'o', subTypeConstructor : KalturaTreeRecommendations, subType : 'KalturaTreeRecommendations' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeNaturalTextResponse',KalturaTreeNaturalTextResponse);
