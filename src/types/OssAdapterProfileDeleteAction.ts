
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileDeleteActionArgs  extends KalturaRequestArgs {
    ossAdapterId : number;
}

/** 
* Delete OSS adapter by OSS adapter id
**/
export class OssAdapterProfileDeleteAction extends KalturaRequest<boolean> {

    ossAdapterId : number;

    constructor(data : OssAdapterProfileDeleteActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ossadapterprofile' },
				action : { type : 'c', default : 'delete' },
				ossAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

