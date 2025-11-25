// Loads mock quote data into localStorage ONLY if none exists.

document.addEventListener("DOMContentLoaded", function () {
  const key = "quoteRequests";

  // Prevent overwriting existing data
  let existing = JSON.parse(localStorage.getItem(key));
  if (existing && existing.length > 0) {
    console.log("Mock data NOT loaded — quoteRequests already has data.");
    return;
  }

  const mockQuotes = [
    {
      firstName: "Linh",
      lastName: "Pham",
      email: "linh.pham@eastech.vn",
      phone: "+84 909 223 110",
      company: "Eastech Manufacturing",
      service: "Customs Brokerage",
      industry: "Manufacturing",
      transactionType: "Commercial",
      transportMethod: "Air",
      country: "Canada",
      hsCode: "8473.30.90",
      value: "12500",
      weight: "180",
      dimensions: "120 × 80 × 65",
      message:
        "Importing CNC spare parts to Vancouver. Need duty and GST estimate.",
      submittedAt: "2025-01-12T09:21:33.504Z",
    },
    {
      firstName: "Marcus",
      lastName: "Lee",
      email: "marcus.lee@3dvisiontech.com",
      phone: "+1 778-445-2000",
      company: "3D VisionTech",
      service: "Tariff Classification",
      industry: "Technology",
      transactionType: "Return & Repair",
      transportMethod: "Courier / Express",
      country: "Viet Nam",
      hsCode: "9031.80.00",
      value: "3200",
      weight: "12",
      dimensions: "40 × 30 × 25",
      message:
        "Scanner malfunction. Need return for repair and re-import documentation.",
      submittedAt: "2025-01-14T15:42:11.902Z",
    },
    {
      firstName: "Sophie",
      lastName: "Nguyen",
      email: "sophie.nguyen@luxfashion.ca",
      phone: "604-884-9901",
      company: "LuxFashion Imports",
      service: "Import / Export Consulting",
      industry: "Retail",
      transactionType: "Sample / Non-Sale",
      transportMethod: "Air",
      country: "Canada",
      hsCode: "6204.43.00",
      value: "750",
      weight: "8",
      dimensions: "55 × 45 × 35",
      message:
        "Clothing samples imported from Vietnam. Need guidance on duty exemption.",
      submittedAt: "2025-01-17T20:18:55.110Z",
    },
    {
      firstName: "Daniel",
      lastName: "Harper",
      email: "dharper@clinic360.ca",
      phone: "416-212-8020",
      company: "Clinic360",
      service: "Compliance Audits",
      industry: "Healthcare",
      transactionType: "Commercial",
      transportMethod: "Ground",
      country: "United States",
      hsCode: "9021.10.00",
      value: "5380",
      weight: "20",
      dimensions: "60 × 50 × 40",
      message:
        "Shipping orthopedic devices to the U.S. Need regulatory compliance review.",
      submittedAt: "2025-01-18T11:05:41.222Z",
    },
    {
      firstName: "Aiko",
      lastName: "Tanaka",
      email: "aiko.tanaka@kagomeglobal.com",
      phone: "+1 438-202-4422",
      company: "Kagome Global Foods",
      service: "Customs Brokerage",
      industry: "Manufacturing",
      transactionType: "Commercial",
      transportMethod: "Ocean Freight",
      country: "Canada",
      hsCode: "2002.90.00",
      value: "48500",
      weight: "840",
      dimensions: "Pallets (5 × standard)",
      message:
        "Importing tomato paste drums from Vietnam to Montreal. Need landed cost and brokerage quote.",
      submittedAt: "2025-01-19T08:57:03.800Z",
    },
  ];

  localStorage.setItem(key, JSON.stringify(mockQuotes));
  console.log("Mock data loaded into quoteRequests.");
});
