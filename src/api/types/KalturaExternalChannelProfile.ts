
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannelEnrichmentHolder } from './KalturaChannelEnrichmentHolder';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaExternalChannelProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isActive? : boolean;
	externalIdentifier? : string;
	filterExpression? : string;
	recommendationEngineId? : number;
	enrichments? : KalturaChannelEnrichmentHolder[];
	assetUserRuleId? : number;
	metaData? : { [key : string] : KalturaStringValue};
}


export class KalturaExternalChannelProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isActive : boolean;
	externalIdentifier : string;
	filterExpression : string;
	recommendationEngineId : number;
	enrichments : KalturaChannelEnrichmentHolder[];
	assetUserRuleId : number;
	metaData : { [key : string] : KalturaStringValue};

    constructor(data? : KalturaExternalChannelProfileArgs)
    {
        super(data);
        if (typeof this.enrichments === 'undefined') this.enrichments = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalChannelProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isActive : { type : 'b' },
				externalIdentifier : { type : 's' },
				filterExpression : { type : 's' },
				recommendationEngineId : { type : 'n' },
				enrichments : { type : 'a', subTypeConstructor : KalturaChannelEnrichmentHolder, subType : 'KalturaChannelEnrichmentHolder' },
				assetUserRuleId : { type : 'n' },
				metaData : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalChannelProfile',KalturaExternalChannelProfile);
