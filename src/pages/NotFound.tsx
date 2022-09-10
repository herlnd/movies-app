import Hero from "../components/Layout/Hero";
import Layout from "../components/Layout/Layout";
import { SadIcon } from "../components/Icons";

const NotFound = () => {
  return (
    <Layout>
      <Hero>
        <div className="flex flex-col gap-8 items-center justify-center text-6xl text-slate-100 font-bold">
          <p>Page not found</p>
          <SadIcon iconStyle={"w-32 h32"} />
        </div>
      </Hero>
    </Layout>
  );
};

export default NotFound;
