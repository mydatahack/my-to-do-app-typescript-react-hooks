import { initialMtd } from './initialMtd'
import {
  IListData,
  ICurrentData,
  IUiData
} from '../types/models'

export const initialStateMtd: Array<IListData> = initialMtd

export const initialStateCurrent: ICurrentData = {
  currentListName: 'Personal',
  currentCategoryName: 'All categories',
  currentFieldName: 'To do',
  currentTask: '',
  currentFieldIndex: 0,
  taskSortOrder: 'desc'
}

export const initialStateUi: IUiData = {
  listMenu: false,
  addList: false,
  deleteListConfirm: false,
  addCategoryMenu: false,
  addCategory: false,
  deleteCategory: false,
  detailsPage: false,
  editTask: false,
  addTask: false,
  deleteAllMenu: false,
  deleteAllConfirm: false,
  backgroundDiv: false,
  backgroundDivTop: false
}
