
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSocialAction } from './KalturaSocialAction';
import { KalturaNetworkActionStatus } from './KalturaNetworkActionStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserSocialActionResponseArgs  extends KalturaObjectBaseArgs {
    socialAction? : KalturaSocialAction;
	failStatus? : KalturaNetworkActionStatus[];
}


export class KalturaUserSocialActionResponse extends KalturaObjectBase {

    socialAction : KalturaSocialAction;
	failStatus : KalturaNetworkActionStatus[];

    constructor(data? : KalturaUserSocialActionResponseArgs)
    {
        super(data);
        if (typeof this.failStatus === 'undefined') this.failStatus = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserSocialActionResponse' },
				socialAction : { type : 'o', subTypeConstructor : KalturaSocialAction, subType : 'KalturaSocialAction' },
				failStatus : { type : 'a', subTypeConstructor : KalturaNetworkActionStatus, subType : 'KalturaNetworkActionStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserSocialActionResponse',KalturaUserSocialActionResponse);
