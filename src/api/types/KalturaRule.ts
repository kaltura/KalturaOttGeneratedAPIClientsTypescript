
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRuleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	label? : string;
}


export class KalturaRule extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	label : string;

    constructor(data? : KalturaRuleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRule' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				label : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRule',KalturaRule);
