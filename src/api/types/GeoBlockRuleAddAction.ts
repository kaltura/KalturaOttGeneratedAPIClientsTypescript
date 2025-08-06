
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGeoBlockRule } from './KalturaGeoBlockRule';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GeoBlockRuleAddActionArgs  extends KalturaRequestArgs {
    geoBlockRule : KalturaGeoBlockRule;
}

/**
 * Build request payload for service 'geoBlockRule' action 'add'.
 *
 * Usage: Add a new geo block rule
 *
 * Server response type:         KalturaGeoBlockRule
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class GeoBlockRuleAddAction extends KalturaRequest<KalturaGeoBlockRule> {

    geoBlockRule : KalturaGeoBlockRule;

    constructor(data : GeoBlockRuleAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				geoBlockRule : { type : 'o', subTypeConstructor : KalturaGeoBlockRule, subType : 'KalturaGeoBlockRule' }
            }
        );
        return result;
    }
}

