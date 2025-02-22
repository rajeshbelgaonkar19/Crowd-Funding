import CampaignCard from "../components/CampaignCard";
import "./Campaigns.css";

function Campaigns() {
    const sampleCampaigns = [
        { title: "Help Build a School", description: "Support children's education", goal: 5000, raised: 3000 },
        { title: "Medical Aid for Cancer", description: "Fund cancer treatment for needy patients", goal: 10000, raised: 7500 },
    ];

    return (
        <div className="campaigns-page">
            <h1>Active Campaigns</h1>
            <div className="campaign-list">
                {sampleCampaigns.map((campaign, index) => (
                    <CampaignCard key={index} {...campaign} />
                ))}
            </div>
        </div>
    );
}

export default Campaigns;
