"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #1B2A4A 0%, #111D35 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(200, 169, 96, 0.1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "1px solid rgba(200, 169, 96, 0.08)",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#FFFFFF",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          Ready to Source{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #C8A960, #D4BC7C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Premium Materials
          </span>
          ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontSize: "18px",
            color: "#9CA3AF",
            marginBottom: "40px",
            lineHeight: 1.7,
          }}
        >
          Whether you need a single bolt of silk or a container of wool —
          our team is ready to serve you. Get a custom quote today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "18px 36px",
              background: "linear-gradient(135deg, #C8A960, #A88B3E)",
              color: "#FFFFFF",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 700,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(200, 169, 96, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get a Free Quote <ArrowRight size={18} />
          </a>
          <a
            href="tel:+13125550199"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "18px 36px",
              border: "2px solid rgba(200, 169, 96, 0.4)",
              color: "#C8A960",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
              transition: "all 0.2s",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C8A960";
              e.currentTarget.style.backgroundColor =
                "rgba(200, 169, 96, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "rgba(200, 169, 96, 0.4)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <Phone size={18} /> Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}