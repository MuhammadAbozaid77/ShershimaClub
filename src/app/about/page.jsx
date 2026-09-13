import { Hammer, Clock3 } from "lucide-react";

export default function About() {
  return (
    <div className="flex min-h-[500px] items-center justify-center px-4">
      {" "}
      <div className="w-full max-w-lg text-center">
        {" "}
        {/* Icon */}{" "}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          {" "}
          <Hammer size={38} className="text-emerald-700" />{" "}
        </div>{" "}
        {/* Title */}{" "}
        <h1 className="text-3xl font-bold text-gray-900">
          {" "}
          الصفحة تحت الإنشاء{" "}
        </h1>{" "}
        {/* Description */}{" "}
        <p className="mt-4 leading-7 text-gray-500">
          {" "}
          نعمل حاليًا على تجهيز صفحة عنا لمعرفة معلومات عن مركز شباب شرشيمة
          والرؤية والرسالة الخاصة به، بالإضافة إلى عرض بعض الصور والفيديوهات
          التي توضح الأنشطة والفعاليات التي يقوم بها المركز.{" "}
        </p>{" "}
        {/* Status */}{" "}
        <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
          {" "}
          <Clock3 size={17} /> <span>سيتم إطلاقها قريبًا</span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
