const leadersData = {
    metehan: {
        id: "metehan",
        name: "Mete Han",
        title: "Büyük Hun İmparatoru",
        desc: "Asya Hun İmparatorluğu'nun en parlak dönemi hükümdarı, 'Islıklı Ok'un mucidi.",
        avatar: "./images/Metehan.png",
        greeting: "Ben Asya'nın ulu kağanı, Büyük Hun İmparatoru Mete Han! Yay çeken bütün kavimleri tek bir aile gibi birleştirdim. Soracakların varsa çekinme, söyle.",
        dictionary: {
            "kimsin": "Ben Teoman'ın oğlu, Büyük Hun İmparatorluğu'nun en güçlü hükümdarı Mete Han'ım. M.Ö. 209'da tahta çıktım.",
            "adın": "Adım Mete'dir, bazıları bana Mao-tun der. Hun dilinde 'yiğit savaşçı' anlamına gelir.",
            "ne zaman": "M.Ö. 234'te doğdum. M.Ö. 209'da tahta çıktım ve M.Ö. 174'te bu dünyadan göçtüm.",
            "doğum": "M.Ö. 234 yılında, bozkırların ortasında doğdum. Bir kağanın oğlu olarak dünyaya geldim.",
            "doğdun": "M.Ö. 234 yılında, bozkırların ortasında doğdum. Bir kağanın oğlu olarak dünyaya geldim.",
            "ölüm": "M.Ö. 174 yılında öldüm. Ama kurduğum devlet yüzyıllarca yaşadı.",
            "öldün": "M.Ö. 174 yılında öldüm. Ama kurduğum devlet yüzyıllarca yaşadı.",
            "boy": "Boyum hakkında kesin bir kayıt yoktur ama bir Türk kağanına yaraşır şekilde uzun boylu, geniş omuzlu ve iri yapılı bir savaşçıydım.",
            "boyun": "Boyum hakkında kesin bir kayıt yoktur ama bir Türk kağanına yaraşır şekilde uzun boylu, geniş omuzlu ve iri yapılı bir savaşçıydım.",
            "kilo": "Bir bozkır savaşçısı daima dinçtir. Kilom atımın beni rahatça taşıyabileceği, kılıcımı da güçlüce savurabileceğim kadardı.",
            "kilon": "Bir bozkır savaşçısı daima dinçtir. Kilom atımın beni rahatça taşıyabileceği, kılıcımı da güçlüce savurabileceğim kadardı.",
            "fizik": "Geniş omuzlu, çelik gibi kaslara sahip, uykuyu sevmeyen, gözleri kartal gibi keskin bir kağandım.",
            "baba": "Babam Teoman, Hun İmparatorluğu'nun ilk büyük hükümdarıydı. Ama beni öldürtmek istedi, üvey annemin etkisiyle. Ben de ondan önce davrandım.",
            "anne": "Öz annem hakkında çok bilgi yoktur. Üvey annem babamı bana karşı kışkırttı. Babam beni Yüeçilere rehin olarak gönderdi ki ölmemi umuyordu.",
            "aile": "Babam Teoman beni rehin olarak düşmana verdi. Ama ben kaçtım ve geri döndüm. Tahta güçle çıktım.",
            "eş": "Hatunlarım vardı. Hun geleneğinde hatun, kağanın yanında devlet işlerinde söz sahibidir.",
            "ordu": "Onlu sistemi ben kurdum. Ordumdaki onbaşılar, yüzbaşılar, binbaşılar ve tümenbaşılar bir makine gibi işler. Benim ıslık çalan okum nereye giderse, bütün ordum oraya ok atar!",
            "onlu": "Onlu sistemi ben kurdum. 10 kişilik birliklerden başlayarak 10.000 kişilik tümenlere kadar hiyerarşik bir yapıdır. Bu sistem sayesinde 300.000 atlı süvariyi yönetebiliyordum.",
            "asker": "Benim her askerim at üstünde doğar, at üstünde savaşır. Bir Hun askeri hem okçu hem süvari hem de avcıdır. Çocukluktan itibaren ata binmeyi ve ok atmayı öğrenirler.",
            "ıslık": "Islık çalan ok benim icadımdır. Ben okumu nereye atarsam, askerlerim düşünmeden aynı hedefe ok atar. Tereddüt eden kellesini kaybeder. Sadakat ve disiplin her şeydir.",
            "savaş": "Hayatım boyunca sayısız savaş kazandım. Doğuda Tunguzları, batıda Yüeçileri, kuzeyde Kırgızları ve güneyde Çin'i yendim. Tüm bozkırı birleştirdim.",
            "strateji": "Kurt kapanı taktiğini biz icat ettik. Düşmanı sahte geri çekilmeyle tuzağa çeker, çember içine alırız. Bu taktik bin yıl sonra bile kullanılmıştır.",
            "at": "At, Hun savaşçısının en değerli yoldaşıdır. Atsız Hun olmaz. Biz at üstünde doğar, at üstünde yaşar, at üstünde ölürüz.",
            "ok": "Ok ve yay bizim en önemli silahımızdır. Bir Hun atlı okçusu tam dörtnala koşarken arkasına dönüp ok atar. Buna Part atışı derler ama biz yüzyıllardır yapıyorduk.",
            "silah": "Kılıç, ok, yay, mızrak ve kement kullanırdık. Ama en güçlü silahımız disiplinli ordumuz ve süratimizdi.",
            "vatan": "Vatan toprağı kutsaldır, asla terk edilemez! Toprak devletin temelidir, kimseye verilemez. Bir karış toprak bile verilemez!",
            "toprak": "Toprak milletin malıdır! Toprak devletin temelidir, bir karış dahi olsa düşmana bırakılmaz. Bunu unutana kağan denmez.",
            "çin": "Çin'i yenmeme rağmen topraklarına girmedim, sadece vergiye bağladım. Çünkü nüfusumuz azdı, o kalabalık içinde asimile olabilirdik. Milletimin benliğini koruması her şeyden önemlidir.",
            "turan": "Turan, yay çeken tüm atlı göçebe kavimlerin birliğidir. Ben bu birliği sağladım. Moğolistan'dan Hazar'a kadar tek bayrak altında topladım.",
            "türk": "Biz Türk milletinin en eski ecdadıyız. Hun dili, Türk dilinin atasıdır. Bozkırda doğan bu millet, tarihi değiştirmiştir.",
            "hun": "Büyük Hun İmparatorluğu, Türk tarihinin ilk büyük devletidir. Ben bu devleti en geniş sınırlarına ulaştırdım. Çin Seddi bizim yüzümüzden inşa edilmiştir.",
            "tengri": "Göktengri bizim en yüce inancımızdır. Gök Tanrı kağanı kutlu kılar ve millete güç verir. Biz Tengri'nin izniyle hükmederiz.",
            "din": "Biz Gök Tanrı inancına bağlıyız. Tengri göklerin hâkimi, Yer-Su toprakların koruyucusudur. Kağan Tengri'nin yeryüzündeki gölgesidir.",
            "kurt": "Bozkurt bizim kutsal atamızdır. Dişi kurt Asena, Türk milletini yeniden doğurmuştur. Kurt totemimiz güç, cesaret ve özgürlüğün simgesidir.",
            "bozkır": "Bozkır bizim vatanımızdır. Uçsuz bucaksız steplerde at koştururuz. Duvarlar ardında yaşamak bize göre değildir, biz özgür insanlarız.",
            "yemek": "Biz et yeriz, kımız içeriz, süt ve peynir tüketiriz. Avcılık ve hayvancılık geçim kaynağımızdır. Toprak ekmek değildir, at sütü ve et yeter.",
            "kımız": "Kımız, kısrak sütünden yapılır ve kutsal içeceğimizdir. Savaş öncesi askerlerime kımız dağıtırım, güç verir.",
            "çadır": "Otağ dediğimiz çadırlarımız bizim evimizdir. Kolay kurulur, kolay taşınır. Bir Hun kağanının otağı altınla süslüdür.",
            "devlet": "Devlet güçle kurulur, adaletle yaşatılır. Benim kurduğum onlu düzen, devlet yönetiminin de temelidir.",
            "lider": "Gerçek lider önden gider, askerlerinden fedakârlık istemeden önce kendisi yapar. Ben her savaşta en önde savaştım.",
            "cesaret": "Korkak adam kağan olamaz. Cesaret, Tengri'nin seçilmiş kullarına verdiği bir armağandır.",
            "kadın": "Hun kadınları güçlü ve onurludur. Hatunlar devlet meclisinde söz sahibidir. Kadınsız bir ulus düşünülemez.",
            "merhaba": "Esenlikler dilerim. Ne öğrenmek istersin?",
            "selam": "Esenlikler! Kağanın huzurunda konuşabilirsin.",
            "nasılsın": "Kutlu Tengri'nin izniyle gücümüz yerindedir. Sen nasılsın?",
            "teşekkür": "Bir Hun kağanı teşekküre alışık değildir ama senin saygını takdir ederim.",
            "güle güle": "Tengri yolunu açık etsin. Esenlikle git.",
            "görüşürüz": "Yolun açık olsun savaşçı. Bozkırda tekrar buluşuruz."
        },
        defaultResponses: [
            "Bu konuda söyleyeceklerim kısadır, biz çok konuşmayı değil çok iş yapmayı severiz.",
            "Sözlerin rüzgar gibi, ne dediğini tam anlayamadım. Başka bir şey sor.",
            "Hun ordusunda disiplinden gayrı bir şey sorulmaz, başka bir sorun var mı?",
            "At üstünde geçen bir ömürde bu sorduğun teferruattır.",
            "Bozkırın bilgeliğiyle cevap vereyim: her soru cevabı hak etmez, ama sen sor bakalım.",
            "Bu meseleyi düşünmem gerek. Başka bir konuda konuşalım."
        ]
    },
    fatih: {
        id: "fatih",
        name: "Fatih Sultan Mehmet",
        title: "Osmanlı Padişahı, İstanbul'un Fatihi",
        desc: "İstanbul'u fethederek çağ açıp çağ kapatan, askeri deha ve entelektüel hükümdar.",
        avatar: "./images/FSM.png",
        greeting: "Biz ki Konstantiniyye'yi fetheyleyen, iki kıtanın ve iki denizin hakimi Sultan Mehmed Han'ız! İlm-i siyasetten ve tarihten suallerini bekleriz.",
        dictionary: {
            "kimsin": "Ben 7. Osmanlı Padişahı, Sultan II. Murad'ın oğlu Sultan Mehmed Han. 1453'te Konstantiniyye'yi fethederek 'Fatih' unvanını aldım ve bir çağı kapatıp yenisini açtım.",
            "adın": "Adım Mehmed'dir. Fatih unvanını İstanbul'u fethettikten sonra aldım. Avrupalılar bana 'Grand Turk' derler.",
            "ne zaman": "30 Mart 1432'de Edirne'de doğdum. 3 Mayıs 1481'de 49 yaşında vefat ettim.",
            "doğum": "30 Mart 1432'de Edirne'de, Sultan II. Murad'ın oğlu olarak dünyaya geldim.",
            "doğdun": "30 Mart 1432'de Edirne'de, Sultan II. Murad'ın oğlu olarak dünyaya geldim.",
            "ölüm": "3 Mayıs 1481'de sefer esnasında vefat ettim. Bazıları zehirlendiğimi söyler. 49 yıllık ömrümde 25 sefere çıktım.",
            "öldün": "3 Mayıs 1481'de sefer esnasında vefat ettim. Bazıları zehirlendiğimi söyler. 49 yıllık ömrümde 25 sefere çıktım.",
            "boy": "Boyum orta uzunlukta, yaklaşık 1 metre 70 santimdi. Çevik ve heybetli bir yapım vardı.",
            "boyun": "Boyum orta uzunlukta, yaklaşık 1 metre 70 santimdi. Çevik ve heybetli bir yapım vardı.",
            "kilo": "Gençliğimde at üstünde cenk edecek kadar zinde, ömrümün sonlarında ise gut hastalığının etkisiyle biraz daha kiloluydum.",
            "kilon": "Gençliğimde at üstünde cenk edecek kadar zinde, ömrümün sonlarında ise gut hastalığının etkisiyle biraz daha kiloluydum.",
            "fizik": "İtalyan ressam Bellini portremi çizdiğinde kemerli burnumu ve vakur duruşumu resmetmiştir. Padişahlık vakarı her halimizden belli olurdu.",
            "baba": "Babam Sultan II. Murad büyük bir hükümdardı. Tahtı bana iki kez bıraktı. İlkinde çok gençtim, tekrar geri döndü. İkincisinde artık hazırdım.",
            "anne": "Annem Hüma Hatun'dur. Beni ilim ve irfanla büyüttü.",
            "aile": "Babam II. Murad, oğullarım Bayezid ve Cem Sultan. Bayezid benden sonra tahta çıktı.",
            "eş": "Birden fazla hatunlarım oldu. Osmanlı hanedanında nikâh ve siyaset iç içedir.",
            "istanbul": "Ya ben İstanbul'u alırım, ya İstanbul beni! O şehri fethetmek, peygamberimizin müjdesine nail olmaktır. Gemileri karadan yürüttük, aşılmaz denilen surları yıktık.",
            "fetih": "53 gün süren muhasaradan sonra 29 Mayıs 1453'te İstanbul'u fethettim. Bu fetihle Orta Çağ sona erdi, Yeni Çağ başladı. Tarih bunu böyle yazar.",
            "konstantinople": "Konstantiniyye, Roma İmparatorluğu'nun son kalesi idi. Ben onu fethederek İslam'ın vaadini gerçekleştirdim ve şehrin adını İstanbul kıldım.",
            "sur": "İstanbul'un surları bin yıl boyunca aşılamamıştı. Ben şahi toplarıyla o surları yıktım. Teknoloji ve strateji birleşince aşılamaz denen her şey aşılır.",
            "gemi": "Bizans Haliç'e zincir germişti. Çaresizlik bize göre değildir! Gecenin karanlığında gemileri karadan kızaklar üzerinden Haliç'e indirdik. Tarih böyle yazılır.",
            "haliç": "Haliç'e geçiş zincirleme kapatılmıştı. 72 gemiyi kara üzerinden taşıyarak Haliç'e indirdik. Bizanslılar gözlerine inanamadı.",
            "top": "Şahi toplarını döktürdüm. Surları yıkmak için mühendisliğin, bilimin kudretine inandım. Urban Usta ile bu kudreti inşa ettik.",
            "urban": "Macar top ustası Urban bize geldi. Ona dünyada eşi görülmemiş büyüklükte toplar döktürdüm. Şahi topu surları paramparça etti.",
            "bilim": "Alimlerin atının ayağından sıçrayan çamur, bizim kaftanımızın süsüdür. Ali Kuşçu gibi, Akşemseddin gibi nice alimleri sarayımızda ağırladık.",
            "ali kuşçu": "Ali Kuşçu büyük bir astronomi ve matematik alimidir. Fetihten sonra onu İstanbul'a davet ettim ve medreselerimizde ders verdirdim.",
            "akşemseddin": "Akşemseddin hocam, fetih sırasında manevi rehberimdi. Ebu Eyyub el-Ensari hazretlerinin kabrini o keşfetti.",
            "rönesans": "Doğunun ve Batının hükümdarıyım. İtalyan ressam Bellini'ye portremi çizdirdim, Yunanca, Latince, Arapça ve Farsça öğrendim.",
            "bellini": "İtalyan ressam Gentile Bellini'yi sarayıma davet ettim ve portremi çizdirdim. Sanata ve güzelliğe değer veren bir hükümdarım.",
            "dil": "Türkçe, Arapça, Farsça, Yunanca, Latince ve İtalyanca bilirdim. Altı dil konuşan bir padişahtım. İlim dille öğrenilir.",
            "kitap": "Kütüphanemde binlerce el yazması eser vardı. Batı ve Doğu felsefesini okudum. Aristoteles'i de Farabi'yi de bilirim.",
            "kanun": "Fatih Kanunnamesi'ni ben yazdırdım. Devletin düzeni ve nizam-ı alem için kanun şarttır. Kardeş katlini de devletin bekası için koydum.",
            "kanunname": "Kanunnamemle devlet yönetimini sistematik hale getirdim. Her görevlinin yetki ve sorumlulukları açıkça belirlendi.",
            "ordu": "Ordumda yeniçeriler, sipahiler, akıncılar ve topçular vardı. Dünyanın en modern ve disiplinli ordusuydu.",
            "yeniçeri": "Yeniçeriler seçkin piyade askerleriydi. Devşirme sistemiyle yetiştirilen bu askerler ölüme meydan okurdu.",
            "donanma": "Güçlü bir donanma kurdum. Denizlerde de hâkim olmak istedim. Ege, Karadeniz ve Adriyatik'te donanmamız hüküm sürdü.",
            "savaş": "25 sefere çıktım. İstanbul, Belgrad, Otranto, Trabzon, Mora, Bosna... Durmak yok, fetih var!",
            "ayasofya": "Ayasofya'yı camiye çevirdim. O muhteşem kubbenin altında ilk namazı kıldığımda, tarihin ağırlığını hissettim.",
            "cami": "İstanbul'da pek çok cami yaptırdım. Fatih Camii bunların en büyüğüdür. İlim ve ibadet iç içedir.",
            "medrese": "Sahn-ı Seman medreselerini kurdum. Sekiz büyük medrese ile İstanbul'u ilim merkezi yaptım.",
            "saray": "Topkapı Sarayı'nı ben yaptırdım. Dört yüz yıl boyunca Osmanlı'nın kalbi orada attı.",
            "devlet": "Osmanlı Devleti benim dönemimde imparatorluk oldu. Üç kıtaya hükmeden bir cihan devleti kurduk.",
            "adalet": "Adalet mülkün temelidir. Hükümdar adil olmazsa devlet ayakta duramaz.",
            "din": "İslam'ın bayraktarıyız. Fetih, Allah'ın vaadinin gerçekleşmesidir. Ama gayrimüslimlere de adaletle davrandım.",
            "hristiyan": "İstanbul'u fethettikten sonra Rum Patriğini makamında bıraktım. Dinlerini yaşamalarına izin verdim. Çünkü adalet böyle olur.",
            "merhaba": "Hoş geldin ademoğlu. İlme talip ol ki kıymetin artsın.",
            "selam": "Ve aleyküm selam. Huzurumuza hoş geldiniz.",
            "nasılsın": "Devlet-i Aliyye'nin bekası için daima tetikte ve kudretliyiz. Sen nasılsın?",
            "teşekkür": "Teşekkürün kabul olundu. Huzurumuzda edep ile konuş.",
            "güle güle": "Allah'a emanet ol. Yolun açık, kılıcın keskin olsun.",
            "görüşürüz": "Git, ilim öğren, sonra tekrar huzurumuza gel."
        },
        defaultResponses: [
            "Bu sualinin cevabını ulemaya danışmak icab eder.",
            "Kılıcımızın ulaştığı yere, idrakınız ulaşamayabilir.",
            "Bizim meselemiz nizam-ı alemdir, bu dediğin cüzi kalır.",
            "Tarih, yaptıklarımızı yazar; sen ise sadece sorarsın. Başka bir sualin var mıdır?",
            "Her suale cevap vermek padişahın vakarına yakışmaz, başka sor.",
            "Bu mesele hakkında düşüncelerimiz mahfuzdur. Başka bir sual buyurun."
        ]
    },
    ataturk: {
        id: "ataturk",
        name: "Mustafa Kemal Atatürk",
        title: "Türkiye Cumhuriyeti'nin Kurucusu",
        desc: "Türk Kurtuluş Savaşı'nın başkomutanı, modern Türkiye Cumhuriyeti'nin kurucusu.",
        avatar: "./images/Atatürk.png",
        greeting: "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır. Merhaba çocuk, bana sorularını sorabilirsin.",
        dictionary: {
            "kimsin": "Ben Mustafa Kemal Atatürk. Türkiye Cumhuriyeti'nin kurucusu ve ilk Cumhurbaşkanıyım. Hayatımı Türk milletinin bağımsızlığına ve çağdaşlaşmasına adadım.",
            "adın": "Adım Mustafa'dır. Matematik öğretmenim Kemal ismini verdi. Soyadım Atatürk'tür, Türklerin Atası anlamına gelir.",
            "ne zaman": "1881'de Selanik'te doğdum. 10 Kasım 1938'de İstanbul'da hayata gözlerimi yumdum.",
            "doğum": "1881 yılında Selanik'te doğdum. O zamanlar Selanik Osmanlı toprağıydı.",
            "doğdun": "1881 yılında Selanik'te doğdum. O zamanlar Selanik Osmanlı toprağıydı.",
            "ölüm": "10 Kasım 1938'de saat dokuzu beş geçe Dolmabahçe Sarayı'nda hayata gözlerimi yumdum. Siroz hastalığından vefat ettim.",
            "öldün": "10 Kasım 1938'de saat dokuzu beş geçe Dolmabahçe Sarayı'nda hayata gözlerimi yumdum. Siroz hastalığından vefat ettim.",
            "boy": "Boyum 1 metre 74 santimdi. Ancak benim asıl büyüklüğüm fiziksel boyumda değil, milletime olan sevgimdedir.",
            "boyun": "Boyum 1 metre 74 santimdi. Ancak benim asıl büyüklüğüm fiziksel boyumda değil, milletime olan sevgimdedir.",
            "kilo": "Kilom genellikle 70 ile 74 civarındaydı. Ancak cepheden cepheye koşarken oldukça zayıfladığım dönemler de oldu.",
            "kilon": "Kilom genellikle 70 ile 74 civarındaydı. Ancak cepheden cepheye koşarken oldukça zayıfladığım dönemler de oldu.",
            "fizik": "Sarı saçlı, mavi gözlü, geniş omuzlu bir askerdim. Ancak en önemlisi, çelik gibi sağlam bir iradeye sahiptim.",
            "baba": "Babam Ali Rıza Efendi, gümrük memuruydu. Eğitimime çok önem verdi. Beni askeri okula o yönlendirdi.",
            "anne": "Annem Zübeyde Hanım, güçlü ve fedakâr bir Türk kadınıydı. Benim için dünyanın en değerli insanıydı.",
            "aile": "Babam Ali Rıza Efendi, annem Zübeyde Hanım. Babamı küçük yaşta kaybettim. Annem beni büyük fedakârlıkla büyüttü.",
            "eş": "Latife Hanım ile 1923'te evlendim. İki yıl sonra ayrıldık. Hayatımı milletim için yaşadım.",
            "selanik": "Selanik benim doğduğum şehirdir. Çocukluğum orada geçti. O şehir Balkan kültürlerinin buluşma noktasıydı.",
            "cumhuriyet": "Cumhuriyet, bilhassa kimsesizlerin kimsesidir. 29 Ekim 1923'te 'Egemenlik kayıtsız şartsız milletindir' ilkesiyle Cumhuriyeti ilan ettik.",
            "egemenlik": "Egemenlik kayıtsız şartsız milletindir. Hiçbir kişi, hiçbir aile, hiçbir sınıf milletin üstünde olamaz.",
            "meclis": "Türkiye Büyük Millet Meclisi'ni 23 Nisan 1920'de Ankara'da açtık. Milletin iradesi orada temsil edilir.",
            "tbmm": "TBMM milletin kalesidir. 23 Nisan 1920'de kuruldu. Egemenliğin tek sahibi millettir ve onu Meclis temsil eder.",
            "ankara": "Ankara'yı başkent yaptık çünkü stratejik konumu uygundu ve Anadolu'nun kalbindeydi. Yeni bir devlet, yeni bir başkent.",
            "gençlik": "Ey Türk gençliği! Birinci vazifen; Türk istiklalini, Türk cumhuriyetini, ilelebet muhafaza ve müdafaa etmektir. Bütün ümidim gençliktedir.",
            "bilim": "Dünyada her şey için, maddiyat için, maneviyat için, başarı için en hakiki mürşit ilimdir, fendir.",
            "eğitim": "Eğitimdir ki bir milleti ya hür, bağımsız, şanlı, yüksek bir topluluk halinde yaşatır; ya da milleti esaret ve sefalete terk eder.",
            "öğretmen": "Milletleri kurtaranlar yalnız ve ancak öğretmenlerdir. Öğretmene hürmet, milletin geleceğine saygıdır.",
            "alfabe": "1928'de Latin alfabesine geçtik. Harf Devrimi ile okuma yazma oranı hızla arttı. Milletimiz artık çağdaş dünya ile aynı dili konuşur.",
            "harf": "Harf Devrimi çağdaşlaşmanın temel taşlarından biridir. Ben bizzat kara tahta başında milletimize yeni harfleri öğrettim.",
            "barış": "Yurtta sulh, cihanda sulh! Bizim dış politikamızın ve insanlık anlayışımızın temelidir.",
            "çanakkale": "Ben size taarruzu emretmiyorum, ölmeyi emrediyorum! Çanakkale geçilmez dedik ve geçirmedik.",
            "kurtuluş": "Kurtuluş Savaşı milletin var olma mücadelesiydi. Ya istiklal ya ölüm! Başka seçenek yoktu.",
            "savaş": "Savaş zorunlu olmadıkça cinayettir. Ama vatanı savunmak için savaşmak en kutsal görevdir.",
            "sakarya": "Sakarya Meydan Muharebesi dönüm noktasıydı. 22 gün 22 gece sürdü. Hattı müdafaa yoktur, sathı müdafaa vardır! Sath, bütün vatandır.",
            "dumlupınar": "Büyük Taarruz 26 Ağustos 1922'de başladı. Dumlupınar'da düşman ordusunu kesin olarak yenilgiye uğrattık. Ordular, ilk hedefiniz Akdeniz'dir. İleri!",
            "lozan": "Lozan Antlaşması 24 Temmuz 1923'te imzalandı. Bu antlaşmayla tam bağımsızlığımız tüm dünya tarafından tanındı.",
            "laiklik": "Laiklik, din ve devlet işlerinin ayrılmasıdır. Din vicdan meselesidir, devlet akıl işidir. Her vatandaş inancında özgürdür.",
            "din": "Din vicdan meselesidir. Herkes vicdanının emrine uymakta serbesttir. Biz dine saygı gösteririz, din işlerini siyasete karıştırmayız.",
            "kadın": "Dünyada hiçbir milletin kadını, ben Anadolu kadınından daha fazla çalıştım diyemez. Kadın haklarını verdik çünkü kadınlarımız bunu çoktan hak etmişti.",
            "devrim": "İnkılaplarımız Türk milletini çağdaş medeniyet seviyesinin üstüne çıkarmak içindir. Kılık kıyafetten hukuka, takvimden eğitime kadar köklü değişiklikler yaptık.",
            "millet": "Ne mutlu Türk'üm diyene! Türk milleti çalışkandır, zekidir. Yeter ki gerçek önderleri bulunsun.",
            "türk": "Ne mutlu Türk'üm diyene! Türk milleti demokratik, laik ve sosyal bir hukuk devleti olarak ilelebet yaşayacaktır.",
            "bağımsızlık": "Tam bağımsızlık, ancak ekonomik bağımsızlıkla mümkündür. Siyasi ve askeri zaferler ekonomik zaferlerle taçlandırılmalıdır.",
            "ekonomi": "Ekonomik kalkınma her şeyin temelidir. Siyasi zaferler ne kadar büyük olursa olsun, ekonomik zaferlerle taçlandırılmazsa kazanılacak zaferler yaşayamaz.",
            "tarih": "Tarih yazmak, tarih yapmak kadar mühimdir. Yazan yapana sadık kalmazsa değişmeyen hakikat insanlığı şaşırtacak bir mahiyet alır.",
            "spor": "Ben sporcunun zeki, çevik ve ahlaklısını severim. Sağlam kafa sağlam vücutta bulunur.",
            "dolmabahçe": "Dolmabahçe Sarayı'nda son günlerimi geçirdim. Saatteki 09:05, benim sonsuzluğa yolculuğumun saatidir.",
            "anıtkabir": "Benim ebedi istirahatgâhım Ankara'daki Anıtkabir'dir. Milletimle birlikte orada huzur buluyorum.",
            "merhaba": "Merhaba. Gözlerinde aydınlık yarınların ışığını görüyorum.",
            "selam": "Selam genç! Senin gibi meraklı gençler bu milletin geleceğidir.",
            "nasılsın": "Milletim huzurlu ve güvendeyse, ben de iyiyim demektir.",
            "teşekkür": "Asıl ben milletimin her bir ferdine müteşekkirim.",
            "güle güle": "Yolun açık olsun genç. Unutma, hayatta en hakiki mürşit ilimdir.",
            "görüşürüz": "Sana bir ödevim var: oku, öğren ve bu milleti yükselt. Görüşürüz."
        },
        defaultResponses: [
            "Meseleleri akıl ve bilim yoluyla çözmeliyiz. Bu konuyu da öyle düşün.",
            "Geleceğin büyükleri olarak bu konularda daha derin araştırmalar yapmalısınız.",
            "Önemli olan çalışmak ve üretmektir. Başka bir sorun var mı?",
            "Bu meseleyi milletin iradesi ve çağdaş medeniyetler seviyesi çerçevesinde değerlendirmek gerekir.",
            "Her konuda bilimin rehberliğine başvurmalıyız. Başka ne sormak istersin?",
            "Bu konu hakkında düşüncelerimi paylaşmam zor, ama sen araştırmaya devam et."
        ]
    }
};

let currentLeader = null;
let selectedVoice = null;
let isSpeaking = false;

// DOM Elements
const homeView = document.getElementById('home-view');
const chatView = document.getElementById('chat-view');
const leadersContainer = document.getElementById('leaders-container');
const backBtn = document.getElementById('back-btn');
const chatLeaderName = document.getElementById('chat-leader-name');
const chatAvatar = document.getElementById('chat-avatar');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const micBtn = document.getElementById('mic-btn');

// Speaking Panel Elements
const speakingPanel = document.getElementById('speaking-panel');
const speakingAvatar = document.getElementById('speaking-avatar');
const speakingName = document.getElementById('speaking-name');

let recognition = null;

// Load the best available Turkish MALE voice
function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return;
    
    // Log all available voices for debugging
    console.log('Mevcut sesler:');
    voices.forEach(v => console.log(`  ${v.name} [${v.lang}]`));
    
    const turkishVoices = voices.filter(v => v.lang.startsWith('tr'));
    
    if (turkishVoices.length > 0) {
        // Priority: Male voices first (Tolga = Windows erkek sesi)
        // Avoid female voices (Emel = Windows kadın sesi)
        const maleVoice = turkishVoices.find(v => 
            /tolga|erkek|male/i.test(v.name) && !/emel|kadın|female/i.test(v.name)
        );
        
        // Then try premium/natural male voice
        const premiumMale = turkishVoices.find(v => 
            /tolga.*online|tolga.*natural|natural|neural|online/i.test(v.name)
        );
        
        // Fallback: any voice that is NOT obviously female
        const notFemale = turkishVoices.find(v => 
            !/emel|kadın|female/i.test(v.name)
        );
        
        selectedVoice = premiumMale || maleVoice || notFemale || turkishVoices[0];
        console.log('✓ Seçilen Türkçe ses:', selectedVoice.name);
    } else {
        // No Turkish voice found — try any male-sounding voice
        console.warn('Türkçe ses bulunamadı, varsayılan ses kullanılacak.');
    }
}

// Initialize App
function initApp() {
    renderLeaders();
    setupEventListeners();
    
    // Load voices (may need to wait for voiceschanged event)
    if ('speechSynthesis' in window) {
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }
}

// Render Leader Cards
function renderLeaders() {
    leadersContainer.innerHTML = '';
    
    for (const key in leadersData) {
        const leader = leadersData[key];
        const card = document.createElement('div');
        card.className = 'leader-card';
        card.innerHTML = `
            <div class="leader-image-wrapper">
                <div class="leader-avatar" style="background-image: url('${leader.avatar}')"></div>
            </div>
            <div class="leader-info">
                <h3>${leader.name}</h3>
                <div class="card-divider"></div>
                <p>${leader.desc || leader.title}</p>
                <button class="chat-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    Sohbete Başla
                </button>
            </div>
        `;
        
        card.querySelector('.chat-btn').addEventListener('click', () => openChat(leader));
        leadersContainer.appendChild(card);
    }
}

// Event Listeners
function setupEventListeners() {
    backBtn.addEventListener('click', closeChat);
    
    sendBtn.addEventListener('click', handleSendMessage);
    
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Setup Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'tr-TR';
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            messageInput.value = transcript;
            handleSendMessage(); 
        };
        
        recognition.onend = () => {
            if (micBtn) micBtn.classList.remove('recording');
        };
        
        recognition.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            if (micBtn) micBtn.classList.remove('recording');
        };
    }

    if (micBtn) {
        micBtn.addEventListener('click', () => {
            if (!recognition) {
                alert("Tarayıcınız ses tanıma özelliğini desteklemiyor. Lütfen Chrome kullanın.");
                return;
            }
            if (micBtn.classList.contains('recording')) {
                recognition.stop();
            } else {
                recognition.start();
                micBtn.classList.add('recording');
            }
        });
    }
}

// Open Chat View
function openChat(leader) {
    currentLeader = leader;
    
    // Update UI
    chatLeaderName.textContent = leader.name;
    chatAvatar.style.backgroundImage = `url('${leader.avatar}')`;
    chatMessages.innerHTML = ''; // Clear previous messages
    
    // Switch views
    homeView.classList.remove('active');
    homeView.classList.add('hidden');
    
    // Small timeout for transition
    setTimeout(() => {
        homeView.style.display = 'none';
        chatView.style.display = 'flex';
        
        // Force reflow
        void chatView.offsetWidth;
        
        chatView.classList.remove('hidden');
        chatView.classList.add('active');
        
        // Add greeting message
        setTimeout(() => {
            addMessage(leader.greeting, 'leader');
            speak(leader.greeting, leader);
        }, 500);
        
    }, 400);
}

// Close Chat View
function closeChat() {
    currentLeader = null;
    
    stopSpeaking();
    
    // Switch views
    chatView.classList.remove('active');
    chatView.classList.add('hidden');
    
    setTimeout(() => {
        chatView.style.display = 'none';
        homeView.style.display = 'flex';
        
        // Force reflow
        void homeView.offsetWidth;
        
        homeView.classList.remove('hidden');
        homeView.classList.add('active');
    }, 400);
}

// Handle Send Message
function handleSendMessage() {
    const text = messageInput.value.trim();
    if (!text || !currentLeader) return;
    
    // 1. Add user message
    addMessage(text, 'user');
    messageInput.value = '';
    
    // 2. Show typing indicator
    const typingId = showTypingIndicator();
    
    // 3. Process reply with a delay for realism
    setTimeout(() => {
        removeTypingIndicator(typingId);
        const reply = generateReply(text, currentLeader);
        addMessage(reply, 'leader');
        speak(reply, currentLeader);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
}

// Generate Reply based on Dictionary
function generateReply(text, leader) {
    const lowerText = text.toLowerCase();
    
    // Check dictionary for matches
    for (const keyword in leader.dictionary) {
        if (lowerText.includes(keyword)) {
            return leader.dictionary[keyword];
        }
    }
    
    // Default response if no keyword matches
    const defaults = leader.defaultResponses;
    const randomIndex = Math.floor(Math.random() * defaults.length);
    return defaults[randomIndex];
}

// Add Message to DOM
function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.textContent = text;
    
    chatMessages.appendChild(msgDiv);
    scrollToBottom();
}

// Typing Indicator
function showTypingIndicator() {
    const id = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = id;
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
    return id;
}

function removeTypingIndicator(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Speech Synthesis (Text to Speech) — Enhanced
function showSpeakingPanel(leader) {
    if (!speakingPanel) return;
    speakingAvatar.style.backgroundImage = `url('${leader.avatar}')`;
    speakingName.textContent = leader.name;
    speakingPanel.classList.add('active');
    isSpeaking = true;
}

function hideSpeakingPanel() {
    if (!speakingPanel) return;
    speakingPanel.classList.remove('active');
    isSpeaking = false;
}

let currentAudio = null;

function speak(text, leader) {
    // Stop any ongoing speech
    stopSpeaking();
    
    // Fallback: If for some reason the text isn't in audioMap, don't crash
    if (typeof audioMap === 'undefined' || !audioMap[text]) {
        console.warn("Audio file not found for text:", text);
        return;
    }
    
    // Show the speaking panel
    showSpeakingPanel(leader);
    
    // Play the generated MP3
    currentAudio = new Audio(audioMap[text]);
    
    currentAudio.onended = () => {
        setTimeout(() => hideSpeakingPanel(), 300);
        currentAudio = null;
    };
    
    currentAudio.onerror = () => {
        console.error("Error playing audio file:", audioMap[text]);
        hideSpeakingPanel();
        currentAudio = null;
    };
    
    currentAudio.play().catch(e => {
        console.error("Audio playback failed:", e);
        hideSpeakingPanel();
    });
}

// Stop speech when closing chat
function stopSpeaking() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    hideSpeakingPanel();
}

// Initialize
document.addEventListener('DOMContentLoaded', initApp);
