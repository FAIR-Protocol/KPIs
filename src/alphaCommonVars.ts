/*
 * Fair Protocol - KPIs
 * Copyright (C) 2023 Fair Protocol
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */

import {
  TAG_NAMES, 
  APP_NAME, 
  SCRIPT_INFERENCE_REQUEST, 
  MODEL_CREATION, 
  SCRIPT_CREATION, 
  REGISTER_OPERATION, 
  SCRIPT_INFERENCE_RESPONSE,
  CANCEL_OPERATION,
  INFERENCE_PAYMENT,
  SCRIPT_CREATION_PAYMENT,
  MODEL_CREATION_PAYMENT,
} from './constants'

import { fairWallets } from './commonVars';


export const tagsKpiUsers = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [SCRIPT_INFERENCE_REQUEST],
},];

export const tagsKpiUploadModels = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [MODEL_CREATION],
},];

export const tagsKpiUploadScripts = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [SCRIPT_CREATION],
},];

export const tagsKpiOperatorsRegistration = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [REGISTER_OPERATION],
},];

export const tagsKpiInferenceResponse = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [SCRIPT_INFERENCE_RESPONSE],
},];

export const tagsKpiInferenceResponseNFTS = [
  {
    name: TAG_NAMES.customAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [SCRIPT_INFERENCE_RESPONSE],
},];

export const tagsKpiOperatorCancel = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [CANCEL_OPERATION],
},];

export const tagsKpiInferencePayment = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [INFERENCE_PAYMENT],
},];

export const tagsKpiSciptPayment = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [SCRIPT_CREATION_PAYMENT],
},];

export const tagsKpiModelCreationPayment = [
  {
    name: TAG_NAMES.alphaAppName,
    values: [APP_NAME],
  },
  {
  name: TAG_NAMES.operationName,
  values: [MODEL_CREATION_PAYMENT],
},];


export const tagsToExclude = [
  {
    name: TAG_NAMES.alphaAppVersion,
    values: ['test'],
  },
  {
    name: TAG_NAMES.sequenceOwner,
    values: fairWallets,
  },
  ];

 export const tagsToExcludeForModels = [
  {
    name: TAG_NAMES.alphaAppVersion,
    values: ['0.1'],
  },
  {
    name: TAG_NAMES.alphaAppVersion,
    values: ['0.2'],
  },
  {
    name: TAG_NAMES.alphaAppVersion,
    values: ['Fair Protocol'],
  },
  {
    name: TAG_NAMES.modelName,
    values: ['test large file'],
  },
  {
    name: TAG_NAMES.modelName,
    values: ['asdas'],
  },
  ];


  