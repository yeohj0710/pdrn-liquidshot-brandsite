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
  brandDescription: "한국 약국 감도의 단정한 이너뷰티 브랜드",
};

export const navLinks = [
  { href: "/#brand-story", label: "브랜드" },
  { href: "/#product-story", label: "제품 소개" },
  { href: "/#formula-story", label: "핵심 원료" },
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
  category: "액상 스틱형 이너뷰티 식품",
  heroEyebrow: "한국 약국 감도의 이너뷰티",
  heroTitle: "하루 한 포로 이어가는 단정한 이너뷰티 루틴",
  heroDescription:
    "PDRN 파이토컴플렉스 3,000mg, 저분자 피쉬콜라겐 1,000mg, 병풀추출분말 200mg을 담은 액상 스틱 제품입니다. 한 박스 10포 구성으로 바쁜 아침, 사무실, 외출 전에도 가볍게 챙기기 좋은 데일리 루틴을 제안합니다.",
  purchaseNote:
    "박스와 스틱이 함께 정리된 구성으로 제품 정보가 한눈에 들어오고, 데일리 포맷답게 꺼내기 쉬운 인상을 전합니다.",
  imagePath: "/images/pdrn-liquid-shot-product.png",
  visualImagePath: "/images/pdrn-liquid-shot-crop.png",
  ingredients: [
    {
      title: "PDRN 파이토컴플렉스",
      amount: "3,000mg / 1포당",
      description: "브랜드를 가장 선명하게 기억하게 만드는 핵심 배합입니다.",
    },
    {
      title: "저분자 피쉬콜라겐",
      amount: "1,000mg / 1포당",
      description: "데일리 이너뷰티 루틴에서 익숙하게 찾는 원료를 함께 담았습니다.",
    },
    {
      title: "병풀추출분말",
      amount: "200mg / 1포당",
      description: "차분하고 정돈된 더마 무드를 보완하는 조합으로 구성했습니다.",
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
    value: "PDRN·피쉬콜라겐",
  },
  {
    label: "포맷",
    value: "액상 스틱",
  },
] as const;

export const storyHighlights = [
  {
    title: "약국 진열대에서도 차분한 첫인상",
    body: "복잡한 설명보다 정리된 박스 전면과 선명한 제품명이 먼저 보이도록 구성했습니다.",
  },
  {
    title: "한 포씩 꺼내기 쉬운 데일리 구성",
    body: "가방, 파우치, 서랍 안에 두고 필요할 때 가볍게 챙기기 좋은 액상 스틱 포맷입니다.",
  },
  {
    title: "핑크 톤이지만 가볍지 않은 패키지",
    body: "은은한 핑크와 버건디 포인트를 더해 부드럽지만 단정한 인상을 남기도록 정리했습니다.",
  },
] as const;

export const brandStoryParagraphs = [
  "PDRN 리퀴드샷은 한국 약국에서 만나는 제품처럼 깔끔하고 정돈된 인상을 먼저 전하는 데 집중했습니다. 제품을 처음 보는 순간에도 무엇을 담은 제품인지 한눈에 이해되고, 과장된 장식 없이 단정하게 기억되도록 브랜드 톤을 잡았습니다.",
  "박스와 스틱을 함께 보여주는 전면 구성, 은은한 핑크와 크림 계열의 컬러, 정리된 제품 정보는 일상 속 어디에 두어도 어색하지 않은 무드를 만들기 위한 선택입니다. 책상 위, 파우치 안, 선물 상자 안에서도 자연스럽게 어울리는 브랜드를 지향합니다.",
  "보기 좋은 인상에만 머물지 않도록 핵심 배합, 1포 구성, 문의처와 기본 정보까지 같은 흐름 안에서 확인할 수 있게 정리했습니다. 브랜드를 오래 기억하게 하는 것은 결국 첫인상과 사용 편의성이 함께 가는 경험이라고 보고 있습니다.",
] as const;

export const signaturePoints = [
  {
    label: "핵심 배합",
    title: "PDRN 파이토컴플렉스를 중심에 둔 구성",
    description:
      "브랜드의 정체성을 가장 분명하게 보여주는 PDRN 파이토컴플렉스를 중심으로 저분자 피쉬콜라겐과 병풀추출분말을 함께 담았습니다.",
  },
  {
    label: "데일리 포맷",
    title: "언제든 꺼내기 쉬운 1회분 액상 스틱",
    description:
      "아침 준비 전, 사무실 서랍, 짧은 외출이나 여행 파우치 안에서도 부담 없이 챙길 수 있도록 한 포 단위로 정리했습니다.",
  },
  {
    label: "패키지 인상",
    title: "제품명이 먼저 보이는 단정한 박스 전면",
    description:
      "색감보다 정보가 먼저 읽히도록 정리된 전면 구성을 적용해 처음 보는 순간에도 제품 성격을 빠르게 이해할 수 있습니다.",
  },
  {
    label: "선물 무드",
    title: "셀프 케어용과 가벼운 선물용 모두에 어울리는 구성",
    description:
      "무겁지 않게 정리한 박스 디자인과 한눈에 들어오는 제품 정보로 개인 루틴용은 물론 가벼운 선물용으로도 부담이 적습니다.",
  },
] as const;

export const editorialCards = [
  {
    title: "아침",
    copy: "분주한 출근 준비 전에도 한 포로 간단하게 이어갈 수 있는 루틴을 떠올리며 구성했습니다.",
  },
  {
    title: "데스크",
    copy: "사무실 서랍이나 책상 위에 두어도 과하게 튀지 않는 단정한 패키지 인상을 담았습니다.",
  },
  {
    title: "외출",
    copy: "짧은 일정이나 이동이 많은 날에도 필요한 수량만 가볍게 챙기기 좋은 액상 스틱입니다.",
  },
] as const;

export const routineScenes = [
  {
    step: "01",
    title: "아침 준비를 마친 뒤 가볍게 한 포",
    text: "복잡한 준비 없이 손에 잡히는 액상 스틱으로 하루의 루틴을 간결하게 시작할 수 있습니다.",
  },
  {
    step: "02",
    title: "사무실 서랍과 파우치 안에 정리된 구성",
    text: "부피가 크지 않은 한 포 타입이라 외출 전이나 업무 중에도 부담 없이 꺼내기 좋습니다.",
  },
  {
    step: "03",
    title: "가볍게 건네기 좋은 셀프 케어 선물",
    text: "박스와 스틱 구성이 함께 보여서 제품 이해가 쉽고, 차분한 패키지 덕분에 선물용으로도 잘 어울립니다.",
  },
] as const;

export const brandPrinciples = [
  {
    title: "약국 기반의 신뢰감",
    body: "과장된 미사여구보다 제품명과 핵심 배합이 먼저 읽히는 단정한 흐름으로 브랜드의 인상을 전합니다.",
    accent: "01",
  },
  {
    title: "가볍지만 허전하지 않은 인상",
    body: "은은한 핑크와 크림 계열을 사용하되 박스 전면 정보와 여백을 충분히 살려 프리미엄 감도를 유지했습니다.",
    accent: "02",
  },
  {
    title: "매일 이어가기 쉬운 루틴",
    body: "한 포 구성, 이해하기 쉬운 정보 배치, 명확한 문의 동선으로 실제 루틴 제품처럼 느껴지는 경험을 만들고자 했습니다.",
    accent: "03",
  },
] as const;

export const idealForItems = [
  "복잡한 단계보다 간단한 하루 루틴을 선호하는 분",
  "가방과 파우치에 넣기 좋은 액상 스틱 포맷을 찾는 분",
  "과하지 않고 단정한 패키지의 이너뷰티 제품을 선호하는 분",
  "셀프 케어용이나 가벼운 선물용으로 부담 없는 구성을 찾는 분",
] as const;

export const qualityPromises = [
  {
    title: "하루 한 포로 이어가기 쉬운 포맷",
    description: "필요한 양이 한 번에 정리된 액상 스틱 타입이라 바쁜 날에도 루틴을 간결하게 이어가기 좋습니다.",
  },
  {
    title: "보는 순간 편안한 패키지 인상",
    description: "은은한 핑크 톤과 정리된 전면 정보로 자극적이지 않고 차분한 첫인상을 완성했습니다.",
  },
  {
    title: "주요 정보가 빠르게 읽히는 구성",
    description: "판매가, 구성, 핵심 원료, 문의 정보를 한 흐름 안에서 확인할 수 있도록 깔끔하게 정리했습니다.",
  },
] as const;

export const formulaStoryCards = [
  {
    title: "PDRN 파이토컴플렉스",
    subtitle: "브랜드를 설명하는 첫 번째 키워드",
    body: "제품을 떠올렸을 때 가장 먼저 기억되도록 배합의 중심에 둔 포인트입니다. 브랜드의 더마 감도와 이너뷰티 무드를 한 문장으로 정리해 주는 역할을 합니다.",
  },
  {
    title: "저분자 피쉬콜라겐",
    subtitle: "익숙한 데일리 루틴 감도를 더하는 원료",
    body: "이너뷰티 카테고리에서 친숙하게 받아들여지는 대표 원료로, 제품의 방향을 보다 쉽게 이해하게 도와주는 조합입니다.",
  },
  {
    title: "병풀추출분말",
    subtitle: "차분한 더마 인상을 보완하는 조합",
    body: "클린하고 정돈된 브랜드 이미지와 잘 어울리는 구성으로, 전체 톤을 한층 차분하게 정리해 주는 역할을 합니다.",
  },
] as const;

export const routineChecklist = [
  {
    title: "출근 전 3초 루틴",
    body: "오래 준비하지 않아도 되는 간단한 루틴을 선호하는 분에게 잘 맞는 액상 스틱 포맷입니다.",
  },
  {
    title: "사무실 서랍 속 한 박스",
    body: "책상 위나 서랍 안에 두어도 과하게 튀지 않아 일상 속에서 자연스럽게 꺼내기 좋습니다.",
  },
  {
    title: "주말 외출용 파우치",
    body: "통 제품 대신 필요한 수량만 챙길 수 있어 짧은 일정에도 가볍게 가져가기 좋습니다.",
  },
  {
    title: "가벼운 선물용 셀프 케어 아이템",
    body: "단정한 패키지와 한눈에 보이는 정보 구성 덕분에 셀프 케어용은 물론 감사 선물용으로도 잘 어울립니다.",
  },
] as const;

export const imageMosaic = [
  productData.imagePath,
  productData.imagePath,
  productData.imagePath,
  productData.imagePath,
  productData.imagePath,
  productData.imagePath,
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
    title: "박스와 스틱이 함께 보이는 전면 컷",
    body: "처음 보는 순간에도 제품명과 구성 포인트가 자연스럽게 읽히도록 전면 구성을 중심에 둔 비주얼입니다.",
    imagePath: productData.imagePath,
    variant: "hero",
  },
  {
    title: "핵심 정보가 선명하게 읽히는 메인 패키지",
    body: "제품명과 핵심 배합이 먼저 들어오는 구성을 통해 정돈되고 신뢰감 있는 인상을 강조했습니다.",
    imagePath: productData.imagePath,
    variant: "spotlight",
  },
  {
    title: "은은한 핑크 톤을 살린 패키지 인상",
    body: "부드러운 컬러를 사용하면서도 가볍지 않도록 박스 비율과 여백을 정리해 프리미엄 무드를 만들었습니다.",
    imagePath: productData.imagePath,
    variant: "soft",
  },
  {
    title: "책상 위에 두어도 어색하지 않은 루틴 무드",
    body: "데스크, 서랍, 파우치 안 어디에 두어도 자연스럽게 어울리는 단정한 데일리 제품 이미지를 담았습니다.",
    imagePath: productData.imagePath,
    variant: "focus",
  },
  {
    title: "선물용으로도 부담 없는 박스 구성",
    body: "스틱과 박스가 함께 보여 제품 이해가 쉽고, 받는 사람도 편하게 볼 수 있는 패키지 흐름으로 정리했습니다.",
    imagePath: productData.imagePath,
    variant: "stack",
  },
  {
    title: "핵심 배합을 강조한 시그니처 비주얼",
    body: "어두운 배경 위에서 제품을 또렷하게 드러내 브랜드의 시그니처 배합과 집중도를 강조하는 컷입니다.",
    imagePath: productData.imagePath,
    variant: "dark",
  },
] as const;

export const sampleReviews = [
  {
    name: "mina.lee",
    tag: "30대 직장인",
    title: "출근 준비 전에 한 포 챙기기 편해서 손이 자주 가요",
    body: "아침마다 이것저것 챙기기 번거로웠는데 한 포로 정리돼 있으니까 훨씬 단순해졌어요. 박스도 깔끔해서 책상 위에 둬도 부담이 없었습니다.",
  },
  {
    name: "hy.j",
    tag: "20대 프리랜서",
    title: "파우치에 몇 포 넣어 다니기 좋아서 외출할 때 편해요",
    body: "부피가 크지 않아서 가방에 넣고 다니기 편했고, 제품 정보가 전면에 잘 보여서 처음 봐도 어떤 제품인지 이해하기 쉬웠어요.",
  },
  {
    name: "sooyeon.k",
    tag: "30대 뷰티 관심층",
    title: "핑크 톤인데도 과하지 않아서 선물용으로 괜찮겠다고 느꼈어요",
    body: "컬러는 부드럽지만 전체 구성이 단정해서 가볍게 보이지 않더라고요. 한 박스 그대로 건네도 부담 없는 느낌이라 좋았습니다.",
  },
  {
    name: "yejin.park",
    tag: "30대 마케터",
    title: "사무실 서랍에 두고 점심 이후에 챙기기 좋은 포맷이에요",
    body: "한 포씩 나뉘어 있으니까 필요한 만큼만 챙기기 쉽고, 액상 스틱이라 별도 준비 없이 루틴으로 이어가기 편했습니다.",
  },
  {
    name: "sora.home",
    tag: "20대 대학원생",
    title: "짧은 일정에도 가볍게 챙길 수 있어서 만족했어요",
    body: "부피 큰 통 제품보다 이런 스틱 타입이 훨씬 실용적이더라고요. 주말 외출이나 짧은 여행 때 챙기기 편한 점이 가장 좋았습니다.",
  },
  {
    name: "yuna.kim",
    tag: "30대 셀프케어 관심층",
    title: "첫인상이 차분해서 재구매를 고민하게 되는 제품이에요",
    body: "요즘은 패키지가 너무 화려한 제품이 많은데, 이 제품은 필요한 정보가 깔끔하게 정리돼 있어서 보는 순간 편안했습니다.",
  },
] as const;

export const formulaNotes = [
  "원료 정보는 제품 패키지 표기 기준으로 안내합니다.",
  "식품 관련 상세 정보와 섭취 안내는 최종 제품 표시사항을 먼저 확인해 주세요.",
  "원재료명과 알레르기 유발 가능 성분은 구매 전 반드시 확인해 주세요.",
] as const;

export const faqItems = [
  {
    question: "한 박스에는 몇 포가 들어 있나요?",
    answer: "PDRN 리퀴드샷은 10g 액상 스틱 10포로 구성되어 있습니다.",
  },
  {
    question: "핵심 배합은 어떻게 되나요?",
    answer: "패키지 표기 기준 PDRN 파이토컴플렉스 3,000mg, 저분자 피쉬콜라겐 1,000mg, 병풀추출분말 200mg이 1포당 안내되어 있습니다.",
  },
  {
    question: "어떤 분들이 많이 찾으시나요?",
    answer: "한 포씩 챙기기 쉬운 이너뷰티 루틴, 단정한 패키지, 가벼운 휴대성을 중요하게 보는 분들이 관심 있게 찾는 편입니다.",
  },
  {
    question: "휴대하기 편한 포맷인가요?",
    answer: "개별 액상 스틱 타입이라 파우치나 가방에 필요한 수량만 넣어 다니기 좋고, 데일리 루틴으로 챙기기 편합니다.",
  },
  {
    question: "제품 및 주문 문의는 어디로 하면 되나요?",
    answer: `문의 페이지 또는 고객센터(${companyInfo.phone}, ${companyInfo.email})를 통해 안내받으실 수 있습니다.`,
  },
] as const;

export const contactChannels = [
  {
    title: "고객센터",
    value: companyInfo.phone,
    description: "제품 및 주문 관련 문의를 안내해 드립니다.",
  },
  {
    title: "이메일",
    value: companyInfo.email,
    description: "상담 및 제휴 문의를 남겨주실 수 있습니다.",
  },
  {
    title: "주소",
    value: `${companyInfo.address}, ${companyInfo.postalCode}`,
    description: "판매자 기본 정보를 확인하실 수 있습니다.",
  },
] as const;

export const orderHighlights = ["1박스 30,000원", "10g x 10포", "신용카드 / 간편결제 지원 예정"] as const;

export function formatKrw(value: number) {
  return `${value.toLocaleString("ko-KR")}원`;
}
