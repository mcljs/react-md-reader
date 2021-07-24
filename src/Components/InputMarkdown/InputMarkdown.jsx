import { ButtonBase, Grid, Typography, makeStyles } from '@material-ui/core';

const InputMarkdown = ({setFile}) => {

  const handleFile = (event) => {

    setFile({
      name: event.currentTarget.files[0].name,
      file: event.currentTarget.files[0],
    })
  };

	return(
		<ButtonBase
        variant="raised"
        component="label">
          <Grid container xs={12} justify='center'>
            <Grid container xs={12} justify='center'>
              <div>some svg</div>
            </Grid>
            <Grid container xs={12} justify='center'>
              <Typography 
              variant='h6' 
              display='inline-block'>
                subir archivo
              </Typography>
            </Grid> 
          </Grid> 
          <input
          type="file"
          accept='.md'
          onChange={handleFile}
          hidden
          />
        </ButtonBase>
	)
};
export default InputMarkdown