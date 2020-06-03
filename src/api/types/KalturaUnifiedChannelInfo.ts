
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUnifiedChannel, KalturaUnifiedChannelArgs } from './KalturaUnifiedChannel';

export interface KalturaUnifiedChannelInfoArgs  extends KalturaUnifiedChannelArgs {
    name? : string;
	startDateInSeconds? : number;
	endDateInSeconds? : number;
}


export class KalturaUnifiedChannelInfo extends KalturaUnifiedChannel {

    name : string;
	startDateInSeconds : number;
	endDateInSeconds : number;

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
				name : { type : 's' },
				startDateInSeconds : { type : 'n' },
				endDateInSeconds : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnifiedChannelInfo',KalturaUnifiedChannelInfo);
