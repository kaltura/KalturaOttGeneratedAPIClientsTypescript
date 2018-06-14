
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUsageModuleArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaUsageModule extends KalturaObjectBase {

    readonly id : number;
	readonly name : string;
	readonly maxViewsNumber : number;
	readonly viewLifeCycle : number;
	readonly fullLifeCycle : number;
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
				id : { type : 'n', readOnly : true },
				name : { type : 's', readOnly : true },
				maxViewsNumber : { type : 'n', readOnly : true },
				viewLifeCycle : { type : 'n', readOnly : true },
				fullLifeCycle : { type : 'n', readOnly : true },
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
