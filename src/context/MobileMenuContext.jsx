import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext();

export const MobileMenuContextProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenuContext = () => useContext(MobileMenuContext);