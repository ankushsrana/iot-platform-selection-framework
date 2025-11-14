// Evaluation Framework Data
const evaluationDimensions = [
  {
    id: 'technical_architecture',
    name: 'Technical Architecture',
    weight: 20,
    questions: [
      'Does the platform support multi-source data integration natively?',
      'Can the platform handle both real-time streaming and batch processing?',
      'Does it provide built-in observability and monitoring tools?',
      'Are multiple data store options available (real-time, OLAP, warehouse, lake)?',
      'Is the architecture scalable and cloud-native?'
    ]
  },
  {
    id: 'integration_capability',
    name: 'Integration Capability',
    weight: 25,
    questions: [
      'Does the platform support legacy system protocols (Modbus, OPC-UA)?',
      'How many pre-built connectors are available?',
      'Can custom integrations be built without extensive coding?',
      'Does it handle multiple data formats seamlessly?',
      'Is there a robust third-party ecosystem and marketplace?'
    ]
  },
  {
    id: 'team_capability',
    name: 'Team Capability & Skill Alignment',
    weight: 20,
    questions: [
      'Does the platform match our team\'s current technical skills?',
      'Is the learning curve reasonable for our team?',
      'Does the deployment model fit our operational capabilities?',
      'Is quality support and training available?',
      'Can we realistically hire for any skill gaps?'
    ]
  },
  {
    id: 'business_economics',
    name: 'Business Economics (TCO)',
    weight: 20,
    questions: [
      'Are software licensing costs transparent and predictable?',
      'Are infrastructure/hosting costs reasonable for our scale?',
      'Is implementation cost within budget with clear scope?',
      'Can we afford the required team size long-term?',
      'Is the 3-year TCO justified by expected ROI?'
    ]
  },
  {
    id: 'scalability',
    name: 'Scalability & Future-Proofing',
    weight: 15,
    questions: [
      'Can the platform scale horizontally as data volumes grow?',
      'Will it handle 10x data volume without major rearchitecture?',
      'Is the architecture flexible for evolving use cases?',
      'Does the vendor demonstrate technology innovation?',
      'Is the vendor financially stable with strong market position?'
    ]
  }
];

// Ideal Characteristics Data
const idealCharacteristics = [
  {
    title: 'Comprehensive Multi-Source Integration',
    description: '50+ pre-built connectors (databases, APIs, sensors, cloud). Supports MQTT, HTTP/HTTPS, Kafka protocols. Low-code/no-code configuration. Legacy system protocol support.',
    checked: false
  },
  {
    title: 'Unified Real-Time & Batch Processing',
    description: 'Real-time ingestion + batch operations, simultaneously. Sub-second latency streaming. Automatic data movement between stores. Consistent query semantics.',
    checked: false
  },
  {
    title: 'Built-In Observability',
    description: 'Pipeline health dashboards without external tools. Failed task visibility. Consumer lag monitoring. Data lineage tracking. Audit logs and compliance.',
    checked: false
  },
  {
    title: 'Enterprise-Grade Governance',
    description: 'Access control, encryption, compliance. Role-based access control. Multi-tenancy support. GDPR, HIPAA compliance.',
    checked: false
  },
  {
    title: 'Multiple Data Store Options',
    description: 'Real-time, OLAP, warehouse, and data lake. Real-time analytics tables. Aggregation databases. Historical warehouses. Exploratory data lakes.',
    checked: false
  },
  {
    title: 'API-First Data Access',
    description: 'Standardized APIs for external consumption. Save and invoke queries via API. RESTful design with standard protocols. Granular API key permissions.',
    checked: false
  },
  {
    title: 'Developer Experience',
    description: 'Documentation, low-code interfaces, community. Comprehensive API documentation. Active community and forums. Clear data models and schemas.',
    checked: false
  },
  {
    title: 'Flexible Deployment',
    description: 'Cloud, on-premises, edge options. Auto-scaling cloud hosting. Multi-region deployment. No vendor lock-in.',
    checked: false
  },
  {
    title: 'International Support',
    description: 'Multi-language, regional data residency. Regional data residency. Regulatory compliance. Multi-timezone support.',
    checked: false
  }
];

// Common Mistakes Data
const commonMistakes = [
  {
    id: 1,
    title: 'Feature Checklist Evaluation',
    trap: 'Comparing platforms by counting features instead of evaluating business outcomes and ROI.',
    rightApproach: 'Map features directly to your specific use cases. Prioritize features you\'ll use in first 18 months. Focus on how features deliver measurable business value.',
    example: 'IBM Watson IoT had extensive features but suffered from high implementation costs and complexity, making it difficult to deploy efficiently.',
    redFlags: ['Platform has most features but unclear ROI', 'Vendor features don\'t map to your use cases', 'Features you won\'t use in first 18 months']
  },
  {
    id: 2,
    title: 'Vendor-Led Selection',
    trap: 'Letting cloud vendors (AWS, Azure, Google) bias your decision toward their ecosystem without independent evaluation.',
    rightApproach: 'Conduct vendor-neutral evaluation first. Define requirements before talking to vendors. Get independent third-party assessments. Evaluate vendor lock-in risks.',
    example: 'AWS, Azure, Google each claim superiority for different scenarios, creating confusion without objective comparison.',
    redFlags: ['Let the vendor make the decision', 'Locked into single cloud ecosystem', 'No independent evaluation']
  },
  {
    id: 3,
    title: 'Build vs. Buy Without TCO',
    trap: 'Underestimating long-term costs of custom-built platforms: ongoing development, maintenance, security, scaling.',
    rightApproach: 'Calculate full 3-year TCO including team costs, security updates, feature development, scaling infrastructure. Compare realistically against managed platform costs.',
    example: 'Building custom infrastructure: $2.7M+ total cost (development $800K, 3-year team $1.5M+, infrastructure $400K+) vs. managed platform $50-500K annually.',
    redFlags: ['Budget only for development, not operations', 'Assume one team member can maintain indefinitely', 'Ignore ongoing security/compliance costs']
  },
  {
    id: 4,
    title: 'Legacy System Integration Blindness',
    trap: '80% of factories have mixed environments. Platforms designed for modern protocols fail with legacy equipment.',
    rightApproach: 'Inventory all communication protocols in use. Test platform integration with legacy systems during POC. Budget for protocol converters or edge gateways if needed.',
    example: 'Modern IoT platforms expect MQTT, but legacy manufacturing systems use Modbus, OPC-UA, proprietary protocols - they don\'t talk without translation layers.',
    redFlags: ['Plan only for new systems', 'Assume retrofit existing equipment easily', 'Ignore communication protocol gaps']
  },
  {
    id: 5,
    title: 'Team Skill Misalignment',
    trap: 'Choosing platforms that require expertise your team doesn\'t have and can\'t realistically acquire or hire for.',
    rightApproach: 'Honest assessment of team capabilities. Match platform complexity to team skills. Factor training time and costs. Consider regional hiring market for specialized skills.',
    example: 'Sigfox LPWAN technology was innovative but had limited talent pool, creating scaling challenges despite brilliant technology.',
    redFlags: ['Assume team will learn everything needed', 'Platform requires skills you can\'t hire for', 'Onboarding longer than project timeline']
  }
];



// State Management
let evaluationScores = {};
let tcoChartInstance = null;
let costBreakdownChartInstance = null;

// Initialize Evaluation Framework
function initializeEvaluationFramework() {
  const container = document.getElementById('evaluationFramework');
  
  evaluationDimensions.forEach(dimension => {
    evaluationScores[dimension.id] = { answers: {}, total: 0 };
    
    const section = document.createElement('div');
    section.className = 'dimension-section';
    
    const header = document.createElement('div');
    header.className = 'dimension-header';
    
    const title = document.createElement('h3');
    title.className = 'dimension-title';
    title.textContent = dimension.name;
    
    const score = document.createElement('div');
    score.className = 'dimension-score';
    score.id = `score-${dimension.id}`;
    score.textContent = '0/20';
    
    header.appendChild(title);
    header.appendChild(score);
    section.appendChild(header);
    
    dimension.questions.forEach((question, index) => {
      const questionItem = document.createElement('div');
      questionItem.className = 'question-item';
      
      const questionText = document.createElement('div');
      questionText.className = 'question-text';
      questionText.textContent = question;
      
      const ratingButtons = document.createElement('div');
      ratingButtons.className = 'rating-buttons';
      
      for (let i = 1; i <= 4; i++) {
        const btn = document.createElement('button');
        btn.className = 'rating-btn';
        btn.textContent = i;
        btn.onclick = () => selectRating(dimension.id, index, i, btn);
        ratingButtons.appendChild(btn);
      }
      
      questionItem.appendChild(questionText);
      questionItem.appendChild(ratingButtons);
      section.appendChild(questionItem);
    });
    
    container.appendChild(section);
  });
}

// Select Rating
function selectRating(dimensionId, questionIndex, rating, buttonElement) {
  const buttons = buttonElement.parentElement.querySelectorAll('.rating-btn');
  buttons.forEach(btn => btn.classList.remove('selected'));
  buttonElement.classList.add('selected');
  
  evaluationScores[dimensionId].answers[questionIndex] = rating;
  updateScores();
}

// Update Scores
function updateScores() {
  let totalScore = 0;
  
  evaluationDimensions.forEach(dimension => {
    const answers = evaluationScores[dimension.id].answers;
    const dimensionTotal = Object.values(answers).reduce((sum, val) => sum + val, 0);
    evaluationScores[dimension.id].total = dimensionTotal;
    
    document.getElementById(`score-${dimension.id}`).textContent = `${dimensionTotal}/20`;
    totalScore += dimensionTotal;
  });
  
  document.getElementById('totalScore').textContent = `${totalScore}/100`;
  
  const interpretation = document.getElementById('scoreInterpretation');
  let className = '';
  let text = '';
  
  if (totalScore >= 80) {
    className = 'score-green';
    text = '✓ Excellent - Platform meets requirements comprehensively';
  } else if (totalScore >= 60) {
    className = 'score-yellow';
    text = '⚠ Good - Platform adequate but has some gaps';
  } else if (totalScore >= 40) {
    className = 'score-yellow';
    text = '⚠ Fair - Requires significant custom development';
  } else {
    className = 'score-red';
    text = '✗ Poor - High risk, consider alternatives';
  }
  
  interpretation.className = `score-interpretation ${className}`;
  interpretation.textContent = text;
}

// Reset Scores
function resetScores() {
  evaluationScores = {};
  evaluationDimensions.forEach(dimension => {
    evaluationScores[dimension.id] = { answers: {}, total: 0 };
  });
  
  document.querySelectorAll('.rating-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  updateScores();
}

// TCO Calculator
function calculateTCO() {
  const licensing = parseFloat(document.getElementById('licensing').value) || 0;
  const infrastructure = parseFloat(document.getElementById('infrastructure').value) || 0;
  const implementation = parseFloat(document.getElementById('implementation').value) || 0;
  const teamCost = parseFloat(document.getElementById('teamCost').value) || 0;
  const teamSize = parseInt(document.getElementById('teamSize').value) || 1;
  const operations = parseFloat(document.getElementById('operations').value) || 0;
  
  const annualTeamCost = teamCost * teamSize;
  const annualRecurring = licensing + infrastructure + annualTeamCost + operations;
  
  const year1 = implementation + annualRecurring;
  const year2 = annualRecurring;
  const year3 = annualRecurring;
  const total = year1 + year2 + year3;
  
  document.getElementById('tcoTotal').textContent = `$${total.toLocaleString()}`;
  document.getElementById('year1').textContent = `$${year1.toLocaleString()}`;
  document.getElementById('year2').textContent = `$${year2.toLocaleString()}`;
  document.getElementById('year3').textContent = `$${year3.toLocaleString()}`;
  
  updateTCOChart(year1, year2, year3);
  updateCostBreakdownChart(licensing, infrastructure, implementation, annualTeamCost, operations);
}

// Update TCO Chart
function updateTCOChart(year1, year2, year3) {
  const ctx = document.getElementById('tcoChart').getContext('2d');
  
  if (tcoChartInstance) {
    tcoChartInstance.destroy();
  }
  
  tcoChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Year 1', 'Year 2', 'Year 3'],
      datasets: [{
        label: '3-Year TCO Projection',
        data: [year1, year2, year3],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '3-Year Cost Projection'
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value.toLocaleString();
            }
          }
        }
      }
    }
  });
}

// Update Cost Breakdown Chart
function updateCostBreakdownChart(licensing, infrastructure, implementation, teamCost, operations) {
  const ctx = document.getElementById('costBreakdownChart').getContext('2d');
  
  if (costBreakdownChartInstance) {
    costBreakdownChartInstance.destroy();
  }
  
  costBreakdownChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Software Licensing', 'Infrastructure', 'Implementation', 'Team Costs', 'Operations'],
      datasets: [{
        data: [licensing * 3, infrastructure * 3, implementation, teamCost * 3, operations * 3],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Cost Distribution (3-Year Total)'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Initialize Characteristics Checklist
function initializeCharacteristics() {
  const container = document.getElementById('characteristicsChecklist');
  
  idealCharacteristics.forEach((char, index) => {
    const item = document.createElement('div');
    item.className = 'checklist-item';
    
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox';
    checkbox.onclick = () => toggleCheckbox(index, checkbox);
    
    const content = document.createElement('div');
    content.className = 'checklist-content';
    
    const title = document.createElement('div');
    title.className = 'checklist-title';
    title.textContent = char.title;
    
    const desc = document.createElement('div');
    desc.className = 'checklist-desc';
    desc.innerHTML = char.description;
    
    content.appendChild(title);
    content.appendChild(desc);
    
    item.appendChild(checkbox);
    item.appendChild(content);
    
    container.appendChild(item);
  });
}

// Toggle Checkbox
function toggleCheckbox(index, checkboxElement) {
  idealCharacteristics[index].checked = !idealCharacteristics[index].checked;
  
  if (idealCharacteristics[index].checked) {
    checkboxElement.classList.add('checked');
  } else {
    checkboxElement.classList.remove('checked');
  }
  
  updateCheckedCount();
}

// Update Checked Count
function updateCheckedCount() {
  const count = idealCharacteristics.filter(c => c.checked).length;
  document.getElementById('checkedCount').textContent = count;
}

// Initialize Common Mistakes Tabs
function initializeCommonMistakes() {
  const tabsContainer = document.getElementById('mistakesTabs');
  const contentContainer = document.getElementById('mistakesContent');
  
  commonMistakes.forEach((mistake, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.textContent = mistake.title;
    btn.onclick = () => switchMistakeTab(index);
    tabsContainer.appendChild(btn);
    
    const content = document.createElement('div');
    content.className = `tab-content ${index === 0 ? 'active' : ''}`;
    content.id = `mistake-${index}`;
    
    const card = document.createElement('div');
    card.className = 'mistake-card';
    
    const sections = [
      { heading: 'The Trap', text: mistake.trap },
      { heading: 'Right Approach', text: mistake.rightApproach },
      { heading: 'Example', text: mistake.example }
    ];
    
    sections.forEach(section => {
      const div = document.createElement('div');
      div.className = 'mistake-section';
      
      const heading = document.createElement('h4');
      heading.className = 'mistake-heading';
      heading.textContent = section.heading;
      
      const text = document.createElement('p');
      text.style.fontSize = 'var(--font-size-base)';
      text.style.color = 'var(--color-text-secondary)';
      text.textContent = section.text;
      
      div.appendChild(heading);
      div.appendChild(text);
      card.appendChild(div);
    });
    
    const redFlagsDiv = document.createElement('div');
    redFlagsDiv.className = 'mistake-section';
    
    const redFlagsHeading = document.createElement('h4');
    redFlagsHeading.className = 'mistake-heading';
    redFlagsHeading.textContent = 'Red Flags';
    
    const redFlagsList = document.createElement('ul');
    redFlagsList.className = 'red-flag-list';
    
    mistake.redFlags.forEach(flag => {
      const li = document.createElement('li');
      li.textContent = flag;
      redFlagsList.appendChild(li);
    });
    
    redFlagsDiv.appendChild(redFlagsHeading);
    redFlagsDiv.appendChild(redFlagsList);
    card.appendChild(redFlagsDiv);
    
    content.appendChild(card);
    contentContainer.appendChild(content);
  });
}

// Switch Mistake Tab
function switchMistakeTab(index) {
  document.querySelectorAll('#mistakesTabs .tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  
  document.querySelectorAll('#mistakesContent .tab-content').forEach((content, i) => {
    content.classList.toggle('active', i === index);
  });
}



// Toggle Expand
function toggleExpand(card) {
  card.classList.toggle('expanded');
}

// Switch Tab
function switchTab(index) {
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  
  document.querySelectorAll('.tab-content').forEach((content, i) => {
    content.classList.toggle('active', i === index);
  });
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Download Results
function downloadResults() {
  let resultsText = 'IoT Platform Evaluation Results\n\n';
  resultsText += '=================================\n\n';
  
  evaluationDimensions.forEach(dimension => {
    resultsText += `${dimension.name}: ${evaluationScores[dimension.id].total}/20\n`;
  });
  
  const totalScore = Object.values(evaluationScores).reduce((sum, dim) => sum + dim.total, 0);
  resultsText += `\nTotal Score: ${totalScore}/100\n\n`;
  
  if (totalScore >= 80) {
    resultsText += 'Interpretation: Excellent - Platform meets requirements comprehensively\n';
  } else if (totalScore >= 60) {
    resultsText += 'Interpretation: Good - Platform adequate but has some gaps\n';
  } else if (totalScore >= 40) {
    resultsText += 'Interpretation: Fair - Requires significant custom development\n';
  } else {
    resultsText += 'Interpretation: Poor - High risk, consider alternatives\n';
  }
  
  const blob = new Blob([resultsText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'iot-platform-evaluation-results.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// Share Results
function shareResults() {
  let resultsText = 'IoT Platform Evaluation Results:\n\n';
  
  evaluationDimensions.forEach(dimension => {
    resultsText += `${dimension.name}: ${evaluationScores[dimension.id].total}/20\n`;
  });
  
  const totalScore = Object.values(evaluationScores).reduce((sum, dim) => sum + dim.total, 0);
  resultsText += `\nTotal Score: ${totalScore}/100`;
  
  const subject = encodeURIComponent('IoT Platform Evaluation Results');
  const body = encodeURIComponent(resultsText);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  initializeEvaluationFramework();
  initializeCharacteristics();
  initializeCommonMistakes();
  calculateTCO();
});
