import React from 'react';
import {TextField, Button} from '@mui/material';

const TextArea = (props) => {
  return (
    <TextField id={props?.id} label={props?.label} variant={props?.variant} {...props} />
  )
}
export const ButtonArea = (props) => {
 return (
    <Button variant={props?.variant} {...props}>{props?.value}</Button>
 )
}

export default TextArea