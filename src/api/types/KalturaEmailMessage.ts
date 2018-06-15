
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEmailMessageArgs  extends KalturaObjectBaseArgs {
    templateName? : string;
	subject? : string;
	firstName? : string;
	lastName? : string;
	senderName? : string;
	senderFrom? : string;
	senderTo? : string;
	bccAddress? : string;
	extraParameters? : KalturaKeyValue[];
}


export class KalturaEmailMessage extends KalturaObjectBase {

    templateName : string;
	subject : string;
	firstName : string;
	lastName : string;
	senderName : string;
	senderFrom : string;
	senderTo : string;
	bccAddress : string;
	extraParameters : KalturaKeyValue[];

    constructor(data? : KalturaEmailMessageArgs)
    {
        super(data);
        if (typeof this.extraParameters === 'undefined') this.extraParameters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailMessage' },
				templateName : { type : 's' },
				subject : { type : 's' },
				firstName : { type : 's' },
				lastName : { type : 's' },
				senderName : { type : 's' },
				senderFrom : { type : 's' },
				senderTo : { type : 's' },
				bccAddress : { type : 's' },
				extraParameters : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailMessage',KalturaEmailMessage);
