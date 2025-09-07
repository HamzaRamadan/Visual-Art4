import { useEffect, useState, useMemo } from "react";
import "./ProductsPage.css";
import { useLanguageHook } from "../../hooks/useLanguage";
import SectionTitle from "../../components/layout/SectionTitle";
import ProductCard from "../../components/product/ProductCard";

interface ProductLang {
  img: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  _id: string;
}

interface Product {
  _id: string | { $oid: string };
  ar: ProductLang[];
  en: ProductLang[];
}

interface ProductDisplay {
  mainId: string; // _id الأساسي
  img: string;
  title: string;
  description: string;
  features: string[];
  category: string;
}

export default function ProductsPage() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const { language } = useLanguageHook();
  const isRTL = language === "ar";

  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState<ProductDisplay[]>([]);

  // ✅ تحميل البيانات من الـ API
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error("❌ Error fetching products:", err));
  }, []);

  // ✅ تحويل البيانات مع mainId صحيح
  const products = useMemo(() => {
    return (productsData || [])
      .map((p) => {
        const langData = p[language]?.[0];
        if (!langData) return null;

        // تعديل هنا: استخراج _id كـ string
        let id: string = "";
        if (typeof p._id === "string") {
          id = p._id;
        } else if (p._id && "$oid" in p._id) {
          id = p._id.$oid;
        }

        return {
          mainId: id,
          img: langData.img,
          title: langData.title,
          description: langData.description,
          features: langData.features,
          category: langData.category || "",
        };
      })
      .filter(Boolean) as ProductDisplay[];
  }, [productsData, language]);

  // ✅ استخراج الكاتيجوريز
  const categories = useMemo(() => {
    const langs = products.map((p) => p.category).filter(Boolean);
    return ["all", ...new Set(langs)];
  }, [products]);

  // ✅ فلترة المنتجات حسب الكاتيجوري
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === activeCategory)
      );
    }
  }, [activeCategory, products]);

  return (
    <div className="page products-page" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <SectionTitle title={language === "ar" ? "منتجاتنا" : "Our Products"} />

        {/* أزرار الكاتيجوري */}
        <div className="products-filter">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* شبكة المنتجات */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
           <ProductCard
  key={product.mainId}
  index={index}
  product={{
    _id: product.mainId,
    ar: [],
    en: [],
    ...product,
  }}
/>

          ))}
        </div>

        

        {/* لا توجد منتجات */}
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>
              {language === "ar"
                ? "لا توجد منتجات في هذه الفئة"
                : "No products in this category"}
            </h3>
            <button
              className="back-btn"
              onClick={() => setActiveCategory("all")}
            >
              {language === "ar" ? "عرض جميع المنتجات" : "View All Products"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
