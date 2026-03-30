"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  orderType: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "233 S Wacker Dr, Chicago, IL 60606",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (815) 575-8222",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@globaltailoringmaterials.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 8AM – 6PM CST",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    orderType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        orderType: "",
        message: "",
      });
    }, 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #E5E5E5",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#2D2D2D",
    backgroundColor: "#FFFFFF",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "6px",
  };

  return (
    <section
      id="contact"
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
            Contact Us
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
            Let&apos;s Talk Business
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
            Ready to order or have questions? Reach out and our team will
            respond within 24 hours.
          </motion.p>
        </div>

        {/* Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1B2A4A",
                marginBottom: "32px",
              }}
            >
              Get in Touch
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                marginBottom: "40px",
              }}
            >
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "start",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        minWidth: "44px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #1B2A4A, #243560)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} color="#C8A960" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#9CA3AF",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "4px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          color: "#1B2A4A",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Company Quote */}
            <div
              style={{
                padding: "28px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                borderLeft: "4px solid #C8A960",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "12px",
                }}
              >
                &ldquo;Quality materials are the foundation of exceptional
                craftsmanship. We&apos;re proud to support professionals who
                create with precision and purpose.&rdquo;
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1B2A4A",
                }}
              >
                — Global Tailoring Materials
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "60px 40px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  textAlign: "center",
                  border: "1px solid #E5E5E5",
                }}
              >
                <CheckCircle
                  size={56}
                  color="#16A34A"
                  style={{ margin: "0 auto 20px" }}
                />
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#1B2A4A",
                    marginBottom: "12px",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ fontSize: "16px", color: "#6B7280" }}>
                  Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "40px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E5E5E5",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Smith"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#C8A960")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#E5E5E5")
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#C8A960")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#E5E5E5")
                      }
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (815) 575-8222"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#C8A960")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#E5E5E5")
                      }
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        })
                      }
                      placeholder="Your Business Name"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "#C8A960")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "#E5E5E5")
                      }
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>Order Type</label>
                  <select
                    value={formData.orderType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        orderType: e.target.value,
                      })
                    }
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                      appearance: "none",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#C8A960")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#E5E5E5")
                    }
                  >
                    <option value="">Select order type</option>
                    <option value="wholesale">Wholesale Order</option>
                    <option value="retail">Retail Order</option>
                    <option value="sample">Sample Request</option>
                    <option value="custom">Custom Sourcing</option>
                    <option value="partnership">Business Partnership</option>
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us about your requirements — materials, quantities, delivery location..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#C8A960")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#E5E5E5")
                    }
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "linear-gradient(135deg, #C8A960, #A88B3E)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(200, 169, 96, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}