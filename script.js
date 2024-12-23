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

<strong>The Cell – Structure and Functions</strong>

<p>The study of cell structure and function focuses on understanding the differences and similarities between prokaryotic and eukaryotic cells, their unique features, and their roles in biological systems.</p>  

Prokaryotes:

<p>Prokaryotes are organisms whose cells lack a membrane-bound nucleus and organelles. They are some of the earliest and most resilient forms of life.</p>  

<strong>Key Features:</strong>
<ul>  
  <li><strong>Single-celled organisms:</strong> Usually exist as independent cells.</li>  
  <li><strong>Cell Walls:</strong> Made of peptidoglycan in bacteria.</li>  
  <li><strong>Lack membrane-bound organelles:</strong> Genetic material is free-floating in the cytoplasm.</li>  
  <li><strong>Shapes and Sizes:</strong> Includes cocci (spherical), bacilli (rod-shaped), vibrio (comma-shaped), spirochete (wavy), and spirillum (corkscrew-shaped).</li>  
  <li><strong>Adaptations:</strong> Archaea thrive in extreme environments like hot springs and hydrothermal vents.</li>  
</ul>  

<strong>Eukaryotes:</strong>

<p>Eukaryotes are more complex organisms whose cells have membrane-bound nuclei and organelles that compartmentalize functions.</p>  

<strong>Key Features:</strong>
<ul>  
  <li><strong>Membrane-bound nucleus:</strong> Houses genetic material.</li>  
  <li><strong>Organelles:</strong> Specialized structures like mitochondria, chloroplasts, and the Golgi apparatus.</li>  
  <li><strong>Cytoskeleton:</strong> Provides structure, support, and facilitates intracellular transport.</li>  
  <li><strong>Found in:</strong> Plants, animals, fungi, and protists.</li>  
</ul>  

<strong>Comparison Between Prokaryotes and Eukaryotes:</strong>

<h4>Key Differences:</h4>  
<ul>  
  <li><strong>Organisms:</strong> Prokaryotes include bacteria and archaea; eukaryotes include plants, fungi, and animals.</li>  
  <li><strong>Cell Size:</strong> Prokaryotes (0.2–10 µm); Eukaryotes (10–100 µm).</li>  
  <li><strong>Organelles:</strong> Prokaryotes lack membrane-bound organelles; eukaryotes have many membrane-bound organelles.</li>  
  <li><strong>Cell Division:</strong> Prokaryotes use binary fission; eukaryotes use mitosis or meiosis.</li>  
</ul>  

<strong>Significance of Differences:</strong>

<ul>  
  <li><strong>Prokaryotes:</strong> Adapted for rapid reproduction and environmental resilience.</li>  
  <li><strong>Eukaryotes:</strong> Compartmentalization enhances efficiency in cellular functions.</li>  
  <li><strong>Ecological Roles:</strong> Both types are essential for nutrient cycles and maintaining ecological balance.</li>  
</ul>  

<strong>Unique Adaptations in Archaea:</strong>

<ul>  
  <li><strong>Extreme Environments:</strong> Survive in hot springs, salt lakes, and hydrothermal vents.</li>  
  <li><strong>Methanogenesis:</strong> Convert CO₂ and H₂ into methane.</li>  
  <li><strong>Distinct RNA Sequences:</strong> Unique ribosomal and transfer RNA structures.</li>  
</ul>  

<strong>Key Takeaways:</strong>

<ul>  
  <li><strong>Prokaryotes:</strong> Simple yet essential for ecosystems.</li>  
  <li><strong>Eukaryotes:</strong> Complex with compartmentalized cellular functions.</li>  
  <li><strong>Both:</strong> Play foundational roles in sustaining life on Earth.</li>  
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
