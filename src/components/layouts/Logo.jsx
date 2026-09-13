import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex h-[70px] w-[100px] items-center justify-center sm:h-[80px] sm:w-[120px] lg:h-[100px] lg:w-[150px]">
      <Image
        src="/logoo.jpg"
        alt="Logo"
        width={120}
        height={120}
        className="h-auto w-[70px] object-contain sm:w-[80px] lg:w-[100px]"
        priority
      />
    </div>
  );
}
