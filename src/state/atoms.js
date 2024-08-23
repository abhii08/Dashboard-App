// src/state/atoms.js

import { atom } from 'recoil';
import initialData from '../data.json';

// Atom to store categories and widgets
export const categoriesState = atom({
  key: 'categoriesState',
  default: initialData.categories,
});

// Atom to store search term
export const searchState = atom({
  key: 'searchState',
  default: '',
});
