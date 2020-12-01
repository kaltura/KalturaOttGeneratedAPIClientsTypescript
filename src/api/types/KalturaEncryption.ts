
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEncryptionType } from './KalturaEncryptionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEncryptionArgs  extends KalturaObjectBaseArgs {
    encryptionType? : KalturaEncryptionType;
}


export class KalturaEncryption extends KalturaObjectBase {

    encryptionType : KalturaEncryptionType;

    constructor(data? : KalturaEncryptionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEncryption' },
				encryptionType : { type : 'es', subTypeConstructor : KalturaEncryptionType, subType : 'KalturaEncryptionType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEncryption',KalturaEncryption);
