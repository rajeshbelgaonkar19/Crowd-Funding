import "./CampaignCard.css";

function CampaignCard({ title, description, goal, raised }) {
    return (
        <div className="campaign-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p><strong>Goal:</strong> ${goal}</p>
            <p><strong>Raised:</strong> ${raised}</p>
            <button className="donate-btn">Donate</button>
        </div>
    );
}

export default CampaignCard;
