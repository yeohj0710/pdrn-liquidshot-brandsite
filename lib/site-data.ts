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
  brandDescription: "한국 약국 감도의 단정한 더마 이너뷰티 브랜드",
};

export const navLinks = [
  { href: "/#brand-story", label: "브랜드" },
  { href: "/#product-story", label: "제품소개" },
  { href: "/#formula-story", label: "핵심원료" },
  { href: "/#review-story", label: "리뷰" },
  { href: "/#faq-preview", label: "FAQ" },
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
  heroTitle: "하루 한 포, 맑고 단정한 이너뷰티 루틴",
  heroDescription:
    "PDRN 파이토컴플렉스, 저분자 피쉬콜라겐, 병풀추출분말을 한 포에 담은 액상 스틱형 제품입니다. 깔끔한 패키지와 데일리 포맷으로 아침 준비 전, 사무실, 이동 중에도 부담 없이 꺼내기 좋은 루틴을 제안합니다.",
  purchaseNote:
    "1박스 10포 구성의 액상 스틱 타입으로, 바쁜 일상 속에서도 편하게 챙길 수 있는 데일리 포맷입니다.",
  imagePath: "/images/pdrn-liquid-shot-product.png",
  ingredients: [
    {
      title: "PDRN 파이토컴플렉스",
      amount: "3,000mg / 1포당",
      description: "브랜드의 정체성을 가장 선명하게 보여주는 핵심 배합입니다.",
    },
    {
      title: "저분자 피쉬콜라겐",
      amount: "1,000mg / 1포당",
      description: "데일리 이너뷰티 루틴에서 익숙하게 찾는 대표 원료를 함께 담았습니다.",
    },
    {
      title: "병풀추출분말",
      amount: "200mg / 1포당",
      description: "차분한 더마 무드를 완성하는 원료 조합의 한 축으로 구성했습니다.",
    },
  ],
};

export const heroStats = [
  {
    label: "판매가",
    value: "30,000원",
  },
  {
    label: "핵심 배합",
    value: "PDRN + Collagen",
  },
  {
    label: "포맷",
    value: "액상 스틱",
  },
] as const;

export const storyHighlights = [
  {
    title: "약국에서 만나도 어색하지 않은 인상",
    body: "과한 장식 대신 정리된 문장과 단정한 패키지 무드로 브랜드의 첫인상을 전합니다.",
  },
  {
    title: "매일 꺼내기 쉬운 액상 스틱",
    body: "아침 준비 전, 데스크 위, 이동 중에도 부담 없이 챙길 수 있도록 간결한 포맷으로 준비했습니다.",
  },
  {
    title: "부드럽지만 가볍지 않은 패키지 컬러",
    body: "은은한 핑크와 크림 베이스 위에 더마 무드의 정돈된 인상을 더해 선물용으로도 잘 어울립니다.",
  },
] as const;

export const brandStoryParagraphs = [
  "PDRN 리퀴드샷은 한국 약국에서 만나는 제품처럼 깨끗하고 정리된 인상을 우선합니다. 제품을 처음 마주하는 순간에도 복잡하지 않고, 어떤 무드의 브랜드인지 한눈에 이해할 수 있도록 차분한 톤으로 정리했습니다.",
  "부드러운 핑크와 크림 컬러, 여백이 살아 있는 레이아웃, 단정한 제품 정보 배치는 K-뷰티 특유의 세련된 감각을 담되 과장되지 않게 유지하기 위한 선택입니다. 일상 속 데스크, 파우치, 선물 상자 안 어디에 두어도 자연스럽게 어울리는 브랜드를 지향합니다.",
  "무드만 예쁜 제품에 머무르지 않도록 주요 원료, 제품 구성, 문의처까지 한 흐름 안에서 분명하게 확인할 수 있게 정리했습니다. 브랜드를 오래 기억하게 하는 건 결국 첫인상과 사용 편의성이 함께 가는 경험이라고 보고 있습니다.",
] as const;

export const signaturePoints = [
  {
    label: "Signature Blend",
    title: "PDRN 파이토컴플렉스 중심 배합",
    description:
      "브랜드의 시그니처인 PDRN 파이토컴플렉스를 중심으로 저분자 피쉬콜라겐과 병풀추출분말을 함께 담았습니다.",
  },
  {
    label: "Daily Format",
    title: "언제든 꺼내기 쉬운 1회분 스틱",
    description:
      "데스크, 파우치, 여행 가방 안에 보관하기 쉬운 스틱 형태로 구성해 매일의 루틴을 간결하게 유지합니다.",
  },
  {
    label: "Clean Package",
    title: "단정한 핑크 톤 패키지",
    description:
      "화려한 장식보다 깨끗한 컬러와 정돈된 레이아웃으로, 일상 속에 오래 두고 보기 좋은 인상을 남깁니다.",
  },
  {
    label: "Gift Ready",
    title: "선물용으로도 부담 없는 구성",
    description:
      "한눈에 이해되는 제품 정보와 단정한 박스 디자인으로 셀프 케어용은 물론 가벼운 선물용으로도 잘 어울립니다.",
  },
] as const;

export const editorialCards = [
  {
    title: "Morning",
    copy: "분주한 아침에도 한 포씩 꺼내기 쉬운 간결한 루틴을 떠올리며 준비했습니다.",
  },
  {
    title: "Desk",
    copy: "책상 위에 두어도 부담스럽지 않은 정돈된 패키지와 부드러운 컬러감을 담았습니다.",
  },
  {
    title: "Travel",
    copy: "짧은 일정과 이동이 많은 날에도 가볍게 챙기기 좋은 액상 스틱 포맷입니다.",
  },
] as const;

export const routineScenes = [
  {
    step: "01",
    title: "아침 준비를 마친 뒤 한 포",
    text: "복잡한 준비 없이 손에 잡히는 포맷으로, 하루를 시작하는 루틴을 자연스럽게 이어갈 수 있습니다.",
  },
  {
    step: "02",
    title: "사무실 서랍과 파우치 안에서",
    text: "휴대와 보관이 쉬운 구성을 바탕으로, 외출 전이나 업무 중에도 부담 없이 챙기기 좋습니다.",
  },
  {
    step: "03",
    title: "가볍게 선물하고 싶은 날",
    text: "은은한 패키지 컬러와 깔끔한 박스 구성으로, 스스로를 위한 루틴은 물론 선물용으로도 잘 어울립니다.",
  },
] as const;

export const brandPrinciples = [
  {
    title: "약국 기반 더마 무드",
    body: "한국 약국에서 만나는 제품처럼 과장되지 않고 정돈된 인상을 브랜드의 출발점으로 삼았습니다.",
    accent: "Derma",
  },
  {
    title: "부드러운 프리미엄 컬러",
    body: "핑크와 크림 계열을 중심으로 한 부드러운 톤을 사용하되, 가볍지 않도록 밀도를 조절했습니다.",
    accent: "Tone",
  },
  {
    title: "매일 이어가기 쉬운 루틴",
    body: "한 포씩 챙기는 간단한 구성과 이해하기 쉬운 정보 배치로 일상 속 반복 가능한 루틴을 제안합니다.",
    accent: "Daily",
  },
] as const;

export const idealForItems = [
  "복잡한 단계보다 간단하게 챙기는 데일리 루틴을 선호하는 분",
  "가방과 파우치에 넣기 좋은 액상 스틱 포맷을 찾는 분",
  "부드럽지만 가볍지 않은 더마 무드의 브랜드를 선호하는 분",
  "선물용으로도 부담 없는 단정한 패키지를 찾는 분",
] as const;

export const qualityPromises = [
  {
    title: "하루 한 포로 이어지는 가벼운 루틴",
    description: "1회분 스틱 타입으로 구성해 바쁜 날에도 루틴을 간결하게 이어가기 좋습니다.",
  },
  {
    title: "보는 순간 편안한 패키지 인상",
    description: "은은한 핑크 톤과 여백 중심 레이아웃으로 자극적이지 않은 첫인상을 완성했습니다.",
  },
  {
    title: "주요 정보가 잘 보이는 단정한 구성",
    description: "판매가, 구성, 주요 원료, 문의처를 한눈에 확인할 수 있도록 깔끔하게 정리했습니다.",
  },
] as const;

export const formulaStoryCards = [
  {
    title: "PDRN 파이토컴플렉스",
    subtitle: "브랜드를 설명하는 첫 번째 키워드",
    body: "제품을 떠올렸을 때 가장 먼저 기억되는 배합 포인트입니다. 더마 무드와 이너뷰티 루틴을 한 문장으로 정리해 주는 중심축 역할을 합니다.",
  },
  {
    title: "저분자 피쉬콜라겐",
    subtitle: "익숙한 이너뷰티 무드를 더하는 조합",
    body: "데일리 이너뷰티 카테고리에서 익숙하게 찾는 대표 원료로, 제품의 방향을 더 선명하게 느끼게 해주는 조합입니다.",
  },
  {
    title: "병풀추출분말",
    subtitle: "차분한 더마 이미지를 완성하는 원료",
    body: "클린하고 정돈된 브랜드 톤을 떠올리게 하는 조합으로, 전체 인상을 한층 차분하게 정리해 줍니다.",
  },
] as const;

export const routineChecklist = [
  {
    title: "출근 전 3초 루틴",
    body: "세면대 앞에서 오래 머물지 않아도 되는 간결한 루틴을 선호하는 분에게 잘 맞는 포맷입니다.",
  },
  {
    title: "책상 서랍 속 한 박스",
    body: "사무실에서도 과하게 튀지 않는 패키지라 눈에 띄지 않게 두고 필요할 때 꺼내기 좋습니다.",
  },
  {
    title: "주말 여행 파우치",
    body: "무거운 통 제품 대신 필요한 수량만 챙겨 짧은 일정에도 가볍게 가져가기 좋습니다.",
  },
  {
    title: "선물용 셀프 케어 아이템",
    body: "패키지 컬러와 박스 구성 덕분에 가벼운 감사 선물이나 뷰티 관심층 선물용으로도 잘 어울립니다.",
  },
] as const;

export const imageMosaic = [
  "/images/editorial/lab-glass.jpg",
  "/images/editorial/cleanser-model.jpg",
  "/images/editorial/leaf-flatlay.jpg",
  "/images/editorial/serum-bottle.jpg",
  "/images/editorial/skincare-lineup.jpg",
  "/images/editorial/glass-dropper.jpg",
] as const;

export const packageDetails = [
  {
    title: "제품명",
    value: "PDRN 리퀴드샷",
  },
  {
    title: "형태",
    value: "액상 스틱",
  },
  {
    title: "구성",
    value: "10g x 10포 / 1박스",
  },
  {
    title: "판매가",
    value: "30,000원",
  },
] as const;

export const editorialGallery = [
  {
    title: "더마 무드 에디토리얼",
    body: "맑은 유리 질감과 차분한 베이지 톤이 어우러진 무드 컷으로 브랜드의 결을 정리했습니다.",
    imagePath: "/images/editorial/lab-glass.jpg",
  },
  {
    title: "클린 뷰티 라이프스타일",
    body: "깨끗한 피부 표현과 부드러운 톤을 통해 K-뷰티 무드의 일상성을 자연스럽게 담았습니다.",
    imagePath: "/images/editorial/cleanser-model.jpg",
  },
  {
    title: "라이트 핑크 플랫레이",
    body: "패키지 컬러와 잘 어울리는 라이트 톤의 비주얼로 선물 같은 인상을 더했습니다.",
    imagePath: "/images/editorial/leaf-flatlay.jpg",
  },
  {
    title: "드로퍼 세럼 모먼트",
    body: "깨끗한 유리 질감과 손끝의 디테일이 어우러진 컷으로 클린 뷰티 감도를 더했습니다.",
    imagePath: "/images/editorial/serum-bottle.jpg",
  },
  {
    title: "클래식 세럼 라인업",
    body: "밝은 배경 위에 놓인 에센셜 제품 컷으로 더마 카테고리 특유의 미니멀한 이미지를 담았습니다.",
    imagePath: "/images/editorial/skincare-lineup.jpg",
  },
  {
    title: "유리 드로퍼 스틸라이프",
    body: "맑은 병과 드로퍼 실루엣이 보이는 무드 컷으로 원료 중심의 깨끗한 인상을 강조했습니다.",
    imagePath: "/images/editorial/glass-dropper.jpg",
  },
] as const;

export const sampleReviews = [
  {
    name: "mina.lee",
    tag: "30대 직장인",
    title: "아침마다 꺼내기 편해서 루틴이 단순해졌어요",
    body: "출근 전에 이것저것 챙기기 번거로웠는데 액상 스틱이라 손이 잘 가요. 박스 디자인도 깔끔해서 책상 위에 두기 부담 없어요.",
  },
  {
    name: "hy.j",
    tag: "20대 프리랜서",
    title: "가방에 넣고 다니기 좋아서 외출할 때 편해요",
    body: "파우치 안에 몇 포 넣어 다니기 좋고 패키지 색감이 예뻐서 만족스러웠어요. 루틴 제품으로 두기 좋은 느낌입니다.",
  },
  {
    name: "sooyeon.k",
    tag: "30대 뷰티 관심층",
    title: "과하지 않은 패키지라 선물용으로도 괜찮아요",
    body: "핑크 톤이지만 가볍지 않고 단정한 느낌이라 친구한테 선물하기 좋겠다고 생각했어요. 주요 원료도 한눈에 보여서 보기 편했습니다.",
  },
  {
    name: "yejin_park",
    tag: "30대 마케터",
    title: "사무실 서랍에 두고 챙기기 딱 좋은 느낌이에요",
    body: "한 포씩 나뉘어 있어서 점심 먹고 난 뒤에도 편하게 챙기게 돼요. 전체 패키지가 정돈돼 있어서 데스크 위에 둬도 깔끔해 보여요.",
  },
  {
    name: "sora.home",
    tag: "20대 대학원생",
    title: "여행 갈 때 챙기기 편해서 만족했어요",
    body: "짧은 일정에 부피 큰 통 제품 들고 다니는 걸 싫어하는데 스틱 포맷이라 가볍고 좋아요. 루틴이 단순해져서 손이 자주 갑니다.",
  },
  {
    name: "yuna.kim",
    tag: "30대 셀프케어 관심층",
    title: "첫인상이 차분해서 재구매 의사가 생겼어요",
    body: "요즘 너무 자극적인 패키지가 많아서 오히려 이런 스타일이 더 눈에 들어왔어요. 주요 정보가 정리돼 있어서 보는 순간 편했습니다.",
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
    question: "어떤 분들이 관심 있게 보시나요?",
    answer:
      "간편한 이너뷰티 루틴, 단정한 패키지, 액상 스틱 포맷을 선호하는 분들이 많이 찾습니다.",
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
    description: "제품 및 주문 관련 문의를 도와드립니다.",
  },
  {
    title: "이메일",
    value: companyInfo.email,
    description: "상담 및 제휴 문의를 남겨주실 수 있습니다.",
  },
  {
    title: "주소",
    value: `${companyInfo.address}, ${companyInfo.postalCode}`,
    description: "공식 판매자 정보를 확인하실 수 있습니다.",
  },
] as const;

export const orderHighlights = ["1박스 30,000원", "10g x 10포", "신용카드 / 간편결제 지원 예정"] as const;

export function formatKrw(value: number) {
  return `${value.toLocaleString("ko-KR")}원`;
}
