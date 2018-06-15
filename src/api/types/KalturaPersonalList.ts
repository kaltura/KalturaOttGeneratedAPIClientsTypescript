
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPersonalListArgs  extends KalturaObjectBaseArgs {
    name? : string;
	ksql? : string;
	partnerListType? : number;
}


export class KalturaPersonalList extends KalturaObjectBase {

    readonly id : number;
	name : string;
	readonly createDate : number;
	ksql : string;
	partnerListType : number;

    constructor(data? : KalturaPersonalListArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPersonalList' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				createDate : { type : 'n', readOnly : true },
				ksql : { type : 's' },
				partnerListType : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPersonalList',KalturaPersonalList);
