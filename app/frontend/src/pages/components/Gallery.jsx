import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Reveal, GoldOrnament, SectionLabel } from "./Reveal";
import { GALLERY } from "../InvitationData";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-cream-warm overflow-hidden"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Dokumentasi</SectionLabel>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl text-emerald-brand text-center">
            Galeri Kenangan
          </h2>
          <GoldOrnament className="my-6" />
          <p className="text-center text-ink-soft max-w-xl mx-auto">
            Beberapa momen berkesan dari perjalanan suci keluarga kami di Tanah Suci.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14" data-testid="gallery-swiper">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 140,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              navigation
              className="!pb-14"
            >
              {GALLERY.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  style={{ width: "320px", maxWidth: "85vw" }}
                  className="!h-auto"
                >
                  <div className="group relative">
                    <div className="relative overflow-hidden arch-mask p-1.5 bg-gradient-to-b from-[#D4AF37] to-[#B8941F] shadow-xl aspect-[3/4]">
                      <div className="w-full h-full overflow-hidden arch-mask">
                        <img
                          src={item.url}
                          alt={item.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-heading italic text-emerald-deep">
                      {item.caption}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Reveal>
      </div>
    </section>
  );
}