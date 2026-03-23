"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Truck, Award } from "lucide-react";

const stats = [
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Truck, value: "10K+", label: "Orders Shipped" },
  { icon: Award, value: "25+", label: "Years of Excellence" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #1B2A4A 0%, #111D35 40%, #1B2A4A 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A960' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gold Accent Circles */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,169,96,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,169,96,0.1) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 20px",
                border: "1px solid rgba(200, 169, 96, 0.4)",
                borderRadius: "50px",
                color: "#C8A960",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              🌍 Worldwide Sales & Distribution
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Premium Tailoring
            <br />
            Materials for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C8A960, #D4BC7C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Master Craftsmen
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#9CA3AF",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "600px",
            }}
          >
            From luxurious fabrics to precision tools — Cole Fabrics & Co.
            supplies the world&apos;s finest tailoring materials to designers,
            tailors, and fashion houses across 50+ countries. Headquartered in
            Chicago, Illinois.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "60px",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #C8A960, #A88B3E)",
                color: "#FFFFFF",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: 600,
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
              Request a Quote <ArrowRight size={18} />
            </a>
            <a
              href="#products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
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
                e.currentTarget.style.borderColor = "rgba(200, 169, 96, 0.4)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Browse Products
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
            }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Icon size={24} color="#C8A960" />
                  <div>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#6B7280",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background:
            "linear-gradient(to top, #FFFFFF 0%, transparent 100%)",
        }}
      />
    </section>
  );
}