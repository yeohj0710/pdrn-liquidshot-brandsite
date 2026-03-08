import { NextResponse } from "next/server";

import {
  fetchPaymentInfoByMethod,
  hasVerificationConfig,
  INICIS_PAYMENT_METHOD,
} from "@/lib/payment/portone";

type VerifyBody = {
  paymentId?: string;
  paymentMethod?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as VerifyBody;
    const paymentId = body.paymentId?.trim();
    const paymentMethod = body.paymentMethod?.trim() || INICIS_PAYMENT_METHOD;

    if (!paymentId) {
      return NextResponse.json({ message: "paymentId is required" }, { status: 400 });
    }

    if (!hasVerificationConfig(paymentMethod)) {
      return NextResponse.json(
        {
          message:
            "현재는 결제 검증용 시크릿 키가 설정되지 않아 수동 확인 상태로 둡니다.",
        },
        { status: 501 }
      );
    }

    const payment = await fetchPaymentInfoByMethod({ paymentId, paymentMethod });
    const response = payment?.response ?? payment;
    const amount =
      response?.amount ??
      response?.paid_amount ??
      response?.totalAmount ??
      response?.amount?.total;
    const status =
      response?.status ??
      response?.statusChanged?.status ??
      response?.transactionType ??
      "paid";

    return NextResponse.json({
      verified: true,
      amount,
      status,
      raw: response,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Failed to verify payment",
      },
      { status: 500 }
    );
  }
}
