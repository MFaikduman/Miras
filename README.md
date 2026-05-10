# Miras: Tarihle Konuş 🏛️

**Miras: Tarihle Konuş**, öğrencilerin tarihe olan ilgisini artırmak ve tarihi şahsiyetleri daha yakından, etkileşimli bir şekilde tanımalarını sağlamak amacıyla geliştirilmiş eğitim odaklı bir web uygulamasıdır.

Bu proje, tarihimizin önemli liderlerinden Mete Han, Fatih Sultan Mehmet ve Mustafa Kemal Atatürk ile kurgusal bir sohbet ortamı yaratarak, onların ağzından tarihi olayları, felsefelerini ve biyografilerini öğrencilere aktarmayı hedefler.

## 🌟 Özellikler

- **Tarihi Karakterlerle Sohbet:** Mete Han, Fatih Sultan Mehmet ve Mustafa Kemal Atatürk ile interaktif yazışma.
- **Gerçekçi ve Stüdyo Kalitesinde Seslendirme (TTS):** Karakterlerin cevapları, yapay zeka destekli profesyonel tok erkek sesleriyle tarayıcı veya cihaz bağımsız olarak seslendirilir.
- **Genişletilmiş Kelime Sözlüğü:** Liderlerin doğum tarihlerinden savaş taktiklerine, fiziksel özelliklerinden felsefi düşüncelerine kadar birçok konudaki soruya özel cevaplar veren algoritma.
- **Dinamik Animasyonlar:** Konuşma esnasında aktifleşen ve ses bitince kapanan ses halkası animasyonları.
- **Şık Tasarım (Dark & Gold):** Tarihi dokuyu yansıtan Premium karanlık ve altın renk teması.

## 🎯 Amacımız

Öğrenciler genellikle tarihi sadece ders kitaplarındaki donuk metinlerden öğrenmektedir. **Miras**, bu ezberci ve tekdüze yöntemi kırarak tarihi şahsiyetlerin "kendi sesinden" ve "kendi ağzından" bilgiler vermesini sağlamak için tasarlanmıştır. Bu proje, hem bir tarih eğitim aracı hem de interaktif bir teknoloji projesidir.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Ses Üretimi (Araç):** Node.js, Microsoft Edge TTS altyapısı (`node-edge-tts`)
- **Dağıtım (Deployment):** %100 Statik İstemci Taraflı Çalışma (GitHub Pages tam uyumlu)

## 🚀 Nasıl Çalıştırılır?

Proje tamamen statik dosyalarla çalışır. Herhangi bir sunucu kurulumuna gerek yoktur.

1. Projeyi bilgisayarınıza indirin veya klonlayın:
   ```bash
   git clone https://github.com/MFaikduman/Miras.git
   ```
2. Klasör içindeki `index.html` dosyasını tercih ettiğiniz bir modern web tarayıcısında açın.
3. Karakterlerden birini seçin ve alt kısımdaki metin kutusuna sorunuzu yazarak sohbete başlayın!

## 📝 Sesleri Güncellemek / Eklemek İsteyenler İçin

Yeni sorular veya yeni liderler eklemek isterseniz:
1. `script.js` içindeki `leadersData` sözlüğünü güncelleyin.
2. Bilgisayarınızda Node.js yüklü olduğundan emin olun ve terminalde proje dizinine gidip `npm install node-edge-tts` yazın.
3. Terminalde `node generate_audio.js` komutunu çalıştırın. Bu işlem, yeni eklediğiniz cümleler için yüksek kaliteli erkek sesi (MP3) dosyalarını otomatik üretir ve `audioMap.js` dosyasını günceller.

## 👨‍💻 Geliştirici

- **M. Faik Duman**

---
*Tarihini bilmeyen bir millet, yok olmaya mahkumdur.*
