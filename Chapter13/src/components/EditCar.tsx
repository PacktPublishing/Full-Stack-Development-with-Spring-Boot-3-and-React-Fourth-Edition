import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CarDialogContent from './CarDialogContent';
import { Car, CarResponse, CarEntry } from '../types';
import { updateCar } from '../api/carapi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type FormProps = {
  cardata: CarResponse;
}

function EditCar({ cardata }: FormProps) {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
  });

  const { mutate } = useMutation(updateCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: (err) => {
      console.error(err);
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
    setCar({
      brand: cardata.brand,
      model: cardata.model,
      color: cardata.color,
      registrationNumber: cardata.registrationNumber,
      modelYear: cardata.modelYear,
      price: cardata.price
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    const url = cardata._links.self.href;
    const carEntry: CarEntry = {car, url}
    mutate(carEntry);
    setCar({ brand: '', model: '', color: '', registrationNumber: '', modelYear: 0, price: 0 });    
    setOpen(false);
  }

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  return(
    <>
      <button onClick={handleClickOpen}>
        Edit
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange}/>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>    
    </>
  );
}

export default EditCar;