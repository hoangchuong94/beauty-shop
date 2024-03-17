import Background from "@/app/components/Background";
import Supplier from "@/app/components/supplier";
import Products from "@/app/components/list-products";

export default function Page() {
  return (
    <main className="bg-slate-500">
      <Background />
      <div className="min-h-screen bg-slate-200 py-5 text-center">
        <div className="px-5">
          <Supplier />
        </div>
        <div className="flex flex-col px-5 pb-8 pt-16">
          <h6 className="text-[#5d5b5b]">Popular Products</h6>
          <h2 className="text-3xl">Trending Now</h2>
        </div>
        <div className="px-4">
          <Products />
        </div>
      </div>
    </main>
  );
}
