"use client";

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  ChartConfiguration,
  ChartData,
  ChartTypeRegistry,
  registerables,
  Tick,
} from "chart.js";

ChartJS.register(...registerables);

// Define interfaces for data structures
interface GrowthStat {
  label: string;
  growth: string;
  value: string;
}

interface ComparisonData {
  label: string;
  beforeWidth: number;
  afterWidth: number;
  value: string;
}

interface FunnelStep {
  icon: string;
  title: string;
  description: string;
  growth: string;
}

// Component props (empty for now since no props are passed)
interface PropertyTurkeyDashboardProps {}

const PropertyTurkeyChart: React.FC<PropertyTurkeyDashboardProps> = () => {
  const revenueChartRef = useRef<HTMLCanvasElement | null>(null);
  const trafficChartRef = useRef<HTMLCanvasElement | null>(null);
  const revenueChartInstance = useRef<ChartJS<keyof ChartTypeRegistry> | null>(
    null
  );
  const trafficChartInstance = useRef<ChartJS<keyof ChartTypeRegistry> | null>(
    null
  );

  // Growth data
  const growthStats: GrowthStat[] = [
    { label: "Form Submissions", growth: "+335%", value: "142K" },
    { label: "Click Events", growth: "+197%", value: "89K" },
    { label: "Page Views", growth: "+327%", value: "487K" },
    { label: "Consultation Forms", growth: "+362%", value: "67K" },
    { label: "Advice Requests", growth: "+357%", value: "78K" },
  ];

  const comparisonData: ComparisonData[] = [
    {
      label: "Form Submissions",
      beforeWidth: 20,
      afterWidth: 87,
      value: "142K",
    },
    { label: "Click Events", beforeWidth: 30, afterWidth: 89, value: "89K" },
    { label: "Page Views", beforeWidth: 23, afterWidth: 100, value: "487K" },
    { label: "Consultations", beforeWidth: 18, afterWidth: 68, value: "67K" },
    { label: "Advice Requests", beforeWidth: 19, afterWidth: 85, value: "78K" },
  ];

  const funnelSteps: FunnelStep[] = [
    {
      icon: "🎯",
      title: "Awareness (Google & Meta Ads)",
      description:
        "Multi-channel advertising campaigns targeting property investors",
      growth: "+150%",
    },
    {
      icon: "📖",
      title: "Engagement (Landing Pages, SEO Content)",
      description:
        "Optimized content and user experience driving higher engagement",
      growth: "+275%",
    },
    {
      icon: "📝",
      title: "Action (Form Fill, WhatsApp Leads)",
      description:
        "Streamlined conversion processes and multiple contact options",
      growth: "+335%",
    },
    {
      icon: "💼",
      title: "Result (CRM Submission, SQL)",
      description:
        "Qualified leads entering sales pipeline with higher conversion rates",
      growth: "+290%",
    },
  ];

  useEffect(() => {
    // Initialize Revenue Chart
    if (revenueChartRef.current) {
      const ctx = revenueChartRef.current.getContext("2d");
      if (ctx) {
        if (revenueChartInstance.current) {
          revenueChartInstance.current.destroy();
        }

        const revenueChartConfig: ChartConfiguration<"line"> = {
          type: "line",
          data: {
            labels: ["2020", "2021", "2022", "2023", "2024"],
            datasets: [
              {
                label: "Revenue Growth",
                data: [100, 145, 210, 320, 435],
                borderColor: "#0d6efd",
                backgroundColor: "rgba(13, 110, 253, 0.1)",
                borderWidth: 3,
                fill: true,
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: "#f8f9fa",
                },
                ticks: {
                  callback: (
                    tickValue: number | string,
                    index: number,
                    ticks: Tick[]
                  ): string => {
                    return typeof tickValue === "number"
                      ? `${tickValue}%`
                      : tickValue;
                  },
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          },
        };

        revenueChartInstance.current = new ChartJS(ctx, revenueChartConfig);
      }
    }

    // Initialize Traffic Chart
    if (trafficChartRef.current) {
      const ctx = trafficChartRef.current.getContext("2d");
      if (ctx) {
        if (trafficChartInstance.current) {
          trafficChartInstance.current.destroy();
        }

        const trafficChartConfig: ChartConfiguration<"doughnut"> = {
          type: "doughnut",
          data: {
            labels: [
              "Organic Search",
              "Paid Ads",
              "Direct",
              "Social Media",
              "Referrals",
            ],
            datasets: [
              {
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                  "#0d6efd",
                  "#198754",
                  "#dc3545",
                  "#fd7e14",
                  "#6f42c1",
                ],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  padding: 20,
                  usePointStyle: true,
                },
              },
            },
          },
        };

        trafficChartInstance.current = new ChartJS(ctx, trafficChartConfig);
      }
    }

    // Cleanup function
    return () => {
      if (revenueChartInstance.current) {
        revenueChartInstance.current.destroy();
      }
      if (trafficChartInstance.current) {
        trafficChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card border-0 shadow-lg text-center py-5">
              <div className="card-body">
                <h1 className="display-3 fw-bold text-primary mb-3">
                  Property Turkey Growth Report
                </h1>
                <p className="lead text-muted fs-4">
                  SEO + Performance Marketing Impact (2020–2024)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Stats Row */}
        <div className="row mb-5 g-4">
          {growthStats.map((stat, index) => (
            <div key={index} className="col-md-6 col-lg">
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body py-4">
                  <div className="display-4 fw-bold text-primary mb-2">
                    {stat.growth}
                  </div>
                  <div className="fs-6 text-muted fw-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="row g-4">
          {/* Key Performance Metrics */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-header bg-white border-0 py-4">
                <h3 className="card-title mb-0 d-flex align-items-center">
                  <span
                    className="badge bg-primary rounded-pill me-2"
                    style={{ width: "8px", height: "8px" }}
                  ></span>
                  Key Performance Metrics
                </h3>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {growthStats.slice(0, 4).map((metric, index) => (
                    <div key={index} className="col-sm-6">
                      <div className="text-center p-4 bg-light rounded-3 border">
                        <div className="display-6 fw-bold text-primary mb-2">
                          {metric.value}
                        </div>
                        <div className="small text-muted fw-semibold mb-2">
                          {metric.label}
                        </div>
                        <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                          <i className="bi bi-arrow-up-right me-1"></i>
                          {metric.growth}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Growth Comparison */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-header bg-white border-0 py-4">
                <h3 className="card-title mb-0 d-flex align-items-center">
                  <span
                    className="badge bg-primary rounded-pill me-2"
                    style={{ width: "8px", height: "8px" }}
                  ></span>
                  Growth Comparison (2020 vs 2024)
                </h3>
              </div>
              <div className="card-body">
                <div className="vstack gap-3">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <div
                        className="fw-semibold text-muted"
                        style={{ minWidth: "140px", fontSize: "0.9rem" }}
                      >
                        {item.label}
                      </div>
                      <div className="flex-grow-1 mx-3 position-relative">
                        <div className="progress" style={{ height: "25px" }}>
                          <div
                            className="progress-bar bg-secondary"
                            style={{ width: `${item.beforeWidth}%` }}
                          ></div>
                          <div
                            className="progress-bar bg-primary"
                            style={{
                              width: `${item.afterWidth - item.beforeWidth}%`,
                            }}
                          ></div>
                        </div>
                        <small className="position-absolute end-0 top-50 translate-middle-y text-white fw-bold me-2">
                          {item.value}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-header bg-white border-0 py-4">
                <h3 className="card-title mb-0 d-flex align-items-center">
                  <span
                    className="badge bg-primary rounded-pill me-2"
                    style={{ width: "8px", height: "8px" }}
                  ></span>
                  Revenue Impact
                </h3>
              </div>
              <div className="card-body">
                <div style={{ height: "300px", position: "relative" }}>
                  <canvas ref={revenueChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-lg h-100">
              <div className="card-header bg-white border-0 py-4">
                <h3 className="card-title mb-0 d-flex align-items-center">
                  <span
                    className="badge bg-primary rounded-pill me-2"
                    style={{ width: "8px", height: "8px" }}
                  ></span>
                  Traffic Sources Growth
                </h3>
              </div>
              <div className="card-body">
                <div style={{ height: "300px", position: "relative" }}>
                  <canvas ref={trafficChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Generation Funnel */}
          <div className="col-12">
            <div className="card border-0 shadow-lg">
              <div className="card-header bg-white border-0 py-4">
                <h3 className="card-title mb-0 d-flex align-items-center">
                  <span
                    className="badge bg-primary rounded-pill me-2"
                    style={{ width: "8px", height: "8px" }}
                  ></span>
                  Lead Generation Funnel
                </h3>
              </div>
              <div className="card-body">
                <div className="row g-4">
                  {funnelSteps.map((step, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                      <div className="card bg-light border-0 h-100 position-relative">
                        <div className="card-body p-4 text-center">
                          <div className="fs-1 mb-3">{step.icon}</div>
                          <h5 className="card-title fw-bold text-dark mb-3">
                            {step.title}
                          </h5>
                          <p className="card-text text-muted small mb-3">
                            {step.description}
                          </p>
                          <span className="badge bg-success text-white px-3 py-2 rounded-pill">
                            {step.growth}
                          </span>
                        </div>
                        {index < funnelSteps.length - 1 && (
                          <div className="position-absolute top-50 start-100 translate-middle d-none d-lg-block">
                            <i className="bi bi-arrow-right fs-2 text-primary"></i>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTurkeyChart;
