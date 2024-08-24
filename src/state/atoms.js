import { atom } from 'recoil';
import initialData from '../data.json';

export const categoriesState = atom({
  key: 'categoriesState',
  default: initialData.categories,
});

export const searchState = atom({
  key: 'searchState',
  default: '',
});
