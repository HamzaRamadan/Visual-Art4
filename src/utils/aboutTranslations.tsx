import type { ReactNode } from "react";

export const aboutTranslations = {
  en: {
    aboutTitle: "About Us",
    aboutContent: `Al-Farabi Printing Factory is a vital entity within the General Company for Food Products, one of the formations of the Ministry of Industry and Minerals. The factory specializes in delivering comprehensive printing services to a wide range of public sector institutions, while also fulfilling the diverse needs of the private sector.
In 2024, the factory underwent a complete rehabilitation through a strategic partnership with Visual Art Company. This included modernizing the infrastructure and outfitting production halls and buildings in line with the highest technical specifications and internationally approved standards.
As part of this transformation, Al-Farabi Printing Factory became the first company in Iraq to introduce a 6-color double coater combi printing machine from Koenig & Bauer—a global leader in printing technology, The machine is capable of printing UV and conventional ink. Al-Farabi Factory also introduce the first modern large format printing machine with 5-color and a coater from Koenig and Bauer. These advanced machines allow for highly flexible and premium-quality printing in a single pass, setting a new benchmark in the local industry.
In addition, the factory was equipped with the latest converting machines from BOBST, known worldwide for their excellence in packaging machinery. Together, these technologies enable us to deliver precision printing of cardboard boxes, paper and plastic labels, and packaging materials at a level of quality and efficiency that meets and exceeds market demands.
With these cutting-edge capabilities, Al-Farabi Printing Factory stands as a leader in innovation, quality, and service in Iraq’s printing and packaging sector.
`,
    readMore:"readMore",
    ourVision: "Our Vision",
    vision: `To deliver high-quality printing services to key sectors across the market by leveraging the latest technologies and a skilled, specialized team—while remaining fully committed to precision, speed, and customer satisfaction.`,
    ourMission: "Our Mission",
    mission: `To become the preferred partner in Iraq and the region for carton and label printing, by offering:
•	Exceptional quality
•	Dependable service
•	Integrated solutions in both printing and packaging
We are dedicated to elevating our customers, shaping lives, and protecting the future. This mission drives everything we do—reflecting the value we bring to our clients, end users, and team members, while balancing today’s success with a sustainable tomorrow for future generations.
`
   
  },
  ar: {
    aboutTitle: "من نحن",
    aboutContent:`يُعَدّ مصنع الفارابي للطباعة أحد الركائز الحيوية في الشركة العامة للمنتجات الغذائية، إحدى تشكيلات وزارة الصناعة والمعادن. يتخصص المصنع في تقديم خدمات طباعة شاملة لمجموعة واسعة من مؤسسات القطاع العام، إضافةً إلى تلبية الاحتياجات المتنوعة للقطاع الخاص.
في عام 2024، شهد المصنع عملية تأهيل شاملة من خلال شراكة استراتيجية مع شركة الفن المرئي، شملت تحديث البنية التحتية وتجهيز القاعات الإنتاجية والمباني وفقًا لأعلى المواصفات الفنية والمعايير الدولية المعتمدة.
وفي إطار هذا التطوير، أصبح مصنع الفارابي أول شركة في العراق تُدخل آلة طباعة مزدوجة الطلاء بستة ألوان (Combi) من شركة Koenig & Bauer، الرائدة عالميًا في تقنيات الطباعة. وتمتاز هذه الآلة بالقدرة على الطباعة باستخدام الحبر التقليدي وUV. كما أدخل المصنع أول آلة طباعة حديثة ذات مقاس كبير بخمسة ألوان مزوّدة بوحدة طلاء من شركة Koenig & Bauer. وتتيح هذه التقنيات المتقدمة مرونة عالية وجودة متميزة في الطباعة من مرور واحد، مما يضع معيارًا جديدًا في الصناعة المحلية.
بالإضافة إلى ذلك، جُهّز المصنع بأحدث ماكينات التحويل من شركة BOBST، المعروفة عالميًا بريادتها في مجال ماكينات التغليف. وتُمكّن هذه المجموعة المتكاملة من التقنيات المصنع من تقديم خدمات طباعة دقيقة لصناديق الكرتون، والملصقات الورقية والبلاستيكية، ومواد التغليف بجودة وكفاءة تلبي وتفوق متطلبات السوق.
وبهذه القدرات المتطورة، يقف مصنع الفارابي للطباعة كأحد روّاد الابتكار والجودة والخدمة في قطاع الطباعة والتغليف في العراق.
`,
    readMore:"عرض المزيد",
    ourVision: "رؤيتنا",
    vision: `تقديم خدمات طباعة عالية الجودة للقطاعات الرئيسية في السوق من خلال الاستفادة من أحدث التقنيات وفريق متخصص ذو كفاءة عالية، مع الالتزام الكامل بالدقة والسرعة ورضا العملاء.`,
    ourMission: "رسالتنا",
    mission:`أن نكون الشريك المفضل في العراق والمنطقة في مجال طباعة الكرتون والملصقات، وذلك من خلال تقديم:
• جودة استثنائية
• خدمة موثوقة
• حلول متكاملة في الطباعة والتغليف
نحن ملتزمون بالارتقاء بعملائنا، وصياغة حياة أفضل، وحماية المستقبل. إن هذه الرسالة هي ما يقود كل ما نقوم به، وتعكس القيمة التي نقدمها لعملائنا، والمستخدمين النهائيين، والمجتمع الذي نخدمه.
`,
    
  }
};




interface ourMission {
  [key: string]: {
    ourMission: string;
    mission: ReactNode;
  };
}

export const ourMission: ourMission = {
  en: {
    ourMission: "Our Mission",
    mission: (
      <>
        <p>
          To become the preferred partner in Iraq and the region for carton and label printing, by offering:
        </p>
       <ul className="list-disc pl-5">
  <li>Exceptional quality</li>
  <li>Dependable service</li>
  <li>Integrated solutions in both printing and packaging</li>
</ul>

        <p>
         We are dedicated to elevating our customers, shaping lives, and protecting the future. This mission drives everything we do—reflecting the value we bring to our clients, end users, and team members, while balancing today’s success with a sustainable tomorrow for future generations.
        </p>
      </>
    ),
  },
  ar: {
    ourMission: "رسالتنا",
    mission: (
      <>
        <p>
          أن نكون الشريك المفضل في العراق والمنطقة في مجال طباعة الكرتون والملصقات، وذلك من خلال تقديم:
        </p>
        <ul className="list-disc pl-5">
          <li>جودة استثنائية</li>
          <li>خدمة موثوقة</li>
          <li>حلول متكاملة في الطباعة والتغليف</li>
        </ul>
        <p>
          نحن ملتزمون بالارتقاء بعملائنا، وصياغة حياة أفضل، وحماية المستقبل. إن هذه الرسالة هي ما يقود كل ما نقوم به، وتعكس القيمة التي نقدمها لعملائنا، والمستخدمين النهائيين، والمجتمع الذي نخدمه.
        </p>
      </>
    ),
  },
};
