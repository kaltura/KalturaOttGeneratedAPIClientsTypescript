
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaAccessControlMessage } from './KalturaAccessControlMessage';
import { KalturaCaptionPlaybackPluginData } from './KalturaCaptionPlaybackPluginData';
import { KalturaPlaybackPluginData } from './KalturaPlaybackPluginData';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackContextArgs  extends KalturaObjectBaseArgs {
    sources? : KalturaPlaybackSource[];
	actions? : KalturaRuleAction[];
	messages? : KalturaAccessControlMessage[];
	playbackCaptions? : KalturaCaptionPlaybackPluginData[];
	plugins? : KalturaPlaybackPluginData[];
}


export class KalturaPlaybackContext extends KalturaObjectBase {

    sources : KalturaPlaybackSource[];
	actions : KalturaRuleAction[];
	messages : KalturaAccessControlMessage[];
	playbackCaptions : KalturaCaptionPlaybackPluginData[];
	plugins : KalturaPlaybackPluginData[];

    constructor(data? : KalturaPlaybackContextArgs)
    {
        super(data);
        if (typeof this.sources === 'undefined') this.sources = [];
		if (typeof this.actions === 'undefined') this.actions = [];
		if (typeof this.messages === 'undefined') this.messages = [];
		if (typeof this.playbackCaptions === 'undefined') this.playbackCaptions = [];
		if (typeof this.plugins === 'undefined') this.plugins = [];
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
				messages : { type : 'a', subTypeConstructor : KalturaAccessControlMessage, subType : 'KalturaAccessControlMessage' },
				playbackCaptions : { type : 'a', subTypeConstructor : KalturaCaptionPlaybackPluginData, subType : 'KalturaCaptionPlaybackPluginData' },
				plugins : { type : 'a', subTypeConstructor : KalturaPlaybackPluginData, subType : 'KalturaPlaybackPluginData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackContext',KalturaPlaybackContext);
