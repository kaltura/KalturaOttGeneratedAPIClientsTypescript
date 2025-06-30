
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTreeNextNodeResponse } from './KalturaTreeNextNodeResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiRecommendationTreeGetNextNodeAndRecommendationActionArgs  extends KalturaRequestArgs {
    treeId? : string;
	answerId? : string;
	topQuestionId? : string;
}

/**
 * Build request payload for service 'aiRecommendationTree' action 'getNextNodeAndRecommendation'.
 *
 * Usage: Returns the next question, available answers, and content recommendations based on the current path through the tree
 *
 * Server response type:         KalturaTreeNextNodeResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiRecommendationTreeGetNextNodeAndRecommendationAction extends KalturaRequest<KalturaTreeNextNodeResponse> {

    treeId : string;
	answerId : string;
	topQuestionId : string;

    constructor(data? : AiRecommendationTreeGetNextNodeAndRecommendationActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTreeNextNodeResponse', responseConstructor : KalturaTreeNextNodeResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'airecommendationtree' },
				action : { type : 'c', default : 'getNextNodeAndRecommendation' },
				treeId : { type : 's' },
				answerId : { type : 's' },
				topQuestionId : { type : 's' }
            }
        );
        return result;
    }
}

