
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserLogArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaUserLog extends KalturaObjectBase {

    readonly id : number;
	readonly createDate : number;
	readonly userId : number;
	readonly message : string;

    constructor(data? : KalturaUserLogArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserLog' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				userId : { type : 'n', readOnly : true },
				message : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserLog',KalturaUserLog);
