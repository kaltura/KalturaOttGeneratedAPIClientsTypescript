
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaAccessControlMessage } from './KalturaAccessControlMessage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackContextArgs  extends KalturaObjectBaseArgs {
    sources? : KalturaPlaybackSource[];
	actions? : KalturaRuleAction[];
	messages? : KalturaAccessControlMessage[];
}


export class KalturaPlaybackContext extends KalturaObjectBase {

    sources : KalturaPlaybackSource[];
	actions : KalturaRuleAction[];
	messages : KalturaAccessControlMessage[];

    constructor(data? : KalturaPlaybackContextArgs)
    {
        super(data);
        if (typeof this.sources === 'undefined') this.sources = [];
		if (typeof this.actions === 'undefined') this.actions = [];
		if (typeof this.messages === 'undefined') this.messages = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackContext' },
				sources : { type : 'a', subTypeConstructor : KalturaPlaybackSource, subType : 'KalturaPlaybackSource' },
				actions : { type : 'a', subTypeConstructor : KalturaRuleAction, subType : 'KalturaRuleAction' },
				messages : { type : 'a', subTypeConstructor : KalturaAccessControlMessage, subType : 'KalturaAccessControlMessage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackContext',KalturaPlaybackContext);
