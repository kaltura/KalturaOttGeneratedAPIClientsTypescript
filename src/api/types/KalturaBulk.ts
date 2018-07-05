
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulk extends KalturaObjectBase {

    readonly id : number;
	readonly status : KalturaBatchJobStatus;
	readonly createDate : number;
	readonly updateDate : number;

    constructor(data? : KalturaBulkArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulk' },
				id : { type : 'n', readOnly : true },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaBatchJobStatus, subType : 'KalturaBatchJobStatus' },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulk',KalturaBulk);
