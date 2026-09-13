import Image from "next/image";

export default function MainLogo() {
  return (
    <div className="mt-[20px]  bg-white border border-gray-300   p-4 flex-col rounded-lg overflow-hidden shadow-md flex justify-center items-center">
      <Image src="/logoo.jpg" alt="Main Logo" width={300} height={300} />
      <h1 className="text-red-600 font-semibold text-[20px]">
        إنتخابات الجمعية العمومية 2026
      </h1>
      <h1 className="text-emerald-600  font-semibold text-[18px]">
        {" "}
        مجلس إدارة مركز شباب شرشيمة{" "}
      </h1>
    </div>
  );
}
