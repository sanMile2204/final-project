import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store, { RootState, addDispatch } from "../store/store";

export const useSessionStorage = (sliceName: string) => {
    const dispatch: addDispatch  = useDispatch();
    const [state, setState] = useState(() => {
      const storedState = sessionStorage.getItem(sliceName);
      return storedState ? JSON.parse(storedState) : undefined;
    });
  
    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        const newState = useSelector(
            (state: RootState) => state.contacts.contacts
          );;
        if (newState !== state) {
          sessionStorage.setItem(sliceName, JSON.stringify(newState));
          setState(newState);
        }
      });
      return unsubscribe;
    }, [sliceName, state]);
  
    return [state, dispatch] as const;
  };