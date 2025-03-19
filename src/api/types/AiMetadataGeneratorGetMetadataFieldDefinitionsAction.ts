
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetaFieldNameMap } from './KalturaMetaFieldNameMap';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AiMetadataGeneratorGetMetadataFieldDefinitionsActionArgs  extends KalturaRequestArgs {
    
}

/**
 * Build request payload for service 'aiMetadataGenerator' action 'getMetadataFieldDefinitions'.
 *
 * Usage: Get metadata mapping structure and available generated metadata fields
 *
 * Server response type:         KalturaMetaFieldNameMap
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AiMetadataGeneratorGetMetadataFieldDefinitionsAction extends KalturaRequest<KalturaMetaFieldNameMap> {

    

    constructor(data? : AiMetadataGeneratorGetMetadataFieldDefinitionsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMetaFieldNameMap', responseConstructor : KalturaMetaFieldNameMap  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'aimetadatagenerator' },
				action : { type : 'c', default : 'getMetadataFieldDefinitions' }
            }
        );
        return result;
    }
}

