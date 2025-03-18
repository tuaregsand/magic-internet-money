/**
 * Simple Mobile Element Positioning Tool
 */
(function() {
  // Create and insert the panel immediately
  const panel = document.createElement('div');
  panel.style.cssText = 'position:fixed; bottom:10px; right:10px; background:#000; color:#fff; padding:10px; border-radius:5px; z-index:2147483647; width:200px; box-shadow:0 0 10px rgba(0,0,0,0.5); font-family:sans-serif; font-size:12px; display:block !important; opacity:1 !important; visibility:visible !important';
  
  panel.innerHTML = `
    <div style="font-weight:bold; margin-bottom:5px; font-size:14px;">Element Positioner</div>
    <div id="position-controls">
      <select id="element-selector" style="width:100%; margin-bottom:5px; padding:3px;">
        <option value="">Select Element</option>
        <option value=".wizard">Wizard</option>
        <option value=".books">Books</option>
        <option value=".yellow-book">Yellow Book</option>
        <option value=".purple-book">Purple Book</option>
        <option value=".table">Table</option>
      </select>
      <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
        <label>X: <input type="number" id="pos-x" style="width:40px;"></label>
        <label>Y: <input type="number" id="pos-y" style="width:40px;"></label>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
        <label>W: <input type="number" id="pos-width" style="width:40px;"></label>
        <label>Z: <input type="number" id="pos-z" style="width:40px;"></label>
      </div>
      <button id="update-position" style="width:100%; padding:5px; background:#4CAF50; color:white; border:none; border-radius:3px;">Update Position</button>
      <button id="save-css" style="width:100%; padding:5px; background:#2196F3; color:white; border:none; border-radius:3px; margin-top:5px;">Save CSS</button>
      <div style="margin-top:10px; text-align:right;">
        <button id="toggle-panel" style="padding:3px 5px; background:#f44336; color:white; border:none; border-radius:3px;">Hide</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(panel);
  
  // Create a show button for when panel is hidden
  const showButton = document.createElement('div');
  showButton.style.cssText = 'position:fixed; bottom:10px; right:10px; background:#4CAF50; color:white; width:30px; height:30px; border-radius:50%; text-align:center; line-height:30px; font-weight:bold; z-index:2147483647; cursor:pointer; display:none;';
  showButton.innerHTML = '+';
  document.body.appendChild(showButton);
  
  // Toggle panel visibility
  document.getElementById('toggle-panel').addEventListener('click', function() {
    panel.style.display = 'none';
    showButton.style.display = 'block';
  });
  
  showButton.addEventListener('click', function() {
    panel.style.display = 'block';
    showButton.style.display = 'none';
  });
  
  // Element selection and positioning
  let currentElement = null;
  const elementSelector = document.getElementById('element-selector');
  const posX = document.getElementById('pos-x');
  const posY = document.getElementById('pos-y');
  const posWidth = document.getElementById('pos-width');
  const posZ = document.getElementById('pos-z');
  
  elementSelector.addEventListener('change', function() {
    const selector = this.value;
    if (!selector) {
      currentElement = null;
      return;
    }
    
    currentElement = document.querySelector(selector);
    if (currentElement) {
      updateControlValues();
    }
  });
  
  document.getElementById('update-position').addEventListener('click', function() {
    if (!currentElement) return;
    
    currentElement.style.left = posX.value + '%';
    currentElement.style.bottom = posY.value + '%';
    currentElement.style.width = posWidth.value + '%';
    currentElement.style.zIndex = posZ.value;
  });
  
  document.getElementById('save-css').addEventListener('click', function() {
    let css = '';
    
    // Map of selectors to custom position classes
    const elementMap = {
      '.wizard': '.wizard-custom-position',
      '.books': '.books-custom-position',
      '.yellow-book': '.yellow-book-custom-position',
      '.purple-book': '.purple-book-custom-position',
      '.table': '.table-custom-position'
    };
    
    // Generate CSS for each element
    for (const selector in elementMap) {
      const element = document.querySelector(selector);
      if (!element) continue;
      
      // Get computed position values
      const rect = element.getBoundingClientRect();
      const parent = element.parentElement.getBoundingClientRect();
      
      const leftPercent = Math.round((rect.left - parent.left) / parent.width * 100);
      const bottomPercent = Math.round((parent.bottom - rect.bottom) / parent.height * 100);
      const widthPercent = Math.round(rect.width / parent.width * 100);
      const zIndex = window.getComputedStyle(element).zIndex;
      
      css += `${elementMap[selector]} {\n`;
      css += `  left: ${leftPercent}% !important;\n`;
      css += `  bottom: ${bottomPercent}% !important;\n`;
      css += `  width: ${widthPercent}% !important;\n`;
      css += `  z-index: ${zIndex} !important;\n`;
      css += `}\n\n`;
    }
    
    // Display the CSS
    alert('Copy this CSS to your mobile.css file:\n\n' + css);
  });
  
  function updateControlValues() {
    if (!currentElement) return;
    
    const rect = currentElement.getBoundingClientRect();
    const parent = currentElement.parentElement.getBoundingClientRect();
    
    const leftPercent = Math.round((rect.left - parent.left) / parent.width * 100);
    const bottomPercent = Math.round((parent.bottom - rect.bottom) / parent.height * 100);
    const widthPercent = Math.round(rect.width / parent.width * 100);
    
    posX.value = leftPercent;
    posY.value = bottomPercent;
    posWidth.value = widthPercent;
    posZ.value = window.getComputedStyle(currentElement).zIndex;
  }
  
  // Initialize all positions to absolute
  setTimeout(function() {
    const elements = ['.wizard', '.books', '.yellow-book', '.purple-book', '.table'];
    elements.forEach(selector => {
      const el = document.querySelector(selector);
      if (el && window.getComputedStyle(el).position !== 'absolute') {
        el.style.position = 'absolute';
      }
    });
  }, 1000);
})(); 