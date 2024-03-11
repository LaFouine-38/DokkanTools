import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

const TestContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const TestPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
}));


export default function Test() {
  return (
    <TestContainer container spacing={2}>
      <TestPaper>Test Paper 1</TestPaper>
      <TestPaper>Test Paper 2</TestPaper>
      <Grid item xs={12} md={6}>
        <TestPaper>Test Paper 3</TestPaper>
      </Grid>
      <Grid item xs={12} md={6}>
        <TestPaper>Test Paper 4</TestPaper>
      </Grid>
    </TestContainer>
  );
};
