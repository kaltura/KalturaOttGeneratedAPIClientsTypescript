
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUploadTokenStatus } from './KalturaUploadTokenStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUploadTokenArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaUploadToken extends KalturaObjectBase {

    readonly id : string;
	readonly status : KalturaUploadTokenStatus;
	readonly fileSize : number;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaUploadTokenArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadToken' },
				id : { type : 's', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaUploadTokenStatus, subType : 'KalturaUploadTokenStatus' },
				fileSize : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUploadToken',KalturaUploadToken);
