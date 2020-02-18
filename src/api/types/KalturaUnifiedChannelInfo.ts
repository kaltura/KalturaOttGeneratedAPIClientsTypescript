
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUnifiedChannel, KalturaUnifiedChannelArgs } from './KalturaUnifiedChannel';

export interface KalturaUnifiedChannelInfoArgs  extends KalturaUnifiedChannelArgs {
    name? : string;
}


export class KalturaUnifiedChannelInfo extends KalturaUnifiedChannel {

    name : string;

    constructor(data? : KalturaUnifiedChannelInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnifiedChannelInfo' },
				name : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnifiedChannelInfo',KalturaUnifiedChannelInfo);
