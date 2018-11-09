import { action } from 'typesafe-actions';

import { MenuActionTypes, MenuSection } from './types';

export const setMenu = (menu: MenuSection) => action(MenuActionTypes.SET_MENU, menu);