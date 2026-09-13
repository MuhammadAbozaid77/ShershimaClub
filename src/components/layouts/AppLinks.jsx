// "use client";
// import { navLinks } from "@/utils/links";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function AppLinks() {
//   const pathname = usePathname();

//   return (
//     <div className="flex space-x-4 items-center">
//       {navLinks.map((link) => {
//         const isActive = pathname === link.href;

//         return (
//           <Link
//             key={link.href}
//             href={link.href}
//             className={`relative py-2 text-gray-700 transition-colors duration-150
//               ${
//                 isActive
//                   ? "text-emerald-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-emerald-600"
//                   : "hover:text-emerald-500"
//               }
//             `}
//           >
//             {link.name}
//           </Link>
//         );
//       })}
//       <Link
//         href="/login"
//         className="bg-emerald-700 cursor-pointer duration-150 text-white px-4 py-2 rounded hover:bg-emerald-600"
//       >
//         تسجيل دخول
//       </Link>
//     </div>
//   );
// }

"use client";

import { navLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLinks({ mobile = false, onNavigate }) {
  const pathname = usePathname();

  return (
    <div className={mobile ? "flex flex-col gap-2" : "flex items-center gap-6"}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={`relative py-2 text-gray-700 transition-colors duration-150 ${
              isActive
                ? "text-emerald-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-emerald-600"
                : "hover:text-emerald-500"
            } ${mobile ? "w-full rounded-lg px-3 hover:bg-gray-50" : ""}`}
          >
            {link.name}
          </Link>
        );
      })}

      <Link
        href="/login"
        onClick={onNavigate}
        className={`cursor-pointer rounded bg-emerald-700 px-4 py-2 text-center text-white duration-150 hover:bg-emerald-600 ${
          mobile ? "mt-2 w-full" : ""
        }`}
      >
        تسجيل دخول
      </Link>
    </div>
  );
}
