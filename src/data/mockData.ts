import { Subject, Chapter, Quiz } from "../types";

export const SUBJECTS: Subject[] = [
  { id: "tauhid", name: "Tauhid", jawiName: "توحيد", icon: "Stars", color: "bg-blue-500" },
  { id: "sirah", name: "Sirah", jawiName: "سيره", icon: "History", color: "bg-amber-500" },
  { id: "akhlak", name: "Akhlak", jawiName: "اخلاق", icon: "Heart", color: "bg-rose-500" },
  { id: "fiqh", name: "Fiqh", jawiName: "فقه", icon: "BookOpen", color: "bg-emerald-500" },
  { id: "arab", name: "Bahasa Arab", jawiName: "بهاس عرب", icon: "Languages", color: "bg-indigo-500" },
  { id: "jawi", name: "Jawi", jawiName: "جاوي", icon: "PenTool", color: "bg-violet-500" },
  { id: "tajwid", name: "Tajwid", jawiName: "تجويد", icon: "Mic2", color: "bg-cyan-500" },
];

export const CHAPTERS: Chapter[] = [
  // === TAHUN 1 ===
  // Tauhid
  { id: "t1-t1", subjectId: "tauhid", year: 1, name: "Mengenal Allah Pencipta Alam", jawiName: "مڠنل الله ڤنچيڤتا عالم", pageNumber: "1", topics: "Allah Sebagai Pencipta, Alam Semesta" },
  { id: "t1-t2", subjectId: "tauhid", year: 1, name: "Bukti Kewujudan Allah", jawiName: "بوقتي كوجودن الله", pageNumber: "8", topics: "Tanda-tanda Kebesaran" },
  { id: "t1-t3", subjectId: "tauhid", year: 1, name: "Rukun Islam", jawiName: "روكون إسلام", pageNumber: "15", topics: "5 Perkara Penting" },
  { id: "t1-t4", subjectId: "tauhid", year: 1, name: "Rukun Iman", jawiName: "روكون إيمان", pageNumber: "22", topics: "6 Perkara Asas" },
  { id: "t1-t5", subjectId: "tauhid", year: 1, name: "Kalimah Syahadah", jawiName: "كلمه شهادة", pageNumber: "30", topics: "Lafaz dan Makna" },
  { id: "t1-t6", subjectId: "tauhid", year: 1, name: "Sifat Wujud (Ada)", jawiName: "صيفت وجود", pageNumber: "38", topics: "Allah Ada" },
  { id: "t1-t7", subjectId: "tauhid", year: 1, name: "Sifat Qidam (Sedia)", jawiName: "صيفت قدم", pageNumber: "45", topics: "Sedia Ada" },
  { id: "t1-t8", subjectId: "tauhid", year: 1, name: "Sifat Baqa' (Kekal)", jawiName: "صيفت بقاء", pageNumber: "52", topics: "Allah Kekal" },
  { id: "t1-t9", subjectId: "tauhid", year: 1, name: "Sifat Mukhalafatuhu lil-Hawadith", jawiName: "مخالفتة للحوادث", pageNumber: "60", topics: "Berbeza dengan makhluk" },
  { id: "t1-t10", subjectId: "tauhid", year: 1, name: "Sifat Qiyamuhu Binafsihi", jawiName: "قيامه بنفسه", pageNumber: "68", topics: "Berdiri sendiri" },
  { id: "t1-t11", subjectId: "tauhid", year: 1, name: "Sifat Wahdaniyyah", jawiName: "وحدانية", pageNumber: "75", topics: "Esa" },
  // Fiqh
  { id: "t1-f1", subjectId: "fiqh", year: 1, name: "Rukun Islam", jawiName: "روكون إسلام", pageNumber: "1", topics: "Asas Fiqh" },
  { id: "t1-f2", subjectId: "fiqh", year: 1, name: "Jenis-jenis Air", jawiName: "جنيس٢ اءير", pageNumber: "10", topics: "Air Mutlak" },
  { id: "t1-f3", subjectId: "fiqh", year: 1, name: "Pembahagian Air", jawiName: "ڤمبهاڬين اءير", pageNumber: "18", topics: "Mutlak, Mutanajis, Musyammas" },
  { id: "t1-f4", subjectId: "fiqh", year: 1, name: "Adab Di Dalam Tandas", jawiName: "ادب د دالم تندس", pageNumber: "25", topics: "Kebersihan Diri" },
  { id: "t1-f5", subjectId: "fiqh", year: 1, name: "Istinjak", jawiName: "استنجاء", pageNumber: "32", topics: "Bersuci selepas buang air" },
  { id: "t1-f6", subjectId: "fiqh", year: 1, name: "Wuduk", jawiName: "وضوء", pageNumber: "40", topics: "Rukun & Sunat Wuduk" },
  { id: "t1-f7", subjectId: "fiqh", year: 1, name: "Azan Dan Iqamah", jawiName: "اذن دان اقامة", pageNumber: "50", topics: "Seruan Solat" },
  { id: "t1-f8", subjectId: "fiqh", year: 1, name: "Solat Fardu", jawiName: "صلاة فرض", pageNumber: "60", topics: "5 Waktu Solat" },
  // Sirah
  { id: "t1-s1", subjectId: "sirah", year: 1, name: "Pengenalan Sirah", jawiName: "ڤڠنلن سيرة", pageNumber: "1", topics: "Erti Sirah" },
  { id: "t1-s2", subjectId: "sirah", year: 1, name: "Keturunan Rasulullah", jawiName: "كتورونن رسول الله", pageNumber: "10", topics: "Ayahanda & Bonda" },
  { id: "t1-s3", subjectId: "sirah", year: 1, name: "Kelahiran Rasulullah", jawiName: "كلاهيرن رسول الله", pageNumber: "18", topics: "Sejarah Kelahiran" },
  { id: "t1-s4", subjectId: "sirah", year: 1, name: "Penyusuan Rasulullah", jawiName: "ڤپوسوان رسول الله", pageNumber: "25", topics: "Haliatus Sa'adiah" },
  { id: "t1-s5", subjectId: "sirah", year: 1, name: "Kematian Bonda Rasulullah", jawiName: "كماتين بوندا رسول الله", pageNumber: "32", topics: "Ziarah ke Abwa'" },
  { id: "t1-s6", subjectId: "sirah", year: 1, name: "Rasulullah Di Bawah Jagaan Datuk", jawiName: "رسول الله د باوه جاکاءن داتوق", pageNumber: "38", topics: "Kasih Sayang Datuk" },
  { id: "t1-s7", subjectId: "sirah", year: 1, name: "Rasulullah Di Bawah Jagaan Bapa Saudara", jawiName: "رسول الله د باوه جاکاءن باڤ ساودارا", pageNumber: "45", topics: "Didikan Abu Talib" },
  { id: "t1-s8", subjectId: "sirah", year: 1, name: "Pekerjaan Rasulullah", jawiName: "ڤكرجاءن رسول الله", pageNumber: "52", topics: "Menggembala Kambing" },
  // Akhlak
  { id: "t1-ak1", subjectId: "akhlak", year: 1, name: "Adab Makan Dan Minum", jawiName: "ادب ماكن دان مينوم", pageNumber: "1", topics: "Doa Makan, Tertib" },
  { id: "t1-ak2", subjectId: "akhlak", year: 1, name: "Adab Tidur", jawiName: "ادب تيدور", pageNumber: "10", topics: "Doa Tidur, Menghadap Kiblat" },
  { id: "t1-ak3", subjectId: "akhlak", year: 1, name: "Adab Memberi Salam", jawiName: "ادب ممبري سلام", pageNumber: "18", topics: "Ucapan Salam" },
  { id: "t1-ak4", subjectId: "akhlak", year: 1, name: "Adab Di Dalam Rumah", jawiName: "ادب د دالم رومه", pageNumber: "25", topics: "Sopan Santun" },
  { id: "t1-ak5", subjectId: "akhlak", year: 1, name: "Adab Belajar", jawiName: "ادب بلاجر", pageNumber: "32", topics: "Tertib Menuntut Ilmu" },
  // Jawi
  { id: "t1-j1", subjectId: "jawi", year: 1, name: "Huruf Tunggal Hijaiyah", jawiName: "حروف توڠڬل هجائية", pageNumber: "1", topics: "Mengenal Huruf" },
  { id: "t1-j2", subjectId: "jawi", year: 1, name: "Huruf Bersambung", jawiName: "حروف برسامبوڠ", pageNumber: "10", topics: "Bentuk Huruf" },
  { id: "t1-j3", subjectId: "jawi", year: 1, name: "Vokal Alif (a)", jawiName: "وكل اليف", pageNumber: "18", topics: "Bunyi Alif" },
  { id: "t1-j4", subjectId: "jawi", year: 1, name: "Vokal Ya (i/e)", jawiName: "وكل يا", pageNumber: "25", topics: "Bunyi Ya" },
  { id: "t1-j5", subjectId: "jawi", year: 1, name: "Vokal Wau (u/o)", jawiName: "وكل واو", pageNumber: "32", topics: "Bunyi Wau" },
  { id: "t1-j6", subjectId: "jawi", year: 1, name: "Suku Kata Terbuka", jawiName: "سوكو كات تربوك", pageNumber: "40", topics: "Gabungan Huruf" },
  { id: "t1-j7", subjectId: "jawi", year: 1, name: "Suku Kata Tertutup", jawiName: "سوكو كات ترتوتوڤ", pageNumber: "48", topics: "Bunyi Mati" },
  { id: "t1-j8", subjectId: "jawi", year: 1, name: "Perkataan 2 Suku Kata", jawiName: "ڤركاتاءن ٢ سوكو كات", pageNumber: "55", topics: "Ejaan Perkataan" },
  { id: "t1-j9", subjectId: "jawi", year: 1, name: "Angka Jawi", jawiName: "اڠكا جاوي", pageNumber: "62", topics: "Mengenal Nombor" },
  { id: "t1-j10", subjectId: "jawi", year: 1, name: "Tanda Baca Dasar", jawiName: "تندا باچ داسر", pageNumber: "70", topics: "Noktah & Koma" },
  // Arab
  { id: "t1-ar1", subjectId: "arab", year: 1, name: "At-Tahiyyatu wa At-Ta'aruf", jawiName: "التحيات والتعارف", pageNumber: "1", topics: "Salam & Berkenalan" },
  { id: "t1-ar2", subjectId: "arab", year: 1, name: "Al-Adad wal Arqam (1-20)", jawiName: "الأعداد والأرقام", pageNumber: "12", topics: "Nombor 1-20" },
  { id: "t1-ar3", subjectId: "arab", year: 1, name: "A'dhaul Jism", jawiName: "أعضاء الجسم", pageNumber: "23", topics: "Anggota Badan" },
  { id: "t1-ar4", subjectId: "arab", year: 1, name: "Usrati", jawiName: "أسرتي", pageNumber: "34", topics: "Keluargaku" },
  { id: "t1-ar5", subjectId: "arab", year: 1, name: "Madrasati", jawiName: "مدرستي", pageNumber: "45", topics: "Sekolahku" },
  { id: "t1-ar6", subjectId: "arab", year: 1, name: "Al-Adawatul Dirasiyah", jawiName: "الأدوات الدراسية", pageNumber: "56", topics: "Peralatan Sekolah" },
  { id: "t1-ar7", subjectId: "arab", year: 1, name: "Al-Alwan", jawiName: "الألوان", pageNumber: "67", topics: "Warna" },

  // === TAHUN 2 ===
  // Tauhid
  { id: "t2-t1", subjectId: "tauhid", year: 2, name: "Sifat Qudrat", jawiName: "صيفت قدرة", pageNumber: "1", topics: "Maha Berkuasa" },
  { id: "t2-t2", subjectId: "tauhid", year: 2, name: "Sifat Iradat", jawiName: "صيفت إرادة", pageNumber: "10", topics: "Maha Berkehendak" },
  { id: "t2-t3", subjectId: "tauhid", year: 2, name: "Sifat Ilmu", jawiName: "صيفت علمو", pageNumber: "18", topics: "Maha Mengetahui" },
  { id: "t2-t4", subjectId: "tauhid", year: 2, name: "Sifat Hayat", jawiName: "صيفت حياة", pageNumber: "26", topics: "Maha Hidup" },
  { id: "t2-t5", subjectId: "tauhid", year: 2, name: "Sifat Sama'", jawiName: "صيفت سمع", pageNumber: "34", topics: "Maha Mendengar" },
  { id: "t2-t6", subjectId: "tauhid", year: 2, name: "Sifat Basar", jawiName: "صيفت بصر", pageNumber: "42", topics: "Maha Melihat" },
  { id: "t2-t7", subjectId: "tauhid", year: 2, name: "Sifat Kalam", jawiName: "صيفت كلام", pageNumber: "50", topics: "Maha Berkata-kata" },
  { id: "t2-t8", subjectId: "tauhid", year: 2, name: "Kaunuhu Qadiran", jawiName: "كونه قادرا", pageNumber: "58", topics: "Keadaan Berkuasa" },
  { id: "t2-t9", subjectId: "tauhid", year: 2, name: "Kaunuhu Muridan", jawiName: "كونه مريدا", pageNumber: "65", topics: "Keadaan Berkehendak" },
  { id: "t2-t10", subjectId: "tauhid", year: 2, name: "Kaunuhu 'Aliman", jawiName: "كونه عالما", pageNumber: "72", topics: "Keadaan Mengetahui" },
  { id: "t2-t11", subjectId: "tauhid", year: 2, name: "Kaunuhu Hayyan", jawiName: "كونه حيا", pageNumber: "80", topics: "Keadaan Hidup" },
  { id: "t2-t12", subjectId: "tauhid", year: 2, name: "Kaunuhu Sami'an", jawiName: "كونه سميعا", pageNumber: "88", topics: "Keadaan Mendengar" },
  { id: "t2-t13", subjectId: "tauhid", year: 2, name: "Kaunuhu Basiran", jawiName: "كونه بصيرا", pageNumber: "95", topics: "Keadaan Melihat" },
  { id: "t2-t14", subjectId: "tauhid", year: 2, name: "Kaunuhu Mutakalliman", jawiName: "كونه متكلما", pageNumber: "102", topics: "Keadaan Berkata-kata" },
  // Fiqh
  { id: "t2-f1", subjectId: "fiqh", year: 2, name: "Syarat Wajib Solat", jawiName: "شرط واجب صلاة", pageNumber: "1", topics: "Islam, Baligh, Berakal" },
  { id: "t2-f2", subjectId: "fiqh", year: 2, name: "Syarat Sah Solat", jawiName: "شرط صح صلاة", pageNumber: "12", topics: "Yakin, Menghadap Kiblat" },
  { id: "t2-f3", subjectId: "fiqh", year: 2, name: "Rukun Solat", jawiName: "ركون صلاة", pageNumber: "25", topics: "13 Perkara" },
  { id: "t2-f4", subjectId: "fiqh", year: 2, name: "Sunat Ab'ad & Hai'at", jawiName: "سنة ابعاض دان هيأة", pageNumber: "40", topics: "Sunat dalam solat" },
  { id: "t2-f5", subjectId: "fiqh", year: 2, name: "Perkara Membatalkan Solat", jawiName: "ڤركارا ممبطلكن صلاة", pageNumber: "55", topics: "Batal Solat" },
  // Sirah
  { id: "t2-s1", subjectId: "sirah", year: 2, name: "Sifat-sifat Nabi", jawiName: "صيفت٢ نبي", pageNumber: "1", topics: "Siddiq, Amanah, Tabligh, Fatonah" },
  { id: "t2-s2", subjectId: "sirah", year: 2, name: "Pekerjaan Nabi (Menggembala)", jawiName: "ڤكرجاءن نبي", pageNumber: "10", topics: "Menggembala Kambing" },
  { id: "t2-s3", subjectId: "sirah", year: 2, name: "Berniaga ke Syam", jawiName: "برنياڬ ك شام", pageNumber: "18", topics: "Bersama Maisarah" },
  { id: "t2-s4", subjectId: "sirah", year: 2, name: "Perkahwinan dengan Khadijah", jawiName: "ڤركهوينن دڠن خديجة", pageNumber: "28", topics: "Siti Khadijah" },
  { id: "t2-s5", subjectId: "sirah", year: 2, name: "Peristiwa Hajarul Aswad", jawiName: "ڤريستيوا حجر الأسود", pageNumber: "38", topics: "Perletakan Batu" },
  { id: "t2-s6", subjectId: "sirah", year: 2, name: "Kerasulan", jawiName: "كراسولن", pageNumber: "48", topics: "Terima Wahyu" },
  // Akhlak
  { id: "t2-ak1", subjectId: "akhlak", year: 2, name: "Adab Berpakaian", jawiName: "ادب برڤاكاين", pageNumber: "1", topics: "Sopan & Syarie" },
  { id: "t2-ak2", subjectId: "akhlak", year: 2, name: "Adab Makan Dan Minum", jawiName: "ادب ماكن دان مينوم", pageNumber: "12", topics: "Ulangkaji & Tertib" },
  { id: "t2-ak3", subjectId: "akhlak", year: 2, name: "Adab Di Sekolah", jawiName: "ادب د سكوله", pageNumber: "22", topics: "Hormat Guru" },
  { id: "t2-ak4", subjectId: "akhlak", year: 2, name: "Adab Dengan Ibu Bapa", jawiName: "ادب دڠن ايبو باڤ", pageNumber: "34", topics: "Bakti" },
  { id: "t2-ak5", subjectId: "akhlak", year: 2, name: "Adab Dengan Guru", jawiName: "ادب دڠن ڬورو", pageNumber: "45", topics: "Hormat Ilmu" },
  { id: "t2-ak6", subjectId: "akhlak", year: 2, name: "Adab Berjalan & Berziarah", jawiName: "ادب برجالن دان برزياره", pageNumber: "55", topics: "Tertib Berjalan" },
  // Jawi
  { id: "t2-j1", subjectId: "jawi", year: 2, name: "Suku Kata Terbuka", jawiName: "سوكو كات تربوك", pageNumber: "1", topics: "Gabungan Vokal" },
  { id: "t2-j2", subjectId: "jawi", year: 2, name: "Suku Kata Tertutup", jawiName: "سوكو كات ترتوتوڤ", pageNumber: "15", topics: "Bunyi Mati" },
  { id: "t2-j3", subjectId: "jawi", year: 2, name: "Pola Vokal", jawiName: "ڤولا وكل", pageNumber: "28", topics: "Pola a, i, u" },
  { id: "t2-j4", subjectId: "jawi", year: 2, name: "Perkataan Tiga Suku Kata", jawiName: "ڤركاتاءن تيڬ سوكو كات", pageNumber: "42", topics: "Ejaan Panjang" },
  { id: "t2-j5", subjectId: "jawi", year: 2, name: "Kata Pinjaman Bahasa Arab", jawiName: "كات ڤينجمن عرب", pageNumber: "55", topics: "Ejaan Dasar" },
  // Arab
  { id: "t2-ar1", subjectId: "arab", year: 2, name: "Al-A'dad wal-Arqam (21-100)", jawiName: "الأعداد والأرقام", pageNumber: "1", topics: "Nombor 21-100" },
  { id: "t2-ar2", subjectId: "arab", year: 2, name: "Usrati", jawiName: "أسرتي", pageNumber: "15", topics: "Keluargaku" },
  { id: "t2-ar3", subjectId: "arab", year: 2, name: "Fil Fasli", jawiName: "في الفصل", pageNumber: "28", topics: "Di Kelas" },
  { id: "t2-ar4", subjectId: "arab", year: 2, name: "Al-Alwan", jawiName: "الألوان", pageNumber: "40", topics: "Warna" },
  { id: "t2-ar5", subjectId: "arab", year: 2, name: "Al-Adawatul Dirasiyah", jawiName: "الأدوات الدراسية", pageNumber: "52", topics: "Alatan Sekolah" },

  // === TAHUN 3 ===
  // Tauhid
  { id: "t3-t1", subjectId: "tauhid", year: 3, name: "Pelajaran 1: Beriman kepada Rasul", jawiName: "برايمان كڤد رسول", pageNumber: "1", topics: "Pengertian, Hukum, Dalil, Perbezaan Nabi dengan Rasul, Rasul Ulul Azmi" },
  { id: "t3-t2", subjectId: "tauhid", year: 3, name: "Pelajaran 2: Taat kepada Rasulullah SAW", jawiName: "طاعت كڤد رسول الله ص", pageNumber: "13", topics: "Kepatuhan Mutlak" },
  { id: "t3-t3", subjectId: "tauhid", year: 3, name: "Pelajaran 3: Nabi Muhammad SAW Khatamul Anbiya'", jawiName: "نبي محمد ﷺ خاتم الانبياء", pageNumber: "17", topics: "Penutup Para Nabi" },
  { id: "t3-t4", subjectId: "tauhid", year: 3, name: "Pelajaran 4: Sifat Allah yang Wajib dan Mustahil", jawiName: "صيفت الله يڠ واجيب دان مستحيل", pageNumber: "20", topics: "Sifat Kesempurnaan Allah" },
  // Feqah (Fiqh)
  { id: "t3-f1", subjectId: "fiqh", year: 3, name: "Pelajaran 1: Tayammum", jawiName: "تياموم", pageNumber: "1", topics: "Hukum, Rukun, Cara" },
  { id: "t3-f2", subjectId: "fiqh", year: 3, name: "Pelajaran 2: Azan dan Iqamah", jawiName: "اذن دان اقامة", pageNumber: "7", topics: "Seruan Solat" },
  { id: "t3-f3", subjectId: "fiqh", year: 3, name: "Pelajaran 3: Solat Fardhu", jawiName: "صلاة فرض", pageNumber: "13", topics: "Syarat & Rukun" },
  { id: "t3-f4", subjectId: "fiqh", year: 3, name: "Pelajaran 4: Solat Berjemaah", jawiName: "صلاة برجماعة", pageNumber: "60", topics: "Kelebihan Berjemaah" },
  // Sirah
  { id: "t3-s1", subjectId: "sirah", year: 3, name: "Pelajaran 1: Nasab Nabi Muhammad SAW", jawiName: "نسب نبي محمد ﷺ", pageNumber: "1", topics: "Keturunan Baginda" },
  { id: "t3-s2", subjectId: "sirah", year: 3, name: "Pelajaran 2: Peristiwa Kelahiran Nabi Muhammad SAW", jawiName: "كلاهيرن نبي محمد ﷺ", pageNumber: "9", topics: "Tahun Gajah" },
  { id: "t3-s3", subjectId: "sirah", year: 3, name: "Pelajaran 3: Akhlak Nabi Muhammad SAW", jawiName: "اخلاق نبي محمد ﷺ", pageNumber: "16", topics: "Siddiq, Amanah" },
  { id: "t3-s4", subjectId: "sirah", year: 3, name: "Pelajaran 4: Peristiwa Kehidupan Nabi Muhammad SAW", jawiName: "كهيدوڤن نبي محمد ﷺ", pageNumber: "26", topics: "Baginda Nabi" },
  { id: "t3-s5", subjectId: "sirah", year: 3, name: "Pelajaran 5: Kehidupan Bermasyarakat Nabi Muhammad SAW", jawiName: "كهيدوڤن برمشاركت نبي محمد ﷺ", pageNumber: "29", topics: "Bulqis" },
  { id: "t3-s6", subjectId: "sirah", year: 3, name: "Pelajaran 6: Rumah Tangga Nabi Muhammad SAW", jawiName: "رومه تڠڬ نبي محمد ﷺ", pageNumber: "34", topics: "Khadijah, Aisyah" },

  // Akhlak
  { id: "t3-ak1", subjectId: "akhlak", year: 3, name: "Pelajaran 1: Adab Menziarahi Orang Sakit", jawiName: "ادب منزيارهي اورڠ ساكيت", pageNumber: "1", topics: "Doa & Tertib" },
  { id: "t3-ak2", subjectId: "akhlak", year: 3, name: "Pelajaran 2: Adab Menziarahi Rakan", jawiName: "ادب منزيارهي راكن", pageNumber: "6", topics: "Memuliakan Tamu" },
  { id: "t3-ak3", subjectId: "akhlak", year: 3, name: "Pelajaran 3: Bercakap Benar", jawiName: "برچاكڤ بنر", pageNumber: "10", topics: "Jujur" },
  { id: "t3-ak4", subjectId: "akhlak", year: 3, name: "Pelajaran 4: Sabar", jawiName: "صبر", pageNumber: "15", topics: "Ujian" },
  { id: "t3-ak5", subjectId: "akhlak", year: 3, name: "Pelajaran 5: Berani", jawiName: "براني", pageNumber: "20", topics: "Membela Kebenaran" },
  { id: "t3-ak6", subjectId: "akhlak", year: 3, name: "Pelajaran 6: Menepati Janji", jawiName: "منڤتي جنجي", pageNumber: "27", topics: "Amanah" },
  { id: "t3-ak7", subjectId: "akhlak", year: 3, name: "Pelajaran 7: Malu", jawiName: "مالو", pageNumber: "32", topics: "Sifat Iman" },
  { id: "t3-ak8", subjectId: "akhlak", year: 3, name: "Pelajaran 8: Pemaaf", jawiName: "ڤمعاف", pageNumber: "37", topics: "Lemah Lembut" },

  // Jawi
  { id: "t3-j1", subjectId: "jawi", year: 3, name: "Pelajaran 1: Kedudukan Huruf Hamzah 'ء'", jawiName: "كدوكن حروف همزةء", pageNumber: "1", topics: "Unit 1-5: Di Atas, Bawah, Tiga Suku, Sejajar, Berumah" },
  { id: "t3-j2", subjectId: "jawi", year: 3, name: "Pelajaran 2: Suku Kata Tertutup yang Menggunakan Vokal 'a'", jawiName: "سوكو كات ترتوتوپ ڠݢوناکن وكل a", pageNumber: "23", topics: "Ekasuku Tertutup" },
  { id: "t3-j3", subjectId: "jawi", year: 3, name: "Pelajaran 3: Hukum 'e-wa'", jawiName: "حكوم e-wa", pageNumber: "27", topics: "Tukar Ejaan" },
  { id: "t3-j4", subjectId: "jawi", year: 3, name: "Pelajaran 4: Imbuhan Awalan ber-, ter-, per-", jawiName: "امبوهن اولن ber-, ter-, per-", pageNumber: "32", topics: "Penggunaan Awalan" },
  { id: "t3-j5", subjectId: "jawi", year: 3, name: "Pelajaran 5: Imbuhan Awalan peng- dan meng-", jawiName: "امبوهن اولن peng- دان meng-", pageNumber: "37", topics: "Unit 1-5: Bunyi a, i/e, e taling, u/o, lain" },

  // Arab
  { id: "t3-ar1", subjectId: "arab", year: 3, name: "Pelajaran 1: Al-Adad wal-Arqam (201–300)", jawiName: "الأعداد والأرقام (٢٠١-٣٠٠)", pageNumber: "1", topics: "Nombor" },
  { id: "t3-ar2", subjectId: "arab", year: 3, name: "Pelajaran 2: Peralatan Rumah", jawiName: "الأدوات المنزلية", pageNumber: "9", topics: "Rumah Tangga" },
  { id: "t3-ar3", subjectId: "arab", year: 3, name: "Pelajaran 3: Peralatan Dapur", jawiName: "الأدوات المطبخية", pageNumber: "15", topics: "Di Dapur" },
  { id: "t3-ar4", subjectId: "arab", year: 3, name: "Pelajaran 4: Bulan Hijrah & Masihi", jawiName: "الشهور الهجرية والميلادية", pageNumber: "22", topics: "Takwim" },
  { id: "t3-ar5", subjectId: "arab", year: 3, name: "Pelajaran 5: Mudhakkar & Muannath", jawiName: "المذكر والمؤنث", pageNumber: "30", topics: "Jantina" },
  { id: "t3-ar6", subjectId: "arab", year: 3, name: "Pelajaran 6: Ayat Namaan", jawiName: "الجملة الاسمية", pageNumber: "38", topics: "Mubtada & Khabar" },
  { id: "t3-ar7", subjectId: "arab", year: 3, name: "Pelajaran 7: Mufrad, Mathna & Jamak", jawiName: "المفرد والمثنى والجمع", pageNumber: "45", topics: "Singular, Dual, Plural" },
  { id: "t3-ar8", subjectId: "arab", year: 3, name: "Pelajaran 8: Di Sekolah", jawiName: "في المدرسة", pageNumber: "61", topics: "Perbendaharaan Kata Sekolah" },
  { id: "t3-ar9", subjectId: "arab", year: 3, name: "Pelajaran 9: Di Bandar", jawiName: "في المدينة", pageNumber: "66", topics: "Perbendaharaan Kata Bandar" },

  // Tajwid
  { id: "t3-tj1", subjectId: "tajwid", year: 3, name: "Pelajaran 1: Makharij al-Huruf", jawiName: "مخارج الحروف", pageNumber: "1", topics: "Unit 1-5: Rongga Mulut, Halkum, Lidah, Bibir, Hidung" },
  { id: "t3-tj2", subjectId: "tajwid", year: 3, name: "Pelajaran 2: Nun dan Mim Bersabdu", jawiName: "نون دان ميم برسبدو", pageNumber: "21", topics: "Tasydid" },
  { id: "t3-tj3", subjectId: "tajwid", year: 3, name: "Pelajaran 3: Isti'adhah dan Basmalah", jawiName: "استعاذة دان بسملة", pageNumber: "23", topics: "Unit 1: Isti'adhah, Unit 2: Basmalah" },
  { id: "t3-tj4", subjectId: "tajwid", year: 3, name: "Pelajaran 4: Lam Lafzul Jalalah", jawiName: "لام لفظ الجلالة", pageNumber: "30", topics: "Unit 1: Tafkhim, Unit 2: Tarqiq" },
  { id: "t3-tj5", subjectId: "tajwid", year: 3, name: "Pelajaran 5: Pengenalan Rasm Uthmani", jawiName: "ڤڠنلن رسم عثماني", pageNumber: "36", topics: "Ejaan Al-Quran" },

  // === TAHUN 4 ===
  // Tauhid
  { id: "t4-t1", subjectId: "tauhid", year: 4, name: "Pelajaran 1: Sifat Wajib, Mustahil dan Harus bagi Allah", jawiName: "صيفت واجيب مستحيل دان حرس كبدا الله", pageNumber: "1", topics: "Unit 1: Sifat Wajib (Qadiran, Muridan, Aliman, Hayyan, Sami'an, Basiran, Mutakalliman), Unit 2: Sifat Harus" },
  { id: "t4-t2", subjectId: "tauhid", year: 4, name: "Pelajaran 2: Sifat Wajib, Mustahil dan Harus bagi Para Rasul", jawiName: "صيفت واجيب مستحيل دان حرس كبدا ڤارا رسول", pageNumber: "23", topics: "Unit 1: Sifat Wajib Rasul, Unit 2: Mustahil Rasul, Unit 3: Harus Rasul" },
  { id: "t4-t3", subjectId: "tauhid", year: 4, name: "Pelajaran 3: Beriman kepada Hari Kiamat", jawiName: "برايمان كڤد هاري قيامة", pageNumber: "39", topics: "Pengertian Kiamat, Dalil, Nama-Nama Kiamat" },

  // Feqah (Fiqh)
  { id: "t4-f1", subjectId: "fiqh", year: 4, name: "Pelajaran 1: Solat Jumaat", jawiName: "صلاة جمعة", pageNumber: "1", topics: "Hukum & Syarat" },
  { id: "t4-f2", subjectId: "fiqh", year: 4, name: "Pelajaran 2: Khutbah Jumaat", jawiName: "خطبة جمعة", pageNumber: "7", topics: "Syarat Khutbah" },
  { id: "t4-f3", subjectId: "fiqh", year: 4, name: "Pelajaran 3: Solat-Solat Sunat", jawiName: "صلاة-صلاة سنة", pageNumber: "12", topics: "Rawatib, Witir, Dhuha, Tahajjud, Hajat" },
  { id: "t4-f4", subjectId: "fiqh", year: 4, name: "Pelajaran 4: Solat Jamak dan Qasar", jawiName: "صلاة جمم وقصر", pageNumber: "50", topics: "Cara & Syarat" },

  // Sirah
  { id: "t4-s1", subjectId: "sirah", year: 4, name: "Pelajaran 1: Pelantikan Nabi Muhammad SAW sebagai Rasul", jawiName: "ڤلنتيقن نبي محمد ﷺ سباڬاي رسول", pageNumber: "1", topics: "Gua Hira" },
  { id: "t4-s2", subjectId: "sirah", year: 4, name: "Pelajaran 2: Hijrah ke Habsyah dan Taif", jawiName: "هجرة ك حبشه دان طائف", pageNumber: "20", topics: "Dakwah Awal" },
  { id: "t4-s3", subjectId: "sirah", year: 4, name: "Pelajaran 3: Israk dan Mikraj", jawiName: "إسراء dan معراج", pageNumber: "25", topics: "Perjalanan Malam" },
  { id: "t4-s4", subjectId: "sirah", year: 4, name: "Pelajaran 4: Peristiwa Hijrah ke Yathrib", jawiName: "هجرة ك يثرب", pageNumber: "35", topics: "Perancangan Hijrah" },
  { id: "t4-s5", subjectId: "sirah", year: 4, name: "Pelajaran 5: Asas Negara Islam yang Pertama: Pembinaan Masjid", jawiName: "اساس نڬارا اسلام ڤرتام", pageNumber: "44", topics: "Masjid Quba', Masjid Nabawi" },
  { id: "t4-s6", subjectId: "sirah", year: 4, name: "Pelajaran 6: Asas Negara Islam yang Kedua: Persaudaraan dan Perpaduan Ummah", jawiName: "اساس نڬارا اسلام كدوا", pageNumber: "67", topics: "Muakhah (Musyawarah)" },
  { id: "t4-s7", subjectId: "sirah", year: 4, name: "Pelajaran 7: Asas Negara Islam yang Ketiga: Sahifah Madinah", jawiName: "اساس نڬارا اسلام كتيڬ", pageNumber: "73", topics: "Perlembagaan Madinah" },

  // Akhlak
  { id: "t4-ak1", subjectId: "akhlak", year: 4, name: "Pelajaran 1: Tolong-menolong pada Perkara Kebaikan", jawiName: "تولوڠ-منولوڠ ڤد ڤركارا كباءيقن", pageNumber: "1", topics: "Gotong-royong" },
  { id: "t4-ak2", subjectId: "akhlak", year: 4, name: "Pelajaran 2: Bertanggungjawab", jawiName: "برتڠڬوڠجواب", pageNumber: "5", topics: "Amanah" },
  { id: "t4-ak3", subjectId: "akhlak", year: 4, name: "Pelajaran 3: Adab Berjalan", jawiName: "ادب برجالن", pageNumber: "12", topics: "Jalan Kaki & Naik Kenderaan" },
  { id: "t4-ak4", subjectId: "akhlak", year: 4, name: "Pelajaran 4: Adab Bermain", jawiName: "ادب برماءين", pageNumber: "17", topics: "Bermain dengan Adab" },
  { id: "t4-ak5", subjectId: "akhlak", year: 4, name: "Pelajaran 5: Adab Berkomunikasi", jawiName: "ادب بركومونيكاسي", pageNumber: "24", topics: "Berbicara & Mendengar" },
  { id: "t4-ak6", subjectId: "akhlak", year: 4, name: "Pelajaran 6: Adab Berjiran", jawiName: "ادب برجيرن", pageNumber: "32", topics: "Hak Jiran" },
  { id: "t4-ak7-1", subjectId: "akhlak", year: 4, name: "Pelajaran 7: Sifat Mahmudah (Taubah)", jawiName: "صيفت محمودة (توبة)", pageNumber: "38", topics: "Taubat Nasuha" },
  { id: "t4-ak7-2", subjectId: "akhlak", year: 4, name: "Pelajaran 7: Sifat Mahmudah (Khauf)", jawiName: "صيفت محمودة (خوف)", pageNumber: "42", topics: "Bertakwa kepada Allah" },
  { id: "t4-ak8-1", subjectId: "akhlak", year: 4, name: "Pelajaran 8: Sifat Mazmumah (Syarahut Ta'am)", jawiName: "صيفت مذمومة (شرة الطعام)", pageNumber: "46", topics: "Tamak Hal Baik" },
  { id: "t4-ak8-2", subjectId: "akhlak", year: 4, name: "Pelajaran 8: Sifat Mazmumah (Syarahul Kalam)", jawiName: "صيفت مذمومة (شرة الكلام)", pageNumber: "51", topics: "Ghibah, Namimah, Sumbang" },

  // Jawi
  { id: "t4-j1", subjectId: "jawi", year: 4, name: "Pelajaran 1: Perkataan yang Diakhiri dengan Huruf 'ق' dan 'ك'", jawiName: "ڤركاتاءن يڠ دياخيري دڠن حروف ق dan ك", pageNumber: "1", topics: "Unit 1: 'k' (Melayu), Unit 2: 'k' (Inggeris)" },
  { id: "t4-j2", subjectId: "jawi", year: 4, name: "Pelajaran 2: Perkataan yang Diakhiri dengan Huruf 'ك' dan 'ق'", jawiName: "ڤركاتاءن يڠ دياخيري دڠن حروف ك dan ق", pageNumber: "11", topics: "Unit 1: Terbuka Melayu, Unit 2: Tertutup Melayu" },
  { id: "t4-j3", subjectId: "jawi", year: 4, name: "Pelajaran 3: Perkataan Mengandungi Suku Kata Terbuka Pola Vokal 'a-a'", jawiName: "ڤركاتاءن مڠاندوڠي سوكو كات تربوك", pageNumber: "22", topics: "Unit 1: da, ra, la, wa, nga. Unit 2: ba, ta, pa..." },
  { id: "t4-j4", subjectId: "jawi", year: 4, name: "Pelajaran 4: Perkataan Mengandungi Tiga Suku Kata atau Lebih", jawiName: "ڤركاتاءن مڠاندوڠي تيڬ سوكو كات اتاو لبيه", pageNumber: "33", topics: "Unit 1: Asal Melayu, Unit 2: Inggeris" },
  { id: "t4-j5", subjectId: "jawi", year: 4, name: "Pelajaran 5: Ejaan Jawi Lama", jawiName: "ايجاءن جاوي لاما", pageNumber: "42", topics: "Tradisi" },
  { id: "t4-j6", subjectId: "jawi", year: 4, name: "Pelajaran 6: Perkataan yang Mengandungi Bunyi Diftong", jawiName: "ڤركاتاءن مڠاندوڠي بوني ديفتوڠ", pageNumber: "47", topics: "Unit 1: ai, Unit 2: au, Unit 3: oi" },

  // Arab
  { id: "t4-ar1", subjectId: "arab", year: 4, name: "Pelajaran 1: Al-Adad wal-Arqam (301–400)", jawiName: "الأعداد والأرقام ٣٠١-٤٠٠", pageNumber: "1", topics: "Nombor" },
  { id: "t4-ar2", subjectId: "arab", year: 4, name: "Pelajaran 2: Kenderaan & Pengangkutan", jawiName: "المراكب والمواصلات", pageNumber: "8", topics: "Transport" },
  { id: "t4-ar3", subjectId: "arab", year: 4, name: "Pelajaran 3: Kata Ganti Tunjuk", jawiName: "أسماء الإشارة", pageNumber: "16", topics: "Isyarat" },
  { id: "t4-ar4", subjectId: "arab", year: 4, name: "Pelajaran 4: Kata Tanya", jawiName: "أسماء الاستفهام", pageNumber: "26", topics: "Soal Jawab" },
  { id: "t4-ar5", subjectId: "arab", year: 4, name: "Pelajaran 5: Ayat Kerja", jawiName: "الجملة الفعلية", pageNumber: "31", topics: "Fi'il" },
  { id: "t4-ar6-1", subjectId: "arab", year: 4, name: "Pelajaran 6: Cerita 1 (Ziarah Bapa Saudara)", jawiName: "القصة المختارة 1", pageNumber: "47", topics: "زيارة العم" },
  { id: "t4-ar6-2", subjectId: "arab", year: 4, name: "Pelajaran 6: Cerita 2 (Sesungguhnya Orang Mukmin Bersaudara)", jawiName: "القصة المختارة 2", pageNumber: "53", topics: "إنما المؤمنون إخوة" },
  { id: "t4-ar7", subjectId: "arab", year: 4, name: "Pelajaran 7: Dialog di Perpustakaan", jawiName: "الحوار في المكتبة", pageNumber: "56", topics: "Perbualan" },
  { id: "t4-ar8", subjectId: "arab", year: 4, name: "Pelajaran 8: Dialog di Padang", jawiName: "الحوار في الملعب", pageNumber: "59", topics: "Perbualan" },

  // Tajwid
  { id: "t4-tj1", subjectId: "tajwid", year: 4, name: "Pelajaran 1: Hukum Nun Sakinah dan Tanwin", jawiName: "حكوم نون ساكنة وتنوين", pageNumber: "1", topics: "Unit 1-5: Izhar, Idgham, Iqlab, Ikhfa'" },
  { id: "t4-tj2", subjectId: "tajwid", year: 4, name: "Pelajaran 2: Hukum Mim Sakinah", jawiName: "حكوم ميم ساكنة", pageNumber: "22", topics: "Unit 1-4: Idgham, Ikhfa', Izhar Syafawi" },
  { id: "t4-tj3", subjectId: "tajwid", year: 4, name: "Pelajaran 3: Qalqalah", jawiName: "قلقلة", pageNumber: "31", topics: "Unit 1-4: Sughra, Kubra, Akbar" },
  { id: "t4-tj4", subjectId: "tajwid", year: 4, name: "Pelajaran 4: \"ال\" Ta'rif", jawiName: "\"ال\" تعريف", pageNumber: "39", topics: "Unit 1-3: Pengertian, Qamariyyah, Syamsiyyah" },

  // === TAHUN 5 ===
  // Tauhid
  { id: "t5-t1", subjectId: "tauhid", year: 5, name: "Beriman Kepada Hari Akhirat", jawiName: "برايمان كڤد هاري اخيرة", pageNumber: "1", topics: "Rukun Iman Ke-5" },
  { id: "t5-t2", subjectId: "tauhid", year: 5, name: "Tanda-tanda Kiamat", jawiName: "تندا٢ قيامة", pageNumber: "12", topics: "Kecil & Besar" },
  { id: "t5-t3", subjectId: "tauhid", year: 5, name: "Alam Barzakh", jawiName: "عالم برزخ", pageNumber: "23", topics: "Kehidupan Dalam Kubur" },
  { id: "t5-t4", subjectId: "tauhid", year: 5, name: "Padang Mahsyar & Hisab", jawiName: "ڤادڠ محشر دان حساب", pageNumber: "35", topics: "Perhimpunan Agung" },
  { id: "t5-t5", subjectId: "tauhid", year: 5, name: "Syurga & Neraka", jawiName: "شرڬ دان نراك", pageNumber: "46", topics: "Timbangan Amalan" },
  // Fiqh
  { id: "t5-f1", subjectId: "fiqh", year: 5, name: "Solat Jenazah", jawiName: "صلاة جنازة", pageNumber: "1", topics: "Hukum & Cara" },
  { id: "t5-f2", subjectId: "fiqh", year: 5, name: "Pengurusan Jenazah", jawiName: "ڤڠوروسن جنازة", pageNumber: "12", topics: "Mandikan & Kafan" },
  { id: "t5-f3", subjectId: "fiqh", year: 5, name: "Solat Musafir (Qasar & Jamak)", jawiName: "صلاة مسافير", pageNumber: "25", topics: "Kelonggaran Musafir" },
  { id: "t5-f4", subjectId: "fiqh", year: 5, name: "Solat Orang Sakit", jawiName: "صلاة اورڠ ساكيت", pageNumber: "38", topics: "Rukhsah" },
  { id: "t5-f5", subjectId: "fiqh", year: 5, name: "Zakat Perniagaan & Emas", jawiName: "زكاة ڤرنياڬاءن دان امس", pageNumber: "50", topics: "Nisab & Zakat" },
  // Sirah
  { id: "t5-s1", subjectId: "sirah", year: 5, name: "Perang Hunain", jawiName: "ڤراڠ حنين", pageNumber: "1", topics: "Jangan Lalai" },
  { id: "t5-s2", subjectId: "sirah", year: 5, name: "Perang Tabuk", jawiName: "ڤراڠ تبوك", pageNumber: "15", topics: "Ujian Kesetiaan" },
  { id: "t5-s3", subjectId: "sirah", year: 5, name: "Haji Wada'", jawiName: "حج وداع", pageNumber: "30", topics: "Haji Terakhir" },
  { id: "t5-s4", subjectId: "sirah", year: 5, name: "Kewafatan Rasulullah", jawiName: "وفاتڽ رسول الله", pageNumber: "45", topics: "Wafat Baginda" },
  { id: "t5-s5", subjectId: "sirah", year: 5, name: "Kepimpinan Abu Bakar As-Siddiq", jawiName: "كڤيمڤينن ابو بكر الصديق", pageNumber: "60", topics: "Khalifah Pertama" },
  // Akhlak
  { id: "t5-ak1", subjectId: "akhlak", year: 5, name: "Adab Bermusyawarah", jawiName: "ادب برمشوارة", pageNumber: "1", topics: "Bersetuju & Hormat" },
  { id: "t5-ak2", subjectId: "akhlak", year: 5, name: "Adab Mengurus Masa", jawiName: "ادب مڠوروس ماس", pageNumber: "12", topics: "Kepentingan Masa" },
  { id: "t5-ak3", subjectId: "akhlak", year: 5, name: "Adab Menjaga Harta Awam", jawiName: "ادب منجاڬ harta عوام", pageNumber: "24", topics: "Tanggungjawab Sosial" },
  { id: "t5-ak4", subjectId: "akhlak", year: 5, name: "Adab Berkomunikasi", jawiName: "ادب بركومونيكاسي", pageNumber: "36", topics: "Lisan & Media Sosial" },
  // Jawi
  { id: "t5-j1", subjectId: "jawi", year: 5, name: "Seni Khat Thuluth", jawiName: "سني خط ثلث", pageNumber: "1", topics: "Pengenalan Asas" },
  { id: "t5-j2", subjectId: "jawi", year: 5, name: "Memperkaya Perbendaharaan Kata", jawiName: "ممڤركاي ڤربندهاراءن كات", pageNumber: "15", topics: "Istilah Baru" },
  { id: "t5-j3", subjectId: "jawi", year: 5, name: "Ejaan Kata Pinjaman", jawiName: "ايجاءن كات ڤينجمن", pageNumber: "30", topics: "Pelbagai Bahasa" },
  { id: "t5-j4", subjectId: "jawi", year: 5, name: "Menulis Rencana", jawiName: "منوليس رنچان", pageNumber: "45", topics: "Struktur Esei" },
  // Arab
  { id: "t5-ar1", subjectId: "arab", year: 5, name: "Al-Adad wal-Arqam (401-500)", jawiName: "الأرقام ٤٠١-٥٠٠", pageNumber: "1", topics: "Nombor 401-500" },
  { id: "t5-ar2", subjectId: "arab", year: 5, name: "As-Syuhur Al-Hijriyyah", jawiName: "الشهور الهجرية", pageNumber: "12", topics: "Bulan-bulan Hijri" },
  { id: "t5-ar3", subjectId: "arab", year: 5, name: "Al-Fusul wal-Jau", jawiName: "الفصول والجو", pageNumber: "24", topics: "Musim dan Cuaca" },
  { id: "t5-ar4", subjectId: "arab", year: 5, name: "Fil Madinah", jawiName: "في المدينة", pageNumber: "36", topics: "Bangunan di Bandar" },
  { id: "t5-ar5", subjectId: "arab", year: 5, name: "Wusailatul Naqli", jawiName: "وسائل النقل", pageNumber: "48", topics: "Kenderaan & Jalan raya" },
  { id: "t5-ar6", subjectId: "arab", year: 5, name: "Al-Mihan", jawiName: "المهن", pageNumber: "60", topics: "Cita-cita & Pekerjaan" },
  // Tajwid
  { id: "t5-tj1", subjectId: "tajwid", year: 5, name: "Waqaf Lazim & Jaiz", jawiName: "وقف لازم دان جائز", pageNumber: "1", topics: "Jenis Berhenti" },
  { id: "t5-tj2", subjectId: "tajwid", year: 5, name: "Waqaf Memadai (Kafi & Hasan)", jawiName: "وقف كافي دان حسن", pageNumber: "12", topics: "Maksud Berhenti" },
  { id: "t5-tj3", subjectId: "tajwid", year: 5, name: "Saktah", jawiName: "سكتة", pageNumber: "25", topics: "Berhenti Tanpa Nafas" },
  { id: "t5-tj4", subjectId: "tajwid", year: 5, name: "Sujud Tilawah", jawiName: "سجود تلاوة", pageNumber: "38", topics: "Ayat Sajdah" },
  { id: "t5-tj5", subjectId: "tajwid", year: 5, name: "Lafaz Jalalah", jawiName: "لفظ الجلالة", pageNumber: "50", topics: "Tafkhim & Tarqiq" },
  // Tauhid T6
  { id: "t6-t1", subjectId: "tauhid", year: 6, name: "Konsep Ketuhanan", jawiName: "كونسیڤ كجاءن", pageNumber: "1", topics: "Zat, Sifat, Af'al" },
  { id: "t6-t2", subjectId: "tauhid", year: 6, name: "Bahaya Syirik", jawiName: "بهايا شريك", pageNumber: "10", topics: "Khafi & Jali" },
  { id: "t6-t3", subjectId: "tauhid", year: 6, name: "Kufur & Nifaq", jawiName: "كفور دان نفاق", pageNumber: "20", topics: "Jenis & Kesan" },
  { id: "t6-t4", subjectId: "tauhid", year: 6, name: "Riddah & Khurafat", jawiName: "ردة دان خرافة", pageNumber: "30", topics: "Mencemarkan Akidah" },
  { id: "t6-t5", subjectId: "tauhid", year: 6, name: "Sifat 20 Lanjut", jawiName: "صيفت ٢٠ لنجوت", pageNumber: "40", topics: "Dalil Naqli & Aqli" },
  { id: "t6-t6", subjectId: "tauhid", year: 6, name: "Penyelewengan Akidah", jawiName: "ڤپيليوڠن عقيدة", pageNumber: "50", topics: "Ajaran Sesat" },
  { id: "t6-t7", subjectId: "tauhid", year: 6, name: "Kepentingan Akidah", jawiName: "كڤنتيڠن عقيدة", pageNumber: "60", topics: "Benteng Diri" },
  { id: "t6-t8", subjectId: "tauhid", year: 6, name: "Nama-nama Allah (Asmaul Husna)", jawiName: "اسماء الحسنى", pageNumber: "70", topics: "99 Nama" },
  { id: "t6-t9", subjectId: "tauhid", year: 6, name: "Tawhid Rububiyyah", jawiName: "توحيد ربوبية", pageNumber: "80", topics: "Allah Pentadbir" },
  { id: "t6-t10", subjectId: "tauhid", year: 6, name: "Tawhid Uluhiyyah", jawiName: "توحيد الوهية", pageNumber: "90", topics: "Allah Disembah" },
  // Sirah T6
  { id: "t6-s1", subjectId: "sirah", year: 6, name: "Saidina Umar bin Al-Khattab", jawiName: "سيدنا عمر بن الخطاب", pageNumber: "1", topics: "Keadilan" },
  { id: "t6-s2", subjectId: "sirah", year: 6, name: "Saidina Uthman bin Affan", jawiName: "سيدنا عثمان بن عفان", pageNumber: "12", topics: "Dermawan" },
  { id: "t6-s3", subjectId: "sirah", year: 6, name: "Saidina Ali bin Abi Talib 2", jawiName: "سيدنا علي بن ابي طالب ٢", pageNumber: "22", topics: "Kepahlawanan" },
  { id: "t6-s4", subjectId: "sirah", year: 6, name: "Kegemilangan Islam", jawiName: "كڬميلڠن اسلام", pageNumber: "32", topics: "Tamadun" },
  { id: "t6-s5", subjectId: "sirah", year: 6, name: "Sumbangan Tokoh Islam", jawiName: "سومبڠن تاوكوه اسلام", pageNumber: "45", topics: "Ilmuwan" },
  { id: "t6-s6", subjectId: "sirah", year: 6, name: "Islam di Tanah Melayu", jawiName: "اسلام د تانه ملايو", pageNumber: "55", topics: "Sejarah Awal" },
  { id: "t6-s7", subjectId: "sirah", year: 6, name: "Wali Songo", jawiName: "ولي سوڠو", pageNumber: "65", topics: "Dakwah Nusantara" },
  { id: "t6-s8", subjectId: "sirah", year: 6, name: "Adab Berdakwah", jawiName: "ادب بربأوه", pageNumber: "75", topics: "Cara Rasulullah" },
  { id: "t6-s9", subjectId: "sirah", year: 6, name: "Umat Terbaik", jawiName: "امة ترباءيق", pageNumber: "85", topics: "Khaira Ummah" },
  { id: "t6-s10", subjectId: "sirah", year: 6, name: "Ibrah dari Sirah", jawiName: "عبرة دري سيرة", pageNumber: "95", topics: "Pengajaran Hidup" },
  // Fiqh T6
  { id: "t6-f1", subjectId: "fiqh", year: 6, name: "Zakat Tanaman", jawiName: "زكاة تانمن", pageNumber: "1", topics: "Padi & Buah" },
  { id: "t6-f2", subjectId: "fiqh", year: 6, name: "Zakat Ternakan", jawiName: "زكاة ترنكن", pageNumber: "10", topics: "Lembu & Kambing" },
  { id: "t6-f3", subjectId: "fiqh", year: 6, name: "Hukum Jenayah Islam", jawiName: "حكوم جنايه اسلام", pageNumber: "20", topics: "Pengenalan Hudud" },
  { id: "t6-f4", subjectId: "fiqh", year: 6, name: "Qisas & Takzir", jawiName: "قصاص دان تعزیر", pageNumber: "30", topics: "Keadilan" },
  { id: "t6-f5", subjectId: "fiqh", year: 6, name: "Muamalat", jawiName: "معاملات", pageNumber: "40", topics: "Jual Beli" },
  { id: "t6-f6", subjectId: "fiqh", year: 6, name: "Munakahat", jawiName: "مناكحات", pageNumber: "50", topics: "Perkahwinan Beserta Wali" },
  { id: "t6-f7", subjectId: "fiqh", year: 6, name: "Talak & Rujuk", jawiName: "طلاق دان رجوع", pageNumber: "60", topics: "Asas" },
  { id: "t6-f8", subjectId: "fiqh", year: 6, name: "Makanan Halal & Haram", jawiName: "ماكنن حلال دان حرام", pageNumber: "70", topics: "Sembelihan" },
  { id: "t6-f9", subjectId: "fiqh", year: 6, name: "Penyembelihan", jawiName: "ڤپمبليهن", pageNumber: "80", topics: "Rukun & Syarat" },
  { id: "t6-f10", subjectId: "fiqh", year: 6, name: "Qurban & Akikah", jawiName: "قربان دان عقيقة", pageNumber: "90", topics: "Hukum & Cara" },
  // Akhlak T6
  { id: "t6-ak1", subjectId: "akhlak", year: 6, name: "Adab Berjihad", jawiName: "ادب برجيهاد", pageNumber: "1", topics: "Memperbaiki Diri" },
  { id: "t6-ak2", subjectId: "akhlak", year: 6, name: "Adab Cintakan Negara", jawiName: "ادب چينتاكن نڬارا", pageNumber: "12", topics: "Patriotisme Islam" },
  { id: "t6-ak3", subjectId: "akhlak", year: 6, name: "Adab Menjaga Maruah", jawiName: "ادب منجاڬ مروه", pageNumber: "22", topics: "Harga Diri" },
  { id: "t6-ak4", subjectId: "akhlak", year: 6, name: "Sifat Zuhud", jawiName: "صيفت زهد", pageNumber: "32", topics: "Tidak Gilakan Dunia" },
  { id: "t6-ak5", subjectId: "akhlak", year: 6, name: "Sifat Wara'", jawiName: "صيفت ورع", pageNumber: "42", topics: "Berhati-hati" },
  { id: "t6-ak6", subjectId: "akhlak", year: 6, name: "Tanggungjawab Sosial", jawiName: "تڠڬوڠجواب سوسيال", pageNumber: "52", topics: "Membantu Fakir" },
  { id: "t6-ak7", subjectId: "akhlak", year: 6, name: "Adab Menjaga Persekitaran", jawiName: "ادب منجاڬ ڤرسكيترن", pageNumber: "62", topics: "Ekologi Islam" },
  { id: "t6-ak8", subjectId: "akhlak", year: 6, name: "Adab Menuntut Hak", jawiName: "ادب منونتوت حق", pageNumber: "72", topics: "Sopan & Tegas" },
  { id: "t6-ak9", subjectId: "akhlak", year: 6, name: "Kesan Akhlak Mazmumah", jawiName: "كسن اخلاق مذمومة", pageNumber: "82", topics: "Kesan Buruk" },
  { id: "t6-ak10", subjectId: "akhlak", year: 6, name: "Penyempurnaan Akhlak", jawiName: "ڤپمڤورناءن اخلاق", pageNumber: "92", topics: "Insan Kamil" },
  // Jawi T6
  { id: "t6-j1", subjectId: "jawi", year: 6, name: "Khat Riq'ah", jawiName: "خط رقعة", pageNumber: "1", topics: "Asas Tulisan Cepat" },
  { id: "t6-j2", subjectId: "jawi", year: 6, name: "Penulisan Kreatif", jawiName: "ڤنوليسن كرياتيف", pageNumber: "15", topics: "Puisi & Cerpen" },
  { id: "t6-j3", subjectId: "jawi", year: 6, name: "Pemerkasaan Jawi", jawiName: "ڤمركاساءن جاوي", pageNumber: "25", topics: "Papan Tanda" },
  { id: "t6-j4", subjectId: "jawi", year: 6, name: "Ejaan Teknikal", jawiName: "ايجاءن تيكنيكل", pageNumber: "35", topics: "Sains & Komputer" },
  { id: "t6-j5", subjectId: "jawi", year: 6, name: "Sejarah Tulisan Jawi", jawiName: "سجاره توليسن جاوي", pageNumber: "45", topics: "Asal-usul" },
  { id: "t6-j6", subjectId: "jawi", year: 6, name: "Kajian Manuskrip", jawiName: "كاجين مانوسكريڤ", pageNumber: "55", topics: "Kitab Lama" },
  { id: "t6-j7", subjectId: "jawi", year: 6, name: "Latihan Imla'", jawiName: "لاتيهن امالء", pageNumber: "65", topics: "Dikte" },
  { id: "t6-j8", subjectId: "jawi", year: 6, name: "Penerbitan Digital Jawi", jawiName: "ڤنربيتن ديجيتل جاوي", pageNumber: "75", topics: "Font & Keyboard" },
  { id: "t6-j9", subjectId: "jawi", year: 6, name: "Membaca Karya Klasik", jawiName: "ممباچ كاري كالسيك", pageNumber: "85", topics: "Hikayat" },
  { id: "t6-j10", subjectId: "jawi", year: 6, name: "Masa Depan Jawi", jawiName: "ماس دڤن جاوي", pageNumber: "95", topics: "Pelestarian" },
  // Arab T6
  { id: "t6-ar1", subjectId: "arab", year: 6, name: "Al-Adad wal-Arqam (501-1000)", jawiName: "األرقام ٥٠١-١٠٠٠", pageNumber: "1", topics: "Numbers up to 1000" },
  { id: "t6-ar2", subjectId: "arab", year: 6, name: "Al-Adad Al-Tartibi", jawiName: "العدد الترتيبي", pageNumber: "10", topics: "Ordinal Numbers" },
  { id: "t6-ar3", subjectId: "arab", year: 6, name: "Fil Mat'am (Restaurant)", jawiName: "في المطعم", pageNumber: "20", topics: "Eating out" },
  { id: "t6-ar4", subjectId: "arab", year: 6, name: "As-Siha (Health)", jawiName: "الصحة", pageNumber: "30", topics: "Medical terms" },
  { id: "t6-ar5", subjectId: "arab", year: 6, name: "At-Teknolojia", jawiName: "التكنولوجيا", pageNumber: "40", topics: "Technology terms" },
  { id: "t6-ar6", subjectId: "arab", year: 6, name: "Al-Ma'rad (Exhibition)", jawiName: "المعرض", pageNumber: "50", topics: "At the fair" },
  { id: "t6-ar7", subjectId: "arab", year: 6, name: "Af'alul Amr (Command)", jawiName: "أفعال األمر", pageNumber: "60", topics: "Command Verbs" },
  { id: "t6-ar8", subjectId: "arab", year: 6, name: "An-Nahyu (Prohibition)", jawiName: "النهي", pageNumber: "70", topics: "Negative Commands" },
  { id: "t6-ar9", subjectId: "arab", year: 6, name: "Al-Khutbah wal-Kalam", jawiName: "الخطبة والكالم", pageNumber: "80", topics: "Speech & Dialogue" },
  { id: "t6-ar10", subjectId: "arab", year: 6, name: "Al-Hiwar wal-Istima", jawiName: "الحوار واالستماع", pageNumber: "90", topics: "Listening & Conversation" },
  // Tajwid T6
  { id: "t6-tj1", subjectId: "tajwid", year: 6, name: "Fawatih Al-Suwar", jawiName: "فواتح السور", pageNumber: "1", topics: "Huruf muqatta'ah" },
  { id: "t6-tj2", subjectId: "tajwid", year: 6, name: "Idgham Mutamasilain 2", jawiName: "إدغام متماثلين ٢", pageNumber: "10", topics: "Hukum lanjutan" },
  { id: "t6-tj3", subjectId: "tajwid", year: 6, name: "Idgham Mutajanisain", jawiName: "إدغام متجانسين", pageNumber: "20", topics: "Sama makhraj" },
  { id: "t6-tj4", subjectId: "tajwid", year: 6, name: "Idgham Mutaqaribain", jawiName: "إدغام متقاربين", pageNumber: "30", topics: "Dekat makhraj" },
  { id: "t6-tj5", subjectId: "tajwid", year: 6, name: "Adab Tilawah", jawiName: "أدب تلاوة", pageNumber: "40", topics: "Adab zahir & batin" },
  { id: "t6-tj6", subjectId: "tajwid", year: 6, name: "Ulangkaji Nun Sukun", jawiName: "اولڠكاجي نون سوكون", pageNumber: "50", topics: "Persiapan peperiksaan" },
  { id: "t6-tj7", subjectId: "tajwid", year: 6, name: "Ulangkaji Mim Sukun", jawiName: "اولڠكاجي ميم سوكون", pageNumber: "60", topics: "Persiapan peperiksaan" },
  { id: "t6-tj8", subjectId: "tajwid", year: 6, name: "Ulangkaji Mad-mad", jawiName: "اولڠكاجي مد٢", pageNumber: "70", topics: "Persiapan peperiksaan" },
  { id: "t6-tj9", subjectId: "tajwid", year: 6, name: "Tahsin Juzu' Amma 1", jawiName: "تحسين جز عم ١", pageNumber: "80", topics: "Latihan" },
  { id: "t6-tj10", subjectId: "tajwid", year: 6, name: "Tahsin Juzu' Amma 2", jawiName: "تحسين جز عم ٢", pageNumber: "90", topics: "Latihan" },
];

export const QUIZZES: Quiz[] = [
  {
    id: "q-t1-t1",
    chapterId: "t1-t1",
    title: "Ujian Rukun Islam & Iman",
    questions: [
      {
        question: "Berapakah Rukun Islam?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "Rukun Islam ada 5 perkara."
      },
      {
        question: "Apakah Rukun Islam yang pertama?",
        options: ["Mengucap Dua Kalimah Syahadah", "Solat 5 Waktu", "Berpuasa di Bulan Ramadan", "Menunaikan Haji"],
        correctAnswer: 0,
        explanation: "Pecara pertama adalah Syahadah."
      },
      {
        question: "Membayar Zakat adalah Rukun Islam yang ke...",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "Zakat adalah Rukun Islam ke-4."
      },
      {
        question: "Berapakah Rukun Iman?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: "Rukun Iman ada 6 perkara."
      },
      {
        question: "Rukun Iman yang pertama ialah Beriman kepada...",
        options: ["Malaikat", "Kitab", "Allah", "Rasul"],
        correctAnswer: 2,
        explanation: "Asas iman bermula dengan percaya kepada Allah SWT."
      }
    ]
  },
  {
    id: "q-t1-ar2",
    chapterId: "t1-ar2",
    title: "Kuiz Nombor Arab (1-50)",
    questions: [
      {
        question: "Apakah maksud 'Wahid' (واحد)?",
        options: ["Satu", "Dua", "Tiga", "Empat"],
        correctAnswer: 0,
        explanation: "Wahid bermaksud satu."
      },
      {
        question: "Pilih perkataan Arab untuk nombor 5.",
        options: ["Arba'ah", "Khamsah", "Sittah", "Sab'ah"],
        correctAnswer: 1,
        explanation: "Khamsah (خمسة) bermaksud lima."
      },
      {
        question: "Nombor 10 dalam bahasa Arab ialah...",
        options: ["Tis'ah", "Thamaniyah", "Asyarah", "Sittah"],
        correctAnswer: 2,
        explanation: "Asyarah (عشرة) bermaksud sepuluh."
      }
    ]
  },
  {
    id: "q-t3-ar1",
    chapterId: "t3-ar1",
    title: "Ad-Dad wal Arqam (200-300)",
    questions: [
      {
        question: "Bagaimana mengeja '200' dalam Bahasa Arab?",
        options: ["Mi'atani", "Arba'u miah", "Khamsah miah", "Salasu miah"],
        correctAnswer: 0,
        explanation: "Mi'atani (مائتان) bermaksud dua ratus."
      },
      {
        question: "Miah (مائة) + Israni (اثنان) = ...",
        options: ["Miah wa Israni (102)", "Mi'atani (200)", "Salasu miah (300)", "Miah (100)"],
        correctAnswer: 0,
        explanation: "Miah wa Israni ialah 102."
      },
      {
        question: "Pilih nombor yang betul untuk 'Salasu miah' (ثلاثمائة).",
        options: ["100", "200", "300", "400"],
        correctAnswer: 2,
        explanation: "Salasu miah bermaksud tiga ratus."
      }
    ]
  },
  {
    id: "q-t3-ar5",
    chapterId: "t3-ar5",
    title: "Kuiz Al-Adawatul Manziliyah (Alatan Rumah)",
    questions: [
      {
        question: "Apakah maksud 'Hatif' (هاتف)?",
        options: ["Televisyen", "Telefon", "Kipas", "Sofa"],
        correctAnswer: 1,
        explanation: "Hatif bermaksud telefon."
      },
      {
        question: "Pilih perkataan Arab bagi 'Kipas'.",
        options: ["Mirwahah", "Arikah", "Tilfiziyun", "Mukayyif"],
        correctAnswer: 0,
        explanation: "Mirwahah (مروحة) bermaksud kipas."
      },
      {
        question: "Manakah antara berikut bermaksud 'Sofa'?",
        options: ["Mukayyif", "Hatif", "Arikah", "Tilfiziyun"],
        correctAnswer: 2,
        explanation: "Arikah (أريكة) bermaksud sofa."
      },
      {
        question: "Apakah maksud 'Tilfiziyun' (تلفزيون)?",
        options: ["Radio", "Komputer", "Telefon", "Televisyen"],
        correctAnswer: 3,
        explanation: "Tilfiziyun bermaksud televisyen."
      }
    ]
  },
  {
    id: "q-t3-ar6",
    chapterId: "t3-ar6",
    title: "Kuiz Al-Adawatul Mathbakhiyah (Alatan Dapur)",
    questions: [
      {
        question: "Apakah maksud 'Mil'aqah' (ملعقة)?",
        options: ["Pinggan", "Sudu", "Garpu", "Pisau"],
        correctAnswer: 1,
        explanation: "Mil'aqah bermaksud sudu."
      },
      {
        question: "Pilih perkataan Arab bagi 'Garpu'.",
        options: ["Mil'aqah", "Syaukah", "Sohun", "Sikkin"],
        correctAnswer: 1,
        explanation: "Syaukah (شوكة) bermaksud garpu."
      },
      {
        question: "Sohun (صحن) bermaksud...",
        options: ["Mangkuk", "Cawan", "Pinggan", "Sudu"],
        correctAnswer: 2,
        explanation: "Sohun bermaksud pinggan."
      },
      {
        question: "Apakah alat yang digunakan untuk memotong (Pisau) dalam Bahasa Arab?",
        options: ["Sikkin", "Ibriq", "Kub", "Qidrun"],
        correctAnswer: 0,
        explanation: "Sikkin (سكين) bermaksud pisau."
      },
      {
        question: "Ibriq (إبريق) bermaksud...",
        options: ["Cerek/Jag", "Cawan", "Kuali", "Periuk"],
        correctAnswer: 0,
        explanation: "Ibriq bermaksud cerek atau jag air."
      }
    ]
  },
  {
    id: "q-t3-ar2",
    chapterId: "t3-ar2",
    title: "Kuiz Fi Madrasati (Di Sekolah)",
    questions: [
      {
        question: "Apakah maksud 'Madrasah' (مدرسة)?",
        options: ["Rumah", "Sekolah", "Masjid", "Taman"],
        correctAnswer: 1,
        explanation: "Madrasah bermaksud sekolah."
      },
      {
        question: "Pilih perkataan Arab bagi 'Pejabat'.",
        options: ["Faslun", "Maktabah", "Idarah", "Hadiqah"],
        correctAnswer: 2,
        explanation: "Idarah (إدارة) bermaksud pejabat."
      },
      {
        question: "Manakah antara berikut bermaksud 'Perpustakaan'?",
        options: ["Maktabah", "Mat'am", "Musalla", "Mal'ab"],
        correctAnswer: 0,
        explanation: "Maktabah (مكتبة) bermaksud perpustakaan."
      },
      {
        question: "Apakah maksud 'Faslun' (فصل)?",
        options: ["Kelas", "Kantin", "Padang", "Bilik Guru"],
        correctAnswer: 0,
        explanation: "Faslun bermaksud kelas."
      }
    ]
  },
  {
    id: "q-t3-ar3",
    chapterId: "t3-ar3",
    title: "Kuiz Al-Adawatul Dirasiyah (Peralatan Sekolah)",
    questions: [
      {
        question: "Apakah maksud 'Qalamun' (قلم)?",
        options: ["Buku", "Pembaris", "Pensel/Pen", "Pemadam"],
        correctAnswer: 2,
        explanation: "Qalamun bermaksud pen atau pensel."
      },
      {
        question: "Pilih perkataan Arab bagi 'Buku'.",
        options: ["Kitabun", "Karrasatun", "Mistaratun", "Mimsahatun"],
        correctAnswer: 0,
        explanation: "Kitabun (كتاب) bermaksud buku."
      },
      {
        question: "Apakah maksud 'Mistaratun' (مسطرة)?",
        options: ["Pemadam", "Pembaris", "Beg", "Pensel Warna"],
        correctAnswer: 1,
        explanation: "Mistaratun bermaksud pembaris."
      },
      {
        question: "Manakah perkataan Arab bagi 'Beg'?",
        options: ["Haqibatun", "Mimsahatun", "Qalamul Rasas", "Mibraatun"],
        correctAnswer: 0,
        explanation: "Haqibatun (حقيبة) bermaksud beg."
      }
    ]
  },
  {
    id: "q-t3-ar4",
    chapterId: "t3-ar4",
    title: "Kuiz Baiti Jannati (Rumahku Syurgaku)",
    questions: [
      {
        question: "Apakah maksud 'Baitun' (بيت)?",
        options: ["Sekolah", "Rumah", "Kedai", "Pejabat"],
        correctAnswer: 1,
        explanation: "Baitun bermaksud rumah."
      },
      {
        question: "Pilih perkataan Arab bagi 'Bilik Tidur'.",
        options: ["Ghurfatun Naumi", "Ghurfatul Julusi", "Hammamatun", "Matbakhun"],
        correctAnswer: 0,
        explanation: "Ghurfatun Naumi (غرفة النوم) bermaksud bilik tidur."
      },
      {
        question: "Manakah antara berikut bermaksud 'Dapur'?",
        options: ["Sohun", "Matbakhun", "Hadiqah", "Baitun"],
        correctAnswer: 1,
        explanation: "Matbakhun (مطبخ) bermaksud dapur."
      },
      {
        question: "Apakah maksud 'Ghurfatul Julusi' (غرفة الجلوس)?",
        options: ["Bilik Air", "Bilik Tidur", "Ruang Tamu", "Ruang Makan"],
        correctAnswer: 2,
        explanation: "Ghurfatul Julusi bermaksud ruang tamu atau ruang duduk."
      }
    ]
  },
  {
    id: "q-t3-ar7",
    chapterId: "t3-ar7",
    title: "Kuiz A'dhaul Jism (Anggota Badan)",
    questions: [
      {
        question: "Apakah maksud 'Ra'sun' (رأس)?",
        options: ["Rambut", "Kepala", "Mata", "Telinga"],
        correctAnswer: 1,
        explanation: "Ra'sun bermaksud kepala."
      },
      {
        question: "Pilih perkataan Arab bagi 'Mata'.",
        options: ["Anfun", "Ainun", "Uznun", "Lisanun"],
        correctAnswer: 1,
        explanation: "Ainun (عين) bermaksud mata."
      },
      {
        question: "Apakah maksud 'Uznun' (أذن)?",
        options: ["Telinga", "Hidung", "Mulut", "Tangan"],
        correctAnswer: 0,
        explanation: "Uznun bermaksud telinga."
      },
      {
        question: "Manakah perkataan Arab bagi 'Hidung'?",
        options: ["Sadrun", "Anfun", "Batnun", "Rijlun"],
        correctAnswer: 1,
        explanation: "Anfun (أنف) bermaksud hidung."
      }
    ]
  },
  {
    id: "q-t1-s1",
    chapterId: "t1-s1",
    title: "Latihan Nasab Rasulullah",
    questions: [
      {
        question: "Siapakah nama bapa Rasulullah SAW?",
        options: ["Abu Talib", "Abdullah", "Abdul Muttalib", "Abu Bakar"],
        correctAnswer: 1,
        explanation: "Bapa Nabi ialah Abdullah bin Abdul Muttalib."
      },
      {
        question: "Siapa nama ibu Rasulullah SAW?",
        options: ["Halimah", "Aminah", "Khadijah", "Aisyah"],
        correctAnswer: 1,
        explanation: "Ibu Nabi ialah Aminah binti Wahhab."
      },
      {
        question: "Siapakah nama datuk Rasulullah SAW?",
        options: ["Abdul Muttalib", "Abu Talib", "Abbas", "Hamzah"],
        correctAnswer: 0,
        explanation: "Abdul Muttalib ialah datuk Nabi yang mengasuhnya."
      }
    ]
  },
  {
    id: "q-t1-f1",
    chapterId: "t1-f1",
    title: "Kuiz Rukun Islam (Fiqh)",
    questions: [
      {
        question: "Berapakah bilangan Rukun Islam?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
        explanation: "Rukun Islam ada mengandungi 5 perkara."
      },
      {
        question: "Rukun Islam yang ketiga adalah...",
        options: ["Solat 5 Waktu", "Mengeluarkan Zakat", "Berpuasa di Bulan Ramadan", "Menunaikan Haji"],
        correctAnswer: 1,
        explanation: "Mengeluarkan Zakat adalah Rukun Islam yang ke-3."
      }
    ]
  },
  {
    id: "q-t1-ak1",
    chapterId: "t1-ak1",
    title: "Kuiz Adab Makan dan Minum",
    questions: [
      {
        question: "Kita disunatkan makan menggunakan tangan...",
        options: ["Kiri", "Kanan", "Kedua-duanya", "Bebas"],
        correctAnswer: 1,
        explanation: "Nabi SAW mengajar kita makan menggunakan tangan kanan."
      },
      {
        question: "Apakah yang perlu dibaca sebelum makan?",
        options: ["Bismillah", "Alhamdulillah", "Allahuakbar", "Subhanallah"],
        correctAnswer: 0,
        explanation: "Ucapkan Bismillah sebelum mula makan untuk mendapat keberkatan."
      }
    ]
  },
  {
    id: "q-t1-j1",
    chapterId: "t1-j1",
    title: "Kuiz Huruf Tunggal Jawi",
    questions: [
      {
        question: "Berapakah bilangan titik pada huruf 'Ba' (ب)?",
        options: ["Satu di atas", "Satu di bawah", "Dua di atas", "Tiada titik"],
        correctAnswer: 1,
        explanation: "Huruf Ba (ب) mempunyai satu titik di bahagian bawah."
      },
      {
        question: "Huruf apakah yang bentuknya seperti perahu dan mempunyai 3 titik di atas?",
        options: ["Ta", "Tha", "Nya", "Pa"],
        correctAnswer: 1,
        explanation: "Huruf Tha (ث) mempunyai 3 titik di atas."
      }
    ]
  }
];
