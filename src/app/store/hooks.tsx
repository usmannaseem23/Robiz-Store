// hooks.ts
// "use client"
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

// Custom hook for dispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

// Custom hook for selector with generic type TSelected
export const useAppSelector = <TSelected,>(selector: (state: RootState) => TSelected): TSelected => 
  useSelector(selector);
