"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Unmatched Quality",
    desc: "Every fabric, thread, and tool passes our rigorous quality inspection before it reaches you.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    desc: "We build lasting partnerships with tailors and designers, not just transactions.",
  },
  {
    icon: Heart,
    title: "Passion for Craft",
    desc: "We understand tailoring because we love the craft. Our team includes trained textile experts.",
  },
  {
    icon: MapPin,
    title: "Chicago Roots, Global Reach",
    desc: "Headquartered in Chicago, Illinois — shipping to over 50 countries with reliable logistics.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
            Our Story
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
            Built on Excellence, Driven by Craft
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: "18px",
              color: "#6B7280",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Founded by{" "}
            <strong style={{ color: "#1B2A4A" }}>Harley Cole</strong>, Cole
            Fabrics & Co. has grown from a small Chicago workshop into a
            globally recognized supplier of premium tailoring materials. Our
            mission is simple — provide the materials that help master
            craftsmen create masterpieces.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: "36px",
                  borderRadius: "12px",
                  border: "1px solid #E5E5E5",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C8A960";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(200, 169, 96, 0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E5E5";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, rgba(200,169,96,0.15), rgba(200,169,96,0.05))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={26} color="#C8A960" />
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1B2A4A",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}