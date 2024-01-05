/* eslint-disable react/prop-types */
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import PrimaryButton from "../Buttons/Button";

function EditProfileModal({ isOpen, onClose, overlay, modalTitle, modalContent }) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
      {overlay}
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        {modalContent}
        </ModalBody>
        <ModalFooter>
          <PrimaryButton title="Update Profile" h="40px" w="200px" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditProfileModal;
