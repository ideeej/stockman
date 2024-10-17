import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="
        flex flex-col
        border-black border-solid border-2 rounded-lg
        p-3
        transition-all
        hover:scale-105
        hover:cursor-pointer
        active:scale-100
        active:border-slate-500">
        <Image className="self-center" src="https://placehold.co/96" alt="" unoptimized  width={96} height={96}/>
        <h1 className="font-size-sm">Refrigerante Pepsi 2L</h1>
        <p className="">R$ 6,99</p>
    </div>
  );
}
