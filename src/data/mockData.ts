export interface ProjectEvaluationData {
  project_id: string;
  q_id: string;
  question: string;
  result: string;
  detail: string;
  muc_danh_gia: string;
}

export const mockEvaluationData: ProjectEvaluationData[] = [
  // Project Alpha - Strong overall performance
  { project_id: "Alpha Protocol", q_id: "CM001", question: "Community engagement level", result: "1", detail: "Active community with 50k+ members", muc_danh_gia: "Community & Marketing" },
  { project_id: "Alpha Protocol", q_id: "CM002", question: "Marketing strategy effectiveness", result: "1", detail: "Multi-channel strategy showing results", muc_danh_gia: "Community & Marketing" },
  { project_id: "Alpha Protocol", q_id: "CM003", question: "Brand awareness metrics", result: "0", detail: "Limited brand recognition in target market", muc_danh_gia: "Community & Marketing" },
  { project_id: "Alpha Protocol", q_id: "P001", question: "System performance metrics", result: "1", detail: "99.9% uptime, fast response times", muc_danh_gia: "Performance" },
  { project_id: "Alpha Protocol", q_id: "P002", question: "Scalability assessment", result: "1", detail: "Handles 10k+ concurrent users", muc_danh_gia: "Performance" },
  { project_id: "Alpha Protocol", q_id: "PB001", question: "Key partnership quality", result: "1", detail: "Strategic partnerships with tier-1 companies", muc_danh_gia: "Partner & Backer" },
  { project_id: "Alpha Protocol", q_id: "PB002", question: "Investor confidence level", result: "1", detail: "Series B funding secured", muc_danh_gia: "Partner & Backer" },
  { project_id: "Alpha Protocol", q_id: "PT001", question: "Technology innovation score", result: "1", detail: "Cutting-edge blockchain implementation", muc_danh_gia: "Product & Technology" },
  { project_id: "Alpha Protocol", q_id: "PT002", question: "Product-market fit", result: "0", detail: "Still finding optimal market segment", muc_danh_gia: "Product & Technology" },
  { project_id: "Alpha Protocol", q_id: "MO001", question: "Market opportunity size", result: "1", detail: "$50B+ addressable market", muc_danh_gia: "Market & Opportunity" },
  { project_id: "Alpha Protocol", q_id: "MO002", question: "Competitive advantage", result: "1", detail: "First-mover advantage in niche", muc_danh_gia: "Market & Opportunity" },
  { project_id: "Alpha Protocol", q_id: "T001", question: "Token utility design", result: "1", detail: "Clear utility with staking rewards", muc_danh_gia: "Tokenomics" },
  { project_id: "Alpha Protocol", q_id: "T002", question: "Economic model sustainability", result: "1", detail: "Deflationary mechanics implemented", muc_danh_gia: "Tokenomics" },
  { project_id: "Alpha Protocol", q_id: "TL001", question: "Team experience level", result: "1", detail: "Ex-Google, ex-Meta team members", muc_danh_gia: "Team & Leadership" },
  { project_id: "Alpha Protocol", q_id: "TL002", question: "Leadership track record", result: "1", detail: "Previous successful exits", muc_danh_gia: "Team & Leadership" },

  // Project Beta - Mixed performance
  { project_id: "Beta Chain", q_id: "CM001", question: "Community engagement level", result: "0", detail: "Growing but limited engagement", muc_danh_gia: "Community & Marketing" },
  { project_id: "Beta Chain", q_id: "CM002", question: "Marketing strategy effectiveness", result: "1", detail: "Strong social media presence", muc_danh_gia: "Community & Marketing" },
  { project_id: "Beta Chain", q_id: "CM003", question: "Brand awareness metrics", result: "0", detail: "Emerging brand in competitive space", muc_danh_gia: "Community & Marketing" },
  { project_id: "Beta Chain", q_id: "P001", question: "System performance metrics", result: "0", detail: "Occasional downtime issues", muc_danh_gia: "Performance" },
  { project_id: "Beta Chain", q_id: "P002", question: "Scalability assessment", result: "1", detail: "Layer 2 solution implemented", muc_danh_gia: "Performance" },
  { project_id: "Beta Chain", q_id: "PB001", question: "Key partnership quality", result: "1", detail: "Regional partnerships established", muc_danh_gia: "Partner & Backer" },
  { project_id: "Beta Chain", q_id: "PB002", question: "Investor confidence level", result: "0", detail: "Seed funding only", muc_danh_gia: "Partner & Backer" },
  { project_id: "Beta Chain", q_id: "PT001", question: "Technology innovation score", result: "1", detail: "Novel consensus mechanism", muc_danh_gia: "Product & Technology" },
  { project_id: "Beta Chain", q_id: "PT002", question: "Product-market fit", result: "1", detail: "Strong user adoption in target segment", muc_danh_gia: "Product & Technology" },
  { project_id: "Beta Chain", q_id: "MO001", question: "Market opportunity size", result: "0", detail: "Limited addressable market", muc_danh_gia: "Market & Opportunity" },
  { project_id: "Beta Chain", q_id: "MO002", question: "Competitive advantage", result: "0", detail: "Crowded competitive landscape", muc_danh_gia: "Market & Opportunity" },
  { project_id: "Beta Chain", q_id: "T001", question: "Token utility design", result: "0", detail: "Limited utility beyond speculation", muc_danh_gia: "Tokenomics" },
  { project_id: "Beta Chain", q_id: "T002", question: "Economic model sustainability", result: "1", detail: "Balanced emission schedule", muc_danh_gia: "Tokenomics" },
  { project_id: "Beta Chain", q_id: "TL001", question: "Team experience level", result: "1", detail: "Strong technical background", muc_danh_gia: "Team & Leadership" },
  { project_id: "Beta Chain", q_id: "TL002", question: "Leadership track record", result: "0", detail: "First-time founders", muc_danh_gia: "Team & Leadership" },

  // Project Gamma - Poor performance
  { project_id: "Gamma Network", q_id: "CM001", question: "Community engagement level", result: "0", detail: "Low community activity", muc_danh_gia: "Community & Marketing" },
  { project_id: "Gamma Network", q_id: "CM002", question: "Marketing strategy effectiveness", result: "0", detail: "Unclear marketing approach", muc_danh_gia: "Community & Marketing" },
  { project_id: "Gamma Network", q_id: "P001", question: "System performance metrics", result: "0", detail: "Frequent outages reported", muc_danh_gia: "Performance" },
  { project_id: "Gamma Network", q_id: "P002", question: "Scalability assessment", result: "0", detail: "Scalability concerns not addressed", muc_danh_gia: "Performance" },
  { project_id: "Gamma Network", q_id: "PB001", question: "Key partnership quality", result: "0", detail: "Limited partnership network", muc_danh_gia: "Partner & Backer" },
  { project_id: "Gamma Network", q_id: "PT001", question: "Technology innovation score", result: "1", detail: "Interesting technical approach", muc_danh_gia: "Product & Technology" },
  { project_id: "Gamma Network", q_id: "PT002", question: "Product-market fit", result: "0", detail: "Product seeking market validation", muc_danh_gia: "Product & Technology" },
  { project_id: "Gamma Network", q_id: "MO001", question: "Market opportunity size", result: "0", detail: "Niche market with limited growth", muc_danh_gia: "Market & Opportunity" },
  { project_id: "Gamma Network", q_id: "T001", question: "Token utility design", result: "0", detail: "Poorly defined tokenomics", muc_danh_gia: "Tokenomics" },
  { project_id: "Gamma Network", q_id: "TL001", question: "Team experience level", result: "0", detail: "Inexperienced team", muc_danh_gia: "Team & Leadership" },

  // Project Delta - Excellent performance
  { project_id: "Delta Finance", q_id: "CM001", question: "Community engagement level", result: "1", detail: "Highly engaged community of 100k+", muc_danh_gia: "Community & Marketing" },
  { project_id: "Delta Finance", q_id: "CM002", question: "Marketing strategy effectiveness", result: "1", detail: "Award-winning marketing campaigns", muc_danh_gia: "Community & Marketing" },
  { project_id: "Delta Finance", q_id: "P001", question: "System performance metrics", result: "1", detail: "Industry-leading uptime and speed", muc_danh_gia: "Performance" },
  { project_id: "Delta Finance", q_id: "P002", question: "Scalability assessment", result: "1", detail: "Proven scalability to millions of users", muc_danh_gia: "Performance" },
  { project_id: "Delta Finance", q_id: "PB001", question: "Key partnership quality", result: "1", detail: "Fortune 500 partnerships", muc_danh_gia: "Partner & Backer" },
  { project_id: "Delta Finance", q_id: "PB002", question: "Investor confidence level", result: "1", detail: "Series C with top VCs", muc_danh_gia: "Partner & Backer" },
  { project_id: "Delta Finance", q_id: "PT001", question: "Technology innovation score", result: "1", detail: "Revolutionary DeFi protocols", muc_danh_gia: "Product & Technology" },
  { project_id: "Delta Finance", q_id: "PT002", question: "Product-market fit", result: "1", detail: "Strong PMF with rapid growth", muc_danh_gia: "Product & Technology" },
  { project_id: "Delta Finance", q_id: "MO001", question: "Market opportunity size", result: "1", detail: "$200B+ DeFi market opportunity", muc_danh_gia: "Market & Opportunity" },
  { project_id: "Delta Finance", q_id: "MO002", question: "Competitive advantage", result: "1", detail: "Patent-protected technology", muc_danh_gia: "Market & Opportunity" },
  { project_id: "Delta Finance", q_id: "T001", question: "Token utility design", result: "1", detail: "Multi-utility governance token", muc_danh_gia: "Tokenomics" },
  { project_id: "Delta Finance", q_id: "T002", question: "Economic model sustainability", result: "1", detail: "Proven sustainable economics", muc_danh_gia: "Tokenomics" },
  { project_id: "Delta Finance", q_id: "TL001", question: "Team experience level", result: "1", detail: "Ex-JPMorgan, ex-Goldman team", muc_danh_gia: "Team & Leadership" },
  { project_id: "Delta Finance", q_id: "TL002", question: "Leadership track record", result: "1", detail: "Serial entrepreneur with IPO experience", muc_danh_gia: "Team & Leadership" },
];

export const EVALUATION_CATEGORIES = [
  "Community & Marketing",
  "Performance", 
  "Partner & Backer",
  "Product & Technology",
  "Market & Opportunity",
  "Tokenomics",
  "Team & Leadership"
] as const;

export const CATEGORY_DESCRIPTIONS = {
  "Community & Marketing": "Measures community engagement, brand awareness, and marketing effectiveness",
  "Performance": "Evaluates technical performance, uptime, and system reliability",
  "Partner & Backer": "Assesses partnership quality and investor confidence levels",
  "Product & Technology": "Reviews technology innovation and product-market fit",
  "Market & Opportunity": "Analyzes market size and competitive positioning",
  "Tokenomics": "Examines token utility design and economic model sustainability",
  "Team & Leadership": "Evaluates team experience and leadership track record"
};