
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaEngagementAdapterBase, KalturaEngagementAdapterBaseArgs } from './KalturaEngagementAdapterBase';

export interface KalturaEngagementAdapterArgs  extends KalturaEngagementAdapterBaseArgs {
    isActive? : boolean;
	adapterUrl? : string;
	providerUrl? : string;
	engagementAdapterSettings? : { [key : string] : KalturaStringValue};
}

/** 
* Engagement Adapter
**/
export class KalturaEngagementAdapter extends KalturaEngagementAdapterBase {

    isActive : boolean;
	adapterUrl : string;
	providerUrl : string;
	engagementAdapterSettings : { [key : string] : KalturaStringValue};
	readonly sharedSecret : string;

    constructor(data? : KalturaEngagementAdapterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEngagementAdapter' },
				isActive : { type : 'b' },
				adapterUrl : { type : 's' },
				providerUrl : { type : 's' },
				engagementAdapterSettings : { type : 'm', subTypeConstructor : KalturaStringValue, subType : 'KalturaStringValue' },
				sharedSecret : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEngagementAdapter',KalturaEngagementAdapter);
