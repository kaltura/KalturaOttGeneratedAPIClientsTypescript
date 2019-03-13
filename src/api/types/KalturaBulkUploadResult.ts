
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadResultStatus } from './KalturaBulkUploadResultStatus';
import { KalturaMessage } from './KalturaMessage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadResultArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUploadResult extends KalturaObjectBase {

    readonly objectId : number;
	readonly index : number;
	readonly bulkUploadId : number;
	readonly status : KalturaBulkUploadResultStatus;
	readonly errorCode : number;
	readonly errorMessage : string;
	readonly warnings : KalturaMessage[];

    constructor(data? : KalturaBulkUploadResultArgs)
    {
        super(data);
        if (typeof this.warnings === 'undefined') this.warnings = [];
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
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaBulkUploadResultStatus, subType : 'KalturaBulkUploadResultStatus' },
				errorCode : { type : 'n', readOnly : true },
				errorMessage : { type : 's', readOnly : true },
				warnings : { type : 'a', readOnly : true, subTypeConstructor : KalturaMessage, subType : 'KalturaMessage' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUploadResult',KalturaBulkUploadResult);
