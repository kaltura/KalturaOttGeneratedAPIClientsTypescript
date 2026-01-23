
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaAiRecommendationTreeFeatureLevel } from './KalturaAiRecommendationTreeFeatureLevel';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAiRecommendationTreePartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    activeMetadataTypes? : { [key : string] : KalturaIntegerValue};
	topLevelQuestions? : number;
	answersPerQuestion? : number;
	levels? : number;
	specialAnswers? : boolean;
	numOfRecommendedAssets? : number;
	treeGenerationFrequency? : string;
}


export class KalturaAiRecommendationTreePartnerConfiguration extends KalturaObjectBase {

    activeMetadataTypes : { [key : string] : KalturaIntegerValue};
	topLevelQuestions : number;
	answersPerQuestion : number;
	levels : number;
	specialAnswers : boolean;
	numOfRecommendedAssets : number;
	treeGenerationFrequency : string;
	readonly activeTreeId : string;
	readonly featureType : KalturaAiRecommendationTreeFeatureLevel;

    constructor(data? : KalturaAiRecommendationTreePartnerConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAiRecommendationTreePartnerConfiguration' },
				activeMetadataTypes : { type : 'm', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' },
				topLevelQuestions : { type : 'n' },
				answersPerQuestion : { type : 'n' },
				levels : { type : 'n' },
				specialAnswers : { type : 'b' },
				numOfRecommendedAssets : { type : 'n' },
				treeGenerationFrequency : { type : 's' },
				activeTreeId : { type : 's', readOnly : true },
				featureType : { type : 'es', readOnly : true, subTypeConstructor : KalturaAiRecommendationTreeFeatureLevel, subType : 'KalturaAiRecommendationTreeFeatureLevel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAiRecommendationTreePartnerConfiguration',KalturaAiRecommendationTreePartnerConfiguration);
