import { withFormik, FormikProps, Form, Field } from 'formik';
import logo from '../../assets/b2bit-logo.png'

interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { isSubmitting } = props;
  return (
    <Form className='flex flex-col w-[438px] h-[534px] bg-white-1 shadow-form_box_shadow rounded-[18px] items-center'>
      <img className='self-center mt-[55px] mb-[34px]' src={logo} width={295} />

      <div className='flex flex-col w-[385px]'>
        <label className='font-bold text-lg mb-[9px]' htmlFor="email">E-mail</label>
        <Field className='bg-white-3 mb-[27px] p-4 rounded-[9px]' placeholder="@gmail.com" type="email" name="email" required />

        <label className='font-bold text-lg' htmlFor="password">Password</label>
        <Field className='bg-white-3 mb-[36px] p-4 rounded-[9px]' placeholder="****************" type="password" name="password" required />

        <button className='bg-blue-2 text-white-1 text-lg py-[15px] rounded-[9px]' type="submit" disabled={isSubmitting}>
          Sign In
        </button>
      </div>
    </Form>
  );
};

interface MyFormProps {
  initialEmail: string;
  message: string;
}

export const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  handleSubmit: async values => {
    fetch("https://api.homologation.cliqdrive.com.br/auth/login/", {
      method: "POST",
      headers: {
        "Accept": "application/json;version=v1_web",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(response => {
      console.log(response.json())
    })
    
  }
})(InnerForm);
