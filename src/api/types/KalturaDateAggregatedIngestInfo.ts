
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAggregatedIngestInfo } from './KalturaAggregatedIngestInfo';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDateAggregatedIngestInfoArgs  extends KalturaObjectBaseArgs {
    date? : number;
	aggregatedErrors? : KalturaAggregatedIngestInfo;
}


export class KalturaDateAggregatedIngestInfo extends KalturaObjectBase {

    date : number;
	aggregatedErrors : KalturaAggregatedIngestInfo;

    constructor(data? : KalturaDateAggregatedIngestInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDateAggregatedIngestInfo' },
				date : { type : 'n' },
				aggregatedErrors : { type : 'o', subTypeConstructor : KalturaAggregatedIngestInfo, subType : 'KalturaAggregatedIngestInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDateAggregatedIngestInfo',KalturaDateAggregatedIngestInfo);
