
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaOSSAdapterProfile } from './KalturaOSSAdapterProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface OssAdapterProfileGenerateSharedSecretActionArgs  extends KalturaRequestArgs {
    ossAdapterId : number;
}

/** 
* Generate oss adapter shared secret
**/
export class OssAdapterProfileGenerateSharedSecretAction extends KalturaRequest<KalturaOSSAdapterProfile> {

    ossAdapterId : number;

    constructor(data : OssAdapterProfileGenerateSharedSecretActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaOSSAdapterProfile', responseConstructor : KalturaOSSAdapterProfile  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ossadapterprofile' },
				action : { type : 'c', default : 'generateSharedSecret' },
				ossAdapterId : { type : 'n' }
            }
        );
        return result;
    }
}

