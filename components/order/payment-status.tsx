"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { formatKrw } from "@/lib/site-data";

type VerificationState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; amount?: number; rawStatus?: string }
  | { kind: "manual"; message: string }
  | { kind: "error"; message: string };

export function PaymentStatus() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId") || "";
  const paymentMethod = searchParams.get("method") || "inicis";
  const cancelled = searchParams.get("cancelled");
  const [state, setState] = useState<VerificationState>(() =>
    cancelled ? { kind: "manual", message: "결제가 취소되었습니다." } : { kind: "idle" }
  );

  const heading = useMemo(() => {
    if (state.kind === "success") return "주문이 정상적으로 접수되었습니다.";
    if (state.kind === "loading") return "주문 정보를 확인하고 있습니다.";
    if (state.kind === "error") return "주문 확인 중 문제가 발생했습니다.";
    if (state.kind === "manual") return "주문 상태를 확인해 주세요.";
    return "주문 접수 페이지입니다.";
  }, [state.kind]);

  useEffect(() => {
    if (!paymentId || cancelled) return;

    let active = true;

    async function verify() {
      setState({ kind: "loading" });
      try {
        const response = await fetch("/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId, paymentMethod }),
        });

        const payload = (await response.json()) as {
          verified?: boolean;
          amount?: number;
          status?: string;
          message?: string;
        };

        if (!active) return;

        if (response.ok && payload.verified) {
          setState({ kind: "success", amount: payload.amount, rawStatus: payload.status });
          return;
        }

        if (response.status === 501) {
          setState({
            kind: "manual",
            message: payload.message || "주문 상태는 고객센터를 통해 안내받으실 수 있습니다.",
          });
          return;
        }

        setState({
          kind: "error",
          message: payload.message || "주문 상태를 다시 확인해 주세요.",
        });
      } catch (error) {
        console.error(error);
        if (active) {
          setState({
            kind: "error",
            message: "네트워크 오류가 발생했습니다. 잠시 후 다시 확인해 주세요.",
          });
        }
      }
    }

    void verify();

    return () => {
      active = false;
    };
  }, [cancelled, paymentId, paymentMethod]);

  return (
    <section className="glass-panel mx-auto max-w-3xl p-8 sm:p-10">
      <p className="eyebrow">Order Complete</p>
      <h1 className="section-title mt-3">{heading}</h1>
      <p className="mt-4 text-base leading-7 text-muted">
        주문 번호 <span className="font-medium text-ink">{paymentId || "미발급"}</span>
      </p>

      <div className="mt-8 rounded-[1.75rem] bg-white/75 p-6 text-sm leading-7 text-muted">
        {state.kind === "loading" ? <p>주문 상태를 확인하는 중입니다.</p> : null}
        {state.kind === "success" ? (
          <>
            <p>
              결제 상태 <span className="font-medium text-ink">{state.rawStatus || "paid"}</span>
            </p>
            <p>
              결제 금액 <span className="font-medium text-ink">{formatKrw(state.amount || 0)}</span>
            </p>
            <p>주문 관련 문의는 고객센터를 통해 안내받으실 수 있습니다.</p>
          </>
        ) : null}
        {state.kind === "manual" ? <p>{state.message}</p> : null}
        {state.kind === "error" ? <p>{state.message}</p> : null}
        {state.kind === "idle" ? <p>결제 완료 후 주문 상태가 이 페이지에 표시됩니다.</p> : null}
      </div>
    </section>
  );
}
