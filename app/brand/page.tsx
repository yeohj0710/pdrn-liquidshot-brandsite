import type { Metadata } from "next";
import Link from "next/link";

import { EditorialPhoto } from "@/components/editorial-photo";
import { ProductVisual } from "@/components/product-visual";
import { SectionShell } from "@/components/section-shell";
import { brandPrinciples, companyInfo, editorialGallery, routineChecklist, storyHighlights, supportingPhotos } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "브랜드",
  description: "K-PharmRx의 브랜드 방향과 PDRN 리퀴드샷이 지향하는 단정한 이너뷰티 무드를 소개합니다.",
  path: "/brand",
});

export default function BrandPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 xl:grid-cols-[0.98fr_1.02fr] xl:items-center">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Brand direction</p>
              <h1 className="hero-display mt-5 max-w-[11ch] break-keep">K-PharmRx가 지향하는 단정한 이너뷰티 감도</h1>
              <p className="section-note mt-7 max-w-2xl">
                과장된 표현보다 제품이 놓이는 장면, 패키지의 첫인상, 정보가 읽히는 방식으로 브랜드의 무드를
                설명합니다.
              </p>
            </div>

            <article className="story-slab">
              <p className="eyebrow">브랜드 한 줄 소개</p>
              <h2 className="section-title mt-4 max-w-3xl">{companyInfo.brandDescription}</h2>
              <p className="section-note mt-5">
                K-PharmRx는 화려한 장식보다 단정한 첫인상, 제품 정보가 빠르게 읽히는 전면 구성, 가볍게 챙기기
                쉬운 루틴 포맷을 우선합니다. PDRN 리퀴드샷은 그 기준을 가장 먼저 보여주는 브랜드의 출발점입니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/product" className="pill inline-flex">
                  제품 보기
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(170,144,145,0.3)] bg-white/58 px-6 py-4 text-sm font-medium text-ink transition duration-200 hover:bg-white/78"
                >
                  문의하기
                </Link>
              </div>
            </article>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <ProductVisual variant="soft" priority className="min-h-[420px] sm:min-h-[560px]" />
            <div className="grid gap-4">
              {storyHighlights.map((item, index) => (
                <article key={item.title} className={index === 1 ? "ink-panel p-7" : "outline-card"}>
                  <p className={`eyebrow ${index === 1 ? "text-white/54" : ""}`}>브랜드 포인트</p>
                  <h2 className={`card-title mt-4 ${index === 1 ? "text-white" : ""}`}>{item.title}</h2>
                  <p className={`mt-4 break-keep text-sm leading-8 ${index === 1 ? "text-white/72" : "text-muted"}`}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Brand principles"
        title="브랜드를 구성하는 세 가지 기준"
        description="패키지 무드, 정보가 읽히는 방식, 루틴 제품으로서의 사용성을 같은 톤 안에서 묶는 것이 이 브랜드의 핵심입니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {brandPrinciples.map((principle, index) => (
            <article key={principle.title} className={index === 1 ? "ink-panel p-8" : index === 2 ? "feature-card" : "story-slab"}>
              <p className={`text-[11px] uppercase tracking-[0.34em] ${index === 1 ? "text-white/54" : "text-[#8c1656]"}`}>
                {principle.accent}
              </p>
              <h2 className={`card-title mt-4 ${index === 1 ? "text-white" : ""}`}>{principle.title}</h2>
              <p className={`mt-4 break-keep text-sm leading-8 ${index === 1 ? "text-white/74" : "text-muted"}`}>{principle.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Visual library"
        title="브랜드가 떠올리는 패키지 장면"
        description="실제 제품 이미지를 중심에 두고, 약국 선반과 데스크 무드를 보조적으로 섞어 브랜드의 질감을 더 풍성하게 만들었습니다."
      >
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="feature-card p-0">
            <ProductVisual variant={editorialGallery[0].variant} className="min-h-[380px] rounded-b-none sm:min-h-[520px]" />
            <div className="p-7 sm:p-8">
              <p className="eyebrow">Main visual</p>
              <h2 className="card-title mt-4">{editorialGallery[0].title}</h2>
              <p className="card-copy mt-4">{editorialGallery[0].body}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <EditorialPhoto
              src={supportingPhotos[0].imagePath}
              alt={supportingPhotos[0].title}
              eyebrow="Pharmacy edit"
              title={supportingPhotos[0].title}
              body={supportingPhotos[0].body}
              className="min-h-[260px]"
            />
            <article className="outline-card p-0">
              <ProductVisual variant={editorialGallery[1].variant} className="min-h-[240px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">Package detail</p>
                <h2 className="card-title mt-4">{editorialGallery[1].title}</h2>
                <p className="card-copy mt-4">{editorialGallery[1].body}</p>
              </div>
            </article>
            <article className="story-slab p-0">
              <ProductVisual variant={editorialGallery[4].variant} className="min-h-[240px] rounded-b-none" />
              <div className="p-6">
                <p className="eyebrow">Gift mood</p>
                <h2 className="card-title mt-4">{editorialGallery[4].title}</h2>
                <p className="card-copy mt-4">{editorialGallery[4].body}</p>
              </div>
            </article>
            <EditorialPhoto
              src={supportingPhotos[2].imagePath}
              alt={supportingPhotos[2].title}
              eyebrow="Desk scene"
              title={supportingPhotos[2].title}
              body={supportingPhotos[2].body}
              className="min-h-[260px]"
            />
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Brand scenes"
        title="브랜드가 가장 자연스럽게 놓이는 장면"
        description="브랜드는 보이는 순간보다 실제로 놓이는 장면에서 더 선명해집니다. 자주 쓰는 루틴 이미지에 맞춰 네 가지 장면을 정리했습니다."
      >
        <div className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
          <EditorialPhoto
            src={supportingPhotos[1].imagePath}
            alt={supportingPhotos[1].title}
            eyebrow="Daily ritual"
            title={supportingPhotos[1].title}
            body={supportingPhotos[1].body}
            className="min-h-[520px]"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {routineChecklist.map((item, index) => (
              <article key={item.title} className={index === 1 || index === 3 ? "feature-card" : "outline-card"}>
                <p className="eyebrow">Scene 0{index + 1}</p>
                <h2 className="card-title mt-4">{item.title}</h2>
                <p className="card-copy mt-4">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}
