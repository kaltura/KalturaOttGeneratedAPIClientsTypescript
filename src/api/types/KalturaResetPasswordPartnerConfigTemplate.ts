
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResetPasswordPartnerConfigTemplateArgs  extends KalturaObjectBaseArgs {
    id? : string;
	label? : string;
	isDefault? : boolean;
}


export class KalturaResetPasswordPartnerConfigTemplate extends KalturaObjectBase {

    id : string;
	label : string;
	isDefault : boolean;

    constructor(data? : KalturaResetPasswordPartnerConfigTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResetPasswordPartnerConfigTemplate' },
				id : { type : 's' },
				label : { type : 's' },
				isDefault : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResetPasswordPartnerConfigTemplate',KalturaResetPasswordPartnerConfigTemplate);
