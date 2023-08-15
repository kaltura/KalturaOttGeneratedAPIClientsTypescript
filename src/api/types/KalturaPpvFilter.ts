
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPpvFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
	couponGroupIdEqual? : number;
	alsoInactive? : boolean;
}


export class KalturaPpvFilter extends KalturaFilter {

    idIn : string;
	couponGroupIdEqual : number;
	alsoInactive : boolean;

    constructor(data? : KalturaPpvFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPpvFilter' },
				idIn : { type : 's' },
				couponGroupIdEqual : { type : 'n' },
				alsoInactive : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPpvFilter',KalturaPpvFilter);
