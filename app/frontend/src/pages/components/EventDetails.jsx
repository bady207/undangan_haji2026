import { Reveal, GoldOrnament, SectionLabel } from "./Reveal";
import { INVITATION } from "../InvitationData";
import { Calendar, Clock, MapPin, Shirt } from "lucide-react";

export default function EventDetails() {
  const { event } = INVITATION;

  const details = [
    {
      icon: Calendar,
      label: "Tanggal",
      value: event.dateText,
    },
    {
      icon: Clock,
      label: "Waktu",
      value: event.timeText,
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: event.address,
    },
    // {
    //   icon: Shirt,
    //   label: "Dress Code",
    //   value: event.dressCode,
    // },
  ];

  return (
    <section
      id="event"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-cream"
      data-testid="event-section"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel>Waktu & Tempat</SectionLabel>

          <h2 className="mt-4 font-heading text-4xl sm:text-5xl text-emerald-brand text-center">
            Detail Acara
          </h2>

          <GoldOrnament className="my-6" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 mt-12 items-stretch">
          {/* Detail Acara */}
          <Reveal delay={0.1}>
            <div className="h-full p-8 md:p-10 rounded-3xl bg-cream-warm border border-gold-brand/25 shadow-sm">
              <div className="space-y-6">
                {details.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4"
                    data-testid={`event-detail-${label
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-brand text-gold-brand flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.3em] uppercase text-gold-brand">
                        {label}
                      </p>

                      <p className="mt-1 font-heading text-lg md:text-xl text-emerald-deep">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mt-8 pt-6 border-t border-gold-brand/20">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    event.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="open-maps-link"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-brand text-cream hover:bg-emerald-deep transition-colors border border-gold-brand/40"
                >
                  <MapPin className="w-4 h-4" />
                  Buka di Google Maps
                </a>
              </div> */}
            </div>
          </Reveal>

          {/* Google Maps */}
          <Reveal delay={0.2}>
            <div className="h-full min-h-[360px] rounded-3xl overflow-hidden border border-gold-brand/25 shadow-lg">
              <iframe
                title="Peta Lokasi"
                src={event.mapsEmbed}
                className="w-full h-full min-h-[360px]"
                style={{
                  border: 0,
                  filter: "saturate(0.8)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="event-map-iframe"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
