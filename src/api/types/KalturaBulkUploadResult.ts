
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseStatus } from './KalturaResponseStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadResultArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUploadResult extends KalturaObjectBase {

    readonly objectId : number;
	readonly index : number;
	readonly bulkUploadId : number;
	readonly status : KalturaResponseStatus;

    constructor(data? : KalturaBulkUploadResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUploadResult' },
				objectId : { type : 'n', readOnly : true },
				index : { type : 'n', readOnly : true },
				bulkUploadId : { type : 'n', readOnly : true },
				status : { type : 'o', readOnly : true, subTypeConstructor : KalturaResponseStatus, subType : 'KalturaResponseStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResult',KalturaBulkUploadResult);
