
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUsageModuleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	maxViewsNumber? : number;
	viewLifeCycle? : number;
	fullLifeCycle? : number;
	couponId? : number;
	waiverPeriod? : number;
	isWaiverEnabled? : boolean;
	isOfflinePlayback? : boolean;
}

/** 
* Pricing usage module
**/
export class KalturaUsageModule extends KalturaObjectBase {

    readonly id : number;
	name : string;
	maxViewsNumber : number;
	viewLifeCycle : number;
	fullLifeCycle : number;
	couponId : number;
	waiverPeriod : number;
	isWaiverEnabled : boolean;
	isOfflinePlayback : boolean;

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
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				maxViewsNumber : { type : 'n' },
				viewLifeCycle : { type : 'n' },
				fullLifeCycle : { type : 'n' },
				couponId : { type : 'n' },
				waiverPeriod : { type : 'n' },
				isWaiverEnabled : { type : 'b' },
				isOfflinePlayback : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUsageModule',KalturaUsageModule);
