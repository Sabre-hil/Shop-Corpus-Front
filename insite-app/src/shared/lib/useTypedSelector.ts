import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RooState } from '../../app/store/store';


export const useTypedSelector: TypedUseSelectorHook<RooState> = useSelector