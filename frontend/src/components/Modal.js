import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNotification } from '../redux/actions';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';

const ModalWindow = () => {
  const [openModal, setOpenModal] = useState(false);
  const notification = useSelector(state => state.notification);

  useEffect(() => {
    if (notification.title) {
      setOpenModal(true);
    } else {
      closeModal();
    }
  }, [notification]);

  const dispatch = useDispatch();

  const closeModal = () => {
    setOpenModal(false);
  };
  const onClose = () => {
    dispatch(removeNotification());
    setOpenModal(false);
  };

  return (
    <Modal isOpen={openModal} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        {notification.title && (
          <Alert
            status={'success'}
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <CloseButton
              alignSelf="flex-end"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              {notification.title}
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              {notification.description}
            </AlertDescription>
          </Alert>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
