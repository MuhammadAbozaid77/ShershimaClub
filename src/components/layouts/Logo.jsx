import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-[200px] h-[150px] flex justify-center items-center">
      <Image src="/logoo.jpg" alt="Logo" width={120} height={120} />
    </div>
  );
}
