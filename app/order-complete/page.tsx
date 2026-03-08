import type { Metadata } from "next";
import { Suspense } from "react";

import { PaymentStatus } from "@/components/order/payment-status";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "주문 완료",
  description: "주문 완료 상태를 확인하는 페이지입니다.",
  path: "/order-complete",
  noIndex: true,
});

export default function OrderCompletePage() {
  return (
    <div className="px-6 py-16 sm:px-8 lg:px-10">
      <Suspense
        fallback={
          <section className="glass-panel mx-auto max-w-3xl p-8 sm:p-10">
            <p className="eyebrow">Order Complete</p>
            <h1 className="section-title mt-3">주문 정보를 불러오는 중입니다.</h1>
          </section>
        }
      >
        <PaymentStatus />
      </Suspense>
    </div>
  );
}
