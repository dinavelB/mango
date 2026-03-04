import Layout from "@/layouts-shadcn/sidebar-layout";

export default function Dashboard() {
  return (
    <Layout>
      <section className="w-full min-h-screen">
        <h1 className="text-3xl font-bold p-6">Dashboard</h1>
        <p className="px-6">Welcome to your dashboard</p>
      </section>
    </Layout>
  );
}
