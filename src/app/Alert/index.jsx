import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Index({severity,message}) {

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert style={{marginBottom:'9px'}} variant="filled" severity={severity}>
            {message}
          </Alert>
          {/* <Alert variant="filled" severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert variant="filled" severity="info">
            This is an info alert — check it out!
          </Alert>
          <Alert variant="filled" severity="success">
            This is a success alert — check it out!
          </Alert> */}
        </Stack>
      );
}

export default  Index


