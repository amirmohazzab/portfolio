import axios from 'axios';
import { toast } from "react-toastify";
import {
  TextField,
  InputAdornment,
  CardActions,
  Button,
  Grid,
  CardContent,
} from "@mui/material";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../validations/contactValidation";

const ContactForm = () => {


  const handleSubmit = async (values) => {
    try {
      const { status } = await axios.post("http://localhost:4000/api/register", values);

      if (status === 200) {
        toast.success("email was successfully sent", {
          position: "top-right",
          closeOnClick: true})
      }

    } catch (err) {
      console.log(err.message);
    }
  };

  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: ""
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values, {resetForm}) => {
      console.log("Form Values: ", values);
      handleSubmit(values);
	  resetForm({ values: '' });
    },
    validationSchema: contactValidationSchema,
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container>
          <Grid xs={12}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="Fullname"
                  name="fullname"
                  variant="outlined"
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="Email"
                  name="email"
                  variant="outlined"
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject
                  )}
                  value={formik.values?.subject}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubjectRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  size="small"
                  color="warning"
                  label="Message"
                  name="message"
                  variant="outlined"
                  helperText={
                    formik.touched.message ? formik.errors.message : null
                  }
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          alignItems: "start",
          flexDirection: "coloumn",
          mx: "auto",
          paddingRight: 2,
          paddingLeft: 0
        }}
      >
        <Button
          type="submit"
          color="success"
          variant="contained"
          fullWidth
          sx={{mx: "auto"}}
        >
          Send
        </Button>
      </CardActions>
    </form>
  );
};

export default ContactForm;
