"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alessandro Ricci",
    role: "Master Tailor, Milan",
    text: "Cole Fabrics delivers the finest Italian wool I've ever sourced outside of Italy. Impeccable quality, every single time. Diana and her team truly understand what tailors need.",
    stars: 5,
  },
  {
    name: "Yuki Tanaka",
    role: "Fashion Designer, Tokyo",
    text: "Their silk collection is extraordinary. Shipping to Japan was faster than expected, and the fabric quality exceeded all my expectations. A truly world-class supplier.",
    stars: 5,
  },
  {
    name: "Amara Osei",
    role: "Bespoke Tailor, London",
    text: "I've been ordering from Cole Fabrics for three years now. Their customer support is outstanding, and the bulk pricing makes my business more competitive.",
    stars: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Atelier Owner, Mexico City",
    text: "From measuring tools to premium fabrics — they are my one-stop shop. The quality consistency across orders is something I haven't found elsewhere.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 24px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "inline-block",
              padding: "6px 16px",
              backgroundColor: "rgba(200, 169, 96, 0.1)",
              color: "#A88B3E",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#1B2A4A",
              marginBottom: "20px",
            }}
          >
            Trusted by Craftsmen Worldwide
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                padding: "36px",
                backgroundColor: "#FDF8F0",
                borderRadius: "16px",
                border: "1px solid #E5E5E5",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Quote
                size={32}
                color="#C8A960"
                style={{
                  opacity: 0.3,
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              />
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  gap: "4px",
                  marginBottom: "16px",
                }}
              >
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    fill="#C8A960"
                    color="#C8A960"
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#1B2A4A",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#9CA3AF",
                    marginTop: "2px",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}