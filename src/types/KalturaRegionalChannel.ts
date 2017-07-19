
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaRegionalChannelArgs  extends KalturaObjectBaseArgs {
    linearChannelId? : number;
	channelNumber? : number;
}


export class KalturaRegionalChannel extends KalturaObjectBase {

    linearChannelId : number;
	channelNumber : number;

    constructor(data? : KalturaRegionalChannelArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionalChannel' },
				linearChannelId : { type : 'n' },
				channelNumber : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionalChannel',KalturaRegionalChannel);
