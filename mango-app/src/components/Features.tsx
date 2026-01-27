import features from "../util/features";

export default function Feature() {
  return (
    <>
      <section className="flex flex-col items-center py-20">
        <section className=" bg-white w-[1700px] rounded-2xl overflow-hidden p-30 py-20 shadow-borderColor shadow-2xl">
          <h1 className=" text-3xl font-extrabold">Features</h1>
          {features.map((feature, index) => (
            <div key={index} className={feature.flex}>
              <div className="flex items-center gap-7">
                <img className=" object-cover" src={feature.img} alt="" />
                <h1 className="text-2xl font-extrabold">{feature.title}</h1>
              </div>
              <p className="pt-20 text-xl">{feature.description}</p>
            </div>
          ))}
        </section>
        <p className="mt-20 text-2xl font-bold">
          Ready to start productive with mango?{" "}
          <span className="text-highlight">Sign up</span>
        </p>
      </section>
    </>
  );
}
