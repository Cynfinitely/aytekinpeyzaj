import solucanGubresi from "../public/solucan_gubresi_10l.jpeg";
import guvercinDogalGubresi from "../public/guvercin_gubresi_10l.jpeg";
import keciKoyunDogalGubre from "../public/keci_koyun_dogal_gubre_10l.jpeg";
import superToprak from "../public/super_toprak_10l.jpeg";
import orkideTopragi from "../public/orkide_topragi_3l.jpeg";
import { IProduct } from "../interfaces/index";

export const products: IProduct[] = [
  {
    id: "superToprak",
    name: "Süper Toprak",
    liter: [3, 5, 10, 20, 40],
    image: superToprak,
    description:
      "Süper toprak, saksı yetiştiriciliğinde iç ve dış mekanlarda kullanılmak üzere üretilen; sağlıklı, uzun ömürlü bitkilerin yetiştirilmesi, saksı değişimlerinde besleyici doğal katkılar olan karışım toprağına verilen addır.Süper toprak zengin besin değerleri ile bitkilerin sağlıklı beslenmesi ve hızlı büyümesini sağlar.Süper toprak içeriğinde bulunan katı çiftlik gübresi, volkanik tüf ve bitkisel humus sayesinde bitkinin istemiş olduğu sağlıklı ortam sağlanır. Süper toprak yüksek besin değeri  ve su tutma kapasitesi ile kimyasal katkısı bulunmayan doğal bir üründür.",
    url: "/api/products/halfmoon",
  },
  {
    id: "solucanGubresi",
    name: "Solucan Gübresi",
    liter: [10],
    image: solucanGubresi,
    description:
      "Solucan gübresi, organik tarımın vazgeçilmez bir unsuru olarak bilinir. Doğal solucan gübresi, solucanların sindirim sistemiyle elde edilen, bitkilerin besin ihtiyaçlarını karşılayan zengin bir gübredir. Toprağa organik madde kazandırırken, bitkilerin büyümesini teşvik eder. Solucan gübresi, toprağın yapısını iyileştirir, su tutma kapasitesini artırır ve bitkilerin hastalıklara karşı direncini artırır. Organik tarımın sağlıklı ve sürdürülebilir bir şekilde yapılmasına katkı sağlar.",
    url: "/api/products/dragonscale",
  },
  {
    id: "guvercinDogalGubresi",
    name: "Güvercin Doğal Gübresi",
    liter: [10],
    image: guvercinDogalGubresi,
    description:
      "Güvercin doğal gübresi, yüzyıllardır tarımda kullanılan değerli bir gübredir. Güvercinlerin sindirim sisteminden geçen gübre, yüksek miktarda azot, fosfor ve potasyum içerir. Bu besin maddeleri, bitkilerin sağlıklı büyümesi ve gelişmesi için gereklidir. Güvercin doğal gübresi, toprağın yapısını iyileştirir, topraktaki mikroorganizmaların aktivitesini artırır ve bitkilerin kök sistemlerini güçlendirir. Aynı zamanda, topraktaki pH dengesini düzenler ve bitkilerin besinlerini daha etkili bir şekilde almasını sağlar.",
    url: "/api/products/crowntail",
  },
  {
    id: "keciKoyunDogalGubre",
    name: "Keçi Koyun Doğal Gübre",
    liter: [10],
    image: keciKoyunDogalGubre,
    description:
      "Keçi ve koyun doğal gübresi, organik tarımın önemli bir bileşenidir. Bu gübre, keçi ve koyunların sindirim sisteminden elde edilen değerli bir kaynaktır. Yüksek miktarda organik madde içerir ve toprağın verimliliğini artırır. Aynı zamanda, toprağın yapısını iyileştirir, su tutma kapasitesini artırır ve bitkilerin besin ihtiyacını karşılar. Keçi ve koyun doğal gübresi, toprağın doğal dengesini korur ve bitkilerin sağlıklı büyümesini teşvik eder.",
    url: "/api/products/veiltail",
  },
  ,
  {
    id: "orkideTopragi",
    name: "Orkide Toprağı",
    liter: [3],
    image: orkideTopragi,
    description:
      "Orkide toprağı, özel olarak orkide türlerinin yetiştirilmesi için formüle edilmiş bir karışımdır. Orkide toprağı, orkide köklerinin ihtiyaç duyduğu hava sirkülasyonunu sağlamak için hafif ve havalı bir yapıya sahiptir. Aynı zamanda, orkide toprağı suyunu hızlıca drenaj eder ve köklerin çürümesini önler. Orkide toprağı, bitkilerin sağlıklı kök gelişimi için gerekli olan besin maddelerini içerir ve orkidelerin sağlıklı büyümesini teşvik eder. Bu özel formülasyon, orkidelerin doğal yaşam ortamlarına en uygun koşulları sağlar ve sağlıklı çiçeklenme ve büyümeyi destekler.",
    url: "/api/products/veiltail",
  },
];
