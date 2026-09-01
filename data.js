/*
  Sirah Nabawiyah — data konten
  Sumber utama: Ar-Rahiq Al-Makhtum, Syaikh Shafiyyurrahman Al-Mubarakfuri
  Edisi Indonesia: Pustaka Al-Kautsar, penerjemah Kathur Suhardi
  Rujukan digital: https://archive.org/details/sirahnabawiyah_201911

  Editor cukup menyunting berkas ini. Tidak perlu menyentuh app.js.
  Pisahkan paragraf dengan "\n\n".
*/

export var SIRAH_EDITION = "Pustaka Al-Kautsar, terjemahan Kathur Suhardi";
export var SIRAH_PUBLISHER = "Pustaka Al-Kautsar, Jakarta";
export var SIRAH_SOURCE_URL = "https://archive.org/details/sirahnabawiyah_201911";

function src(chapter, subchapter) {
  return {
    book: "Ar-Rahiq Al-Makhtum",
    author: "Syaikh Shafiyyurrahman Al-Mubarakfuri",
    chapter: chapter,
    subchapter: subchapter || null,
    edition: SIRAH_EDITION,
    publisher: SIRAH_PUBLISHER,
    page: null,
    type: "Sirah"
  };
}

export var ARCHIVE_HERO = {
  url: "https://images.pexels.com/photos/38461953/pexels-photo-38461953.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
  alt: "Bentang kota Makkah masa kini di antara pegunungan.",
  credit: "Musaddek Sayek / Pexels",
  creditUrl: "https://www.pexels.com/photo/aerial-view-of-makkah-cityscape-in-saudi-arabia-38461953/"
};

export var CHAPTERS = [
  {
    number: 1,
    slug: "chapter-01",
    title: "Sebelum Kenabian",
    shortTitle: "Sebelum Kenabian",
    arabicTerm: null,
    stage: "Jazirah Arab sebelum risalah",
    location: "Jazirah Arab",
    introduction: "Al-Mubarakfuri membuka sirah dengan tempat. Jazirah Arab, kabilah-kabilahnya, jalur dagang, berhala, dan kekuasaan sekitarnya menjadi latar sebelum Muhammad \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 diutus.",
    editorialHeadline: "Sebelum perjalanan dimulai, pahami tanah tempat sejarah bertumbuh.",
    tone: "sand",
    hero: {
      url: "https://images.pexels.com/photos/24415233/pexels-photo-24415233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Ngarai berbatu dan pepohonan palem di Arab Saudi tanpa figur manusia.",
      credit: "Abdulhalim Mudag / Pexels",
      creditUrl: "https://www.pexels.com/photo/view-of-the-wadi-disah-canyon-in-tabuk-saudi-arabia-24415233/",
      context: "Visual atmosferis Jazirah Arab masa kini, bukan rekonstruksi kondisi historis."
    },
    events: [
      {
        title: "Bentang Jazirah Arab",
        slug: "bentang-jazirah-arab",
        location: "Jazirah Arab",
        period: "Sebelum kenabian",
        summary: "Menurut bahasa, kata Arab berarti padang pasir: tanah gundul dan gersang yang tiada air dan tanamannya. Nama itu sudah lama dilekatkan pada jazirah ini, sebagaimana suatu kaum sering dinamai dari tanah yang mereka diami.\n\nSecara geografis, Jazirah Arab dibatasi Laut Merah dan Gurun Sinai di barat, Teluk Arab dan sebagian Irak Selatan di timur, Laut Arab yang bersambung dengan Samudera Hindia di selatan, serta negeri Syam dan sebagian Irak di utara. Penulis mencatat ada sedikit perbedaan dalam penentuan batas.\n\nLuasnya disebut membentang antara satu hingga 1,3 juta mil persegi. Gurun di sekelilingnya menjadi semacam benteng alam. Karena itu penduduk jazirah hidup merdeka di antara dua imperium besar masa itu, Romawi dan Persia.",
        context: "Al-Mubarakfuri membuka kitab dengan latar tempat karena sirah, menurutnya, tidak dapat dipahami tanpa membandingkan kondisi sebelum risalah dan sesudahnya.\n\nLetak jazirah mempertemukan daratan dan lautan. Barat laut menjadi pintu ke Afrika. Timur laut menjadi kunci menuju bangsa non-Arab, Timur Tengah, India, dan Cina. Setiap benua mempertemukan lautnya dengan jazirah ini.\n\nKarena letak itu, utara dan selatan jazirah menjadi tempat berlabuh berbagai bangsa untuk tukar-menukar perniagaan, peradaban, agama, dan seni. Tanah yang tandus di dalam, tetapi terbuka ke dunia di luar.",
        source: src("Posisi Bangsa Arab dan Kaumnya", "Letak geografis Jazirah Arab")
      },
      {
        title: "Masyarakat dan Kehidupan Sosial",
        slug: "masyarakat-dan-sosial",
        location: "Jazirah Arab",
        period: "Sebelum kenabian",
        summary: "Para sejarawan membagi bangsa Arab menjadi tiga. Arab Ba'idah adalah kaum terdahulu yang jejaknya tidak lengkap, seperti Ad dan Tsamud. Arab Aribah berasal dari keturunan Qahtan. Arab Musta'ribah berasal dari keturunan Ismail \u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645, disebut juga Arab Adnaniyah.\n\nArab Aribah berpusat di Yaman, lalu berkembang menjadi kabilah-kabilah. Yang terkenal antara lain Himyar dan Kahlan. Dari Kahlan muncul Azad, lalu Aus dan Khazraj yang menetap di Yatsrib.\n\nKehidupan sosial berpusat pada kabilah, nasab, dan kehormatan. Ada kedermawanan, keberanian, dan kecintaan pada syair. Ada pula fanatisme suku, peperangan, judi, minuman keras, dan pada sebagian kalangan tradisi mengubur anak perempuan hidup-hidup.",
        context: "Al-Mubarakfuri memaparkan perpindahan suku-suku Kahlan dari Yaman setelah tekanan perdagangan dan persaingan internal. Azad bergerak ke utara; dari keturunan mereka lahir Aus dan Khazraj di Madinah.\n\nArab Musta'ribah dinisbatkan kepada Ibrahim \u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645 yang menempatkan Hajar dan Ismail di lembah Makkah. Mata air Zamzam memancar, lalu kabilah Jurhum tinggal di sana. Dari garis Ismail lahir Adnan, lalu Mudhar dan Quraisy.\n\nPenulis menilai kondisi sosial menjelang kenabian berada pada titik lemah: hubungan umat rapuh, kekuasaan menumpuk harta, dan rakyat sering tertindas.",
        source: src("Posisi Bangsa Arab dan Kaumnya", "Bangsa Arab dan gambaran masyarakat Jahiliah")
      },
      {
        title: "Perdagangan, Agama, dan Politik",
        slug: "perdagangan-agama-politik",
        location: "Jazirah Arab",
        period: "Sebelum kenabian",
        summary: "Perniagaan menjadi tulang punggung penghidupan. Perjalanan dagang hanya aman jika keamanan terjaga, dan itu hampir hanya terjadi pada bulan-bulan haram. Saat itulah pasar seperti Ukaz, Dzul Majaz, dan Majannah ramai.\n\nSecara agama, mayoritas penduduk menyembah berhala. Ka'bah dikelilingi berhala; Hubal disebut berhala terbesar, di samping Lata, Uzza, dan Manat. Yahudi tinggal di Yatsrib. Najran menjadi pusat Nasrani. Ada pula sisa-sisa orang hanif yang menolak berhala.\n\nPolitik jazirah terpecah. Yaman memiliki raja-raja. Hirah berada di bawah pengaruh Persia. Ghassan di Syam menjadi kaki tangan Romawi. Makkah, di bawah Quraisy, menjadi pusat keagamaan dan dagang yang relatif merdeka.",
        context: "Al-Mubarakfuri menguraikan kekuasaan di Yaman hingga peristiwa pasukan bergajah Abrahah, yang gagal meruntuhkan Ka'bah. Peristiwa itu menjadi latar Tahun Gajah.\n\nQuraisy mengatur pelayanan haji, pengairan, dan panji perang melalui jabatan adat. Kehormatan mereka terkait Ka'bah. Karena itu, seruan tauhid kelak bukan hanya soal keyakinan, melainkan juga soal tatanan kota dan dagang.\n\nIndustri hampir tidak berkembang. Yang menopang hidup adalah dagang, peternakan, dan rampasan antarsuku. Kondisi ekonomi mengikuti kondisi sosial: rapuh dan mudah goyah jika keamanan rusak.",
        source: src("Kekuasaan, agama, dan kondisi masyarakat Arab", "Perdagangan, berhala, dan tata politik")
      }
    ],
    mapPoints: [
      { id: "makkah", label: "Makkah", x: 48, y: 58, note: "Pusat keagamaan dan dagang Quraisy.", eventSlug: "perdagangan-agama-politik" },
      { id: "yatsrib", label: "Yatsrib", x: 43, y: 36, note: "Tempat menetap Aus, Khazraj, dan kabilah Yahudi.", eventSlug: "masyarakat-dan-sosial" },
      { id: "jalur", label: "Jalur perdagangan", x: 54, y: 45, note: "Utara dan selatan jazirah sebagai tempat tukar perniagaan. Garis konseptual.", eventSlug: "bentang-jazirah-arab" }
    ]
  },

  {
    number: 2,
    slug: "chapter-02",
    title: "Kelahiran dan Masa Muda",
    shortTitle: "Kelahiran & Masa Muda",
    arabicTerm: null,
    stage: "Makkah sebelum kenabian",
    location: "Makkah",
    introduction: "Nasab, kelahiran pada Tahun Gajah, masa asuhan, dagang, pernikahan dengan Khadijah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627, dan peletakan Hajar Aswad. Disampaikan lewat teks, tanpa visual sosok.",
    editorialHeadline: "Sebuah kehidupan tumbuh di Makkah, diceritakan tanpa menggambarkan sosoknya.",
    tone: "earth",
    hero: {
      url: "https://images.pexels.com/photos/36722040/pexels-photo-36722040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Bentang gurun berbatu di bawah langit terang tanpa figur manusia.",
      credit: "Jennifer / Pexels",
      creditUrl: "https://www.pexels.com/photo/scenic-desert-landscape-with-majestic-rock-formation-36722040/",
      context: "Visual atmosferis, bukan rekonstruksi Makkah pada masa kelahiran Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645."
    },
    events: [
      {
        title: "Nasab dan Kelahiran",
        slug: "nasab-dan-kelahiran",
        location: "Makkah",
        period: "Tahun Gajah",
        summary: "Nasab beliau sampai kepada Adnan, lalu kepada Ismail bin Ibrahim \u0639\u0644\u064a\u0647\u0645\u0627 \u0627\u0644\u0633\u0644\u0627\u0645. Ayahnya Abdullah bin Abdul Muthalib. Ibunya Aminah binti Wahb dari Bani Zuhrah. Abdullah wafat di Yatsrib ketika Aminah masih hamil.\n\nAbdul Muthalib memberi nama Muhammad. Kelahiran terjadi pada Tahun Gajah, hari Senin. Al-Mubarakfuri menetapkan tanggal 9 Rabiul Awal. Perhitungan Masehi dalam kitab adalah hasil kajian penulis, bukan kesepakatan mutlak sejarawan.\n\nTahun Gajah merujuk pada gagalnya pasukan bergajah Abrahah meruntuhkan Ka'bah. Peristiwa itu menjadi latar tahun kelahiran.",
        context: "Al-Mubarakfuri merinci nasab dalam tiga bagian. Sampai Adnan disepakati. Dari Adnan sampai Ibrahim masih diperselisihkan rinciannya. Selebihnya dinisbatkan kepada para nabi terdahulu.\n\nBani Hasyim adalah cabang Quraisy yang memegang siqayah, pengairan jemaah haji. Abdul Muthalib menemukan kembali Zamzam. Kedudukan ini menjelaskan tempat keluarga beliau di tengah Makkah.\n\nArsip ini tidak menampilkan bayi atau anak. Yang dibaca adalah nasab, waktu, dan tempat.",
        source: src("Nasab dan keluarga Nabi", "Kelahiran")
      },
      {
        title: "Penyusuan dan Masa Kanak-kanak",
        slug: "penyusuan-dan-kanak-kanak",
        location: "Makkah dan Bani Sa'd",
        period: "Masa kanak-kanak",
        summary: "Beliau disusui Tsuwaibah, budak Abu Lahab, kemudian Halimah binti Abu Dzu'aib dari Bani Sa'd. Adat Quraisy menyusukan anak ke pedalaman agar lidah fasih dan tubuh kuat.\n\nSetelah beberapa tahun di Bani Sa'd, beliau dikembalikan kepada Aminah. Aminah membawa beliau ke Yatsrib menziarahi makam Abdullah, lalu wafat di Abwa ketika beliau berusia enam tahun.\n\nPengasuhan berpindah kepada Abdul Muthalib. Setelah kakek wafat, Abu Thalib mengasuh beliau dengan penuh perhatian meskipun hidup sederhana.",
        context: "Al-Mubarakfuri menuturkan bahwa Halimah merasakan kelapangan rezeki selama mengasuh. Peristiwa pembelahan dada diriwayatkan sebagai bagian masa kanak-kanak, lalu Halimah mengembalikan beliau karena khawatir.\n\nUmmu Aiman menyertai perjalanan ke Abwa dan kemudian mengasuh. Abdul Muthalib sangat menyayangi cucunya dan menyediakan tempat dekat dirinya di Hijir Ismail.\n\nTidak ada visual anak. Yang diceritakan adalah rangkaian asuhan: pedalaman, ibu, kakek, lalu paman.",
        source: src("Kelahiran dan masa pertumbuhan", "Penyusuan, wafatnya Aminah, dan pengasuhan")
      },
      {
        title: "Masa Muda dan Perdagangan",
        slug: "masa-muda-dan-perdagangan",
        location: "Makkah dan jalur Syam",
        period: "Sebelum kenabian",
        summary: "Beliau menggembala kambing, pekerjaan yang juga pernah dilakukan para nabi. Masyarakat Makkah mengenal kejujuran dan amanahnya hingga menjuluki beliau Al-Amin.\n\nSemasa muda beliau menyaksikan Perang Fijar pada bulan-bulan haram, lalu menghadiri Hilf Al-Fudhul di rumah Abdullah bin Jud'an: perjanjian menolong orang teraniaya.\n\nBeliau ikut perniagaan. Ada perjalanan ke Syam bersama Abu Thalib. Kemudian beliau memimpin kafilah dagang Khadijah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627.",
        context: "Al-Mubarakfuri menekankan bahwa beliau menjauhi penyembahan berhala, minuman keras, dan kebiasaan jahiliah. Dua kali keinginan mengikuti hiburan malam terhalang, menurut riwayat yang dikutip penulis.\n\nPerjalanan ke Syam bersama Abu Thalib disebut termasuk pertemuan dengan rahib Bahira. Penulis menyajikannya sebagai bagian riwayat sirah.\n\nKhadijah mendengar dari pembantunya, Maisarah, tentang amanah dan keberkahan dagang. Dari situ peminangan disusun.",
        source: src("Masa remaja dan perniagaan", "Fijar, Hilf Al-Fudhul, dan perdagangan")
      },
      {
        title: "Pernikahan dengan Khadijah",
        slug: "pernikahan-khadijah",
        location: "Makkah",
        period: "Usia 25 tahun",
        summary: "Khadijah binti Khuwailid \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 adalah pedagang terhormat Quraisy. Ia pernah menikah dan telah janda. Setelah perjalanan dagang ke Syam, ia tertarik pada amanah beliau.\n\nPeminangan disampaikan melalui Nafisah binti Munyah. Abu Thalib turut dalam akad. Usia beliau dua puluh lima tahun. Usia Khadijah disebut empat puluh tahun.\n\nDari pernikahan ini lahir antara lain Qasim, Zainab, Ruqayyah, Ummu Kultsum, Fathimah, dan Abdullah. Semua putra wafat di masa kanak-kanak.",
        context: "Al-Mubarakfuri menempatkan rumah tangga ini sebagai ketenangan jauh sebelum wahyu. Khadijah bukan hanya istri, melainkan penopang dan saksi pertama risalah.\n\nMaskawin disebut dua puluh ekor unta muda. Yang hadir dalam akad adalah Bani Hasyim dan pemuka Mudhar.\n\nTidak ada dialog rekaan. Yang dicatat adalah urutan: dagang, amanah, peminangan, akad, lalu rumah yang kelak menjadi tempat kembali setelah wahyu pertama.",
        source: src("Pernikahan dengan Khadijah")
      },
      {
        title: "Peletakan Hajar Aswad",
        slug: "peletakan-hajar-aswad",
        location: "Makkah",
        period: "Sekitar usia 35 tahun",
        summary: "Ka'bah sempat retak karena banjir dan usia bangunan. Quraisy merenovasi dengan syarat hanya memakai harta yang bersih. Ketika tiba pada peletakan Hajar Aswad, kabilah-kabilah berselisih, hampir terjadi pertumpahan darah.\n\nMereka menerima usul: orang yang pertama masuk masjid diminta memutuskan. Muhammad \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 masuk, dan mereka ridha karena mengenalnya sebagai Al-Amin.\n\nBeliau meletakkan batu di atas kain. Setiap kabilah memegang ujung kain, lalu beliau yang menempatkannya. Perselisihan selesai tanpa mengunggulkan satu kabilah.",
        context: "Al-Mubarakfuri merinci ukuran bangunan setelah renovasi dan posisi Hajar Aswad. Yang penting bagi sirah bukan angka arsitektur, melainkan cara beliau menyelesaikan konflik.\n\nPeristiwa ini menunjukkan kedudukan beliau di tengah Quraisy sebelum kenabian: dipercaya, diminta menengah, dan diterima.\n\nArsip ini tidak menampilkan tubuh. Yang berbicara adalah Ka'bah, batu, dan keputusan.",
        source: src("Renovasi Ka'bah dan peletakan Hajar Aswad")
      }
    ],
    mapPoints: []
  },

  {
    number: 3,
    slug: "chapter-03",
    title: "Awal Kenabian",
    shortTitle: "Awal Kenabian",
    arabicTerm: "\u0627\u0644\u0648\u062d\u064a",
    stage: "Risalah dimulai",
    location: "Jabal Nur, Makkah",
    introduction: "Gunung, malam, dan kesunyian menjadi ruang visual. Wahyu pertama dan orang-orang pertama yang beriman disampaikan lewat teks. Tidak ada visual Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 atau Jibril \u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645.",
    editorialHeadline: "Di sinilah risalah dimulai.",
    tone: "night",
    hero: {
      url: "https://images.pexels.com/photos/11733932/pexels-photo-11733932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Langit malam berbintang di atas bentang gurun Arab Saudi tanpa figur manusia.",
      credit: "Ahmed Darwish / Pexels",
      creditUrl: "https://www.pexels.com/photo/silhouette-of-trees-under-starry-night-11733932/",
      context: "Visual atmosferis malam, bukan rekonstruksi Gua Hira atau peristiwa wahyu."
    },
    events: [
      {
        title: "Gua Hira",
        slug: "gua-hira",
        location: "Jabal Nur, Makkah",
        period: "Menjelang usia empat puluh tahun",
        summary: "Menjelang usia empat puluh tahun, Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 semakin banyak menyendiri. Beliau ber-tahannuts di Gua Hira pada Jabal Nur, sekitar dua mil dari Makkah, membawa bekal roti dan air.\n\nGua itu tidak besar. Penulis menyebut panjangnya sekitar empat hasta. Di bulan Ramadan beliau tinggal lebih lama, memberi makan orang miskin yang datang, dan merenungkan keagungan alam.\n\nSebelum wahyu, beliau melihat mimpi yang jelas seperti fajar subuh. Kecintaan pada khalwat semakin kuat.",
        context: "Al-Mubarakfuri memaparkan bahwa jarak pemikiran beliau dengan kaumnya semakin jauh. Keyakinan berhala tidak memuaskan. Jalan yang jelas belum terbuka, hingga Allah menentukan saatnya.\n\nHira menjadi tempat menyendiri, bukan panggung. Arsip ini menolak visual malaikat, wajah, atau siluet yang dimaksud sebagai beliau.\n\nYang harus dibaca: tempat, waktu, dan persiapan jiwa sebelum Iqra.",
        source: src("Di Gua Hira", "Tahannuts menjelang wahyu")
      },
      {
        title: "Wahyu Pertama",
        slug: "wahyu-pertama",
        location: "Gua Hira",
        period: "Ramadan, usia empat puluh tahun",
        summary: "Pada bulan Ramadan tahun ketiga masa pengasingan di Hira, wahyu pertama turun: perintah Iqra. Lima ayat awal Surah Al-'Alaq menjadi pembuka risalah.\n\nAl-Mubarakfuri mengikuti riwayat Aisyah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627. Beliau kembali kepada Khadijah dalam keadaan guncang. Khadijah menenangkan, menegaskan bahwa Allah tidak akan menyia-nyiakan orang yang menyambung silaturahmi, jujur, dan menolong yang lemah.\n\nKhadijah menemui Waraqah bin Naufal. Waraqah menyatakan bahwa yang datang adalah Namus yang pernah datang kepada Musa \u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645.",
        context: "Ada perbedaan pendapat tentang bulan turunnya wahyu pertama. Al-Mubarakfuri menguatkan Ramadan dengan ayat tentang turunnya Al-Qur'an pada bulan itu dan pada Lailatul Qadar.\n\nPeristiwa ini tidak divisualisasikan. Tidak ada bentuk Jibril \u0639\u0644\u064a\u0647 \u0627\u0644\u0633\u0644\u0627\u0645, tidak ada wajah, tidak ada dialog sinematik tambahan.\n\nYang ditampilkan: ayat yang terverifikasi, tempat Hira, dan rujukan kitab.",
        source: src("Jibril turun membawa wahyu", "Permulaan wahyu")
      },
      {
        title: "Awal Sebuah Amanah",
        slug: "awal-amanah",
        location: "Makkah",
        period: "Awal kenabian",
        summary: "Setelah jeda pewahyuan yang disebut fatrah, wahyu berlanjut. Surah Al-Muddatsir memerintahkan untuk bangkit, memberi peringatan, mengagungkan Tuhan, membersihkan pakaian, dan menjauhi berhala.\n\nOrang pertama yang beriman adalah Khadijah. Kemudian Ali bin Abi Thalib, Zaid bin Haritsah, dan Abu Bakar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0645.\n\nAbu Bakar membawa masuk sejumlah pemuka: Utsman, Zubair, Abdurrahman bin Auf, Sa'd bin Abi Waqqash, dan Thalhah. Rumah Al-Arqam di kaki Shafa menjadi tempat berkumpul.",
        context: "Al-Mubarakfuri membedakan nubuwah yang dimulai dengan Iqra dan risalah yang dimulai dengan perintah memberi peringatan.\n\nTiga tahun pertama adalah pembentukan inti jemaah: pengajaran, shalat, dan ikatan. Jumlahnya masih kecil, tetapi fondasinya dalam.\n\nDari sini perjalanan masuk ke bab dakwah Makkah: dari rumah menuju kota.",
        source: src("Permulaan wahyu dan orang-orang yang pertama masuk Islam")
      }
    ],
    mapPoints: [
      { id: "makkah", label: "Makkah", x: 34, y: 68, note: "Kota tempat beliau kembali setelah wahyu pertama.", eventSlug: "awal-amanah" },
      { id: "jabal-nur", label: "Jabal Nur", x: 64, y: 35, note: "Gunung tempat Gua Hira.", eventSlug: "gua-hira" },
      { id: "hira", label: "Gua Hira", x: 72, y: 23, note: "Tempat turunnya wahyu pertama.", eventSlug: "wahyu-pertama" }
    ],
    quran: {
      arabic: "\u0627\u0642\u0652\u0631\u064e\u0623\u0652 \u0628\u0650\u0627\u0633\u0652\u0645\u0650 \u0631\u064e\u0628\u0651\u0650\u0643\u064e \u0627\u0644\u0651\u064e\u0630\u0650\u064a \u062e\u064e\u0644\u064e\u0642\u064e \u06dd \u062e\u064e\u0644\u064e\u0642\u064e \u0627\u0644\u0652\u0625\u0650\u0646\u0633\u064e\u0627\u0646\u064e \u0645\u0650\u0646\u0652 \u0639\u064e\u0644\u064e\u0642\u064d \u06dd \u0627\u0642\u0652\u0631\u064e\u0623\u0652 \u0648\u064e\u0631\u064e\u0628\u0651\u064f\u0643\u064e \u0627\u0644\u0652\u0623\u064e\u0643\u0652\u0631\u064e\u0645\u064f \u06dd \u0627\u0644\u0651\u064e\u0630\u0650\u064a \u0639\u064e\u0644\u0651\u064e\u0645\u064e \u0628\u0650\u0627\u0644\u0652\u0642\u064e\u0644\u064e\u0645\u0650 \u06dd \u0639\u064e\u0644\u0651\u064e\u0645\u064e \u0627\u0644\u0652\u0625\u0650\u0646\u0633\u064e\u0627\u0646\u064e \u0645\u064e\u0627 \u0644\u064e\u0645\u0652 \u064a\u064e\u0639\u0652\u0644\u064e\u0645\u0652",
      translation: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan! Dia menciptakan manusia dari segumpal darah. Bacalah! Tuhanmulah Yang Mahamulia, yang mengajar (manusia) dengan pena. Dia mengajarkan manusia apa yang tidak diketahuinya.",
      reference: "QS. Al-'Alaq: 1-5",
      translationSource: "Terjemahan Kementerian Agama Republik Indonesia"
    }
  },

  {
    number: 4,
    slug: "chapter-04",
    title: "Dakwah di Makkah",
    shortTitle: "Dakwah di Makkah",
    arabicTerm: "\u0627\u0644\u062f\u0639\u0648\u0629",
    stage: "Seruan dan perlawanan",
    location: "Makkah dan Habasyah",
    introduction: "Perjalanan dakwah dibaca fase demi fase: dari ruang terbatas menuju ruang kota, lalu perlawanan, penyiksaan, dan hijrah ke Habasyah.",
    editorialHeadline: "Seruan bergerak dari ruang terbatas menuju ruang kota.",
    tone: "earth",
    hero: {
      url: "https://images.pexels.com/photos/10961006/pexels-photo-10961006.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Bentang pegunungan berbatu di Arab Saudi saat cahaya sore tanpa figur manusia.",
      credit: "Raziuddin Farooqi / Pexels",
      creditUrl: "https://www.pexels.com/photo/rocky-mountains-on-the-desert-10961006/",
      context: "Visual atmosferis masa kini, bukan rekonstruksi kota Makkah pada masa dakwah."
    },
    events: [
      {
        title: "Dakwah Sembunyi-sembunyi",
        slug: "dakwah-sembunyi",
        location: "Makkah",
        period: "Tiga tahun pertama kenabian",
        summary: "Tiga tahun pertama, dakwah berlangsung diam-diam. Orang-orang masuk Islam satu per satu. Mereka berkumpul di Dar Al-Arqam, di kaki Bukit Shafa, untuk belajar Al-Qur'an dan shalat tanpa menarik perhatian Quraisy.\n\nAl-Mubarakfuri menyebut tahap ini sebagai pembentukan inti jemaah. Jumlahnya masih kecil, tetapi fondasinya dalam.\n\nDar Al-Arqam dipilih karena letaknya terlindung. Dari rumah itu Islam tumbuh sebelum menjadi urusan kota.",
        context: "Pola dakwah pada tahap ini pelan dan terbatas. Metodenya: mulai dari orang yang dikenal siap menerima, lalu memperluas lingkaran dengan hati-hati.\n\nShalat sudah diajarkan. Ikatan ukhuwah menjadi pelindung di tengah kota yang belum ramah.\n\nSetelah tiga tahun, perintah terbuka akan memindahkan seruan dari rumah ke bukit dan pasar.",
        source: src("Tahapan pertama dakwah", "Dakwah secara sembunyi-sembunyi")
      },
      {
        title: "Dakwah Terang-terangan",
        slug: "dakwah-terang",
        location: "Makkah",
        period: "Tahun keempat kenabian",
        summary: "Setelah tiga tahun, turun perintah memperingatkan kerabat terdekat, lalu berdakwah secara terbuka. Beliau naik ke Bukit Shafa dan menyeru Quraisy.\n\nReaksi pertama datang dari kalangan sendiri. Abu Lahab mencerca. Islam tidak lagi urusan rumah tangga, melainkan urusan kota.\n\nAbu Thalib tetap melindungi keponakannya meskipun belum beriman. Perlindungan kabilah ini menahan Quraisy dari tindakan yang lebih jauh, untuk sementara.",
        context: "Al-Mubarakfuri mengaitkan tahap ini dengan ayat peringatan kepada kerabat dekat. Seruan di Shafa menjadi titik balik publik.\n\nQuraisy mulai menyusun strategi: ejekan, tawaran dunia, dan tekanan kepada Abu Thalib. Dakwah terang-terangan berlangsung dari tahun keempat hingga sekitar tahun kesepuluh kenabian.\n\nDari sini masuk fase perlawanan yang semakin terorganisasi.",
        source: src("Dakwah secara terang-terangan", "Peringatan kepada kerabat dan seruan di Shafa")
      },
      {
        title: "Perlawanan Quraisy",
        slug: "perlawanan-quraisy",
        location: "Makkah",
        period: "Periode Makkah",
        summary: "Quraisy menempuh banyak jalan: ejekan, tawaran harta dan kekuasaan, tekanan kepada Abu Thalib, fitnah kepada pendatang musim haji, dan adu opini bahwa Al-Qur'an adalah sihir atau syair.\n\nUtbah bin Rabi'ah menemui beliau dengan tawaran dunia. Beliau menjawab dengan membacakan Al-Qur'an, bukan dengan tawar-menawar.\n\nPerlawanan ini sistematis: menahan penyebaran, memecah keluarga, dan menjaga dagang serta kedudukan Ka'bah.",
        context: "Al-Mubarakfuri merinci pertemuan pemuka Quraisy dengan Abu Thalib agar Muhammad \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 dihentikan. Abu Thalib menolak menyerahkan keponakannya.\n\nMereka juga bersepakat tentang label yang akan disampaikan kepada jemaah haji agar orang luar tidak mendengar dakwah. Fitnah menjadi alat politik kota.\n\nKetika jalan kata-kata gagal, tekanan fisik terhadap yang lemah semakin keras.",
        source: src("Berbagai cara menghadang dakwah")
      },
      {
        title: "Penyiksaan",
        slug: "penyiksaan",
        location: "Makkah",
        period: "Periode Makkah",
        summary: "Yang paling berat menimpa Muslim dari kalangan lemah dan hamba sahaya. Bilal, keluarga Yasir, Khabbab, dan sejumlah sahabat lain disiksa agar meninggalkan Islam.\n\nSumayyah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627 termasuk yang wafat dalam penyiksaan. Yasir juga wafat. Ammar mengalami tekanan yang sangat berat.\n\nAbu Bakar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 membeli dan memerdekakan beberapa hamba sahaya yang disiksa, termasuk Bilal.",
        context: "Al-Mubarakfuri memaparkan penyiksaan sebagai fakta sejarah, bukan tontonan. Muslim yang memiliki pelindung kabilah relatif lebih aman, meskipun tetap diolok.\n\nDaftar orang yang disiksa disebut panjang. Siapa pun yang diketahui masuk Islam dari kalangan tanpa perlindungan, berisiko disakiti.\n\nFase ini menjelaskan mengapa hijrah ke Habasyah menjadi jalan menjaga agama, bukan pelarian dari risalah.",
        source: src("Penindasan dan penyiksaan")
      },
      {
        title: "Hijrah ke Habasyah",
        slug: "hijrah-habasyah",
        location: "Makkah menuju Habasyah",
        period: "Tahun kelima kenabian dan sesudahnya",
        summary: "Sebagian sahabat berhijrah ke Habasyah, negeri Najasyi yang dikenal adil. Hijrah pertama terjadi pada Rajab tahun kelima kenabian: dua belas lelaki dan empat perempuan, dipimpin Utsman bin Affan bersama Ruqayyah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0645\u0627.\n\nHijrah kedua lebih besar. Penulis menyebut delapan puluh tiga lelaki dan delapan belas atau sembilan belas perempuan. Quraisy mengirim utusan agar mereka dikembalikan.\n\nNajasyi menolak setelah mendengar Ja'far bin Abi Thalib dan bacaan Al-Qur'an tentang Maryam.",
        context: "Mereka sempat kembali setelah kabar palsu bahwa Quraisy masuk Islam, lalu berangkat lagi. Penulis menekankan ini hijrah pertama dalam Islam.\n\nTipu muslihat Quraisy di hadapan Najasyi gagal. Perlindungan Habasyah menjadi napas bagi sebagian jemaah sementara Makkah semakin sempit.\n\nDari sini bab ujian di Makkah berlanjut: boikot, duka, dan Thaif.",
        source: src("Hijrah ke Habasyah", "Hijrah pertama dan kedua")
      }
    ],
    mapPoints: [
      { id: "kabah", label: "Ka'bah", x: 48, y: 53, note: "Pusat orientasi kota dan keagamaan Quraisy.", eventSlug: "dakwah-terang" },
      { id: "dar-arqam", label: "Dar Al-Arqam", x: 67, y: 38, note: "Rumah Al-Arqam di kaki Shafa, tempat berkumpul pada fase sembunyi-sembunyi.", eventSlug: "dakwah-sembunyi" },
      { id: "jalur-kota", label: "Ruang kota Makkah", x: 31, y: 66, note: "Area naratif tempat perlawanan dan penyiksaan berlangsung.", eventSlug: "perlawanan-quraisy" },
      { id: "habasyah", label: "Arah Habasyah", x: 13, y: 27, note: "Arah hijrah ke negeri Najasyi. Bersifat konseptual.", eventSlug: "hijrah-habasyah" }
    ]
  },

  {
    number: 5,
    slug: "chapter-05",
    title: "Tahun-tahun Ujian",
    shortTitle: "Tahun-tahun Ujian",
    arabicTerm: null,
    stage: "Bertahan dalam tekanan",
    location: "Makkah, Habasyah, dan Thaif",
    introduction: "Fase tekanan dibaca dengan tenang dan tertahan. Tidak ada eksploitasi visual atas penderitaan.",
    editorialHeadline: "Tahan.",
    tone: "night",
    hero: {
      url: "https://images.pexels.com/photos/18717314/pexels-photo-18717314.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Bentang gurun dan pegunungan yang gelap saat senja tanpa figur manusia.",
      credit: "AXP Photography / Pexels",
      creditUrl: "https://www.pexels.com/photo/dawn-landscape-nature-18717314/",
      context: "Visual atmosferis, bukan rekonstruksi tempat atau suasana peristiwa sejarah."
    },
    events: [
      {
        title: "Tekanan dan Boikot",
        slug: "tekanan-dan-boikot",
        location: "Syi'ib Abu Thalib, Makkah",
        period: "Tahun ketujuh hingga kesepuluh kenabian",
        summary: "Quraisy menulis piagam pemutusan hubungan dengan Bani Hasyim dan Bani Muthalib: tidak boleh menikah, berdagang, atau duduk bersama mereka, kecuali jika Muhammad \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 diserahkan.\n\nMereka terdesak ke lorong Abu Thalib selama sekitar tiga tahun. Kelaparan menjadi ujian harian. Sebagian orang Quraisy diam-diam mengirim bantuan.\n\nBoikot berakhir setelah piagam ditemukan telah dimakan rayap, kecuali kalimat yang menyebut nama Allah.",
        context: "Al-Mubarakfuri menuturkan bahwa piagam itu digantung di dalam Ka'bah. Tekanan ini bersifat ekonomi dan sosial sekaligus.\n\nAnak-anak menangis kelaparan. Mereka bertahan dengan apa pun yang bisa dimakan. Beberapa tokoh Quraisy akhirnya merasa piagam itu keterlaluan dan bergerak membatalkannya.\n\nPenulis menempatkan peristiwa ini sebagai puncak tekanan kolektif di Makkah, bukan sebagai pertempuran.",
        source: src("Pemboikotan secara menyeluruh", "Syi'ib Abu Thalib")
      },
      {
        title: "Dua Kehilangan",
        slug: "dua-kehilangan",
        location: "Makkah",
        period: "Tahun kesepuluh kenabian",
        summary: "Tidak lama setelah boikot usai, Abu Thalib wafat, disusul Khadijah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627. Tahun itu disebut Tahun Duka Cita.\n\nAbu Thalib tetap melindungi Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 hingga akhir hayat, meskipun menurut riwayat yang diikuti penulis ia tidak mengucapkan syahadat.\n\nKhadijah adalah istri, penenang, dan orang pertama yang beriman. Quraisy semakin berani menyakiti beliau setelah pelindung kabilah tiada.",
        context: "Al-Mubarakfuri menyebut tahun itu dinamai Amul-huzni karena penderitaan yang bertumpuk.\n\nKehilangan dua penopang dalam waktu berdekatan mengubah posisi beliau di kota. Perlindungan sosial melemah, tekanan meningkat.\n\nTidak ada dialog fiktif atau adegan kematian yang ditambahkan di arsip ini.",
        source: src("Tahun Duka Cita", "Wafatnya Abu Thalib dan Khadijah")
      },
      {
        title: "Perjalanan ke Thaif",
        slug: "perjalanan-thaif",
        location: "Thaif",
        period: "Syawal, tahun kesepuluh kenabian",
        summary: "Beliau pergi ke Thaif bersama Zaid bin Haritsah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 mencari perlindungan dan peluang dakwah di kalangan Tsaqif.\n\nTiga bersaudara pemuka Tsaqif menolak. Penduduk melempari beliau hingga terluka. Zaid melindungi dengan tubuhnya.\n\nDi sebuah kebun, seorang hamba Nasrani bernama Addas datang membawa anggur. Perjalanan pulang ditempuh dalam luka dan doa.",
        context: "Al-Mubarakfuri menempatkan peristiwa ini sebagai salah satu hari tersulit dalam sirah.\n\nSetelah kembali mendekati Makkah, beliau masuk kota di bawah jaminan perlindungan Al-Muth'im bin Adi, karena tanpa jaminan itu beliau tidak aman memasuki kotanya sendiri.\n\nTidak ada visual sosok dan tidak ada dialog rekaan di luar yang diriwayatkan sumber.",
        source: src("Rasulullah di Thaif")
      },
      {
        title: "Menjelang Hijrah",
        slug: "menjelang-hijrah",
        location: "Makkah dan Aqabah",
        period: "Tahun kesebelas hingga ketiga belas kenabian",
        summary: "Pada musim haji, beliau menemui kabilah-kabilah. Pada tahun kesebelas kenabian, enam orang Khazraj berjumpa di Mina dan masuk Islam.\n\nTahun berikutnya dua belas orang berbaiat pada Baiat Aqabah pertama. Mus'ab bin Umair diutus mengajar di Yatsrib.\n\nPada musim berikutnya, tujuh puluh tiga lelaki dan dua perempuan berbaiat pada Baiat Aqabah kedua untuk menolong Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 sebagaimana menolong diri mereka sendiri.",
        context: "Al-Mubarakfuri memperlihatkan bahwa penerimaan Yatsrib tidak terjadi sekaligus, melainkan bertahap selama tiga musim haji.\n\nKerja Mus'ab bin Umair di Yatsrib membuat Islam menyebar di perkampungan Anshar sebelum Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 tiba.\n\nInilah persiapan hijrah, bukan pelarian mendadak.",
        source: src("Islamnya orang-orang Anshar dan Baiat Aqabah")
      }
    ],
    mapPoints: []
  },

  {
    number: 6,
    slug: "chapter-06",
    title: "Isra' Mi'raj",
    shortTitle: "Isra' Mi'raj",
    arabicTerm: "\u0627\u0644\u0625\u0633\u0631\u0627\u0621 \u0648\u0627\u0644\u0645\u0639\u0631\u0627\u062c",
    stage: "Peristiwa agung tanpa visualisasi yang gaib",
    location: "Makkah",
    introduction: "Kegelapan, cahaya, dan tipografi menyampaikan keagungan tanpa memberi bentuk pada perkara gaib.",
    editorialHeadline: "Yang gaib tidak digambar. Keagungannya tetap terasa.",
    tone: "night",
    hero: {
      url: "https://images.pexels.com/photos/11733932/pexels-photo-11733932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Langit malam berbintang tanpa manusia atau bentuk makhluk gaib.",
      credit: "Ahmed Darwish / Pexels",
      creditUrl: "https://www.pexels.com/photo/silhouette-of-trees-under-starry-night-11733932/",
      context: "Visual abstraktif berupa malam dan cahaya. Bukan gambaran Isra', Mi'raj, malaikat, atau alam gaib."
    },
    events: [
      {
        title: "Isra'",
        slug: "isra",
        location: "Dari Masjidil Haram menuju Masjidil Aqsa",
        period: "Sebelum hijrah",
        summary: "Pada suatu malam, Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 diperjalankan dari Masjidil Haram ke Masjidil Aqsa. Peristiwa ini disebut Isra'.\n\nAl-Qur'an menegaskannya pada awal Surah Al-Isra'. Rincian perjalanan gaib tidak divisualisasikan di arsip ini.\n\nAl-Mubarakfuri menempatkan peristiwa ini setelah ujian Thaif dan Tahun Duka Cita, sebagai peneguhan di tengah tekanan.",
        context: "Penulis menyebutkan beberapa pendapat tentang waktu terjadinya. Karena penanggalannya diperselisihkan, arsip ini tidak memilih satu tanggal tunggal.\n\nMenurut pendapat yang diikuti penulis, beliau diangkat dalam keadaan terjaga, bukan semata mimpi.\n\nArsip ini tidak menggambar Buraq, malaikat, atau arsitektur langit. Yang ditampilkan hanya tempat keberangkatan, ayat, dan sumber.",
        source: src("Isra' dan Mi'raj", "Isra'")
      },
      {
        title: "Mi'raj",
        slug: "miraj",
        location: "Perkara gaib tidak dipetakan",
        period: "Malam yang sama",
        summary: "Dari Masjidil Aqsa, beliau diangkat ke langit. Pada peristiwa ini shalat diwajibkan.\n\nAl-Mubarakfuri menuturkan pengurangan jumlah shalat dari lima puluh menjadi lima, dengan pahala yang tetap lima puluh.\n\nRincian alam gaib tidak dilukiskan. Keagungan cukup disampaikan oleh naskah dan kesunyian.",
        context: "Penulis meriwayatkan pertemuan dengan para nabi pada lapisan-lapisan langit sebagaimana dalam riwayat yang dirangkumnya.\n\nArsip ini tidak menampilkan surga, neraka, atau bentuk makhluk gaib. Jika suatu detil tidak diperlukan untuk memahami peristiwa, detil itu dibiarkan pada kitab sumber.\n\nYang tersisa untuk pembaca: shalat sebagai oleh-oleh malam itu.",
        source: src("Isra' dan Mi'raj", "Mi'raj dan kewajiban shalat")
      },
      {
        title: "Kembali ke Makkah",
        slug: "kembali-makkah",
        location: "Makkah",
        period: "Pagi harinya",
        summary: "Pagi harinya beliau menceritakan peristiwa itu. Banyak orang musyrik mendustakan dan menjadikannya bahan ejekan.\n\nMereka menguji beliau dengan pertanyaan tentang Baitul Maqdis. Abu Bakar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 membenarkan tanpa ragu.\n\nSebagian orang yang lemah imannya berbalik, sementara yang lain justru semakin teguh.",
        context: "Al-Mubarakfuri menjadikan respons masyarakat Makkah sebagai bagian penutup peristiwa.\n\nUjian ini memisahkan antara iman yang bersandar pada logika inderawi dan iman yang bersandar pada kebenaran pembawa berita.\n\nRingkasan tidak menambahkan percakapan sinematik dan tidak menyatakan rincian di luar pemaparan buku.",
        source: src("Isra' dan Mi'raj", "Reaksi Quraisy dan pembenaran Abu Bakar")
      }
    ],
    mapPoints: [],
    quran: {
      arabic: "\u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e \u0627\u0644\u0651\u064e\u0630\u0650\u064a \u0623\u064e\u0633\u0652\u0631\u064e\u0649\u0670 \u0628\u0650\u0639\u064e\u0628\u0652\u062f\u0650\u0647\u0650 \u0644\u064e\u064a\u0652\u0644\u064b\u0627 \u0645\u0651\u0650\u0646\u064e \u0627\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650 \u0627\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650 \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650 \u0627\u0644\u0652\u0623\u064e\u0642\u0652\u0635\u064e\u0627 \u0627\u0644\u0651\u064e\u0630\u0650\u064a \u0628\u064e\u0627\u0631\u064e\u0643\u0652\u0646\u064e\u0627 \u062d\u064e\u0648\u0652\u0644\u064e\u0647\u064f \u0644\u0650\u0646\u064f\u0631\u0650\u064a\u064e\u0647\u064f \u0645\u0650\u0646\u0652 \u0622\u064a\u064e\u0627\u062a\u0650\u0646\u064e\u0627",
      translation: "Mahasuci (Allah) yang telah memperjalankan hamba-Nya pada malam hari dari Masjidilharam ke Masjidilaqsa yang telah Kami berkahi sekelilingnya agar Kami perlihatkan kepadanya sebagian tanda-tanda (kebesaran) Kami.",
      reference: "QS. Al-Isra': 1",
      translationSource: "Terjemahan Kementerian Agama Republik Indonesia"
    }
  },

  {
    number: 7,
    slug: "chapter-07",
    title: "Hijrah",
    shortTitle: "Hijrah",
    arabicTerm: "\u0627\u0644\u0647\u062c\u0631\u0629",
    stage: "Perpindahan menuju Madinah",
    location: "Makkah menuju Madinah",
    introduction: "Perjalanan ditampilkan sebagai garis rute, perubahan cahaya, dan titik tempat. Tidak ada avatar atau representasi Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645.",
    editorialHeadline: "Sebuah garis meninggalkan Makkah dan bergerak menuju Madinah.",
    tone: "sand",
    hero: {
      url: "https://images.pexels.com/photos/12984808/pexels-photo-12984808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Lanskap gurun luas dan pegunungan tanpa figur manusia.",
      credit: "Nima Mot / Pexels",
      creditUrl: "https://www.pexels.com/photo/scenic-view-of-desert-and-mountains-12984808/",
      context: "Visual atmosferis perjalanan. Bukan rekonstruksi jalur Hijrah."
    },
    events: [
      {
        title: "Meninggalkan Makkah",
        slug: "meninggalkan-makkah",
        location: "Makkah",
        period: "Tahun ketiga belas kenabian / 1 H",
        summary: "Setelah Baiat Aqabah, para sahabat berangsur hijrah ke Yatsrib. Quraisy bermusyawarah di Dar An-Nadwah: menahan, mengusir, atau membunuh secara bersama agar tanggung jawab terbagi.\n\nRasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 keluar di malam hari bersama Abu Bakar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647. Beliau berangkat pada malam 27 Shafar menurut pemaparan penulis.\n\nAli \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 tidur di tempat tidur beliau untuk mengembalikan barang titipan yang masih dipegang beliau.",
        context: "Al-Mubarakfuri menekankan bahwa titipan orang Quraisy tetap dikembalikan meskipun mereka memusuhi. Amanah tidak gugur karena permusuhan.\n\nKeduanya keluar dari pintu belakang sebelum fajar dan bergerak ke arah selatan, berlawanan dengan arah Madinah, untuk mengelabui pengejaran.\n\nPerjalanan dimulai bukan sebagai pelarian kalah, melainkan sebagai perintah dan persiapan masyarakat baru.",
        source: src("Hijrah Nabi", "Perencanaan Quraisy dan keberangkatan")
      },
      {
        title: "Gua Tsur",
        slug: "gua-tsur",
        location: "Gua Tsur",
        period: "Tiga hari di awal hijrah",
        summary: "Beliau dan Abu Bakar bersembunyi di Gua Tsur selama tiga hari.\n\nAbdullah bin Abu Bakar membawa berita dari kota. Asma' binti Abu Bakar mengirim bekal. Amir bin Fuhairah menggembalakan kambing untuk menghapus jejak.\n\nQuraisy sampai di mulut gua, lalu pergi. Ayat tentang dua orang di dalam gua menjadi rujukan peristiwa ini.",
        context: "Al-Mubarakfuri memperlihatkan hijrah sebagai perpaduan tawakal dan perencanaan yang cermat: pemandu disiapkan, bekal diatur, informasi dijaga.\n\nQuraisy menawarkan hadiah besar bagi siapa yang menangkap beliau, sehingga pengejaran berlangsung serius.\n\nArsip ini tidak menambahkan kisah populer yang tidak dikunci penulis, dan tidak menampilkan visual manusia di dalam gua.",
        source: src("Di Gua Tsur")
      },
      {
        title: "Jalur Hijrah",
        slug: "jalur-hijrah",
        location: "Antara Makkah dan Madinah",
        period: "Hijrah",
        summary: "Setelah pencarian mereda, Abdullah bin Uraiqith memandu rombongan melalui jalur pesisir yang tidak biasa.\n\nPerjalanan melewati sejumlah tempat yang dirinci Ibnu Ishaq dan dikutip penulis, antara lain Usfan, Qudaid, dan Al-Arj.\n\nSuraqah bin Malik mengejar, lalu mundur. Rombongan singgah di kemah Ummu Ma'bad sebelum mendekati Yatsrib.",
        context: "Al-Mubarakfuri mencatat daftar tempat berdasarkan Ibnu Ishaq. Rute dipilih untuk menghindari jalan utama.\n\nPemandu adalah orang yang masih musyrik tetapi dipercaya karena keahliannya. Keahlian profesional dapat dipakai selama amanah.\n\nPeta di arsip ini hanya orientasi konseptual, bukan rekonstruksi geospasial.",
        source: src("Di jalan menuju Madinah")
      },
      {
        title: "Quba",
        slug: "quba",
        location: "Quba",
        period: "8 Rabiul Awal 1 H",
        summary: "Beliau tiba di Quba pada hari Senin, 8 Rabiul Awal tahun pertama Hijriah menurut penanggalan yang dipilih penulis, bertepatan dengan 23 September 622 M.\n\nBeliau tinggal beberapa hari di sana. Masjid Quba dibangun, masjid pertama dalam Islam.\n\nAli \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 menyusul setelah menunaikan amanah di Makkah.",
        context: "Quba adalah permukiman Bani Amr bin Auf di pinggiran Yatsrib.\n\nPendirian masjid menjadi tanda pertama bahwa hijrah adalah pembangunan, bukan sekadar pindah tempat.\n\nPenanggalan Masehi di atas mengikuti perhitungan penulis dan dicantumkan sebagai keterangan edisi.",
        source: src("Tiba di Quba")
      },
      {
        title: "Madinah",
        slug: "tiba-madinah",
        location: "Madinah",
        period: "Rabiul Awal 1 H",
        summary: "Dari Quba, beliau melanjutkan perjalanan pada hari Jumat dan menunaikan shalat Jumat di perkampungan Bani Salim bin Auf.\n\nBeliau memasuki Yatsrib. Penduduk menyambut dari atap dan jalan. Sejak hari itu kota tersebut dikenal sebagai Madinah.\n\nUnta beliau berhenti di tanah milik dua anak yatim Bani Najjar. Rumah Abu Ayyub Al-Anshari \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 menjadi tempat tinggal sementara.",
        context: "Al-Mubarakfuri menggambarkan sambutan Anshar sebagai hari yang monumental bagi kota itu.\n\nHijrah menandai dimulainya masyarakat baru, kalender Islam, dan pusat dakwah yang tidak lagi berada di bawah tekanan Quraisy sehari-hari.\n\nArsip ini tidak menampilkan wajah atau tubuh. Yang berbicara adalah tempat kedatangan dan naskah sumber.",
        source: src("Memasuki Madinah")
      }
    ],
    mapPoints: [
      { id: "makkah", label: "Makkah", x: 18, y: 76, note: "Titik keberangkatan hijrah.", eventSlug: "meninggalkan-makkah" },
      { id: "tsur", label: "Gua Tsur", x: 27, y: 87, note: "Persembunyian tiga hari. Penempatan konseptual.", eventSlug: "gua-tsur" },
      { id: "route", label: "Jalur Hijrah", x: 49, y: 58, note: "Rute pesisir yang tidak biasa. Garis bukan rekonstruksi geospasial.", eventSlug: "jalur-hijrah" },
      { id: "quba", label: "Quba", x: 76, y: 29, note: "Persinggahan dan pembangunan masjid pertama.", eventSlug: "quba" },
      { id: "madinah", label: "Madinah", x: 83, y: 19, note: "Tujuan hijrah dan pusat masyarakat baru.", eventSlug: "tiba-madinah" }
    ]
  },

  {
    number: 8,
    slug: "chapter-08",
    title: "Madinah",
    shortTitle: "Madinah",
    arabicTerm: "\u0627\u0644\u0645\u062f\u064a\u0646\u0629",
    stage: "Membangun masyarakat",
    location: "Madinah",
    introduction: "Palet menjadi hangat. Fokus berpindah dari perjalanan menuju pembentukan kehidupan bersama.",
    editorialHeadline: "Membangun masyarakat.",
    tone: "dawn",
    hero: {
      url: "https://images.pexels.com/photos/28170223/pexels-photo-28170223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Lanskap kering dengan pepohonan dan pegunungan di Tabuk, Arab Saudi.",
      credit: "French Sweetie / Pexels",
      creditUrl: "https://www.pexels.com/photo/desert-trees-28170223/",
      context: "Visual atmosferis Arab Saudi masa kini, bukan rekonstruksi Madinah pada masa Nabi."
    },
    events: [
      {
        title: "Kedatangan di Madinah",
        slug: "kedatangan-madinah",
        location: "Madinah",
        period: "1 H",
        summary: "Yatsrib menjadi Madinah. Muhajirin datang bertahap tanpa harta yang cukup. Anshar menyambut dan membuka rumah.\n\nMasyarakat baru lahir dari dua kelompok yang sebelumnya terpisah. Aus dan Khazraj, yang pernah bermusuhan dalam Perang Bu'ats, bertemu dalam Islam.\n\nDi kota itu juga ada kabilah Yahudi dan, belakangan, kelompok munafik yang menampakkan Islam tetapi menyimpan permusuhan.",
        context: "Al-Mubarakfuri menegaskan bahwa hijrah bukan hanya melepaskan diri dari cobaan, melainkan batu loncatan mendirikan masyarakat di negeri yang aman.\n\nTantangannya nyata: ekonomi Muhajirin, ketegangan lama antarsuku, hubungan dengan Yahudi, dan ancaman Quraisy dari luar.\n\nKedatangan ini bukan akhir perjalanan, melainkan awal pembangunan.",
        source: src("Masyarakat baru di Madinah", "Kondisi kota saat hijrah")
      },
      {
        title: "Pembangunan Masjid",
        slug: "pembangunan-masjid",
        location: "Madinah",
        period: "1 H",
        summary: "Masjid dibangun di tanah tempat unta menderum, milik dua anak yatim Bani Najjar yang kemudian dibeli.\n\nBangunannya sederhana: bata kering, atap pelepah kurma, lantai tanah. Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 ikut bekerja bersama para sahabat.\n\nDi sisinya didirikan Suffah bagi Muslim yang tidak memiliki rumah dan keluarga.",
        context: "Masjid menjadi pusat ibadah, musyawarah, pengajaran, penerimaan tamu, dan urusan masyarakat.\n\nAdzan disyariatkan pada masa awal ini. Kisah mimpi Abdullah bin Zaid dikutip penulis, dan Bilal \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 menjadi muadzin.\n\nRumah-rumah keluarga Nabi dibangun di sisi masjid. Tidak ada rekonstruksi arsitektur mewah pada arsip ini.",
        source: src("Membangun Masjid Nabawi")
      },
      {
        title: "Muhajirin dan Anshar",
        slug: "muhajirin-anshar",
        location: "Madinah",
        period: "1 H",
        summary: "Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 mempersaudarakan Muhajirin dan Anshar di rumah Anas bin Malik. Penulis menyebut sekitar sembilan puluh orang.\n\nAnshar menawarkan harta, rumah, dan kebun. Ikatan ini menjadi fondasi sosial Madinah, lebih kuat daripada ikatan nasab jahiliah.\n\nPersaudaraan itu sempat disertai hak waris, hingga kemudian ayat waris kerabat menghapusnya, sementara ikatan tolong-menolong tetap berlaku.",
        context: "Contoh yang terkenal adalah Abdurrahman bin Auf dan Sa'd bin Rabi'. Sa'd menawarkan separuh hartanya; Abdurrahman memilih ditunjukkan jalan ke pasar.\n\nAl-Mubarakfuri menekankan bahwa persaudaraan ini tindakan nyata, bukan slogan: menyangkut darah dan harta.\n\nDari sinilah lahir kemandirian Muhajirin dan kedermawanan Anshar sebagai watak masyarakat baru.",
        source: src("Mempersaudarakan kaum Muslimin")
      },
      {
        title: "Tatanan Masyarakat",
        slug: "tatanan-masyarakat",
        location: "Madinah",
        period: "1 H",
        summary: "Ditulis perjanjian yang mengatur kehidupan bersama: kaum Mukmin satu umat, saling menolong, tidak membiarkan orang tertekan, dan bahu-membahu menghadapi pihak yang hendak membatalkan perjanjian.\n\nHubungan dengan kelompok Yahudi diatur. Mereka tetap pada agama mereka, dengan hak dan kewajiban, termasuk ikut menjaga keamanan kota.\n\nPasar sendiri kemudian dibuka agar perekonomian tidak bergantung pada pihak yang memusuhi.",
        context: "Al-Mubarakfuri menempatkan piagam ini sebagai langkah menghapus fanatisme jahiliah dan menegakkan aturan yang luwes namun tegas.\n\nPenulis juga memaparkan munculnya kemunafikan setelah Islam menjadi kekuatan kota, khususnya pada diri Abdullah bin Ubay.\n\nPemerintahan berpusat pada wahyu, musyawarah, dan keadilan, bukan pada kepala kabilah.",
        source: src("Perjanjian dengan penduduk Madinah", "Tatanan sosial dan politik")
      }
    ],
    mapPoints: [
      { id: "quba", label: "Quba", x: 47, y: 77, note: "Pintu selatan kedatangan. Orientasi skematik.", eventSlug: "kedatangan-madinah" },
      { id: "masjid", label: "Masjid", x: 52, y: 48, note: "Pusat ibadah, pengajaran, dan musyawarah. Bukan denah historis.", eventSlug: "pembangunan-masjid" },
      { id: "permukiman", label: "Masyarakat Madinah", x: 69, y: 32, note: "Area Anshar, Muhajirin, dan kelompok lain.", eventSlug: "tatanan-masyarakat" }
    ]
  },

  {
    number: 9,
    slug: "chapter-09",
    title: "Perjuangan dan Perjanjian",
    shortTitle: "Perjuangan & Perjanjian",
    arabicTerm: null,
    stage: "Badar, Uhud, Khandaq, Hudaibiyah",
    location: "Madinah dan wilayah terkait",
    introduction: "Medan, arah, konteks, dan konsekuensi dibaca melalui topografi sederhana. Tidak ada antarmuka perang atau visual kekerasan.",
    editorialHeadline: "Bukan permainan perang. Ini sejarah pilihan dan konsekuensi.",
    tone: "earth",
    hero: {
      url: "https://images.pexels.com/photos/12607980/pexels-photo-12607980.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Gunung Uhud pada malam hari dilihat dari kejauhan tanpa adegan pertempuran.",
      credit: "Yasir G\u00fcrb\u00fcz / Pexels",
      creditUrl: "https://www.pexels.com/photo/mount-uhud-at-night-medina-saudi-arabia-12607980/",
      context: "Foto tempat masa kini. Tidak dimaksudkan sebagai rekonstruksi Perang Uhud."
    },
    events: [
      {
        title: "Badar",
        slug: "badar",
        location: "Badar",
        period: "17 Ramadan 2 H",
        summary: "Pasukan Muslim berangkat menghadang kafilah Abu Sufyan, lalu berhadapan dengan pasukan Quraisy di Badar.\n\nMenurut Al-Mubarakfuri, kaum Muslimin sekitar 313 orang: sekitar 82 atau 83 Muhajirin, selebihnya Anshar, dengan dua kuda dan tujuh puluh unta. Quraisy sekitar seribu orang.\n\nEmpat belas sahabat gugur. Tujuh puluh orang Quraisy terbunuh dan tujuh puluh tertawan, termasuk sejumlah pemuka. Abu Jahal termasuk yang tewas.",
        context: "Penulis merinci musyawarah sebelum bertempur. Muhajirin dan Anshar menyatakan kesiapan, dan itu menentukan keputusan maju.\n\nPosisi dekat sumber air dipilih atas usul Al-Hubab bin Al-Mundzir, contoh bahwa pendapat teknis dari sahabat diterima.\n\nBadar mengubah peta kekuatan. Kabar kekalahan mengguncang Makkah dan memicu tekad membalas.",
        editorialNote: "Medan dan keputusan, bukan spektakel pertempuran.",
        source: src("Perang Badar Kubra", "Jumlah pasukan, medan, dan hasil")
      },
      {
        title: "Uhud",
        slug: "uhud",
        location: "Gunung Uhud",
        period: "Syawal 3 H",
        summary: "Quraisy datang membalas Badar dengan sekitar tiga ribu pasukan. Kaum Muslimin keluar menuju Uhud; sekitar tiga ratus orang mundur bersama Abdullah bin Ubay, tersisa sekitar tujuh ratus.\n\nPasukan pemanah ditempatkan di lereng dan diperintahkan tidak meninggalkan posisi apa pun yang terjadi. Ketika kemenangan awal terlihat, sebagian turun.\n\nKhalid bin Walid, yang saat itu masih musyrik, memutari sayap. Keadaan berbalik. Hamzah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 gugur dan wajah Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 terluka.",
        context: "Al-Mubarakfuri menilai Uhud sebagai pertempuran yang tidak tuntas: masing-masing pihak mendapat kemenangan dan kerugian.\n\nPelajaran utamanya ketaatan. Penulis mengutip pembahasan Ibnul Qayyim dan Ibnu Hajar tentang hikmah di balik ujian ini: penyaringan barisan, terbukanya kemunafikan, dan pendidikan bagi umat.\n\nKeesokan harinya pasukan bergerak ke Hamra'ul Asad untuk memulihkan wibawa. Tidak ada simulasi tempur di arsip ini.",
        editorialNote: "Ujian dalam ketaatan.",
        source: src("Perang Uhud", "Posisi pemanah dan konsekuensi")
      },
      {
        title: "Khandaq",
        slug: "khandaq",
        location: "Madinah",
        period: "Syawal 5 H",
        summary: "Ahzab, gabungan Quraisy dan kabilah lain, mengepung Madinah. Penulis menyebut sekitar sepuluh ribu pasukan; kaum Muslimin sekitar tiga ribu.\n\nAtas usul Salman Al-Farisi \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647, parit digali di sisi kota yang terbuka. Setiap sepuluh orang menggali sekitar empat puluh hasta.\n\nPengepungan berlangsung dalam lapar, dingin, dan ketegangan. Koalisi akhirnya pecah dan angin kencang meruntuhkan perkemahan mereka.",
        context: "Al-Mubarakfuri menuturkan kerja penggalian yang dilakukan bersama, termasuk oleh Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 sendiri, dalam keadaan perut terikat karena lapar.\n\nAncaman bertambah dari dalam ketika Bani Quraizhah membatalkan perjanjian. Nu'aim bin Mas'ud kemudian memecah kepercayaan antarpihak musuh.\n\nParit adalah garis pertahanan, bukan medan serang. Tema bab ini: bertahan.",
        editorialNote: "Bertahan.",
        source: src("Perang Ahzab atau Khandaq", "Parit dan pecahnya koalisi")
      },
      {
        title: "Hudaibiyah",
        slug: "hudaibiyah",
        location: "Hudaibiyah",
        period: "Dzulqa'dah 6 H",
        summary: "Beliau berangkat untuk umrah bersama sekitar seribu empat ratus sahabat, tanpa niat berperang. Quraisy menghalangi di Hudaibiyah.\n\nSetelah rangkaian utusan dan Baiat Ridwan, disepakati perjanjian: gencatan senjata sepuluh tahun, kembali tahun itu tanpa umrah, umrah tahun berikutnya selama tiga hari, orang Makkah yang datang ke Madinah dikembalikan sedangkan sebaliknya tidak, dan kabilah bebas memilih sekutu.\n\nSyarat itu terasa berat. Sebagian sahabat, termasuk Umar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647, sempat gelisah.",
        context: "Al-Qur'an kemudian menyebut peristiwa ini sebagai kemenangan yang nyata, sebagaimana dikutip penulis pada awal Surah Al-Fath.\n\nGencatan senjata membuka ruang aman untuk berjumpa dan berdialog. Al-Mubarakfuri mencatat lonjakan jumlah Muslim: dari sekitar tiga ribu saat Hudaibiyah menjadi sekitar sepuluh ribu saat Fathu Makkah dua tahun kemudian.\n\nDi sinilah letak pelajarannya: hasil sebuah keputusan tidak selalu terlihat pada hari keputusan itu diambil.",
        editorialNote: "Tidak semua kemenangan terlihat seperti kemenangan.",
        source: src("Perjanjian Hudaibiyah", "Butir perjanjian dan pengaruhnya")
      }
    ],
    mapPoints: [
      { id: "badar", label: "Badar", x: 28, y: 69, note: "Medan sumur dan kafilah. Penanda skematik.", eventSlug: "badar" },
      { id: "uhud", label: "Uhud", x: 59, y: 24, note: "Gunung di utara Madinah. Bukan peta manuver militer.", eventSlug: "uhud" },
      { id: "khandaq", label: "Khandaq", x: 53, y: 43, note: "Sisi kota yang diparit.", eventSlug: "khandaq" },
      { id: "hudaibiyah", label: "Hudaibiyah", x: 77, y: 73, note: "Lokasi perjanjian di pinggir tanah haram.", eventSlug: "hudaibiyah" }
    ],
    quran: {
      arabic: "\u0625\u0650\u0646\u0651\u064e\u0627 \u0641\u064e\u062a\u064e\u062d\u0652\u0646\u064e\u0627 \u0644\u064e\u0643\u064e \u0641\u064e\u062a\u0652\u062d\u064b\u0627 \u0645\u0651\u064f\u0628\u0650\u064a\u0646\u064b\u0627",
      translation: "Sesungguhnya Kami telah memberikan kepadamu kemenangan yang nyata.",
      reference: "QS. Al-Fath: 1",
      translationSource: "Terjemahan Kementerian Agama Republik Indonesia"
    }
  },

  {
    number: 10,
    slug: "chapter-10",
    title: "Fathu Makkah",
    shortTitle: "Fathu Makkah",
    arabicTerm: "\u0641\u062a\u062d \u0645\u0643\u0629",
    stage: "Kembali ke Makkah",
    location: "Makkah",
    introduction: "Kota, fajar, dan perubahan menjadi pusat pengalaman. Tidak ada adegan kemenangan bergaya film perang.",
    editorialHeadline: "Ketika kekuasaan bertemu dengan kemurahan hati.",
    tone: "dawn",
    hero: {
      url: "https://images.pexels.com/photos/38461953/pexels-photo-38461953.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Bentang kota Makkah masa kini dari ketinggian di antara pegunungan.",
      credit: "Musaddek Sayek / Pexels",
      creditUrl: "https://www.pexels.com/photo/aerial-view-of-makkah-cityscape-in-saudi-arabia-38461953/",
      context: "Foto Makkah masa kini, bukan rekonstruksi Fathu Makkah."
    },
    events: [
      {
        title: "Memasuki Makkah",
        slug: "memasuki-makkah",
        location: "Makkah",
        period: "Ramadan 8 H",
        summary: "Quraisy merusak Perjanjian Hudaibiyah dengan membantu Bani Bakr menyerang Khuza'ah, sekutu kaum Muslimin.\n\nRasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 menyiapkan keberangkatan secara tertutup dan bergerak pada Ramadan 8 H bersama sekitar sepuluh ribu orang.\n\nDi Marr Azh-Zhahran, Abu Sufyan melihat perkemahan yang luas, lalu masuk Islam. Pasukan dibagi memasuki kota dari beberapa arah sekitar 20 Ramadan.",
        context: "Perintah umum adalah tidak memerangi kecuali siapa yang memerangi. Sebagian besar kota dimasuki tanpa perlawanan.\n\nBentrokan terbatas terjadi pada jalur Khalid bin Al-Walid \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 ketika sekelompok Quraisy mencoba menghalangi.\n\nPenulis menekankan kekuatan yang tertahan: jumlah besar tidak dipakai untuk pembalasan.",
        source: src("Fathu Makkah", "Pelanggaran perjanjian dan masuknya pasukan")
      },
      {
        title: "Ka'bah",
        slug: "kabah-fathu",
        location: "Makkah",
        period: "Fathu Makkah",
        summary: "Beliau menuju Masjidil Haram, menghampiri Hajar Aswad, dan berthawaf.\n\nDi sekitar Ka'bah, menurut pemaparan penulis, terdapat tiga ratus enam puluh berhala. Berhala-berhala itu dirobohkan dan dikeluarkan.\n\nGambar-gambar di dalam Ka'bah dihapus. Kunci Ka'bah dikembalikan kepada Utsman bin Thalhah.",
        context: "Bilal \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 mengumandangkan azan dari atas Ka'bah pada hari itu.\n\nAl-Mubarakfuri menempatkan peristiwa ini sebagai akhir paganisme di pusat jazirah, bukan sebagai perayaan kemenangan militer.\n\nFokus arsip ini adalah perubahan fungsi tempat: dari rumah berhala kembali menjadi rumah tauhid.",
        source: src("Di sekitar Ka'bah", "Penghapusan berhala")
      },
      {
        title: "Keamanan dan Pengampunan",
        slug: "keamanan-pengampunan",
        location: "Makkah",
        period: "Fathu Makkah",
        summary: "Jaminan keamanan diumumkan bagi siapa yang tidak melawan dan berlindung di tempat yang ditetapkan, termasuk rumah Abu Sufyan dan Masjidil Haram.\n\nSetelah kota dikuasai, penduduk Makkah dikumpulkan di sekitar Ka'bah dan diberi pengampunan.\n\nSejumlah kecil orang yang memiliki perkara khusus disebut terpisah dalam sirah, dan sebagian dari mereka kemudian juga menerima amnesti, seperti Ikrimah bin Abu Jahal.",
        context: "Al-Mubarakfuri mengutip pidato di depan pintu Ka'bah tentang dihapusnya kesombongan jahiliah dan kebanggaan nasab.\n\nOrang yang dahulu menyakiti, termasuk Habbar bin Al-Aswad, tidak dibalas setimpal setelah masuk Islam.\n\nPuncak peristiwa bukan pembalasan, melainkan penghentian permusuhan. Arsip ini tidak mengubah perkataan yang dicatat kitab menjadi slogan sinematik.",
        source: src("Fathu Makkah", "Jaminan keamanan dan pengampunan")
      },
      {
        title: "Makkah Berubah",
        slug: "makkah-berubah",
        location: "Makkah",
        period: "Setelah Fathu Makkah",
        summary: "Makkah masuk ke dalam Islam. Quraisy, yang selama ini menjadi rujukan bangsa Arab dalam urusan Ka'bah, kini menerima risalah.\n\nBanyak kabilah yang sebelumnya menunggu hasil pertentangan Makkah-Madinah mulai menentukan sikap.\n\nRasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 tidak menjadikan Makkah sebagai tempat tinggal tetap. Beliau kembali ke Madinah.",
        context: "Al-Mubarakfuri menyebut penaklukan ini sebagai batas yang memisahkan keadaan sebelum dan sesudahnya.\n\nSetelahnya menyusul Perang Hunain dan pengepungan Thaif, lalu datangnya berbagai delegasi ke Madinah pada tahun 9 dan 10 H.\n\nTidak ada parade kemenangan di arsip ini. Yang tertinggal adalah tautan antara kekuasaan dan kemurahan hati.",
        source: src("Setelah Fathu Makkah")
      }
    ],
    mapPoints: []
  },

  {
    number: 11,
    slug: "chapter-11",
    title: "Haji Wada' dan Wafat",
    shortTitle: "Haji Wada' & Wafat",
    arabicTerm: "\u062d\u062c\u0629 \u0627\u0644\u0648\u062f\u0627\u0639",
    stage: "Perpisahan",
    location: "Arafah dan Madinah",
    introduction: "Ruang menjadi tenang. Arafah, langit, Madinah, dan cahaya pagi menyertai naskah tanpa visual tubuh, kamar, atau adegan wafat.",
    editorialHeadline: "Sebuah kehidupan telah berakhir. Risalah tidak berakhir.",
    tone: "dawn",
    hero: {
      url: "https://images.pexels.com/photos/38436600/pexels-photo-38436600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2200",
      alt: "Bentang berbatu di kawasan Arafah, Arab Saudi, di bawah langit terang.",
      credit: "Samet Kaplan / Pexels",
      creditUrl: "https://www.pexels.com/photo/rocky-landscape-at-mount-arafat-in-saudi-arabia-38436600/",
      context: "Foto Arafah masa kini, bukan rekonstruksi Haji Wada'."
    },
    events: [
      {
        title: "Haji Wada'",
        slug: "haji-wada",
        location: "Arafah dan manasik terkait",
        period: "Dzulhijjah 10 H",
        summary: "Pada tahun kesepuluh Hijriah, Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 mengumumkan niat berhaji, lalu berangkat dari Madinah pada Dzulqa'dah.\n\nJemaah yang menyertai sangat besar. Penulis menyebut angka yang mencapai lebih dari seratus ribu orang.\n\nBeliau menunaikan seluruh rangkaian manasik dan mengajarkannya secara langsung, dengan perbuatan dan ucapan.",
        context: "Haji ini kemudian dikenal sebagai Haji Wada', haji perpisahan.\n\nAl-Mubarakfuri mencatat sejumlah isyarat perpisahan yang disampaikan selama manasik, termasuk pesan agar umat mengambil tata cara ibadah dari beliau.\n\nPerjalanan ini menjadi rujukan langsung tata cara haji bagi para sahabat dan generasi sesudahnya.",
        source: src("Haji Wada'", "Perjalanan dan manasik")
      },
      {
        title: "Pesan-pesan Penting",
        slug: "pesan-penting",
        location: "Arafah",
        period: "9 Dzulhijjah 10 H",
        summary: "Di Arafah beliau menyampaikan khutbah. Pokok isinya, sebagaimana diringkas penulis: darah dan harta adalah suci seperti sucinya hari, bulan, dan negeri itu.\n\nUrusan jahiliah dinyatakan tidak berlaku. Tuntutan darah jahiliah dihapus, dimulai dari keluarga beliau sendiri. Riba jahiliah dihapus, dimulai dari riba Abbas bin Abdul Muthalib.\n\nDisampaikan pula wasiat tentang perempuan, persaudaraan sesama Muslim, dan perintah menyampaikan kepada yang tidak hadir.",
        context: "Ayat tentang penyempurnaan agama turun pada hari itu, sebagaimana dikutip penulis.\n\nDalam khutbah pada hari-hari Mina juga ditegaskan bahwa tidak ada kelebihan Arab atas non-Arab kecuali karena takwa.\n\nArsip ini menampilkan ringkasan tematik, bukan rekonstruksi naskah pidato. Teks lengkap ada pada kitab sumber.",
        source: src("Khutbah Haji Wada'")
      },
      {
        title: "Sakit Rasulullah",
        slug: "sakit-rasulullah",
        location: "Madinah",
        period: "Shafar hingga Rabiul Awal 11 H",
        summary: "Sepulang dari Haji Wada', tanda-tanda perpisahan semakin jelas. Kemudian beliau jatuh sakit.\n\nKetika sakit bertambah berat, para istri mengizinkan beliau dirawat di rumah Aisyah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627.\n\nBeliau tetap mengimami shalat hingga beberapa hari sebelum wafat. Setelah itu Abu Bakar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 diperintahkan mengimami.",
        context: "Al-Mubarakfuri menguraikan permulaan sakit, hari-hari terakhir, dan perhatian beliau yang tetap tertuju pada shalat dan urusan umat.\n\nPerintah agar Abu Bakar mengimami dipahami para sahabat sebagai isyarat yang berat maknanya.\n\nWebsite menyajikannya dengan ruang kosong dan cahaya Madinah, tanpa menggambarkan tubuh, kamar, atau keadaan fisik beliau.",
        source: src("Menghadap ke Haribaan Yang Mahatinggi", "Permulaan sakit dan hari-hari terakhir")
      },
      {
        title: "Wafat",
        slug: "wafat",
        location: "Madinah",
        period: "12 Rabiul Awal 11 H, hari Senin",
        summary: "Rasulullah \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064a\u0647 \u0648\u0633\u0644\u0645 wafat di Madinah pada hari Senin, 12 Rabiul Awal tahun 11 Hijriah, dalam usia enam puluh tiga tahun menurut hitungan yang diikuti penulis.\n\nKabar itu mengguncang para sahabat. Umar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 termasuk yang sulit menerima.\n\nAbu Bakar \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647 meneguhkan umat: siapa yang menyembah Muhammad, maka Muhammad telah wafat; siapa yang menyembah Allah, maka Allah Mahahidup dan tidak mati.",
        context: "Beliau dimakamkan di tempat beliau wafat, di kamar Aisyah \u0631\u0636\u064a \u0627\u0644\u0644\u0647 \u0639\u0646\u0647\u0627.\n\nAl-Mubarakfuri menutup rangkaian ini dengan duka para sahabat dan warisan kehidupan beliau: akhlak, risalah, dan umat yang telah dibentuk.\n\nTidak ada visual jenazah atau adegan kematian. Setelah jeda, yang tersisa hanyalah kalimat editorial arsip ini.",
        source: src("Menghadap ke Haribaan Yang Mahatinggi", "Detik-detik terakhir dan wafat")
      }
    ],
    mapPoints: [
      { id: "arafah", label: "Arafah", x: 29, y: 63, note: "Tempat wukuf dan khutbah.", eventSlug: "haji-wada" },
      { id: "madinah", label: "Madinah", x: 72, y: 28, note: "Tempat sakit dan wafat.", eventSlug: "wafat" }
    ]
  }
];
