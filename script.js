// Data for topics and their content
const topicsContent = {
  "introduction-botany": {
    title: "Introduction to Botany",
    description: "Explore the science of plants, their structure, growth, and importance in the ecosystem.",
    keyConcepts: [
      "Biology in a modern world",
      "Growth and ways of science",
      "Scientific method",
      "Science of Botany",
      "Why study Botany?"
    ],
    lecture: `
      <h2>Introduction to Botany</h2>
      <p>Botany is the study of plants, their structure, growth, reproduction, and role in our ecosystem.</p>
      <h3>1. Biology in a Modern World</h3>
      <p>Understanding plants helps address global challenges such as food security and environmental conservation.</p>
      <h3>2. Growth and Ways of Science</h3>
      <p>Plants grow through intricate processes influenced by environmental factors and scientific discoveries.</p>
    `
  },
  "cell-structure": {
    title: "The Cell - Structure & Function",
    description: "Learn about the fundamental unit of life, its components, and their functions.",
    keyConcepts: [
      "Cell theory",
      "Similarities and differences between animal and plant cells",
      "Prokaryotic vs. eukaryotic cells",
      "Cell division - mitosis",
      "Growth and differentiation"
    ],
    lecture: `
      <h2>The Cell - Structure & Function</h2>
      <p>Cells are the basic units of life. This section explores their structure, differences, and division processes.</p>
      <h3>1. Cell Theory</h3>
      <p>All living organisms are composed of cells, which are the basic units of life.</p>
      <h3>2. Cell Components</h3>
      <p>Animal and plant cells share many components but differ in their structure and functions:</p>
      <ul>
        <li><strong>Plant Cells</strong>: Have a cell wall, chloroplasts, and large central vacuoles.</li>
        <li><strong>Animal Cells</strong>: Lack cell walls and chloroplasts but have centrioles.</li>
      </ul>
    `
  },
  "genetics": {
    title: "Elementary Treatment of Genetics",
    description: "Understand the nature of genetic material, Mendelian genetics, and modern applications.",
    keyConcepts: [
      "Physical and chemical nature of genetic material",
      "Historical events in genetics",
      "Mendelian genetics",
      "Genetic engineering and biotechnology"
    ],
    lecture: `
      <h2>Elementary Treatment of Genetics</h2>
      <p>Genetics explores how traits are inherited and how genetic information is passed from one generation to another.</p>
      <h3>1. Physical and Chemical Nature of Genetic Material</h3>
      <p>DNA and RNA are the primary genetic materials, composed of nucleotides that store genetic information.</p>
      <h3>2. Mendelian Genetics</h3>
      <p>Mendel's experiments established the principles of inheritance, including dominance, segregation, and independent assortment.</p>
      <h3>3. Modern Applications</h3>
      <p>Genetic engineering and biotechnology allow for modifications in genetic material to address global challenges.</p>
    `
  },
  "plant-physiology": {
    title: "Plant Physiology",
    description: "Study the physiological processes of plants, including photosynthesis, respiration, and transpiration.",
    keyConcepts: [
      "Movement of materials in and out of cells",
      "Transpiration",
      "Photosynthesis and respiration",
      "Plant growth substances",
      "Ecosystem and pollution"
    ],
    lecture: `
      <h2>Plant Physiology</h2>
      <p>Plant physiology examines the processes that enable plants to grow, survive, and interact with their environment.</p>
      <h3>1. Photosynthesis</h3>
      <p>Photosynthesis converts sunlight into chemical energy stored in glucose. Chlorophyll in plant cells plays a crucial role in this process.</p>
      <h3>2. Transpiration</h3>
      <p>Transpiration is the loss of water from plants through stomata, helping in nutrient transport and temperature regulation.</p>
      <h3>3. Ecosystem and Pollution</h3>
      <p>Plants are key components of ecosystems, cycling matter and energy. Pollution, including water, air, and oil contamination, impacts plant health and biodiversity.</p>
    `
  }
};

// Elements
const topicsSection = document.getElementById("topics-section");
const topicDetailsSection = document.getElementById("topic-details-section");
const topicContent = document.getElementById("topic-content");
const backButton = document.getElementById("back-button");

// Event listener for topic links
document.querySelectorAll(".topic-link").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const topicId = event.target.dataset.topic;
    loadTopicContent(topicId);
  });
});

// Back button event listener
backButton.addEventListener("click", () => {
  topicsSection.classList.remove("hidden");
  topicDetailsSection.classList.add("hidden");
});

// Function to load topic content dynamically
function loadTopicContent(topicId) {
  const topic = topicsContent[topicId];

  if (topic) {
    topicContent.innerHTML = `
      <h1>${topic.title}</h1>
      <p>${topic.description}</p>
      <h2>Key Concepts</h2>
      <ul>
        ${topic.keyConcepts.map(concept => `<li>${concept}</li>`).join("")}
      </ul>
      <h2>Lecture</h2>
      ${topic.lecture}
    `;

    // Show the topic details section and hide the topics list
    topicsSection.classList.add("hidden");
    topicDetailsSection.classList.remove("hidden");
  }
}