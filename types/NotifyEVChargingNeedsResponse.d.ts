/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Returns whether the CSMS has been able to process the message successfully. It does not imply that the evChargingNeeds can be met with the current charging profile.
 *
 */
export type NotifyEVChargingNeedsStatusEnumType = "Accepted" | "Rejected" | "Processing";

export interface UrnOCPPCp220203NotifyEVChargingNeedsResponse {
  customData?: CustomDataType;
  status: NotifyEVChargingNeedsStatusEnumType;
  statusInfo?: StatusInfoType;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
/**
 * Element providing more information about the status.
 *
 */
export interface StatusInfoType {
  customData?: CustomDataType;
  /**
   * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
   *
   */
  reasonCode: string;
  /**
   * Additional text to provide detailed information.
   *
   */
  additionalInfo?: string;
}
