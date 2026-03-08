import type { Metadata } from "next";

import { OrderPageClient } from "@/components/order/order-page-client";

export const metadata: Metadata = {
  title: "주문",
  description: "PDRN 리퀴드샷 주문 페이지입니다.",
};

export default function OrderPage() {
  return <OrderPageClient />;
}
