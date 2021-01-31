
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResetPasswordPartnerConfigTemplate } from './KalturaResetPasswordPartnerConfigTemplate';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResetPasswordPartnerConfigArgs  extends KalturaObjectBaseArgs {
    templateListLabel? : string;
	templates? : KalturaResetPasswordPartnerConfigTemplate[];
}


export class KalturaResetPasswordPartnerConfig extends KalturaObjectBase {

    templateListLabel : string;
	templates : KalturaResetPasswordPartnerConfigTemplate[];

    constructor(data? : KalturaResetPasswordPartnerConfigArgs)
    {
        super(data);
        if (typeof this.templates === 'undefined') this.templates = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResetPasswordPartnerConfig' },
				templateListLabel : { type : 's' },
				templates : { type : 'a', subTypeConstructor : KalturaResetPasswordPartnerConfigTemplate, subType : 'KalturaResetPasswordPartnerConfigTemplate' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResetPasswordPartnerConfig',KalturaResetPasswordPartnerConfig);
