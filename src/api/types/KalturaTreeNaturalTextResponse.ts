
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTreeRecommendations } from './KalturaTreeRecommendations';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeNaturalTextResponseArgs  extends KalturaObjectBaseArgs {
    recommendations? : KalturaTreeRecommendations;
}


export class KalturaTreeNaturalTextResponse extends KalturaObjectBase {

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
				recommendations : { type : 'o', subTypeConstructor : KalturaTreeRecommendations, subType : 'KalturaTreeRecommendations' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeNaturalTextResponse',KalturaTreeNaturalTextResponse);
