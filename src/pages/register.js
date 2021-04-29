import Auth from "../components/Authentication";

export default function RegisterPage() {
  const onSubmitHandler = (values) => {
    console.log(values);
  };

  return <Auth authType="register" onSubmit={onSubmitHandler} />;
}
