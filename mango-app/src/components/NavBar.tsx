import "../styles/index.css";

export default function NavBar() {
  return (
    <>
      <nav className="">
        <section className="flex justify-between p-6 px-30 border-borderColor border-b-1 bg-white">
          <h1 className=" font-mango text-3xl">mango</h1>
          <div className=" p-0 flex gap-10">
            <button className="px-10 p-2 text-center bg-muted rounded-xl text-xl">
              Login
            </button>
            <button className="px-10 p-2 text-center bg-highlight rounded-xl text-white text-xl">
              Sign up
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}
