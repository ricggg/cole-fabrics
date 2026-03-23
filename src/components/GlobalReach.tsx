"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Plane, TrendingUp } from "lucide-react";

const regions = [
  { region: "North America", countries: "USA, Canada, Mexico" },
  { region: "Europe", countries: "UK, Italy, France, Germany, Spain" },
  { region: "Asia", countries: "Japan, South Korea, India, UAE" },
  { region: "Africa", countries: "Nigeria, South Africa, Kenya, Ghana" },
  { region: "South America", countries: "Brazil, Argentina, Colombia" },
  { region: "Oceania", countries: "Australia, New Zealand" },
];

const globalStats = [
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Plane, value: "5", label: "Distribution Hubs" },
  { icon: MapPin, value: "6", label: "Continents" },
  { icon: TrendingUp, value: "98%", label: "On-Time Delivery" },
];

export default function GlobalReach() {
  return (
    <section
      id="global"
      style={{
        padding: "100px 24px",
        backgroundColor: "#F7F7F7",
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
            Global Distribution
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
            From Chicago to the World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: "18px",
              color: "#6B7280",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Our logistics network ensures your materials arrive safely and on
            time, no matter where you are.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {globalStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  padding: "28px 16px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid #E5E5E5",
                }}
              >
                <Icon
                  size={28}
                  color="#C8A960"
                  style={{ margin: "0 auto 12px" }}
                />
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#1B2A4A",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Regions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {regions.map((r, i) => (
            <motion.div
              key={r.region}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid #E5E5E5",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#C8A960")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#E5E5E5")
              }
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  minWidth: "44px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #1B2A4A, #243560)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={18} color="#C8A960" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#1B2A4A",
                  }}
                >
                  {r.region}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#9CA3AF",
                    marginTop: "2px",
                  }}
                >
                  {r.countries}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}