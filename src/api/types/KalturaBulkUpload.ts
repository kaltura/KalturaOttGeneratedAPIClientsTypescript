
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBulkUploadJobStatus } from './KalturaBulkUploadJobStatus';
import { KalturaBulkUploadJobAction } from './KalturaBulkUploadJobAction';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUpload extends KalturaObjectBase {

    readonly id : number;
	readonly fileName : string;
	readonly status : KalturaBulkUploadJobStatus;
	readonly action : KalturaBulkUploadJobAction;
	readonly numOfObjects : number;
	readonly createDate : number;
	readonly updateDate : number;
	readonly results : KalturaBulkUploadResult[];

    constructor(data? : KalturaBulkUploadArgs)
    {
        super(data);
        if (typeof this.results === 'undefined') this.results = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkUpload' },
				id : { type : 'n', readOnly : true },
				fileName : { type : 's', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaBulkUploadJobStatus, subType : 'KalturaBulkUploadJobStatus' },
				action : { type : 'es', readOnly : true, subTypeConstructor : KalturaBulkUploadJobAction, subType : 'KalturaBulkUploadJobAction' },
				numOfObjects : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				results : { type : 'a', readOnly : true, subTypeConstructor : KalturaBulkUploadResult, subType : 'KalturaBulkUploadResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUpload',KalturaBulkUpload);
