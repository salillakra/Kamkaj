import Image from "next/image";

const BrandHead = () => {
  return (
    <div className="flex items-center justify-center absolute top-2 left-2">
      <Image
        className=" scale-150"
        src="/BrandLogo.svg"
        height={100}
        alt="brand logo"
        width={100}
      />
      <h1 className="text-3xl font-bold tracking-tighter">KamKaj</h1>
    </div>
  );
};

export default BrandHead;
