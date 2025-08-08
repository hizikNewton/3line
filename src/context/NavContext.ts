import { Dispatch, SetStateAction, createContext } from "react";

interface NavContextType {
  open: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextType>({
  open: false,
  toggle: () => {},
});
