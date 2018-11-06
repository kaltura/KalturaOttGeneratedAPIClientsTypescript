
import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaSkipOptions } from './types/KalturaSkipOptions';
import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';

export interface KalturaRequestOptionsArgs  extends KalturaObjectBaseArgs {
    acceptedTypes? : {new(...args: any[]) : KalturaObjectBase}[];
	partnerId? : number;
	userId? : number;
	language? : string;
	currency? : string;
	ks? : string;
	responseProfile? : KalturaBaseResponseProfile;
	abortAllOnError? : boolean;
	skipOnError? : KalturaSkipOptions;
}


export class KalturaRequestOptions extends KalturaObjectBase {

    acceptedTypes : {new(...args: any[]) : KalturaObjectBase}[];
	partnerId : number;
	userId : number;
	language : string;
	currency : string;
	ks : string;
	responseProfile : KalturaBaseResponseProfile;
	abortAllOnError : boolean;
	skipOnError : KalturaSkipOptions;

    constructor(data? : KalturaRequestOptionsArgs)
    {
        super(data);
        if (typeof this.acceptedTypes === 'undefined') this.acceptedTypes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                partnerId : { type : 'n' },
				userId : { type : 'n' },
				language : { type : 's' },
				currency : { type : 's' },
				ks : { type : 's' },
				responseProfile : { type : 'o', subTypeConstructor : KalturaBaseResponseProfile, subType : 'KalturaBaseResponseProfile' },
				abortAllOnError : { type : 'b' },
				skipOnError : { type : 'es', subTypeConstructor : KalturaSkipOptions, subType : 'KalturaSkipOptions' }
            }
        );
        return result;
    }
}
