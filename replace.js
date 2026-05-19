const fs = require('fs');

const files = [
  'components/TeamHero.tsx',
  'components/NFCEventHero.tsx',
  'components/CorporateGiftingHero.tsx'
];

let oldStr = `            <Link href="#how-it-works" className="no-underline w-full sm:w-auto">
              <button
                style={{
                  background: "rgba(255,255,255,0.7)",
                  color: "#005AD1",
                  fontSize: "17px",
                  fontWeight: 700,
                  borderRadius: "999px",
                  padding: "15px 32px",
                  border: "1.5px solid rgba(0,90,209,0.2)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s ease",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,90,209,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,90,209,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.borderColor = "rgba(0,90,209,0.2)";
                }}
              >
                Learn more
              </button>
            </Link>`;

let newStr = `            <Link href="#how-it-works" className="no-underline w-full sm:w-auto">
              <button
                style={{
                  background: "rgba(255,255,255,0.7)",
                  color: "#005AD1",
                  fontSize: "17px",
                  fontWeight: 700,
                  borderRadius: "999px",
                  padding: "16px 40px",
                  border: "1.5px solid rgba(0,90,209,0.2)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                  boxShadow: "0 8px 32px rgba(0,90,209,0.05)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.background = "rgba(0,90,209,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,90,209,0.4)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,90,209,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.borderColor = "rgba(0,90,209,0.2)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,90,209,0.05)";
                }}
              >
                Learn more
              </button>
            </Link>`;

oldStr = oldStr.replace(/\r\n/g, '\n');
newStr = newStr.replace(/\r\n/g, '\n');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let normalizedContent = content.replace(/\r\n/g, '\n');
  if (normalizedContent.includes(oldStr)) {
    let replacedContent = normalizedContent.replace(oldStr, newStr);
    fs.writeFileSync(file, replacedContent);
    console.log('Replaced in ' + file);
  } else {
    console.log('Not found in ' + file);
  }
}
