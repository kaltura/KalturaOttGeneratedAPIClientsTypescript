
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRecommendationProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isActive? : boolean;
	adapterUrl? : string;
	recommendationEngineSettings? : { [key : string] : KalturaStringValue};
	externalIdentifier? : string;
}


export class KalturaRecommendationProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isActive : boolean;
	adapterUrl : string;
	recommendationEngineSettings : { [key : string] : KalturaStringValue};
	externalIdentifier : string;
	readonly sharedSecret : string;

    constructor(data? : KalturaRecommendationProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRecommendationProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isActive : { type : 'b' },
				adapterUrl : { type : 's' },
				recommendationEngineSettings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				externalIdentifier : { type : 's' },
				sharedSecret : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRecommendationProfile',KalturaRecommendationProfile);
