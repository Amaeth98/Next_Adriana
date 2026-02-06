'use client';

import { ReactNode, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ModalWProps = {
  triggerLabel: string;
  title: string;
  children: ReactNode;
  triggerVariant?: string;
};

export default function ModalW({
  triggerLabel,
  title,
  children,
  triggerVariant = 'outline-primary',
}: ModalWProps) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Button variant={triggerVariant} onClick={() => setShow(true)}>
        {triggerLabel}
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
