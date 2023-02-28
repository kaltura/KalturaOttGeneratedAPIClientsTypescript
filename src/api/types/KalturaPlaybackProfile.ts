
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlaybackProfileArgs  extends KalturaObjectBaseArgs {
    name? : string;
	isActive? : boolean;
	adapterGrpcAddress? : string;
	adapterUrl? : string;
	settings? : string;
	systemName? : string;
}


export class KalturaPlaybackProfile extends KalturaObjectBase {

    readonly id : number;
	name : string;
	isActive : boolean;
	adapterGrpcAddress : string;
	adapterUrl : string;
	settings : string;
	systemName : string;
	readonly sharedSecret : string;

    constructor(data? : KalturaPlaybackProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlaybackProfile' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				isActive : { type : 'b' },
				adapterGrpcAddress : { type : 's' },
				adapterUrl : { type : 's' },
				settings : { type : 's' },
				systemName : { type : 's' },
				sharedSecret : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlaybackProfile',KalturaPlaybackProfile);
