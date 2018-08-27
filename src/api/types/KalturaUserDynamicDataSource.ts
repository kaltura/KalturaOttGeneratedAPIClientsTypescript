
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSegmentSource, KalturaSegmentSourceArgs } from './KalturaSegmentSource';

export interface KalturaUserDynamicDataSourceArgs  extends KalturaSegmentSourceArgs {
    field? : string;
}


export class KalturaUserDynamicDataSource extends KalturaSegmentSource {

    field : string;

    constructor(data? : KalturaUserDynamicDataSourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserDynamicDataSource' },
				field : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserDynamicDataSource',KalturaUserDynamicDataSource);
