"use client";
import { categories, playersByCategory } from "@/utils/links";
import { useState } from "react";

export default function PlayersPage() {
  const [selectedCategory, setSelectedCategory] = useState("first-team");

  const filteredPlayers = playersByCategory.filter(
    (player) => player.category === selectedCategory,
  );

  return (
    <div className="p-6">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">اللاعبين المسجلين</h1>

        <p className="mt-1 text-sm text-gray-500">
          اختر الفريق لعرض اللاعبين المسجلين
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-lg border px-5 py-3 text-sm font-medium transition ${
                isActive
                  ? "border-emerald-600 bg-emerald-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-emerald-400 hover:text-emerald-600"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Players */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {
              categories.find((category) => category.id === selectedCategory)
                ?.name
            }
          </h2>
          {/* 
          <span className="text-sm text-gray-500">
            {filteredPlayers.length} لاعبين
          </span> */}
        </div>

        <div className="rounded-xl border border-dashed p-10 text-center text-gray-500">
          لا يوجد لاعبين مسجلين في هذا الفريق
        </div>

        {/* {filteredPlayers.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPlayers.map((player) => (
              <div
                key={player.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-600">
                    {player.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {player.name}
                    </h3>

                    <p className="text-sm text-gray-500">لاعب</p>
                  </div>
                </div>

                <div className="space-y-2 border-t pt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">رقم البطاقة</span>

                    <span className="font-medium">{player.cardNumber}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">العمر</span>

                    <span className="font-medium">{player.age} سنة</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed p-10 text-center text-gray-500">
            لا يوجد لاعبين مسجلين في هذا الفريق
          </div>
        )} */}
      </div>
    </div>
  );
}
