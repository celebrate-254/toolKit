const tools = [
  {
    name: "Kali Linux",
    description: "The go-to Linux distro for penetration testing, packed with pre-installed tools.",
  },
  {
    name: "Nmap",
    description: "Network scanner to discover hosts and services on a computer network.",
  },
  {
    name: "Metasploit",
    description: "A powerful exploitation framework used for developing and executing exploits.",
  },
  {
    name: "Wireshark",
    description: "A packet analyzer used to troubleshoot networks and examine traffic in detail.",
  },
  {
    name: "Burp Suite",
    description: "A top-tier web vulnerability scanner and proxy tool for web apps.",
  },
  {
    name: "John the Ripper",
    description: "Password cracker tool to test strength and recover lost credentials.",
  },
  {
    name: "Hydra",
    description: "A fast network login cracker supporting numerous protocols.",
  },
  {
    name: "Aircrack-ng",
    description: "Suite of tools to assess WiFi network security and crack WEP/WPA keys.",
  },
  {
    name: "Social Engineering Toolkit (SET)",
    description: "A tool for automating social engineering attacks with a realistic edge.",
  },
  {
    name: "Python & Bash Scripting",
    description: "Essential for automation, custom exploits, and making your own tools.",
  },
];

const toolList = document.getElementById('tool-list');

tools.forEach(tool => {
  const card = document.createElement('div');
  card.className = 'tool-card';

  const title = document.createElement('h2');
  title.textContent = tool.name;

  const desc = document.createElement('p');
  desc.textContent = tool.description;

  card.appendChild(title);
  card.appendChild(desc);
  toolList.appendChild(card);
});
