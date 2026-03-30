"use client";

import { Scissors, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Premium Fabrics",
  "Threads & Yarns",
  "Cutting Tools",
  "Measuring & Marking",
  "Interfacing & Linings",
  "Trims & Accessories",
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111D35",
        color: "#9CA3AF",
        padding: "80px 24px 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(200, 169, 96, 0.15)",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C8A960, #A88B3E)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Scissors size={20} color="#FFFFFF" />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    display: "block",
                    lineHeight: 1.2,
                  }}
                >
                  Global Tailoring Materials
                </span>
              </div>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "20px",
                color: "#6B7280",
              }}
            >
              Premium tailoring materials for master craftsmen. Worldwide
              sales and distribution for quality-focused tailors, designers,
              and fashion businesses.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                }}
              >
                <MapPin size={14} color="#C8A960" />
                Chicago, IL 60606
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                }}
              >
                <Phone size={14} color="#C8A960" />
                +1 (815) 575-8222
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                }}
              >
                <Mail size={14} color="#C8A960" />
                sales@globaltailoringmaterials.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "#6B7280",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C8A960")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6B7280")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              Products
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {productLinks.map((name) => (
                <a
                  key={name}
                  href="#products"
                  style={{
                    color: "#6B7280",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C8A960")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6B7280")
                  }
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "20px",
              }}
            >
              Stay Updated
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Get the latest on new arrivals, seasonal collections, and
              exclusive trade pricing.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                gap: "8px",
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: "12px 14px",
                  borderRadius: "6px",
                  border: "1px solid rgba(200, 169, 96, 0.3)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #C8A960, #A88B3E)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            fontSize: "13px",
            color: "#4B5563",
          }}
        >
          <span>© 2026 Global Tailoring Materials. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a
              href="#"
              style={{
                color: "#4B5563",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C8A960")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#4B5563")
              }
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: "#4B5563",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C8A960")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#4B5563")
              }
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}