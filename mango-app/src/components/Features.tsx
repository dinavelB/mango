import features from "../util/features";

export default function Feature() {
  return (
    <>
      <section className="flex justify-center pt-20">
        <section className=" bg-white w-[1700px] rounded-2xl overflow-hidden p-10">
          <h1 className=" text-3xl font-extrabold">Features</h1>
          {features.map((feature, index) => (
            <div key={index} className="pt-20">
              <div className="flex items-center">
                <img className=" object-cover" src={feature.img} alt="" />
                <h1 className="">{feature.title}</h1>
              </div>
              <p className="pt-20 shadow-borderColor ">{feature.description}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
