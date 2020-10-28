
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCrudObject, KalturaCrudObjectArgs } from './KalturaCrudObject';

export interface KalturaDynamicListArgs  extends KalturaCrudObjectArgs {
    name? : string;
}


export class KalturaDynamicList extends KalturaCrudObject {

    readonly id : number;
	readonly createDate : number;
	readonly updateDate : number;
	name : string;

    constructor(data? : KalturaDynamicListArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDynamicList' },
				id : { type : 'n', readOnly : true },
				createDate : { type : 'n', readOnly : true },
				updateDate : { type : 'n', readOnly : true },
				name : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDynamicList',KalturaDynamicList);
