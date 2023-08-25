import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setDialougOpen } from '../../redux/dialogSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { userRegister } from '../../redux/userSlice';
import { calculateAge } from '../../util/calculateAge';

export interface formValues {
  name: string;
  email: string;
  pincode: string;
  city: string;
  dob: string;
}

export default function UserRegisterComponent() {
  const dispatch = useDispatch();
  const [inputType, setInputType] = React.useState('text');
  const { isOpen } = useSelector((state: RootState) => state.dialog);
  const initialValues: formValues = {
    name: '',
    email: '',
    pincode: '',
    city: '',
    dob: '',
  };

  const { allUser } = useSelector((state: RootState) => state.users);
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is a required field')
      .min(2, 'Name is too Short!')
      .max(25, 'Name is too Long!'),
    email: yup
      .string()
      .required('Email is a required field')
      .email('Invalid email')
      .test('valid-email', 'Email already exists', (email) => {
        let users = allUser.find((user) => user.email === email);
        if (!users) return true;
        return Object.keys(users).length === 0 ? true : false;
      }),
    pincode: yup
      .string()
      .required('Pincode is a required field')
      .matches(/^[0-9]+$/, 'Pincode must be only digits')
      .min(6, 'Pincode must be exactly 6 digits')
      .max(6, 'Pincode must be exactly 6 digits'),
    dob: yup
      .date(),
      // .required('Date of Birth is a required field')
      // .test('valid-age', 'Should be 18 years old', (date) =>
      //   calculateAge(date)
      // ),
    city: yup.string().required('City is a required field'),
  });

  const handleRegister = () => {
    dispatch(userRegister(formik.values));
    handleClose();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleRegister,
    validateOnChange: false,
    validateOnBlur: false,
  });

  const handleClose = () => {
    formik.resetForm();
    dispatch(setDialougOpen());
  };

  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth={'xs'} open={isOpen} onClose={handleClose}>
        <DialogTitle>User Registration</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component='form'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
              minWidth: 350,
            }}
          >
            <FormControl sx={{ mt: 2 }}>
              <TextField
                label='Name'
                helperText={formik.errors.name}
                error={!!formik.errors.name}
                fullWidth
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                label='Email'
                helperText={formik.errors.email}
                error={!!formik.errors.email}
                fullWidth
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                helperText={formik.errors.dob}
                error={!!formik.errors.dob}
                label='Date of Birth'
                fullWidth
                name='dob'
                type={inputType}
                onBlur={() => setInputType('text')}
                onClick={() => setInputType('date')}
                value={formik.values.dob}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                label='City'
                helperText={formik.errors.city}
                error={!!formik.errors.city}
                fullWidth
                name='city'
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                label='Pincode'
                helperText={formik.errors.pincode}
                error={!!formik.errors.pincode}
                fullWidth
                name='pincode'
                onChange={formik.handleChange}
                value={formik.values.pincode}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{ m: 2, mt: 0 }}>
          <Button variant='outlined' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant='contained'
            autoFocus
            type='submit'
            onClick={() => formik.handleSubmit()}
          >
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
