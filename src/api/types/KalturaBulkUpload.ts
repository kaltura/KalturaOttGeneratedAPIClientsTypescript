
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchUploadJobStatus } from './KalturaBatchUploadJobStatus';
import { KalturaBatchUploadJobAction } from './KalturaBatchUploadJobAction';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkUploadArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkUpload extends KalturaObjectBase {

    readonly id : number;
	readonly status : KalturaBatchUploadJobStatus;
	readonly createDate : number;
	readonly updateDate : number;
	readonly uploadTokenId : string;
	readonly action : KalturaBatchUploadJobAction;
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
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaBatchUploadJobStatus, subType : 'KalturaBatchUploadJobStatus' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				uploadTokenId : { type : 's', readOnly : true },
				action : { type : 'es', readOnly : true, subTypeConstructor : KalturaBatchUploadJobAction, subType : 'KalturaBatchUploadJobAction' },
				results : { type : 'a', readOnly : true, subTypeConstructor : KalturaBulkUploadResult, subType : 'KalturaBulkUploadResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkUpload',KalturaBulkUpload);
