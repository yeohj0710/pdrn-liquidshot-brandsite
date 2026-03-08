import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "취소·환불정책",
};

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="glass-panel p-8 sm:p-10">
        <p className="eyebrow">Refund Policy</p>
        <h1 className="section-title mt-3">취소·환불정책</h1>
        <div className="mt-8 grid gap-6 text-sm leading-7 text-muted">
          <div className="feature-card">
            제품 특성상 단순 변심에 의한 취소·환불은 배송 준비 전 단계에서만 가능하며, 개봉 또는 사용
            후에는 제한될 수 있습니다.
          </div>
          <div className="feature-card">
            오배송, 파손, 표시사항 오류 등 판매자 귀책 사유가 확인되는 경우 관련 법령 범위 내에서
            교환 또는 환불을 진행합니다.
          </div>
          <div className="feature-card">
            실제 판매 개시 전에는 배송비, 회수 기준, 처리 기한을 판매자 정책에 맞춰 최종 확정해 주세요.
          </div>
        </div>
      </div>
    </div>
  );
}
