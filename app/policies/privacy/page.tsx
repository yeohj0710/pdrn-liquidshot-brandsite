import type { Metadata } from "next";

import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="glass-panel p-8 sm:p-10">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="section-title mt-3">개인정보처리방침</h1>
        <div className="mt-8 grid gap-8 text-sm leading-7 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-ink">1. 수집 항목</h2>
            <p className="mt-3">
              회사는 주문 및 고객 문의 처리를 위해 이름, 연락처, 이메일, 수령인 정보, 배송지 주소,
              결제 관련 식별자 등 최소한의 정보를 수집할 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">2. 이용 목적</h2>
            <p className="mt-3">
              수집한 정보는 주문 처리, 결제 확인, 배송 안내, 고객 응대, 정책 고지, 서비스 품질 개선을
              위해 이용됩니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">3. 보유 기간</h2>
            <p className="mt-3">
              관련 법령이 정한 기간 동안 정보를 보관할 수 있으며, 그 외 정보는 목적 달성 후 지체 없이
              파기합니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">4. 제3자 제공</h2>
            <p className="mt-3">
              결제 처리, 배송 수행, 법령상 의무 이행이 필요한 경우 PG사, 택배사 등에게 필요한 범위
              내에서 정보를 제공할 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">5. 문의처</h2>
            <p className="mt-3">
              개인정보 관련 문의는 {companyInfo.legalName} ({companyInfo.email}, {companyInfo.phone})
              로 접수할 수 있습니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
