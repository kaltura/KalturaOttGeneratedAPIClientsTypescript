
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegionalChannel, KalturaRegionalChannelArgs } from './KalturaRegionalChannel';

export interface KalturaRegionalChannelMultiLcnsArgs  extends KalturaRegionalChannelArgs {
    lcns? : string;
}


export class KalturaRegionalChannelMultiLcns extends KalturaRegionalChannel {

    lcns : string;

    constructor(data? : KalturaRegionalChannelMultiLcnsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionalChannelMultiLcns' },
				lcns : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionalChannelMultiLcns',KalturaRegionalChannelMultiLcns);
