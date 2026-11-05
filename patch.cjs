const fs = require('fs');
let code = fs.readFileSync('src/components/Navigation.tsx', 'utf8');

// 1. Remove the gap-2 and min-w-0 from the parent div, remove the closing div and re-open it to merge them
code = code.replace(
  /<div className="hidden lg:flex flex-1 justify-center mx-4 items-center gap-2 min-w-0">\s*<div className="flex items-center gap-1 xl:gap-2 bg-black\/40 backdrop-blur-xl border border-white\/10 rounded-full px-4 py-2 overflow-x-auto hide-scrollbar max-w-full">([\s\S]*?)<\/div>\s*<div className="relative flex-shrink-0" ref=\{dropdownRef\}>/,
  `<div className="hidden lg:flex flex-1 justify-center mx-4">
          <div className="flex items-center gap-1 xl:gap-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
            $1
            <div className="relative flex-shrink-0" ref={dropdownRef}>`
);

// 2. Change the recommended button styling back to match the inner buttons
code = code.replace(
  /className="px-4 py-2 text-xs xl:text-sm rounded-full transition-colors font-medium whitespace-nowrap text-\[var\(--color-text-main\)\] hover:bg-white\/10 flex items-center gap-1 bg-black\/40 backdrop-blur-xl border border-white\/10"/,
  `className="px-3 py-1 text-xs xl:text-sm rounded-full transition-colors font-medium whitespace-nowrap text-[var(--color-text-main)] hover:bg-[rgba(255,255,255,0.5)] flex items-center gap-1 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"`
);

// 3. Remove the Find Guide button
code = code.replace(
  /<button \s*className="hidden md:flex items-center justify-center whitespace-nowrap glass-button px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"\s*onClick=\{[^}]+\}\s*>\s*\{lang === 'id' \? 'Pilih Guide' : 'Find Guide'\}\s*<\/button>/g,
  ''
);

fs.writeFileSync('src/components/Navigation.tsx', code);
