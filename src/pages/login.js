import Auth from "../components/Authentication";

export default function LoginPage() {
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return <Auth authType="login" onSubmit={onSubmitHandler} />;
}
