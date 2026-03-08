import type { Metadata } from "next";

import { OrderPageClient } from "@/components/order/order-page-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "주문",
  description: "PDRN 리퀴드샷 주문 페이지에서 수량과 배송 정보를 입력해 보세요.",
  path: "/order",
});

export default function OrderPage() {
  return <OrderPageClient />;
}
