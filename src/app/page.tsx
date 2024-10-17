import ProductCard from "@/Components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <main className="bg-slate-200 flex flex-col content-center items-center p-6">
        <section className="flex flex-col p-2 mx-[40%]">
          <input
          type="text"
          placeholder="Procure produtos..."
          className="p-2" />
          <span>Status text</span>
        </section>
        <section className="flex flex-wrap gap-4 max-w-[50%] justify-center">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
