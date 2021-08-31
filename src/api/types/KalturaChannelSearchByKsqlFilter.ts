
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannelStruct } from './KalturaChannelStruct';
import { KalturaChannelsBaseFilter, KalturaChannelsBaseFilterArgs } from './KalturaChannelsBaseFilter';

export interface KalturaChannelSearchByKsqlFilterArgs  extends KalturaChannelsBaseFilterArgs {
    kSql? : string;
	channelStructEqual? : KalturaChannelStruct;
}


export class KalturaChannelSearchByKsqlFilter extends KalturaChannelsBaseFilter {

    kSql : string;
	channelStructEqual : KalturaChannelStruct;

    constructor(data? : KalturaChannelSearchByKsqlFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaChannelSearchByKsqlFilter' },
				kSql : { type : 's' },
				channelStructEqual : { type : 'es', subTypeConstructor : KalturaChannelStruct, subType : 'KalturaChannelStruct' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaChannelSearchByKsqlFilter',KalturaChannelSearchByKsqlFilter);
