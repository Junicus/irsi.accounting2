import { action } from 'typesafe-actions';

import { LedgerConvertActionsTypes } from './types';

export const convertFile = (data: any) => action(LedgerConvertActionsTypes.CONVERT_LEDGER, data);
