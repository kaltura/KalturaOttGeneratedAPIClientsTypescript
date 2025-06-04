
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAiRecommendationTreePartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    activeMetadataTypes? : KalturaStringValue[];
	topLevelQuestions? : number;
	answersPerQuestion? : number;
	levels? : number;
	specialAnswers? : boolean;
	numOfRecommendedAssets? : number;
	removeWatchedRecommendations? : boolean;
	treeGenerationFrequency? : string;
	modelId? : string;
	activeTreeId? : string;
}


export class KalturaAiRecommendationTreePartnerConfiguration extends KalturaObjectBase {

    activeMetadataTypes : KalturaStringValue[];
	topLevelQuestions : number;
	answersPerQuestion : number;
	levels : number;
	specialAnswers : boolean;
	numOfRecommendedAssets : number;
	removeWatchedRecommendations : boolean;
	treeGenerationFrequency : string;
	modelId : string;
	activeTreeId : string;

    constructor(data? : KalturaAiRecommendationTreePartnerConfigurationArgs)
    {
        super(data);
        if (typeof this.activeMetadataTypes === 'undefined') this.activeMetadataTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAiRecommendationTreePartnerConfiguration' },
				activeMetadataTypes : { type : 'a', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				topLevelQuestions : { type : 'n' },
				answersPerQuestion : { type : 'n' },
				levels : { type : 'n' },
				specialAnswers : { type : 'b' },
				numOfRecommendedAssets : { type : 'n' },
				removeWatchedRecommendations : { type : 'b' },
				treeGenerationFrequency : { type : 's' },
				modelId : { type : 's' },
				activeTreeId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAiRecommendationTreePartnerConfiguration',KalturaAiRecommendationTreePartnerConfiguration);
