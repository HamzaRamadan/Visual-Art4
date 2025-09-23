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
    aboutContent:`يُعَدّ مصنع الفارابي للطباعة كيانًا حيويًا ضمن الشركة العامة للمنتجات الغذائية، إحدى تشكيلات وزارة الصناعة والمعادن. يختص المصنع بتقديم خدمات طباعة متكاملة لعدد واسع من مؤسسات القطاع العام، بالإضافة إلى تلبية الاحتياجات المتنوعة للقطاع الخاص.

في عام 2024، خضع المصنع لعملية إعادة تأهيل شاملة من خلال شراكة استراتيجية مع شركة الفن المرئي  (Visual Art)، شملت تحديث البنية التحتية وتجهيز القاعات الإنتاجية والمباني وفقًا لأعلى المواصفات الفنية والمعايير العالمية المعتمدة.

وكجزء من هذا التحول، أصبح مصنع الفارابي للطباعة أول شركة في العراق تُدخل ماكينة طباعة كومبي بستة ألوان مزودة بطبقتي طلاء (Double Coater) من شركة Koenig & Bauer، الرائدة عالميًا في تقنيات الطباعة، حيث تتميز بقدرتها على الطباعة باستخدام الأحبار فوق البنفسجية (UV) والأحبار التقليدية. كما أدخل المصنع أول ماكينة طباعة حديثة كبيرة الحجم بخمسة ألوان مزودة بطبقة طلاء من الشركة نفسها. وتُمكّن هذه الماكينات المتطورة من إنجاز عمليات طباعة مرنة وعالية الجودة بتمريرة واحدة، لتضع بذلك معيارًا جديدًا في الصناعة المحلية.

بالإضافة إلى ذلك، جُهّز المصنع بأحدث آلات التجهيز والتحويل من شركة BOBST، المعروفة عالميًا بريادتها في مجال ماكينات التعبئة والتغليف. وبفضل هذه التقنيات، أصبح بإمكاننا تنفيذ طباعة دقيقة لصناديق الكرتون والملصقات الورقية والبلاستيكية ومواد التعبئة والتغليف، بجودة وكفاءة تلبي بل وتتجاوز متطلبات السوق.

وبهذه القدرات المتطورة، يقف مصنع الفارابي للطباعة في موقع الريادة من حيث الابتكار والجودة والخدمة في قطاع الطباعة والتعبئة والتغليف في العراق.`,
    readMore:"عرض المزيد",
    ourVision: "رؤيتنا",
    vision: `تقديم خدمات طباعة عالية الجودة لقطاعات السوق المختلفة من خلال الاستفادة من أحدث التقنيات وفريق متخصص ومؤهل—مع التزام كامل بالدقة والسرعة ورضا العملاء.`,
    ourMission: "رسالتنا",
    mission:`أن نصبح الشريك المفضل في العراق والمنطقة في مجال طباعة الكرتون والملصقات، عبر تقديم:

جودة استثنائية

خدمة موثوقة

حلول متكاملة في مجالي الطباعة والتعبئة والتغليف

نحن ملتزمون بالارتقاء بعملائنا، والمساهمة في تطوير الحياة، وحماية المستقبل. فهذه الرسالة هي ما يدفعنا للعمل، وتعكس القيمة التي نقدمها لعملائنا والمستفيدين وفريقنا، مع تحقيق النجاح اليوم وموازنته مع مستقبل مستدام للأجيال القادمة.`,
    
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
          To become the preferred partner in Iraq and the region for carton and
          label printing, by offering:
        </p>
       <ul className="list-disc pl-5">
  <li>Exceptional quality</li>
  <li>Dependable service</li>
  <li>Integrated solutions in both printing and packaging</li>
</ul>

        <p>
          We are dedicated to elevating our customers, shaping lives, and
          protecting the future. This mission drives everything we do—reflecting
          the value we bring to our clients, end users, and team members, while
          balancing today’s success with a sustainable tomorrow for future
          generations.
        </p>
      </>
    ),
  },
  ar: {
    ourMission: "رسالتنا",
    mission: (
      <>
        <p>
          أن نصبح الشريك المفضل في العراق والمنطقة في مجال طباعة الكرتون
          والملصقات، عبر تقديم:
        </p>
        <ul className="list-disc pl-5">
          <li>جودة استثنائية</li>
          <li>خدمة موثوقة</li>
          <li>حلول متكاملة في مجالي الطباعة والتعبئة والتغليف</li>
        </ul>
        <p>
          نحن ملتزمون بالارتقاء بعملائنا، والمساهمة في تطوير الحياة، وحماية
          المستقبل. فهذه الرسالة هي ما يدفعنا للعمل، وتعكس القيمة التي نقدمها
          لعملائنا والمستفيدين وفريقنا، مع تحقيق النجاح اليوم وموازنته مع مستقبل
          مستدام للأجيال القادمة.
        </p>
      </>
    ),
  },
};
