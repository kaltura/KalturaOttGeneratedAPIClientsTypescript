
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWatchStatus } from './KalturaWatchStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaAssetHistoryFilterArgs  extends KalturaFilterArgs {
    typeIn? : string;
	assetIdIn? : string;
	statusEqual? : KalturaWatchStatus;
	daysLessThanOrEqual? : number;
	kSql? : string;
}


export class KalturaAssetHistoryFilter extends KalturaFilter {

    typeIn : string;
	assetIdIn : string;
	statusEqual : KalturaWatchStatus;
	daysLessThanOrEqual : number;
	kSql : string;

    constructor(data? : KalturaAssetHistoryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetHistoryFilter' },
				typeIn : { type : 's' },
				assetIdIn : { type : 's' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaWatchStatus, subType : 'KalturaWatchStatus' },
				daysLessThanOrEqual : { type : 'n' },
				kSql : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetHistoryFilter',KalturaAssetHistoryFilter);
