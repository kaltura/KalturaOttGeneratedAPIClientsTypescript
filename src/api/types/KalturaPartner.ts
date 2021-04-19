
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerArgs  extends KalturaObjectBaseArgs {
    id? : number;
	name? : string;
	creatDate? : number;
	updateDate? : number;
}


export class KalturaPartner extends KalturaObjectBase {

    id : number;
	name : string;
	creatDate : number;
	updateDate : number;

    constructor(data? : KalturaPartnerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartner' },
				id : { type : 'n' },
				name : { type : 's' },
				creatDate : { type : 'n' },
				updateDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartner',KalturaPartner);
