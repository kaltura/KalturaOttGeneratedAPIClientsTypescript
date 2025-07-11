
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTreeNaturalTextResponse } from './KalturaTreeNaturalTextResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiRecommendationTreeGetRecommendationWithNaturalTextActionArgs  extends KalturaRequestArgs {
    naturalTextQuery : string;
	questionId? : string;
	treeId? : string;
}

/**
 * Build request payload for service 'aiRecommendationTree' action 'getRecommendationWithNaturalText'.
 *
 * Usage: Returns content recommendations based on natural language input
 *
 * Server response type:         KalturaTreeNaturalTextResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiRecommendationTreeGetRecommendationWithNaturalTextAction extends KalturaRequest<KalturaTreeNaturalTextResponse> {

    naturalTextQuery : string;
	questionId : string;
	treeId : string;

    constructor(data : AiRecommendationTreeGetRecommendationWithNaturalTextActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaTreeNaturalTextResponse', responseConstructor : KalturaTreeNaturalTextResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'airecommendationtree' },
				action : { type : 'c', default : 'getRecommendationWithNaturalText' },
				naturalTextQuery : { type : 's' },
				questionId : { type : 's' },
				treeId : { type : 's' }
            }
        );
        return result;
    }
}

