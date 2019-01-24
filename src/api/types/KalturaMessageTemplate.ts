
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMessageTemplateType } from './KalturaMessageTemplateType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMessageTemplateArgs  extends KalturaObjectBaseArgs {
    message? : string;
	dateFormat? : string;
	messageType? : KalturaMessageTemplateType;
	sound? : string;
	action? : string;
	url? : string;
}


export class KalturaMessageTemplate extends KalturaObjectBase {

    message : string;
	dateFormat : string;
	messageType : KalturaMessageTemplateType;
	sound : string;
	action : string;
	url : string;

    constructor(data? : KalturaMessageTemplateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMessageTemplate' },
				message : { type : 's' },
				dateFormat : { type : 's' },
				messageType : { type : 'es', subTypeConstructor : KalturaMessageTemplateType, subType : 'KalturaMessageTemplateType' },
				sound : { type : 's' },
				action : { type : 's' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMessageTemplate',KalturaMessageTemplate);
