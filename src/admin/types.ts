export type CollectionKey = "services" | "products" | "logistics" | "users";

export interface BaseItem {
  id: string;
  title?: string;
  description?: string;
  status?: "active" | "inactive";
  // مرن لأي حقول إضافية
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ColumnDef {
  key: string;          // مفتاح الحقل
  label: string;        // اسم العرض
  editable?: boolean;   // هل يظهر في الفورم
  type?: "text" | "textarea" | "number" | "select" | "email";
  options?: {label: string; value: string}[];
  width?: string;       // عرض العمود (اختياري)
}
