/**
 * FlowAccount Business API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Document } from './document';
import { SimpleDocumentAllOf } from './simpleDocumentAllOf';
import { SimpleProductItem } from './simpleProductItem';
import { UpgradeDocument } from './upgradeDocument';

export class SimpleDocument {
    'recordId'?: number;
    'contactCode'?: string | null;
    'contactName'?: string | null;
    'contactAddress'?: string | null;
    'contactTaxId'?: string | null;
    'contactBranch'?: string | null;
    'contactPerson'?: string | null;
    'contactEmail'?: string | null;
    'contactNumber'?: string | null;
    'contactZipCode'?: string | null;
    'contactGroup'?: number;
    'publishedOn'?: Date;
    'creditType'?: number;
    'creditDays'?: number;
    'dueDate'?: Date;
    'salesName'?: string | null;
    'projectName'?: string | null;
    'reference'?: string | null;
    'isVatInclusive'?: boolean;
    'useReceiptDeduction'?: boolean;
    'subTotal'?: number;
    'discountPercentage'?: number;
    'discountAmount'?: number;
    'totalAfterDiscount'?: number;
    'isVat'?: boolean;
    'vatAmount'?: number;
    'grandTotal'?: number;
    'documentShowWithholdingTax'?: boolean;
    'documentWithholdingTaxPercentage'?: number;
    'documentWithholdingTaxAmount'?: number;
    'documentDeductionType'?: number;
    'documentDeductionAmount'?: number;
    'remarks'?: string | null;
    'internalNotes'?: string | null;
    'showSignatureOrStamp'?: boolean;
    'documentStructureType'?: string | null;
    'items'?: Array<SimpleProductItem> | null;
    'documentReference'?: Array<UpgradeDocument> | null;
    'exemptAmount'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recordId",
            "baseName": "recordId",
            "type": "number"
        },
        {
            "name": "contactCode",
            "baseName": "contactCode",
            "type": "string"
        },
        {
            "name": "contactName",
            "baseName": "contactName",
            "type": "string"
        },
        {
            "name": "contactAddress",
            "baseName": "contactAddress",
            "type": "string"
        },
        {
            "name": "contactTaxId",
            "baseName": "contactTaxId",
            "type": "string"
        },
        {
            "name": "contactBranch",
            "baseName": "contactBranch",
            "type": "string"
        },
        {
            "name": "contactPerson",
            "baseName": "contactPerson",
            "type": "string"
        },
        {
            "name": "contactEmail",
            "baseName": "contactEmail",
            "type": "string"
        },
        {
            "name": "contactNumber",
            "baseName": "contactNumber",
            "type": "string"
        },
        {
            "name": "contactZipCode",
            "baseName": "contactZipCode",
            "type": "string"
        },
        {
            "name": "contactGroup",
            "baseName": "contactGroup",
            "type": "number"
        },
        {
            "name": "publishedOn",
            "baseName": "publishedOn",
            "type": "Date"
        },
        {
            "name": "creditType",
            "baseName": "creditType",
            "type": "number"
        },
        {
            "name": "creditDays",
            "baseName": "creditDays",
            "type": "number"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "Date"
        },
        {
            "name": "salesName",
            "baseName": "salesName",
            "type": "string"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "isVatInclusive",
            "baseName": "isVatInclusive",
            "type": "boolean"
        },
        {
            "name": "useReceiptDeduction",
            "baseName": "useReceiptDeduction",
            "type": "boolean"
        },
        {
            "name": "subTotal",
            "baseName": "subTotal",
            "type": "number"
        },
        {
            "name": "discountPercentage",
            "baseName": "discountPercentage",
            "type": "number"
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "number"
        },
        {
            "name": "totalAfterDiscount",
            "baseName": "totalAfterDiscount",
            "type": "number"
        },
        {
            "name": "isVat",
            "baseName": "isVat",
            "type": "boolean"
        },
        {
            "name": "vatAmount",
            "baseName": "vatAmount",
            "type": "number"
        },
        {
            "name": "grandTotal",
            "baseName": "grandTotal",
            "type": "number"
        },
        {
            "name": "documentShowWithholdingTax",
            "baseName": "documentShowWithholdingTax",
            "type": "boolean"
        },
        {
            "name": "documentWithholdingTaxPercentage",
            "baseName": "documentWithholdingTaxPercentage",
            "type": "number"
        },
        {
            "name": "documentWithholdingTaxAmount",
            "baseName": "documentWithholdingTaxAmount",
            "type": "number"
        },
        {
            "name": "documentDeductionType",
            "baseName": "documentDeductionType",
            "type": "number"
        },
        {
            "name": "documentDeductionAmount",
            "baseName": "documentDeductionAmount",
            "type": "number"
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string"
        },
        {
            "name": "internalNotes",
            "baseName": "internalNotes",
            "type": "string"
        },
        {
            "name": "showSignatureOrStamp",
            "baseName": "showSignatureOrStamp",
            "type": "boolean"
        },
        {
            "name": "documentStructureType",
            "baseName": "documentStructureType",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<SimpleProductItem>"
        },
        {
            "name": "documentReference",
            "baseName": "documentReference",
            "type": "Array<UpgradeDocument>"
        },
        {
            "name": "exemptAmount",
            "baseName": "exemptAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SimpleDocument.attributeTypeMap;
    }
}

