"use client";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
export default function PlayerSearch() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadExcel = async () => {
      try {
        const response = await fetch("/people.xlsx");
        if (!response.ok) {
          throw new Error("Excel file not found");
        }
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        console.log("Excel Data:", data);
        setPlayers(data);
      } catch (error) {
        console.error(error);
        setError("حدث خطأ أثناء تحميل بيانات اللاعبين");
      } finally {
        setLoading(false);
      }
    };
    loadExcel();
  }, []);
  const result = players.filter((player) => {
    const value = search.toLowerCase().trim();
    if (!value) return false;
    return (
      String(player.name || "")
        .toLowerCase()
        .includes(value) ||
      String(player.id || "")
        .toLowerCase()
        .includes(value)
    );
  });
  return (
    <div className="mx-auto w-full max-w-2xl mt-[20px]">
      {" "}
      {/* Search */}{" "}
      <div className="mb-6">
        {" "}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث بالاسم أو ID..."
          className="h-12 w-full rounded-lg border bg-white shadow border-gray-300 px-4 outline-none focus:border-emerald-500"
        />{" "}
      </div>{" "}
      {/* Loading */}{" "}
      {loading && (
        <p className="text-center text-gray-500">
          {" "}
          جاري تحميل بيانات اللاعبين...{" "}
        </p>
      )}{" "}
      {/* Error */}{" "}
      {error && <p className="text-center text-red-500"> {error} </p>}{" "}
      {/* Results */}{" "}
      {!loading && search && result.length > 0 && (
        <div className="space-y-4">
          {" "}
          {result.map((player) => (
            <div
              key={player.memberId}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              {" "}
              <h3 className="text-xl font-bold text-gray-900">
                {" "}
                {player.name}{" "}
              </h3>{" "}
              <div className="mt-3 space-y-1 text-sm text-gray-600">
                {" "}
                <p>
                  {" "}
                  <span className="font-medium">رقم العضوية:</span>{" "}
                  {player.memberId}{" "}
                </p>{" "}
                <p>
                  {" "}
                  <span className="font-medium">الرقم القومي:</span>{" "}
                  {player.id}{" "}
                </p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
      )}{" "}
      {/* No Results */}{" "}
      {!loading && search && result.length === 0 && (
        <div className="rounded-xl border border-dashed p-6 text-center text-gray-500">
          {" "}
          لا يوجد لاعب بهذا الاسم أو الـ ID{" "}
        </div>
      )}{" "}
    </div>
  );
}
