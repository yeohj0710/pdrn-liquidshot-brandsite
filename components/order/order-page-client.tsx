"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";

import { formatKrw, orderHighlights, productData } from "@/lib/site-data";

declare global {
  interface Window {
    IMP?: {
      init: (merchantId?: string) => void;
      request_pay: (
        params: Record<string, unknown>,
        callback: (response: {
          success?: boolean;
          imp_uid?: string;
          error_msg?: string;
        }) => void
      ) => void;
    };
  }
}

type PaymentMethod = "inicis" | "kakao";

const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID;
const portOneStoreId = process.env.NEXT_PUBLIC_PORTONE_STORE_ID;
const portOneKakaoChannelKey = process.env.NEXT_PUBLIC_PORTONE_KAKAO_CHANNEL_KEY;

const hasInicis = Boolean(merchantId);
const hasKakao = Boolean(portOneStoreId && portOneKakaoChannelKey);
const defaultPaymentMethod: PaymentMethod = hasInicis
  ? "inicis"
  : hasKakao
    ? "kakao"
    : "inicis";

export function OrderPageClient() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [recipient, setRecipient] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [memo, setMemo] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    purchase: false,
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(defaultPaymentMethod);
  const [statusMessage, setStatusMessage] = useState(
    hasInicis || hasKakao
      ? "주문 정보를 입력한 뒤 결제를 진행해 주세요."
      : "온라인 결제 서비스는 현재 오픈 준비 중입니다."
  );

  const subtotal = useMemo(() => quantity * productData.price, [quantity]);
  const isPaymentReady = hasInicis || hasKakao;
  const hasRequiredFields =
    customerName.trim() &&
    phone.trim() &&
    email.trim() &&
    recipient.trim() &&
    address.trim() &&
    agreements.terms &&
    agreements.privacy &&
    agreements.purchase;

  async function handleKakaoPayment(paymentId: string) {
    if (!portOneStoreId || !portOneKakaoChannelKey) {
      setStatusMessage("간편결제 서비스가 아직 준비되지 않았습니다.");
      return;
    }

    const PortOne = await import("@portone/browser-sdk/v2");
    const response = await PortOne.requestPayment({
      storeId: portOneStoreId,
      paymentId,
      orderName: `${productData.name} ${quantity}박스`,
      totalAmount: subtotal,
      currency: PortOne.Entity.Currency.KRW,
      payMethod: "EASY_PAY",
      channelKey: portOneKakaoChannelKey,
      customer: {
        fullName: customerName,
        email,
        phoneNumber: phone,
      },
      redirectUrl: `${window.location.origin}/order-complete?paymentId=${paymentId}&method=kakao`,
    });

    if (!response?.code) {
      window.location.href = `/order-complete?paymentId=${paymentId}&method=kakao`;
      return;
    }

    setStatusMessage(response.message || "결제가 취소되었거나 완료되지 않았습니다.");
  }

  function handleInicisPayment(paymentId: string) {
    if (!merchantId || !window.IMP) {
      setStatusMessage("카드 결제 서비스가 아직 준비되지 않았습니다.");
      return;
    }

    window.IMP.init(merchantId);
    window.IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: paymentId,
        name: `${productData.name} ${quantity}박스`,
        amount: subtotal,
        buyer_name: customerName,
        buyer_tel: phone,
        buyer_email: email,
        buyer_addr: `${address} ${addressDetail}`.trim(),
        m_redirect_url: `${window.location.origin}/order-complete?paymentId=${paymentId}&method=inicis`,
      },
      (response) => {
        if (response.success) {
          window.location.href = `/order-complete?paymentId=${paymentId}&method=inicis`;
          return;
        }
        setStatusMessage(response.error_msg || "결제가 취소되었거나 완료되지 않았습니다.");
      }
    );
  }

  async function handleSubmit() {
    if (!hasRequiredFields) {
      setStatusMessage("주문 정보를 모두 입력하고 약관에 동의해 주세요.");
      return;
    }

    if (!isPaymentReady) {
      setStatusMessage("온라인 결제 서비스는 현재 준비 중입니다. 문의를 남겨주시면 안내해 드리겠습니다.");
      return;
    }

    const paymentId = `pdrn-${Date.now()}`;

    try {
      if (paymentMethod === "kakao") {
        await handleKakaoPayment(paymentId);
        return;
      }
      handleInicisPayment(paymentId);
    } catch (error) {
      console.error(error);
      setStatusMessage("결제 진행 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <>
      {hasInicis ? <Script src="https://cdn.iamport.kr/v1/iamport.js" strategy="afterInteractive" /> : null}

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="space-y-8">
          <section className="glass-panel p-8">
            <p className="eyebrow">Order</p>
            <h1 className="section-title mt-3">주문하기</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              주문자 정보와 배송 정보를 입력한 뒤 결제를 진행해 주세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {orderHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-ink">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="glass-panel grid gap-6 p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field">
                <span>주문자명</span>
                <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="홍길동" />
              </label>
              <label className="field">
                <span>연락처</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="010-0000-0000" />
              </label>
            </div>
            <label className="field">
              <span>이메일</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field">
                <span>수령인</span>
                <input value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="홍길동" />
              </label>
              <label className="field">
                <span>수량</span>
                <div className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/65 px-4 py-3">
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6c2cf] text-lg text-ink"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  >
                    -
                  </button>
                  <span className="min-w-8 text-center text-base font-semibold text-ink">{quantity}</span>
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6c2cf] text-lg text-ink"
                    onClick={() => setQuantity((current) => current + 1)}
                  >
                    +
                  </button>
                </div>
              </label>
            </div>

            <label className="field">
              <span>주소</span>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="도로명 주소를 입력해 주세요"
              />
            </label>
            <label className="field">
              <span>상세 주소</span>
              <input
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
                placeholder="상세 주소"
              />
            </label>
            <label className="field">
              <span>배송 메모</span>
              <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="배송 시 요청사항"
                rows={4}
              />
            </label>
          </section>

          <section className="glass-panel p-8">
            <p className="eyebrow">Payment</p>
            {isPaymentReady ? (
              <div className="mt-5 grid gap-3">
                <label className="payment-option">
                  <input
                    type="radio"
                    checked={paymentMethod === "inicis"}
                    onChange={() => setPaymentMethod("inicis")}
                    disabled={!hasInicis}
                  />
                  <div>
                    <p className="font-medium text-ink">신용/체크카드</p>
                    <p className="text-sm text-muted">간편하고 안전하게 결제하실 수 있습니다.</p>
                  </div>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    checked={paymentMethod === "kakao"}
                    onChange={() => setPaymentMethod("kakao")}
                    disabled={!hasKakao}
                  />
                  <div>
                    <p className="font-medium text-ink">간편결제</p>
                    <p className="text-sm text-muted">지원 시 더욱 빠르게 결제하실 수 있습니다.</p>
                  </div>
                </label>
              </div>
            ) : (
              <div className="mt-5 rounded-[1.5rem] border border-white/70 bg-white/60 p-5 text-sm leading-7 text-muted">
                온라인 결제 서비스는 현재 준비 중입니다. 정식 오픈 후 카드 및 간편결제를 순차적으로
                지원할 예정입니다.
              </div>
            )}

            <div className="mt-6 grid gap-3 text-sm text-muted">
              <label className="agreement">
                <input
                  type="checkbox"
                  checked={agreements.terms}
                  onChange={(e) =>
                    setAgreements((current) => ({ ...current, terms: e.target.checked }))
                  }
                />
                <span>이용약관에 동의합니다.</span>
              </label>
              <label className="agreement">
                <input
                  type="checkbox"
                  checked={agreements.privacy}
                  onChange={(e) =>
                    setAgreements((current) => ({ ...current, privacy: e.target.checked }))
                  }
                />
                <span>개인정보 수집 및 이용에 동의합니다.</span>
              </label>
              <label className="agreement">
                <input
                  type="checkbox"
                  checked={agreements.purchase}
                  onChange={(e) =>
                    setAgreements((current) => ({ ...current, purchase: e.target.checked }))
                  }
                />
                <span>식품 구매 유의사항과 취소·환불정책을 확인했습니다.</span>
              </label>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="glass-panel overflow-hidden p-6">
            <div className="relative mb-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f8e5ef] via-white to-[#f4efe9] p-8">
              <div className="absolute -right-16 top-8 h-36 w-36 rounded-full bg-[#ffd9ee] blur-3xl" />
              <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[#eadcca] blur-3xl" />
              <Image
                src={productData.imagePath}
                alt={productData.name}
                width={700}
                height={700}
                className="relative mx-auto w-full max-w-[340px]"
                priority
              />
            </div>
            <p className="eyebrow">Selected Product</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink">{productData.name}</h2>
            <p className="mt-2 text-sm text-muted">
              {productData.pack} / {productData.category}
            </p>

            <div className="mt-6 space-y-4 rounded-[1.5rem] bg-white/75 p-5">
              <div className="flex items-center justify-between text-sm text-muted">
                <span>판매가</span>
                <span>{formatKrw(productData.price)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-muted">
                <span>수량</span>
                <span>{quantity}박스</span>
              </div>
              <div className="flex items-center justify-between border-t border-[#e4d8df] pt-4 text-base font-semibold text-ink">
                <span>총 결제 금액</span>
                <span>{formatKrw(subtotal)}</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-[#8b125c] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#760e4e] disabled:cursor-not-allowed disabled:bg-[#c7a0b8]"
              onClick={handleSubmit}
              disabled={!isPaymentReady}
            >
              {isPaymentReady ? "결제하기" : "오픈 준비 중"}
            </button>
            <p className="mt-4 text-sm leading-6 text-muted">{statusMessage}</p>
            {memo ? <p className="mt-3 text-xs text-muted">배송 메모: {memo}</p> : null}
          </section>
        </aside>
      </div>
    </>
  );
}
