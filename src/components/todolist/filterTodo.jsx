import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Paper } from '@mui/material';


function FilterTodo({dataTodo, onStatusChange, optionStatus }){

const CustomPaper = (props) => (
  <Paper
    {...props}
    sx={{
      '& .MuiAutocomplete-option': {
        fontSize: '0.75rem',
        minHeight: 'auto',
       lineHeight: 1,
      },
    }}
  />
);

  return (
    <div className='flex justify-end mb-2 text-xs'>
        <Stack spacing ={3} sx={{width: 300} } >
        <Autocomplete
          multiple
          id="tags-outlined"
          options ={optionStatus}
          value = {dataTodo.status}
          onChange={(event, newValue) => onStatusChange(newValue)}
          getOptionLabel={(option) => option}
          PaperComponent={CustomPaper}
          renderValue={(value, getTagProps) => 
            value.map((option, index)=> {
              const { key, ...tagProps} = getTagProps({index});
              return (
                <Chip 
                  variant="outlined" 
                  label={option} 
                  key={key} 
                  {...tagProps}
                  sx={{
                    '& .MuiAutocomplete-option': {
                      fontSize: '0.5rem', // Tailwind's text-xs size approx
                    },
                  }}
                />
              );
            })
          }
          renderInput={(params)=> (
            <TextField
            {...params}
            variant="standard"
            placeholder="Status"
            sx={{
              '& .MuiInputBase-input': {
                fontSize: '0.75rem', // Tailwind text-xs approx
              }
            }}
            />
          )}
        >
        </Autocomplete> 
      </Stack>   
    </div>
  );
}

export default FilterTodo;