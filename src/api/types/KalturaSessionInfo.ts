
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSession, KalturaSessionArgs } from './KalturaSession';

export interface KalturaSessionInfoArgs  extends KalturaSessionArgs {
    
}


export class KalturaSessionInfo extends KalturaSession {

    

    constructor(data? : KalturaSessionInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSessionInfo',KalturaSessionInfo);
