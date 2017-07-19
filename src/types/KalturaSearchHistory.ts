
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchHistoryArgs  extends KalturaObjectBaseArgs {
    
}

/** 
* Search history info
**/
export class KalturaSearchHistory extends KalturaObjectBase {

    readonly id : string;
	readonly name : string;
	readonly filter : string;
	readonly language : string;
	readonly createdAt : number;
	readonly service : string;
	readonly action : string;
	readonly deviceId : string;

    constructor(data? : KalturaSearchHistoryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchHistory' },
				id : { type : 's', readOnly : true },
				name : { type : 's', readOnly : true },
				filter : { type : 's', readOnly : true },
				language : { type : 's', readOnly : true },
				createdAt : { type : 'n', readOnly : true },
				service : { type : 's', readOnly : true },
				action : { type : 's', readOnly : true },
				deviceId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchHistory',KalturaSearchHistory);
