import type { Metadata } from "next";
import { Suspense } from "react";

import { PaymentStatus } from "@/components/order/payment-status";

export const metadata: Metadata = {
  title: "Order Complete",
  description: "결제 완료 또는 검증 상태를 확인합니다.",
};

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
