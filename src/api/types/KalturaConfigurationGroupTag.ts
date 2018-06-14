
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConfigurationGroupTagArgs  extends KalturaObjectBaseArgs {
    configurationGroupId? : string;
	tag? : string;
}


export class KalturaConfigurationGroupTag extends KalturaObjectBase {

    configurationGroupId : string;
	readonly partnerId : number;
	tag : string;

    constructor(data? : KalturaConfigurationGroupTagArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurationGroupTag' },
				configurationGroupId : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				tag : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurationGroupTag',KalturaConfigurationGroupTag);
