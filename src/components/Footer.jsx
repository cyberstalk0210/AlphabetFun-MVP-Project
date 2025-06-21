import React from 'react';

const AlphabetFunFooter = () => {
  return (
  <footer className="bg-[#E0F7FA] text-gray-800 py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
        {/* Brend nomi */}
        <div>
          <h3 className="text-lg font-bold mb-2">AlifboO‘yin</h3>
          <p className="text-sm">Bolalar uchun qiziqarli va interaktiv alifbo o‘rganish platformasi</p>
        </div>

        {/* Maktab joylashuvlari */}
        <div>
          <h3 className="text-lg font-bold mb-2">Maktablar</h3>
          <ul className="space-y-1 text-sm">
            <li>Toshkent</li>
            <li>Samarqand</li>
            <li>Namangan</li>
            <li>Andijon</li>
            <li>Farg‘ona</li>
            <li>Buxoro</li>
            <li>Xorazm</li>
            <li>Qarshi</li>
            <li>Navoiy</li>
            <li>Urganch</li>
          </ul>
        </div>

        {/* O‘rganish yo‘nalishlari */}
        <div>
          <h3 className="text-lg font-bold mb-2">O‘quv yo‘nalishlar</h3>
          <ul className="space-y-1 text-sm">
            <li>Harflarni o‘rganish</li>
            <li>So‘z va rasm moslashtirish</li>
            <li>Ovozli o‘yinlar</li>
            <li>E’tibor va xotira mashqlari</li>
            <li>Qiziqarli savollar va javoblar</li>
            <li>Ranglar va shakllar</li>
          </ul>
        </div>

        {/* Bog‘lanish */}
        <div>
          <h3 className="text-lg font-bold mb-2">Bog‘lanish</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Facebook sahifamiz</a></li>
            <li><a href="#" className="hover:underline">Instagramda kuzating</a></li>
            <li><a href="#" className="hover:underline">Telegram kanali</a></li>
            <li>Telefon: +998 90 123 45 67</li>
            <li>Ish vaqti: Dushanba - Shanba, 09:00 - 18:00</li>
          </ul>
        </div>

        {/* Qo‘shimcha ma'lumot */}
        <div>
          <p className="mb-2 text-sm">Toshkent shahri, Mustaqillik ko‘chasi 45-uy</p>
          <div className="flex justify-center md:justify-start flex-wrap gap-2 text-sm">
            <a href="#" className="hover:underline">Maxfiylik siyosati</a> | 
            <a href="#" className="hover:underline">Bolalar maxfiyligi</a> | 
            <a href="mailto:info@alifbooyini.uz" className="hover:underline">Email</a>
          </div>
          <div className="mt-4 flex justify-center md:justify-start">
            <img src="https://via.placeholder.com/40" alt="Telegram" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AlphabetFunFooter;
