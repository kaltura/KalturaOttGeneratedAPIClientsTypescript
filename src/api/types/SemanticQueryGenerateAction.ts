
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSemanticQuery } from './KalturaSemanticQuery';

import { KalturaGenerateSemanticQuery } from './KalturaGenerateSemanticQuery';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SemanticQueryGenerateActionArgs  extends KalturaRequestArgs {
    query : KalturaGenerateSemanticQuery;
}

/**
 * Build request payload for service 'semanticQuery' action 'generate'.
 *
 * Usage: Generates a title and semantic sub-queries
 *
 * Server response type:         KalturaSemanticQuery
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SemanticQueryGenerateAction extends KalturaRequest<KalturaSemanticQuery> {

    query : KalturaGenerateSemanticQuery;

    constructor(data : SemanticQueryGenerateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSemanticQuery', responseConstructor : KalturaSemanticQuery  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'semanticquery' },
				action : { type : 'c', default : 'generate' },
				query : { type : 'o', subTypeConstructor : KalturaGenerateSemanticQuery, subType : 'KalturaGenerateSemanticQuery' }
            }
        );
        return result;
    }
}

