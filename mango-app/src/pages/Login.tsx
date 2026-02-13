import FormComponent from "../components/LoginForm";
import Nav from "../components/Nav";

export default function Login() {
  return (
    <section className=" bg-pattern-dot min-h-screen">
      <Nav />
      <FormComponent />
    </section>
  );
}
