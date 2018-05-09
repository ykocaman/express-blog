## Express Blog
- Express.js kütüphanesi ile hazırlanan basit bir blog sistemidir.
- Kayıtlı yazıları listeleme ve yazılara yorum yapabilme olarak toplam iki işlevi vardır.
- İş katmanı (Business layer) olarak **routes** klasöründeki **posts.js** dosyası çalışmaktadır.
- Veritabanı MySQL'dir ve dump dosyası **database/express-blog.sql**'dir. Bağlantı ayarları **.env.example**'dan kopyalanıp **.env**  içerisine yazılmalıdır.
- Veritabanı bağlantı sınıfı için **singleton/db.js** kullanılmaktadır.
- **repositories** klasörü içerisinde SQL sorgularının olduğu bağlantı sınıfları vardır.
- **models** klasörü içerisinde repository'lere erişen model nesneler vardır.
- Yeni repository ve model eklenileceğinde **Base** isimli modelden ve **BaseRepository**'den kalıtım alması gerekmektedir.
- Son kullanıcıdan veri girişi olarak sadece yazılara **yorum yapabilme** özelliği vardır. Veri girişinin kontrolü için **express-validator** kullanılmıştır.
