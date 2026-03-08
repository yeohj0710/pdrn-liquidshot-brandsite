export const siteUrl = "https://kpharmrx.co.kr";

export const companyInfo = {
  legalName: "엔피케이솔루션즈",
  brandName: "K-PharmRx",
  representative: "김주성",
  businessNumber: "409-86-12459",
  phone: "061-375-7080",
  email: "npk@npkcorp.net",
  address: "전라남도 화순군 동복면 동구릉길 437-1",
  postalCode: "59453",
  brandDescription: "정제된 감각으로 완성한 더마 이너뷰티 스토어",
};

export const navLinks = [
  { href: "/", label: "홈" },
  { href: "/brand", label: "브랜드" },
  { href: "/formula", label: "원료" },
  { href: "/product", label: "제품" },
  { href: "/order", label: "주문" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "문의" },
] as const;

export const policyLinks = [
  { href: "/policies/terms", label: "이용약관" },
  { href: "/policies/privacy", label: "개인정보처리방침" },
  { href: "/policies/refund", label: "취소·환불정책" },
] as const;

export const productData = {
  name: "PDRN 리퀴드샷",
  englishName: "PDRN Liquid Shot",
  price: 30000,
  pack: "10g x 10포",
  category: "더마 이너뷰티 식품",
  heroEyebrow: "K-Pharmacy Inspired Inner Beauty",
  heroTitle: "맑고 정돈된 하루를 위한 PDRN 리퀴드샷",
  heroDescription:
    "PDRN 파이토컴플렉스, 저분자 피쉬콜라겐, 병풀추출분말을 한 포에 담은 스틱형 이너뷰티 제품입니다. 세련된 패키지와 간편한 포맷으로 일상에 자연스럽게 스며드는 루틴을 제안합니다.",
  purchaseNote: "1박스 10포 구성의 스틱 타입으로 가볍게 챙기기 좋은 데일리 포맷입니다.",
  imagePath: "/images/pdrn-liquid-shot-product.png",
  ingredients: [
    {
      title: "PDRN 파이토컴플렉스",
      amount: "3,000mg / 1포당",
      description: "브랜드의 시그니처를 선명하게 보여주는 핵심 원료입니다.",
    },
    {
      title: "저분자 피쉬콜라겐",
      amount: "1,000mg / 1포당",
      description: "이너뷰티 루틴과 자연스럽게 연결되는 대표 원료로 담았습니다.",
    },
    {
      title: "병풀추출분말",
      amount: "200mg / 1포당",
      description: "정돈된 더마 무드를 완성하는 조합으로 구성했습니다.",
    },
  ],
};

export const trustSignals = [
  {
    label: "Daily Shot",
    title: "가볍게 챙기기 좋은 스틱 포맷",
    description:
      "개별 스틱 타입으로 구성되어 파우치, 데스크, 여행 가방 안 어디에서든 부담 없이 즐기기 좋습니다.",
  },
  {
    label: "Clean Mood",
    title: "정제된 무드의 패키지 디자인",
    description:
      "부드러운 핑크 톤과 깔끔한 레이아웃으로 선물처럼 꺼내기 좋은 첫인상을 완성했습니다.",
  },
  {
    label: "Simple Routine",
    title: "복잡하지 않은 데일리 루틴",
    description:
      "한 포씩 간편하게 즐길 수 있도록 구성해 바쁜 일상 속에서도 루틴을 이어가기 좋습니다.",
  },
] as const;

export const editorialCards = [
  {
    title: "Elegant Package",
    copy: "은은한 광택감과 깨끗한 컬러 조합으로 세련된 분위기를 더했습니다.",
  },
  {
    title: "Easy To Carry",
    copy: "한 손에 가볍게 들어오는 스틱 타입이라 언제 어디서든 챙기기 편합니다.",
  },
  {
    title: "Calm Daily Mood",
    copy: "과하지 않은 무드로 일상 속 루틴에 자연스럽게 어울리도록 디자인했습니다.",
  },
] as const;

export const ritualSteps = [
  {
    step: "01",
    title: "하루를 시작하며 가볍게",
    text: "부담 없는 스틱 포맷으로 바쁜 아침에도 손쉽게 루틴을 이어갈 수 있습니다.",
  },
  {
    step: "02",
    title: "책상 위, 파우치 안 어디서든",
    text: "휴대가 간편해 외출 전, 사무실, 여행지에서도 편하게 챙기기 좋습니다.",
  },
  {
    step: "03",
    title: "깔끔한 패키지 그대로",
    text: "단정한 비주얼로 스스로를 위한 루틴은 물론 가벼운 선물용으로도 잘 어울립니다.",
  },
] as const;

export const brandPrinciples = [
  {
    title: "약국에서 만난 듯한 단정함",
    body: "깔끔한 인상과 믿음직한 무드로 데일리 이너뷰티 루틴을 제안합니다.",
    accent: "Calm",
  },
  {
    title: "부드럽고 세련된 컬러감",
    body: "패키지의 핑크 무드를 살리되 과하지 않게 정리해 편안한 분위기를 완성했습니다.",
    accent: "Soft",
  },
  {
    title: "일상에 자연스럽게 스며드는 루틴",
    body: "복잡한 설명보다 간결한 구성과 쉬운 포맷으로 매일의 루틴에 집중했습니다.",
    accent: "Daily",
  },
] as const;

export const formulaNotes = [
  "원료 정보는 제품 패키지 표기 기준으로 안내합니다.",
  "식품 관련 상세 정보와 섭취 안내는 최종 제품 표시사항을 확인해 주세요.",
  "원재료명과 알레르기 유발 가능 성분은 구매 전 반드시 확인해 주세요.",
] as const;

export const faqItems = [
  {
    question: "한 박스에는 몇 포가 들어 있나요?",
    answer: "PDRN 리퀴드샷은 10g 스틱 10포로 구성되어 있습니다.",
  },
  {
    question: "주요 원료는 무엇인가요?",
    answer:
      "패키지 표기 기준 PDRN 파이토컴플렉스, 저분자 피쉬콜라겐, 병풀추출분말을 담고 있습니다.",
  },
  {
    question: "휴대하기 편한가요?",
    answer:
      "개별 스틱 타입이라 파우치나 가방에 가볍게 넣어 다니기 좋고, 일상 루틴으로 챙기기 편합니다.",
  },
  {
    question: "제품 및 주문 문의는 어디로 하면 되나요?",
    answer:
      `문의 페이지 또는 고객센터(${companyInfo.phone}, ${companyInfo.email})를 통해 안내받으실 수 있습니다.`,
  },
] as const;

export const contactChannels = [
  {
    title: "고객센터",
    value: companyInfo.phone,
    description: "제품 및 주문 관련 문의",
  },
  {
    title: "이메일",
    value: companyInfo.email,
    description: "상담 및 제휴 문의",
  },
  {
    title: "주소",
    value: `${companyInfo.address}, ${companyInfo.postalCode}`,
    description: "판매자 정보",
  },
] as const;

export const orderHighlights = ["1박스 30,000원", "10g x 10포", "신용카드 / 간편결제 지원 예정"] as const;

export function formatKrw(value: number) {
  return `${value.toLocaleString("ko-KR")}원`;
}
