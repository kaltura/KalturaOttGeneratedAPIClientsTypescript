
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSubscribeReference } from './KalturaSubscribeReference';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTopicNotificationArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	subscribeReference? : KalturaSubscribeReference;
}


export class KalturaTopicNotification extends KalturaObjectBase {

    readonly id : number;
	name : string;
	description : string;
	subscribeReference : KalturaSubscribeReference;

    constructor(data? : KalturaTopicNotificationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTopicNotification' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				subscribeReference : { type : 'o', subTypeConstructor : KalturaSubscribeReference, subType : 'KalturaSubscribeReference' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTopicNotification',KalturaTopicNotification);
