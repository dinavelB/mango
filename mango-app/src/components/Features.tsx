import features from "../util/features";

export default function Feature() {
  return (
    <>
      <section>
        <section className="">
          <h1>Features</h1>
          {features.map((feature, index) => (
            <div key={index}>
              <div>
                <img src={feature.img} alt="" />
                <h1>{feature.title}</h1>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
