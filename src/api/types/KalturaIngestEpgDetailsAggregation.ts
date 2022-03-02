
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaChannelAggregatedIngestInfo } from './KalturaChannelAggregatedIngestInfo';
import { KalturaDateAggregatedIngestInfo } from './KalturaDateAggregatedIngestInfo';
import { KalturaAggregatedIngestInfo } from './KalturaAggregatedIngestInfo';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaIngestEpgDetailsAggregationArgs  extends KalturaObjectBaseArgs {
    linearChannels? : KalturaChannelAggregatedIngestInfo[];
	dates? : KalturaDateAggregatedIngestInfo[];
	all? : KalturaAggregatedIngestInfo;
}


export class KalturaIngestEpgDetailsAggregation extends KalturaObjectBase {

    linearChannels : KalturaChannelAggregatedIngestInfo[];
	dates : KalturaDateAggregatedIngestInfo[];
	all : KalturaAggregatedIngestInfo;

    constructor(data? : KalturaIngestEpgDetailsAggregationArgs)
    {
        super(data);
        if (typeof this.linearChannels === 'undefined') this.linearChannels = [];
		if (typeof this.dates === 'undefined') this.dates = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIngestEpgDetailsAggregation' },
				linearChannels : { type : 'a', subTypeConstructor : KalturaChannelAggregatedIngestInfo, subType : 'KalturaChannelAggregatedIngestInfo' },
				dates : { type : 'a', subTypeConstructor : KalturaDateAggregatedIngestInfo, subType : 'KalturaDateAggregatedIngestInfo' },
				all : { type : 'o', subTypeConstructor : KalturaAggregatedIngestInfo, subType : 'KalturaAggregatedIngestInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIngestEpgDetailsAggregation',KalturaIngestEpgDetailsAggregation);
