import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-[#f22a98] text-9xl font-bold tracking-tighter mb-4">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-white mb-6">
        Oops! Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        Maaf, halaman yang Anda cari mungkin sudah dihapus, diubah namanya, atau
        memang tidak pernah ada.
      </p>

      <Link
        href="/"
        className="px-8 py-3 bg-[#f22a98] text-white rounded-full font-medium hover:bg-white hover:text-[#f22a98] transition-all duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
