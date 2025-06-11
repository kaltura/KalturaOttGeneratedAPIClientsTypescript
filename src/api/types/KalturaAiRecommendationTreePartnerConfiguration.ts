
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAiRecommendationTreePartnerConfigurationArgs  extends KalturaObjectBaseArgs {
    activeMetadataTypes? : { [key : string] : KalturaIntegerValue};
	topLevelQuestions? : number;
	answersPerQuestion? : number;
	levels? : number;
	numOfRecommendedAssets? : number;
	treeGenerationFrequency? : string;
	activeTreeId? : string;
}


export class KalturaAiRecommendationTreePartnerConfiguration extends KalturaObjectBase {

    activeMetadataTypes : { [key : string] : KalturaIntegerValue};
	topLevelQuestions : number;
	answersPerQuestion : number;
	levels : number;
	numOfRecommendedAssets : number;
	treeGenerationFrequency : string;
	activeTreeId : string;

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
				numOfRecommendedAssets : { type : 'n' },
				treeGenerationFrequency : { type : 's' },
				activeTreeId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAiRecommendationTreePartnerConfiguration',KalturaAiRecommendationTreePartnerConfiguration);
