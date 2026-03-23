"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Ruler,
  Palette,
  Layers,
  Shirt,
  Ribbon,
} from "lucide-react";

const products = [
  {
    icon: Layers,
    name: "Premium Fabrics",
    desc: "Italian wool, Egyptian cotton, Japanese silk, French linen, cashmere blends, and specialty performance textiles.",
    tag: "Best Seller",
  },
  {
    icon: Palette,
    name: "Threads & Yarns",
    desc: "Mercerized cotton, polyester core-spun, silk threads, metallic embroidery yarns in 500+ colors.",
    tag: null,
  },
  {
    icon: Scissors,
    name: "Cutting Tools",
    desc: "Professional tailor shears, rotary cutters, pattern scissors, seam rippers — German & Japanese steel.",
    tag: "Popular",
  },
  {
    icon: Ruler,
    name: "Measuring & Marking",
    desc: "Flexible tape measures, L-squares, French curves, tailor chalk, tracing wheels, and marking pens.",
    tag: null,
  },
  {
    icon: Shirt,
    name: "Interfacing & Linings",
    desc: "Fusible interfacing, woven linings, shoulder pads, collar stays, and garment structure materials.",
    tag: null,
  },
  {
    icon: Ribbon,
    name: "Trims & Accessories",
    desc: "Zippers, buttons, hooks, elastic bands, bias tape, piping cord, lace trims, and embellishments.",
    tag: "New",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      style={{
        padding: "100px 24px",
        backgroundColor: "#FDF8F0",
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
              backgroundColor: "rgba(200, 169, 96, 0.15)",
              color: "#A88B3E",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Our Products
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
            Everything a Tailor Needs
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
            Curated collections of professional-grade materials sourced from
            the finest manufacturers worldwide.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                style={{
                  position: "relative",
                  padding: "36px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E5E5E5",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(200, 169, 96, 0.15)";
                  e.currentTarget.style.borderColor = "#C8A960";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#E5E5E5";
                }}
              >
                {product.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "4px 12px",
                      backgroundColor:
                        product.tag === "Best Seller"
                          ? "#C8A960"
                          : product.tag === "Popular"
                          ? "#1B2A4A"
                          : "#16A34A",
                      color: "#FFFFFF",
                      borderRadius: "50px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.tag}
                  </span>
                )}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, #1B2A4A, #243560)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <Icon size={28} color="#C8A960" />
                </div>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#1B2A4A",
                    marginBottom: "12px",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#6B7280",
                    lineHeight: 1.7,
                  }}
                >
                  {product.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}