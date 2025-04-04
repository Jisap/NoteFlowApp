import { createContext, useContext, useState } from "react";


const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState("");

  return (
    <ModalContext.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);