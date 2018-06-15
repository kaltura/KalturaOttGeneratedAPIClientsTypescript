
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAssetRuleBaseArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
}


export class KalturaAssetRuleBase extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;

    constructor(data? : KalturaAssetRuleBaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetRuleBase' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetRuleBase',KalturaAssetRuleBase);
