import { news } from "@/utils/links";
import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  const featuredNews = news[0];
  const otherNews = news.slice(1);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-emerald-600">
            أخبار مركز شباب شرشيمة
          </p>

          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            آخر الأخبار
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            تابع أحدث أخبار مركز شباب شرشيمة والبطولات والأنشطة.
          </p>
        </div>

        {/* Featured News */}
        <div
          href={`/news/${featuredNews.id}`}
          className="group mb-12 grid overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg md:grid-cols-2"
        >
          <div className="h-64 overflow-hidden md:h-80">
            <img
              src={"/logoo.jpg"}
              alt={featuredNews.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:p-10">
            <span className="mb-4 w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
              خبر مميز
            </span>

            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {featuredNews.title}
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              {featuredNews.description}
            </p>

            <span className="mt-6 text-sm text-gray-400">
              {featuredNews.date}
            </span>

            <span className="mt-5 w-fit font-medium text-emerald-600 flex items-center gap-1">
              <span> اقرأ المزيد</span> <CircleChevronLeft />
            </span>
          </div>
        </div>

        {/* Latest News */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">أحدث الأخبار</h2>

          <span className="text-sm text-gray-500">{news.length} أخبار</span>
        </div>

        {/* News Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherNews.map((item) => (
            <div
              key={item.id}
              href={`/news/${item.id}`}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="mb-3 text-xs text-gray-400">{item.date}</p>

                <h3 className="line-clamp-2 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
                {/* 
                <div className="mt-5 text-sm font-medium text-emerald-600">
                  اقرأ المزيد ←
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
