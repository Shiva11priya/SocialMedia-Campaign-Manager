const campaignForm = document.getElementById("campaignForm");
const campaignList = document.getElementById("campaignList");

let campaigns = [];

campaignForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const platform = document.getElementById("platform").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const status = document.getElementById("status").value;

  const newCampaign = { name, platform, start, end, status };
  campaigns.push(newCampaign);

  campaignForm.reset();
  renderCampaigns();
});

function renderCampaigns() {
  campaignList.innerHTML = "";

  campaigns.forEach((campaign, index) => {
    const card = document.createElement("div");
    card.classList.add("campaign-card");
    card.innerHTML = `
      <h3>📢 ${campaign.name}</h3>
      <p><b>Platform:</b> ${campaign.platform}</p>
      <p><b>Start:</b> ${campaign.start}</p>
      <p><b>End:</b> ${campaign.end}</p>
      <p><b>Status:</b> ${campaign.status}</p>
      <button class="delete-btn" onclick="deleteCampaign(${index})">Delete</button>
    `;
    campaignList.appendChild(card);
  });
}

function deleteCampaign(index) {
  campaigns.splice(index, 1);
  renderCampaigns();
}
