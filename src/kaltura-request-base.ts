
import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';

export interface KalturaRequestBaseArgs  extends KalturaObjectBaseArgs {
    acceptedTypes? : KalturaObjectBase[];
	partnerId? : number;
	userId? : number;
	language? : string;
	currency? : string;
	ks? : string;
}


export class KalturaRequestBase extends KalturaObjectBase {

    acceptedTypes : KalturaObjectBase[];
	partnerId : number;
	userId : number;
	language : string;
	currency : string;
	ks : string;

    constructor(data : KalturaRequestBaseArgs)
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
                apiVersion : { type : 'c', default : '4.4.3.22880' },
				partnerId : { type : 'n' },
				userId : { type : 'n' },
				language : { type : 's' },
				currency : { type : 's' },
				ks : { type : 's' }
            }
        );
        return result;
    }
}

