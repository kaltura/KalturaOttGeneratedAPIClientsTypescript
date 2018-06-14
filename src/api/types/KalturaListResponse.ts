
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaListResponseArgs  extends KalturaObjectBaseArgs {
    totalCount? : number;
}


export class KalturaListResponse extends KalturaObjectBase {

    totalCount : number;

    constructor(data? : KalturaListResponseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaListResponse' },
				totalCount : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaListResponse',KalturaListResponse);
