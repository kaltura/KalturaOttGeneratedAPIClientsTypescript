
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoBlockRule } from './KalturaGeoBlockRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GeoBlockRuleUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	geoBlockRule : KalturaGeoBlockRule;
}

/**
 * Build request payload for service 'geoBlockRule' action 'update'.
 *
 * Usage: Update an existing geo block rule
 *
 * Server response type:         KalturaGeoBlockRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GeoBlockRuleUpdateAction extends KalturaRequest<KalturaGeoBlockRule> {

    id : number;
	geoBlockRule : KalturaGeoBlockRule;

    constructor(data : GeoBlockRuleUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaGeoBlockRule', responseConstructor : KalturaGeoBlockRule  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'geoblockrule' },
				action : { type : 'c', default : 'update' },
				id : { type : 'n' },
				geoBlockRule : { type : 'o', subTypeConstructor : KalturaGeoBlockRule, subType : 'KalturaGeoBlockRule' }
            }
        );
        return result;
    }
}

