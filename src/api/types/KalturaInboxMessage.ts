
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaInboxMessageStatus } from './KalturaInboxMessageStatus';
import { KalturaInboxMessageType } from './KalturaInboxMessageType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaInboxMessageArgs  extends KalturaObjectBaseArgs {
    message? : string;
	type? : KalturaInboxMessageType;
	url? : string;
}


export class KalturaInboxMessage extends KalturaObjectBase {

    readonly id : string;
	message : string;
	readonly status : KalturaInboxMessageStatus;
	type : KalturaInboxMessageType;
	readonly createdAt : number;
	url : string;
	readonly campaignId : number;

    constructor(data? : KalturaInboxMessageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaInboxMessage' },
				id : { type : 's', readOnly : true },
				message : { type : 's' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaInboxMessageStatus, subType : 'KalturaInboxMessageStatus' },
				type : { type : 'es', subTypeConstructor : KalturaInboxMessageType, subType : 'KalturaInboxMessageType' },
				createdAt : { type : 'n', readOnly : true },
				url : { type : 's' },
				campaignId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaInboxMessage',KalturaInboxMessage);
