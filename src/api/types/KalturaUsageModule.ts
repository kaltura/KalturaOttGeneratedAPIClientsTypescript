
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUsageModuleArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	maxViewsNumber? : number;
	viewLifeCycle? : number;
	fullLifeCycle? : number;
	waiverPeriod? : number;
	isWaiverEnabled? : boolean;
	isOfflinePlayback? : boolean;
	assetUserRuleId? : number;
}


export class KalturaUsageModule extends KalturaObjectBase {

    id : number;
	name : string;
	maxViewsNumber : number;
	viewLifeCycle : number;
	fullLifeCycle : number;
	readonly couponId : number;
	waiverPeriod : number;
	isWaiverEnabled : boolean;
	isOfflinePlayback : boolean;
	assetUserRuleId : number;

    constructor(data? : KalturaUsageModuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUsageModule' },
				id : { type : 'n' },
				name : { type : 's' },
				maxViewsNumber : { type : 'n' },
				viewLifeCycle : { type : 'n' },
				fullLifeCycle : { type : 'n' },
				couponId : { type : 'n', readOnly : true },
				waiverPeriod : { type : 'n' },
				isWaiverEnabled : { type : 'b' },
				isOfflinePlayback : { type : 'b' },
				assetUserRuleId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUsageModule',KalturaUsageModule);
