
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUsageModuleArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	maxViewsNumber? : number;
	viewLifeCycle? : number;
	fullLifeCycle? : number;
}


export class KalturaUsageModule extends KalturaObjectBase {

    id : number;
	name : string;
	maxViewsNumber : number;
	viewLifeCycle : number;
	fullLifeCycle : number;
	readonly couponId : number;
	readonly waiverPeriod : number;
	readonly isWaiverEnabled : boolean;
	readonly isOfflinePlayback : boolean;

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
				waiverPeriod : { type : 'n', readOnly : true },
				isWaiverEnabled : { type : 'b', readOnly : true },
				isOfflinePlayback : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUsageModule',KalturaUsageModule);
