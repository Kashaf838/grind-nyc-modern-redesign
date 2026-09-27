import React, { useState } from 'react';
import { STORE_INFO } from '../data/menu';
import { MapPin, Phone, Clock, Train, ArrowUpRight, Send, CheckCircle2, Instagram } from 'lucide-react';

interface VisitPageProps {
  onOpenOrderModal: () => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onOpenOrderModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722] bg-[#E64A19]/10 dark:bg-[#FF5722]/15 px-3 py-1 rounded-full">
          <span>602 9th Ave · Hell's Kitchen · NYC</span>
        </div>
        <h1 className="section-title text-[#141413] dark:text-[#F7F5F0]">
          VISIT & CONTACT
        </h1>
        <p className="text-base sm:text-lg text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
          Stop by our Hell's Kitchen coffee bar, reach out with questions, or drop a line to our team.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Location */}
        <div className="bg-white dark:bg-[#1A1A18] p-6 rounded-xl border border-[#DFD9CE] dark:border-[#2C2B29] space-y-4 shadow-xs theme-transition">
          <div className="w-10 h-10 rounded-lg bg-[#E64A19]/10 dark:bg-[#FF5722]/15 text-[#E64A19] dark:text-[#FF5722] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="card-title text-[#141413] dark:text-[#F7F5F0]">Our Address</h3>
            <p className="text-sm font-semibold mt-1 text-[#141413] dark:text-[#F7F5F0]">{STORE_INFO.address}</p>
            <p className="text-xs text-[#5C5852] dark:text-[#A39E95]">{STORE_INFO.neighborhood}, New York, NY {STORE_INFO.zip}</p>
            <p className="text-xs text-[#5C5852] dark:text-[#A39E95] mt-1">{STORE_INFO.crossStreets}</p>
          </div>
          <a
            href="https://maps.google.com/?q=GRIND+NYC+602+9th+Ave+New+York+NY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722] hover:underline cursor-pointer"
          >
            <span>Open in Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Card 2: Hours */}
        <div className="bg-white dark:bg-[#1A1A18] p-6 rounded-xl border border-[#DFD9CE] dark:border-[#2C2B29] space-y-4 shadow-xs theme-transition">
          <div className="w-10 h-10 rounded-lg bg-[#E64A19]/10 dark:bg-[#FF5722]/15 text-[#E64A19] dark:text-[#FF5722] flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="card-title text-[#141413] dark:text-[#F7F5F0]">Hours</h3>
            <p className="text-sm font-semibold mt-1 text-[#141413] dark:text-[#F7F5F0]">Monday – Sunday</p>
            <p className="text-base font-bold text-[#E64A19] dark:text-[#FF5722] mt-0.5">7:00 AM – 7:00 PM</p>
            <p className="text-xs text-[#5C5852] dark:text-[#A39E95] mt-1">365 Days a Year</p>
          </div>
          <div className="text-xs text-[#5C5852] dark:text-[#A39E95]">
            Kitchen serves full breakfast & hot bagels until close.
          </div>
        </div>

        {/* Card 3: Contact */}
        <div className="bg-white dark:bg-[#1A1A18] p-6 rounded-xl border border-[#DFD9CE] dark:border-[#2C2B29] space-y-4 shadow-xs theme-transition">
          <div className="w-10 h-10 rounded-lg bg-[#E64A19]/10 dark:bg-[#FF5722]/15 text-[#E64A19] dark:text-[#FF5722] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="card-title text-[#141413] dark:text-[#F7F5F0]">Direct Line</h3>
            <p className="text-sm font-bold mt-1 text-[#141413] dark:text-[#F7F5F0]">
              <a href={`tel:${STORE_INFO.phone}`} className="hover:text-[#E64A19] dark:hover:text-[#FF5722] transition-colors">
                {STORE_INFO.displayPhone}
              </a>
            </p>
            <p className="text-xs text-[#5C5852] dark:text-[#A39E95] mt-1">hello@grindnyc.com</p>
          </div>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://www.instagram.com/grind_nyc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-[#5C5852] dark:text-[#A39E95] hover:text-[#E64A19] dark:hover:text-[#FF5722]"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@grind_nyc</span>
            </a>
          </div>
        </div>
      </div>

      {/* Map & Subway Transit Guide */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Interactive Map Embed */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#DFD9CE] dark:border-[#2C2B29] shadow-lg min-h-[350px] bg-[#EFECE4] dark:bg-[#151514] theme-transition">
          <iframe
            title="GRIND NYC 602 9th Ave Map"
            src="https://maps.google.com/maps?q=602+9th+Ave,+New+York,+NY+10036&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ minHeight: '380px', border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Subway Directions */}
        <div className="lg:col-span-5 bg-white dark:bg-[#1A1A18] p-6 sm:p-8 rounded-2xl border border-[#DFD9CE] dark:border-[#2C2B29] flex flex-col justify-between space-y-6 theme-transition">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722]">
              <Train className="w-4 h-4" />
              <span>NYC Transit & Subway</span>
            </div>
            <h3 className="card-title text-2xl font-bold text-[#141413] dark:text-[#F7F5F0]">Getting Here</h3>
            <p className="text-xs sm:text-sm text-[#5C5852] dark:text-[#A39E95]">
              We are conveniently located a short walk from major Midtown West subway stations:
            </p>

            <div className="space-y-3 pt-2">
              {STORE_INFO.subwayDirections.map((sub, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#EFECE4] dark:bg-[#262624] border border-[#DFD9CE]/60 dark:border-[#2C2B29] space-y-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {sub.lines.map((l) => (
                      <span
                        key={l}
                        className="w-5 h-5 rounded-full bg-[#141413] dark:bg-[#F7F5F0] text-white dark:text-[#111110] font-bold text-[10px] flex items-center justify-center font-sans"
                      >
                        {l}
                      </span>
                    ))}
                    <span className="text-xs font-semibold ml-1.5 text-[#141413] dark:text-[#F7F5F0]">{sub.station}</span>
                  </div>
                  <p className="text-[11px] text-[#5C5852] dark:text-[#A39E95]">{sub.walkTime}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenOrderModal}
              className="w-full py-3 px-4 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
            >
              <span>Order Ahead for Pickup</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#1A1A18] p-8 sm:p-10 rounded-2xl border border-[#DFD9CE] dark:border-[#2C2B29] space-y-6 theme-transition">
        <div className="space-y-2 text-center">
          <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
            Get In Touch
          </div>
          <h3 className="section-title text-2xl sm:text-3xl font-bold text-[#141413] dark:text-[#F7F5F0]">
            SEND US A NOTE
          </h3>
          <p className="text-sm text-[#5C5852] dark:text-[#A39E95]">
            Questions about catering, ingredients, or neighborhood partnerships? Drop us a line.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
            <h4 className="font-display font-bold text-lg text-emerald-900 dark:text-emerald-200">
              Message Received!
            </h4>
            <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
              Thanks for reaching out to GRIND NYC. Our team will get back to you shortly.
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: '', email: '', subject: 'General Question', message: '' });
              }}
              className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#141413] dark:text-[#F7F5F0] uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFD9CE] dark:border-[#2C2B29] bg-[#EFECE4]/50 dark:bg-[#262624] text-[#141413] dark:text-[#F7F5F0] placeholder-[#5C5852]/60 dark:placeholder-[#A39E95]/60 text-sm focus:outline-hidden focus:border-[#E64A19] dark:focus:border-[#FF5722] theme-transition font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#141413] dark:text-[#F7F5F0] uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFD9CE] dark:border-[#2C2B29] bg-[#EFECE4]/50 dark:bg-[#262624] text-[#141413] dark:text-[#F7F5F0] placeholder-[#5C5852]/60 dark:placeholder-[#A39E95]/60 text-sm focus:outline-hidden focus:border-[#E64A19] dark:focus:border-[#FF5722] theme-transition font-sans"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#141413] dark:text-[#F7F5F0] uppercase tracking-wider">
                Topic
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFD9CE] dark:border-[#2C2B29] bg-[#EFECE4] dark:bg-[#262624] text-[#141413] dark:text-[#F7F5F0] text-sm focus:outline-hidden focus:border-[#E64A19] dark:focus:border-[#FF5722] theme-transition font-sans"
              >
                <option value="General Question">General Question</option>
                <option value="Catering & Bagel Boxes">Catering & Large Bagel Boxes</option>
                <option value="Feedback on Visit">Feedback on a Visit</option>
                <option value="Dietary or Allergen Inquiry">Dietary or Allergen Inquiry</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#141413] dark:text-[#F7F5F0] uppercase tracking-wider">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="How can we help?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DFD9CE] dark:border-[#2C2B29] bg-[#EFECE4]/50 dark:bg-[#262624] text-[#141413] dark:text-[#F7F5F0] placeholder-[#5C5852]/60 dark:placeholder-[#A39E95]/60 text-sm focus:outline-hidden focus:border-[#E64A19] dark:focus:border-[#FF5722] theme-transition font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#141413] hover:bg-[#E64A19] dark:bg-[#F7F5F0] dark:text-[#111110] dark:hover:bg-[#FF5722] dark:hover:text-white text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
