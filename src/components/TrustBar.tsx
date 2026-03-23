"use client";

import { motion } from "framer-motion";

const partners = [
  "Savile Row Guild",
  "Milan Fashion Supply",
  "Paris Couture House",
  "Tokyo Textile Co.",
  "London Tailors Assoc.",
  "Berlin Design Studio",
];

export default function TrustBar() {
  return (
    <section
      style={{
        padding: "40px 24px",
        backgroundColor: "#F7F7F7",
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#6B7280",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Trusted by leading fashion houses worldwide
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {partners.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#9CA3AF",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}