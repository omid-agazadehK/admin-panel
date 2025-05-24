import { createContext, useState } from "react";
export const ModalContext = createContext();
function ModalProvider({ children }) {
  const [modalType, setModalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (type, item = null) => {
    setModalType(type);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedItem(null);
  };
  return (
    <ModalContext.Provider
      value={{ modalType, selectedItem, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
