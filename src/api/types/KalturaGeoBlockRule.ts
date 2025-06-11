
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGeoBlockMode } from './KalturaGeoBlockMode';
import { KalturaProxyRuleLevel } from './KalturaProxyRuleLevel';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaGeoBlockRuleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	countryIds? : string;
	mode? : KalturaGeoBlockMode;
	isProxyRuleEnabled? : boolean;
	proxyRuleLevel? : KalturaProxyRuleLevel;
}


export class KalturaGeoBlockRule extends KalturaObjectBase {

    readonly id : number;
	name : string;
	readonly createDate : number;
	readonly updateDate : number;
	countryIds : string;
	mode : KalturaGeoBlockMode;
	isProxyRuleEnabled : boolean;
	proxyRuleLevel : KalturaProxyRuleLevel;

    constructor(data? : KalturaGeoBlockRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGeoBlockRule' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				countryIds : { type : 's' },
				mode : { type : 'es', subTypeConstructor : KalturaGeoBlockMode, subType : 'KalturaGeoBlockMode' },
				isProxyRuleEnabled : { type : 'b' },
				proxyRuleLevel : { type : 'es', subTypeConstructor : KalturaProxyRuleLevel, subType : 'KalturaProxyRuleLevel' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGeoBlockRule',KalturaGeoBlockRule);
