
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRegionChannelNumber, KalturaRegionChannelNumberArgs } from './KalturaRegionChannelNumber';

export interface KalturaRegionChannelNumberMultiLcnsArgs  extends KalturaRegionChannelNumberArgs {
    lcns? : string;
}


export class KalturaRegionChannelNumberMultiLcns extends KalturaRegionChannelNumber {

    lcns : string;

    constructor(data? : KalturaRegionChannelNumberMultiLcnsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionChannelNumberMultiLcns' },
				lcns : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRegionChannelNumberMultiLcns',KalturaRegionChannelNumberMultiLcns);
