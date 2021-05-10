
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUsageModule } from './KalturaUsageModule';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaUsageModuleListResponseArgs  extends KalturaListResponseArgs {
    objects? : KalturaUsageModule[];
}


export class KalturaUsageModuleListResponse extends KalturaListResponse {

    objects : KalturaUsageModule[];

    constructor(data? : KalturaUsageModuleListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaUsageModuleListResponse' },
				objects : { type : 'a', subTypeConstructor : KalturaUsageModule, subType : 'KalturaUsageModule' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUsageModuleListResponse',KalturaUsageModuleListResponse);
