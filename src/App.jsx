import { useState } from 'react';
import ShowMarkdown from './Components/ShowMarkdown';
import InputMarkdown from './Components/InputMarkdown';
import { Grid, Typography, makeStyles } from '@material-ui/core';
const App = () => {
  const [file, setFile] = useState(null);
  return (
    <Grid container item xs={12} justify='center'>
    {
      !file?
        <Grid container item xs={12} justify='center'>
          <InputMarkdown setFile={setFile} />
        </Grid>
      :
      <Grid container item xs={12} justify='center'>
        <ShowMarkdown file={file} />
      </Grid>
    }
    </Grid>
  );
}

export default App;
