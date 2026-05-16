import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Eyebrow from "../components/Eyebrow";
import { CONTACT_CHANNELS } from "../data/content";
import ContactBg from "../assets/contact_Ai.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    type: "Enterprise Partnerships",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend / form service
    console.log("Form submitted:", form);
    alert("Thank you. Your enquiry has been received.");
  };

  return (
    <div>
      <PageHeader
        pageNum="09"
        eyebrow="Get In Touch"
        title={
          <>
            Start a <span className="italic text-accent">conversation</span>.
          </>
        }
        lead="Mindshore works with enterprise clients on a partnership basis. Whether you are exploring outsourcing options for an AI programme, require a managed workforce for a specific function, or want to understand how Mindshore's delivery model aligns with your procurement requirements, we are available for a structured introductory conversation."
        bgImage={ContactBg}
      />

      {/* Channels */}
      <section className="border-b border-ink/15 bg-paper">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <Eyebrow num="§ A">Enquiry Channels</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/15 mt-12">
            {CONTACT_CHANNELS.map((c, i) => (
              <div
                key={i}
                className="group bg-paper p-10 lg:p-12 transition hover:bg-cream cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="font-serif text-2xl tracking-tight text-ink mb-4 lg:text-3xl">
                  {c.t}
                </h3>
                <p className="leading-relaxed text-ink/75">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Direct contact */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  § B
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/60">
                  Direct Contact
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight lg:text-5xl mb-12">
                Mindshore Group Limited
              </h2>

              <div className="space-y-6 font-mono text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-2">
                    Department
                  </div>
                  <div className="text-cream">
                    Enterprise Partnerships & Business Development
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-2">
                    Web
                  </div>
                  <div className="text-cream">www.mindshoregroup.com</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:partnerships@mindshoregroup.com"
                    className="text-accent border-b border-accent/40 hover:border-accent"
                  >
                    partnerships@mindshoregroup.com
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="col-span-12 lg:col-span-6 lg:col-start-7"
            >
              <div className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-[10px] uppercase tracking-[0.25em] text-cream/60 mb-3"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream focus:border-accent focus:outline-none transition placeholder-cream/30"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organisation"
                    className="block font-mono text-[10px] uppercase tracking-[0.25em] text-cream/60 mb-3"
                  >
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    value={form.organisation}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream focus:border-accent focus:outline-none transition placeholder-cream/30"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-[10px] uppercase tracking-[0.25em] text-cream/60 mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream focus:border-accent focus:outline-none transition placeholder-cream/30"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block font-mono text-[10px] uppercase tracking-[0.25em] text-cream/60 mb-3"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream focus:border-accent focus:outline-none transition"
                  >
                    <option className="bg-ink">Enterprise Partnerships</option>
                    <option className="bg-ink">Vendor Due Diligence</option>
                    <option className="bg-ink">Investor Enquiries</option>
                    <option className="bg-ink">Careers</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] uppercase tracking-[0.25em] text-cream/60 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream focus:border-accent focus:outline-none transition placeholder-cream/30 resize-none"
                    placeholder="Brief description of your requirement"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-between gap-4 border border-cream px-6 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-accent hover:border-accent w-full"
                >
                  Submit Enquiry
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
