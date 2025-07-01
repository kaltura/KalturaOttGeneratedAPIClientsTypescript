
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTreeQuestion } from './KalturaTreeQuestion';
import { KalturaTreeAnswer } from './KalturaTreeAnswer';
import { KalturaTreeRecommendations } from './KalturaTreeRecommendations';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTreeNextNodeResponseArgs  extends KalturaObjectBaseArgs {
    treeId? : string;
	question? : KalturaTreeQuestion;
	totalLevelQuestions? : number;
	answers? : KalturaTreeAnswer[];
	recommendations? : KalturaTreeRecommendations;
}


export class KalturaTreeNextNodeResponse extends KalturaObjectBase {

    treeId : string;
	question : KalturaTreeQuestion;
	totalLevelQuestions : number;
	answers : KalturaTreeAnswer[];
	recommendations : KalturaTreeRecommendations;

    constructor(data? : KalturaTreeNextNodeResponseArgs)
    {
        super(data);
        if (typeof this.answers === 'undefined') this.answers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTreeNextNodeResponse' },
				treeId : { type : 's' },
				question : { type : 'o', subTypeConstructor : KalturaTreeQuestion, subType : 'KalturaTreeQuestion' },
				totalLevelQuestions : { type : 'n' },
				answers : { type : 'a', subTypeConstructor : KalturaTreeAnswer, subType : 'KalturaTreeAnswer' },
				recommendations : { type : 'o', subTypeConstructor : KalturaTreeRecommendations, subType : 'KalturaTreeRecommendations' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTreeNextNodeResponse',KalturaTreeNextNodeResponse);
