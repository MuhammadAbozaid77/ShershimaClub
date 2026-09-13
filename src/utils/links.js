export const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "عنّا", href: "/about" },
  { name: "النشاطات", href: "/activities" },
  { name: "اللاعبين المسجلين", href: "/players" },
  { name: "آخر الأخبار", href: "/news" },
  { name: "اتصل بنا", href: "/contact" },
];

export const news = [
  {
    id: 1,
    title: "انطلاق انتخابات الجمعية العمومية بمركز شباب شرشيمة",
    description:
      "يعلن مركز شباب شرشيمة عن انطلاق انتخابات الجمعية العمومية، وذلك يوم 18 سبتمبر 2026، وندعو جميع الأعضاء المسجلين إلى المشاركة والإدلاء بأصواتهم.",
    image: "",
    date: "13 سبتمبر 2026",
  },
  {
    id: 2,
    title: "انطلاق انتخابات الجمعية العمومية بمركز شباب شرشيمة",
    description:
      "يعلن مركز شباب شرشيمة عن انطلاق انتخابات الجمعية العمومية، وذلك يوم 18 سبتمبر 2026، وندعو جميع الأعضاء المسجلين إلى المشاركة والإدلاء بأصواتهم.",
    image: "/logoo.jpg",
    date: "13 سبتمبر 2026",
  },
  // {
  //   id: 2,
  //   title: "انطلاق تدريبات فريق الناشئين",
  //   description:
  //     "بدأ فريق الناشئين استعداداته للموسم الجديد وسط حضور قوي من اللاعبين والجهاز الفني.",
  //   image: "/logoo.jpg",
  //   date: "10 سبتمبر 2026",
  // },
  // {
  //   id: 3,
  //   title: "بطولة كرة الطائرة القادمة",
  //   description:
  //     "يستعد فريق كرة الطائرة للمشاركة في البطولة القادمة خلال الفترة المقبلة.",
  //   image: "/volleyball.jpg",
  //   date: "8 سبتمبر 2026",
  // },
  // {
  //   id: 4,
  //   title: "إنجاز جديد لفريق كرة السلة",
  //   description:
  //     "حقق فريق كرة السلة نتيجة مميزة في البطولة الأخيرة بعد منافسة قوية.",
  //   image: "/bastketball.jpg",
  //   date: "5 سبتمبر 2026",
  // },
  // {
  //   id: 5,
  //   title: "بطولة تنس الطاولة",
  //   description: "اختتمت بطولة تنس الطاولة بمشاركة عدد كبير من اللاعبين.",
  //   image: "/images/news-5.jpg",
  //   date: "2 سبتمبر 2026",
  // },
  // {
  //   id: 6,
  //   title: "تكريم اللاعبين المميزين",
  //   description:
  //     "قام النادي بتكريم عدد من اللاعبين تقديرًا لمجهوداتهم ونتائجهم المميزة.",
  //   image: "/images/news-6.jpg",
  //   date: "30 أغسطس 2026",
  // },
];

export const players = [
  {
    id: 1,
    name: "محمد أحمد",
    cardNumber: "123456",
    phone: "01012345678",
    age: 22,
    sport: "كرة القدم",
  },
  {
    id: 2,
    name: "أحمد محمد",
    cardNumber: "789012",
    phone: "01123456789",
    age: 20,
    sport: "كرة السلة",
  },
  {
    id: 3,
    name: "محمود علي",
    cardNumber: "456789",
    phone: "01234567890",
    age: 24,
    sport: "كرة القدم",
  },
];

export const categories = [
  { id: "first-team", name: "الفريق الأساسي" },
  { id: "youth-team", name: "فريق الناشئين" },
  { id: "volleyball", name: "فريق كرة الطائرة" },
  { id: "basketball", name: "فريق كرة السلة" },
  { id: "table-tennis", name: "فريق تنس الطاولة" },
];

export const playersByCategory = [
  {
    id: 1,
    name: "محمد أحمد",
    cardNumber: "10001",
    age: 24,
    category: "first-team",
  },
  {
    id: 2,
    name: "أحمد علي",
    cardNumber: "10002",
    age: 25,
    category: "first-team",
  },
  {
    id: 3,
    name: "محمود حسن",
    cardNumber: "20001",
    age: 17,
    category: "youth-team",
  },
  {
    id: 4,
    name: "عمر محمد",
    cardNumber: "20002",
    age: 16,
    category: "youth-team",
  },
  {
    id: 5,
    name: "عبدالله سامي",
    cardNumber: "30001",
    age: 22,
    category: "volleyball",
  },
  {
    id: 6,
    name: "كريم خالد",
    cardNumber: "40001",
    age: 21,
    category: "basketball",
  },
  {
    id: 7,
    name: "يوسف إبراهيم",
    cardNumber: "50001",
    age: 20,
    category: "table-tennis",
  },
];
