import cv2
import numpy as np
from PIL import Image

im = Image.open('public/logo-transparent.png')
alpha = np.array(im.split()[3])

# Threshold to get clean binary mask
_, thresh = cv2.threshold(alpha, 120, 255, cv2.THRESH_BINARY)

# Find external contours and hierarchy
contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)
print('Number of contours:', len(contours))

# Approximate contours slightly for crisp vector lines and smooth corners
svg_paths = []
paths_separate = []
for i, cnt in enumerate(contours):
    area = cv2.contourArea(cnt)
    if area < 100:
        continue
    epsilon = 0.0012 * cv2.arcLength(cnt, True)
    approx = cv2.approxPolyDP(cnt, epsilon, True)
    print(f'Contour {i}: area={area}, points={len(approx)}, is_hole={hierarchy[0][i][3] != -1}')
    
    d_list = []
    for j, pt in enumerate(approx):
        x, y = pt[0]
        if j == 0:
            d_list.append(f"M {x} {y}")
        else:
            d_list.append(f"L {x} {y}")
    d_list.append("Z")
    d_str = " ".join(d_list)
    svg_paths.append(d_str)
    paths_separate.append(d_str)

full_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="{" ".join(svg_paths)}" />
</svg>'''

with open('public/techshoyo-monogram.svg', 'w') as f:
    f.write(full_svg)

# Also let's write TSMonogram.jsx with the path data so it can be animated with Framer Motion pathLength!
react_component = f'''import React from 'react';
import {{ motion }} from 'framer-motion';

export const TS_PATHS = {repr(paths_separate)};

export default function TSMonogram({{ 
  className = "w-10 h-10", 
  fill = "currentColor", 
  stroke = "none", 
  strokeWidth = 0,
  animated = false,
  pathTransition = {{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
}}) {{
  if (animated) {{
    return (
      <svg 
        viewBox="200 240 624 580" 
        className={{className}} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {{TS_PATHS.map((d, i) => (
          <motion.path
            key={{i}}
            d={{d}}
            fill={{fill}}
            stroke={{stroke || "currentColor"}}
            strokeWidth={{strokeWidth || 4}}
            initial={{{{ pathLength: 0, opacity: 0, fillOpacity: 0 }}}}
            animate={{{{ pathLength: 1, opacity: 1, fillOpacity: 1 }}}}
            transition={{pathTransition}}
          />
        ))}}
      </svg>
    );
  }}

  return (
    <svg 
      viewBox="200 240 624 580" 
      className={{className}} 
      fill={{fill}} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {{TS_PATHS.map((d, i) => (
        <path key={{i}} d={{d}} />
      ))}}
    </svg>
  );
}}
'''

with open('src/components/TSMonogram.jsx', 'w') as f:
    f.write(react_component)

print('Vector SVG and React component written successfully.')
