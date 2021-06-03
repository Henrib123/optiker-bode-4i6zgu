import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBrillenDaten() {
    return [
      {
      id: "0",
      field_sun_item: "15674",
      field_sun_material_txt: "metall",
      field_sun_shape_txt: "rund",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      title: "DEMO Sonnebrille 2",
      field_sun_desc: "Eine dezente Cateye-Form und eine helle Havanna-Musterung prägen das Bild dieser Luxusbrille von Chanel. Die Fassung ist filigran, elegant und sehr weiblich. Ein dezentes Chanel-Logo ziert die schmalen Bügel.",
      vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      }, {
      id: "1",
      field_sun_item: "15674",
      field_sun_material_txt: "metall",
      field_sun_shape_txt: "cat eye",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      title: "DEMO Sonnebrille 3",
      field_sun_desc: "Schlichte Eleganz strahlt diese Brille der Designermarke Chanel aus. Die filigrane Fassung ist schwarz und hat an den Bügeln ein weißes Emblem, auf dem das Chanel-Logo zu sehen ist.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      },
      {
      id: "2",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      title: "DEMO Sonnebrille 4",
        field_sun_desc: "Mit dem Modell präsentiert das Luxuslabel Gucci ein elegantes Oversize-Design, das Ihnen mit der geschwungenen Form und raffinierten Akzenten einen edlen Look verleiht. Mit den Verlaufsgläsern in Braun und dem Havanna Muster ist diese Fassung ein echter Hingucker!",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      },
      {
      id: "3",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      title: "DEMO Sonnebrille 5",
        field_sun_desc: "Eine dezente Cateye-Form und eine helle Havanna-Musterung prägen das Bild dieser Luxusbrille von Chanel. Die Fassung ist filigran, elegant und sehr weiblich. Ein dezentes Chanel-Logo ziert die schmalen Bügel.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      }, {
      id: "4",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      title: "DEMO Sonnebrille 6",
        field_sun_desc: "Schlichte Eleganz strahlt diese Brille der Designermarke Chanel aus. Die filigrane Fassung ist schwarz und hat an den Bügeln ein weißes Emblem, auf dem das Chanel-Logo zu sehen ist.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      }, {
      id: "5",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      title: "DEMO Sonnebrille 8",
        field_sun_desc: "Mit dem Modell präsentiert das Luxuslabel Gucci ein elegantes Oversize-Design, das Ihnen mit der geschwungenen Form und raffinierten Akzenten einen edlen Look verleiht. Mit den Verlaufsgläsern in Braun und dem Havanna Muster ist diese Fassung ein echter Hingucker!",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      }, {
      id: "6",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      title: "DEMO Sonnebrille 7",
        field_sun_desc: "Eine dezente Cateye-Form und eine helle Havanna-Musterung prägen das Bild dieser Luxusbrille von Chanel. Die Fassung ist filigran, elegant und sehr weiblich. Ein dezentes Chanel-Logo ziert die schmalen Bügel.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      }, {
      id: "7",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
        field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
        field_sun_desc: "Schlichte Eleganz strahlt diese Brille der Designermarke Chanel aus. Die filigrane Fassung ist schwarz und hat an den Bügeln ein weißes Emblem, auf dem das Chanel-Logo zu sehen ist.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      }, {
      id: "8",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
        field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
        field_sun_desc: "Mit dem Modell präsentiert das Luxuslabel Gucci ein elegantes Oversize-Design, das Ihnen mit der geschwungenen Form und raffinierten Akzenten einen edlen Look verleiht. Mit den Verlaufsgläsern in Braun und dem Havanna Muster ist diese Fassung ein echter Hingucker!",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"
      },
      {
      id: "9",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
        field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
        field_sun_desc: "Eine dezente Cateye-Form und eine helle Havanna-Musterung prägen das Bild dieser Luxusbrille von Chanel. Die Fassung ist filigran, elegant und sehr weiblich. Ein dezentes Chanel-Logo ziert die schmalen Bügel.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "10",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Wenn Sie sich für dieses Modell von Hamilton entscheiden, werden Sie garantiert viele Blicke auf sich ziehen. Schließlich ist die Kombination aus dem trendigen Havanna Muster und einem Mix aus blauen Farbakzenten ein echter Hingucker. Die Form der ausdrucksstarken Herrenbrille ist hingegen eher Klassisch. Wayfarerbrillen stehen welche vielerlei Gesichtsformen hervorragend.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
      {
      id: "11",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
        field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
        field_sun_desc: "Dieses Modell von Inface überzeugt durch seine Blau gemusterte Front mit schlichter Linienführung, angenehmem Tragegefühl sowie der Aussparung an den Bügeln.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
       {
      id: "12",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
         field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
         field_sun_desc: "Schlichte Eleganz strahlt diese Brille der Designermarke Chanel aus. Die filigrane Fassung ist schwarz und hat an den Bügeln ein weißes Emblem, auf dem das Chanel-Logo zu sehen ist.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
      {
      id: "13",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
        field_sun_desc: "Eine dezente Cateye-Form und eine helle Havanna-Musterung prägen das Bild dieser Luxusbrille von Chanel. Die Fassung ist filigran, elegant und sehr weiblich. Ein dezentes Chanel-Logo ziert die schmalen Bügel.",
        field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "14",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Wenn Sie sich für dieses Modell von Hamilton entscheiden, werden Sie garantiert viele Blicke auf sich ziehen. Schließlich ist die Kombination aus dem trendigen Havanna Muster und einem Mix aus blauen Farbakzenten ein echter Hingucker. Die Form der ausdrucksstarken Herrenbrille ist hingegen eher Klassisch. Wayfarerbrillen stehen welche vielerlei Gesichtsformen hervorragend.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
    {
      id: "15",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      field_sun_desc: "Dieses Modell von Inface überzeugt durch seine Blau gemusterte Front mit schlichter Linienführung, angenehmem Tragegefühl sowie der Aussparung an den Bügeln.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
    {
      id: "16",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      field_sun_desc: "Diese Jaguar Sonnenbrille für Herren hat einen besonders coolen Look. Der moderne Stil macht das Modell zu einem vielseitig einsetzbaren Accessoire, das nahezu zu jedem Outfit passt. Die Bügel mit Smoke-Print und tollen Details stechen hervor und rundet das Gesamtpaket ab.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
    {
      id: "17",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      field_sun_desc: "Die Sonnenbrille begeistert nicht nur mit ihrer flexiblen Verarbeitung, Der leichte Rahmen ist selbst für Kinder kaum spürbar. Dadurch wird die Sonnenbrille zum gern getragenen Accessoire und zum zuverlässigen Schutz vor Sonneneinstrahlung.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
    {
      id: "18",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      field_sun_desc: "Wenn Sie sich für dieses Modell von Hamilton entscheiden, werden Sie garantiert viele Blicke auf sich ziehen. Schließlich ist die Kombination aus dem trendigen Havanna Muster und einem Mix aus blauen Farbakzenten ein echter Hingucker. Die Form der ausdrucksstarken Herrenbrille ist hingegen eher Klassisch. Wayfarerbrillen stehen welche vielerlei Gesichtsformen hervorragend.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },

     {
      id: "19",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Diese Jaguar Sonnenbrille für Herren hat einen besonders coolen Look. Der moderne Stil macht das Modell zu einem vielseitig einsetzbaren Accessoire, das nahezu zu jedem Outfit passt. Die Bügel mit Smoke-Print und tollen Details stechen hervor und rundet das Gesamtpaket ab.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "20",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Dieses Modell von Inface überzeugt durch seine Blau gemusterte Front mit schlichter Linienführung, angenehmem Tragegefühl sowie der Aussparung an den Bügeln.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "21",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Die Sonnenbrille begeistert nicht nur mit ihrer flexiblen Verarbeitung, Der leichte Rahmen ist selbst für Kinder kaum spürbar. Dadurch wird die Sonnenbrille zum gern getragenen Accessoire und zum zuverlässigen Schutz vor Sonneneinstrahlung.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "22",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Diese Jaguar Sonnenbrille für Herren hat einen besonders coolen Look. Der moderne Stil macht das Modell zu einem vielseitig einsetzbaren Accessoire, das nahezu zu jedem Outfit passt. Die Bügel mit Smoke-Print und tollen Details stechen hervor und rundet das Gesamtpaket ab.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "23",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Die Sonnenbrille begeistert nicht nur mit ihrer flexiblen Verarbeitung, Der leichte Rahmen ist selbst für Kinder kaum spürbar. Dadurch wird die Sonnenbrille zum gern getragenen Accessoire und zum zuverlässigen Schutz vor Sonneneinstrahlung.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "24",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Mit dem Modell präsentiert das Luxuslabel Gucci ein elegantes Oversize-Design, das Ihnen mit der geschwungenen Form und raffinierten Akzenten einen edlen Look verleiht. Mit den Verlaufsgläsern in Braun und dem Havanna Muster ist diese Fassung ein echter Hingucker!",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "25",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Schlichte Eleganz strahlt diese Brille der Designermarke Chanel aus. Die filigrane Fassung ist schwarz und hat an den Bügeln ein weißes Emblem, auf dem das Chanel-Logo zu sehen ist.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
    {
      id: "26",
      field_sun_item: "15674",
      field_sun_material_txt: "acetat",
      field_sun_shape_txt: "cat eye",
      title: "DEMO Sonnebrille",
      field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
      field_sun_desc: "Dieses Modell von Inface überzeugt durch seine Blau gemusterte Front mit schlichter Linienführung, angenehmem Tragegefühl sowie der Aussparung an den Bügeln.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
     {
      id: "27",
      field_sun_item: "15674",
      field_sun_material_txt: "kunststoff",
      field_sun_shape_txt: "oval",
      title: "DEMO Sonnebrille 1",
       field_sun_teaser_desc: "Die Fassung besteht aus hochwertigem Acetat",
       field_sun_desc: "Wenn Sie sich für dieses Modell von Hamilton entscheiden, werden Sie garantiert viele Blicke auf sich ziehen. Schließlich ist die Kombination aus dem trendigen Havanna Muster und einem Mix aus blauen Farbakzenten ein echter Hingucker. Die Form der ausdrucksstarken Herrenbrille ist hingegen eher Klassisch. Wayfarerbrillen stehen welche vielerlei Gesichtsformen hervorragend.",
        vue_listing_image: "https://www.stage-y77w3ti-5tykmmpq47ouw.eu-4.platformsh.site/sites/default/files/images/e744be01deb96f349ea7c0eae3d75c17/576/0AR_112MJ__3247_030A.webp"    },
    ]
  }
}


