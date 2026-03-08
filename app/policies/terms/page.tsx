import type { Metadata } from "next";

import { companyInfo } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "이용약관",
  description: "K-PharmRx 공식 스토어 이용약관입니다.",
  path: "/policies/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="glass-panel p-8 sm:p-10">
        <p className="eyebrow">Terms Of Service</p>
        <h1 className="section-title mt-3">이용약관</h1>
        <div className="mt-8 grid gap-8 text-sm leading-7 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-ink">제1조 목적</h2>
            <p className="mt-3">
              본 약관은 {companyInfo.legalName}(이하 &quot;회사&quot;)가 운영하는 K-PharmRx 브랜드 사이트의
              이용 조건, 주문 절차, 결제, 배송, 취소 및 환불에 관한 기본 사항을 정하는 것을
              목적으로 합니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">제2조 서비스 범위</h2>
            <p className="mt-3">
              회사는 제품 소개, 주문 접수, 결제 연동, 고객 문의, 정책 안내 등의 기능을 제공합니다.
              PG 연동, 배송정책, 판매자 정보는 운영 상황에 따라 보완될 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">제3조 주문 및 결제</h2>
            <p className="mt-3">
              이용자는 주문 페이지에서 필요한 정보를 입력하고 회사가 제공하는 결제 수단을 이용하여
              결제를 진행할 수 있습니다. PG사 정책과 카드사 정책에 따라 결제가 제한될 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">제4조 제품 안내</h2>
            <p className="mt-3">
              사이트 내 제품 설명은 패키지 표기와 브랜드 컨셉 소개를 바탕으로 작성되며, 질병의 예방
              및 치료를 위한 의학적 표현을 의미하지 않습니다. 최종 표시사항은 실제 판매 시점 기준을
              따릅니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">제5조 책임 제한</h2>
            <p className="mt-3">
              회사는 이용자의 오입력, PG사 장애, 택배사 지연, 천재지변 등 회사의 합리적 통제를
              벗어난 사유로 발생한 손해에 대해 관련 법령 범위 내에서 책임을 제한할 수 있습니다.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">제6조 관할</h2>
            <p className="mt-3">
              본 약관과 관련한 분쟁은 대한민국 법령에 따르며, 관련 법령이 정한 관할 법원을 제1심
              전속 관할 법원으로 합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
