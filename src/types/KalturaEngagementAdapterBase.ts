
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEngagementAdapterBaseArgs  extends KalturaObjectBaseArgs {
    name? : string;
}


export class KalturaEngagementAdapterBase extends KalturaObjectBase {

    readonly id : number;
	name : string;

    constructor(data? : KalturaEngagementAdapterBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEngagementAdapterBase' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEngagementAdapterBase',KalturaEngagementAdapterBase);
