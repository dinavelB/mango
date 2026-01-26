import picture from "../assets/picture.jpg"; // Import the image

export default function HeroSection() {
  return (
    <>
      <section className="flex justify-center py-40">
        <div className="flex gap-20">
          <div className="flex flex-col justify-center gap-10">
            <p className="text-xl">Be ultimately productive with</p>
            <h1 className=" font-mango text-5xl">mango</h1>
            <p className=" w-3xl text-2xl">
              Mango a high-performance productivity web app suite designed to
              automate the verification of remote work, with dual-interface
              approach (Web + Extension) to ensure seamless data
              continuity.{" "}
            </p>
            <div>
              <button className="px-10 py-3 rounded-xl bg-highlight text-white font-semibold text-xl">
                Try mango
              </button>
              <button className="px-10 py-3 text-xl">Learn more</button>
            </div>
          </div>
          <img className="object-cover w-2xl" src={picture} alt="" />
        </div>
      </section>
    </>
  );
}
