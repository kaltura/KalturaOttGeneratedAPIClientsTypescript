
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPasswordPolicy } from './KalturaPasswordPolicy';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaPasswordPolicyListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaPasswordPolicy[];
}


export class KalturaPasswordPolicyListResponse extends KalturaListResponse {

    objects : KalturaPasswordPolicy[];

    constructor(data? : KalturaPasswordPolicyListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPasswordPolicyListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaPasswordPolicy, subType : 'KalturaPasswordPolicy' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPasswordPolicyListResponse',KalturaPasswordPolicyListResponse);
