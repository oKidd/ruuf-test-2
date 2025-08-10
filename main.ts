import * as fs from 'fs';

interface TestCase {
  panelW: number;
  panelH: number;
  roofW: number;
  roofH: number;
  expected: number;
}

interface TestData {
  testCases: TestCase[];
}

function calculatePanels(
  panelWidth: number,
  panelHeight: number,
  roofWidth: number,
  roofHeight: number
): number {
  // Solucion Implementada

  let occupiedWidth = Math.floor(roofWidth / panelWidth);
  let occupiedHeight = Math.floor(roofHeight / panelHeight);
  // Paneles ocupados en una sola posicion
  let totalPanels = occupiedWidth * occupiedHeight;

  // Area ocupada por los paneles colocados
  const occupiedArea = totalPanels * panelWidth * panelHeight;

  const roofArea = roofWidth * roofHeight;

  // Area sobrante en el techo
  const wastedArea = roofArea - occupiedArea;

  // Calculamos nuevamente invirtiendo la figura en el techo sobrante
  if (panelHeight > panelWidth) {
    // Alto > Ancho
    const wastedHeight = Math.floor(wastedArea / roofWidth) // Sobrante del techo

    occupiedWidth = Math.floor(roofWidth / panelHeight) // Invertimos la figura
    occupiedHeight = Math.floor(wastedHeight / panelWidth) // Invertimos la figura
  } else {
    const wastedWidth = Math.floor(wastedArea / roofHeight) // Sobrante del techo

    occupiedWidth = Math.floor(wastedWidth / panelHeight) // Invertimos la figura
    occupiedHeight = Math.floor(roofHeight / panelWidth) // Invertimos la figura
  }

  const rotatedPanels = occupiedWidth * occupiedHeight
  // Total de paneles colocados
  totalPanels += rotatedPanels

  return totalPanels;
}

function main(): void {
  console.log("🐕 Wuuf wuuf wuuf 🐕");
  console.log("================================\n");
  
  runTests();
}

function runTests(): void {
  const data: TestData = JSON.parse(fs.readFileSync('test_cases.json', 'utf-8'));
  const testCases = data.testCases;
  
  console.log("Corriendo tests:");
  console.log("-------------------");
  
  testCases.forEach((test: TestCase, index: number) => {
    const result = calculatePanels(test.panelW, test.panelH, test.roofW, test.roofH);
    const passed = result === test.expected;
    
    console.log(`Test ${index + 1}:`);
    console.log(`  Panels: ${test.panelW}x${test.panelH}, Roof: ${test.roofW}x${test.roofH}`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log(`  Status: ${passed ? "✅ PASSED" : "❌ FAILED"}\n`);
  });
}

main();
