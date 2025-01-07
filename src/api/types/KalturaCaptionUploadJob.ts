
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCaptionUploadStatus } from './KalturaCaptionUploadStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCaptionUploadJobArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaCaptionUploadJob extends KalturaObjectBase {

    readonly id : number;
	readonly createDate : number;
	readonly updateDate : number;
	readonly fileName : string;
	readonly status : KalturaCaptionUploadStatus;
	readonly message : string;

    constructor(data? : KalturaCaptionUploadJobArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionUploadJob' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				fileName : { type : 's', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaCaptionUploadStatus, subType : 'KalturaCaptionUploadStatus' },
				message : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionUploadJob',KalturaCaptionUploadJob);
