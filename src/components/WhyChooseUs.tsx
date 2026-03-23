"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Truck,
  Headphones,
  DollarSign,
  Package,
  Clock,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Every product carries our quality assurance seal. If it doesn't meet your standards, we make it right.",
  },
  {
    icon: Truck,
    title: "Worldwide Shipping",
    desc: "Fast, reliable shipping to 50+ countries with real-time tracking and insured delivery.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Our textile specialists are available to help you choose the right materials for any project.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Wholesale and retail pricing that keeps you competitive without compromising quality.",
  },
  {
    icon: Package,
    title: "Bulk Order Discounts",
    desc: "Special pricing for bulk orders, fashion schools, and recurring business partnerships.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most orders processed within 24 hours. Express shipping available for urgent needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #1B2A4A 0%, #111D35 100%)",
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
              border: "1px solid rgba(200, 169, 96, 0.3)",
              color: "#C8A960",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Why Cole Fabrics
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "20px",
            }}
          >
            The Cole Fabrics Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: "18px",
              color: "#9CA3AF",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            When you choose us, you choose a partner who cares about your
            craft as much as you do.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "32px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(200, 169, 96, 0.15)",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(200, 169, 96, 0.08)";
                  e.currentTarget.style.borderColor =
                    "rgba(200, 169, 96, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor =
                    "rgba(200, 169, 96, 0.15)";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #C8A960, #A88B3E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} color="#FFFFFF" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#9CA3AF",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}