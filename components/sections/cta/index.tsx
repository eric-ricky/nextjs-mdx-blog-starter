import Image from 'next/image';

const CTA = () => {
  return (
    <section className="py-44 md:py-20 relative min-h-[40vh] ">
      <Image
        src="/images/bg.avif"
        alt="Call to action"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full container mx-auto flex flex-col justify-center px-4 md:px-10">
        <h5 className="text-2xl font-semibold w-full md:w-[32%] mb-4">
          Get all of our updates directly to your inbox. Sign up for our
          newsletter.
        </h5>
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="block bg-white rounded-md px-4 h-10 border-slate-200 border-2"
          />

          <button
            type="submit"
            className="rounded-md h-10 px-4 border-2 border-white text-white bg-pink-600"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
