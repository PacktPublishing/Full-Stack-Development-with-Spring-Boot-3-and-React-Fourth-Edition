import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddItem(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    product: '',
    amount: ''
  });
  
  const handleOpen = () => {
    setOpen(true);
  }
      
  const handleClose = () => {
    setOpen(false);
  }

  const handleChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value})
  }
  
  const addItem = () => {
    props.addItem(item);
    setItem({ product: '', amount: '' });
    handleClose();
  }    
  
  return(
    <>
      <Button onClick={handleOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
        <TextField value={item.product} margin="dense"
          onChange={e => setItem({ ...item, product: e.target.value })} 
          label="Product" fullWidth />
        <TextField value={item.amount} margin="dense"
          onChange={ e => setItem({ ...item, amount: e.target.value })}
          label="Amount" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addItem}>
            Add
          </Button>
        </DialogActions>
      </Dialog>    
    </>
  );
}

export default AddItem;