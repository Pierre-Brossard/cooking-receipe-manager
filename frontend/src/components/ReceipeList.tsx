import React, { useEffect, useState } from 'react';
import api from '../api';
import ReceipeCard, { type IReceipe } from './ReceipeCard';
import ReceipeForm from './forms/ReceipeForm';
import { Button, Modal, Box } from '@mui/material';

const ReceipeList = () => {
  const [receipes, setReceipes] = useState<IReceipe[]>([]);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  useEffect(() => {
    getReceipes();
  }, []);

  const handleModalStatus = () => {
    setModalStatus(!modalStatus);
  };

  const addReceipe = (receipe: IReceipe) => {
    setReceipes((prev) => [receipe, ...prev]);
  };

  const getReceipes = () => {
    api
      .get('api/receipes/')
      .then((res) => res.data)
      .then((data) => {
        setReceipes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteReceipe = (id: number) => {
    api
      .delete(`api/receipes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          getReceipes();
        } else {
          alert('failed to delete');
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 600,
    height: '80%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.default',
    boxShadow: 24,
    p: 5,
  };

  return (
    <>
      <h2>Receipes: </h2>
      <Button variant="outlined" color="primary" onClick={handleModalStatus}>
        Create a Receipe
      </Button>
      <Modal
        open={modalStatus}
        onClose={handleModalStatus}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <ReceipeForm
            addReceipe={addReceipe}
            handleModalStatus={handleModalStatus}
          />
          <Button
            variant="outlined"
            color="error"
            onClick={handleModalStatus}
            sx={{ mt: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
      {receipes.map((receipe, id: number) => (
        <ReceipeCard onDelete={deleteReceipe} receipe={receipe} key={id} />
      ))}
    </>
  );
};

export default ReceipeList;
