
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSegmentationTypeFilter, KalturaBaseSegmentationTypeFilterArgs } from './KalturaBaseSegmentationTypeFilter';

export interface KalturaSegmentationTypeFilterArgs  extends KalturaBaseSegmentationTypeFilterArgs {
    idIn? : string;
	kSql? : string;
	nameContain? : string;
	assetUserRuleIdIn? : string;
}


export class KalturaSegmentationTypeFilter extends KalturaBaseSegmentationTypeFilter {

    idIn : string;
	kSql : string;
	nameContain : string;
	assetUserRuleIdIn : string;

    constructor(data? : KalturaSegmentationTypeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSegmentationTypeFilter' },
				idIn : { type : 's' },
				kSql : { type : 's' },
				nameContain : { type : 's' },
				assetUserRuleIdIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSegmentationTypeFilter',KalturaSegmentationTypeFilter);
