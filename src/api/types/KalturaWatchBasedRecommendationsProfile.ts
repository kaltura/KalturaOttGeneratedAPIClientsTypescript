
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaWatchBasedRecommendationsProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	topicIds? : string;
	analysisMediaTypeIds? : string;
	userInterestPlayThresholdInPercentages? : number;
	numberOfInterests? : number;
	fallbackChannelId? : number;
	minPlaybacks? : number;
	maxPlaybacks? : number;
	allowedRecommendationsKsql? : string;
	playbackInterestsCalculationPeriodDays? : number;
}


export class KalturaWatchBasedRecommendationsProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	topicIds : string;
	analysisMediaTypeIds : string;
	userInterestPlayThresholdInPercentages : number;
	numberOfInterests : number;
	fallbackChannelId : number;
	minPlaybacks : number;
	maxPlaybacks : number;
	allowedRecommendationsKsql : string;
	playbackInterestsCalculationPeriodDays : number;

    constructor(data? : KalturaWatchBasedRecommendationsProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWatchBasedRecommendationsProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				topicIds : { type : 's' },
				analysisMediaTypeIds : { type : 's' },
				userInterestPlayThresholdInPercentages : { type : 'n' },
				numberOfInterests : { type : 'n' },
				fallbackChannelId : { type : 'n' },
				minPlaybacks : { type : 'n' },
				maxPlaybacks : { type : 'n' },
				allowedRecommendationsKsql : { type : 's' },
				playbackInterestsCalculationPeriodDays : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWatchBasedRecommendationsProfile',KalturaWatchBasedRecommendationsProfile);
