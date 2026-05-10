const fs = require('fs');
const path = require('path');
const { EdgeTTS } = require('node-edge-tts');

const audioDir = path.join(__dirname, 'audio');
if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir);
}

// Ahmet is a deep, professional Turkish male voice
const tts = new EdgeTTS({ voice: 'tr-TR-AhmetNeural', volume: '+0%' }); 

let scriptContent = fs.readFileSync('script.js', 'utf8');
let dataMatch = scriptContent.match(/const leadersData = (\{[\s\S]*?\n\});/);
if(!dataMatch) {
    console.error('Could not find leadersData');
    process.exit(1);
}

let leadersData;
eval('leadersData = ' + dataMatch[1]);

const audioMap = {};

async function generate() {
    let index = 0;
    
    for (const leaderId of Object.keys(leadersData)) {
        const leader = leadersData[leaderId];
        
        // Greeting
        if (leader.greeting) {
            const fileName = `audio/${leaderId}_greeting.mp3`;
            const filePath = path.join(__dirname, fileName);
            console.log(`Generating ${fileName}...`);
            await tts.ttsPromise(leader.greeting, filePath);
            audioMap[leader.greeting] = `./${fileName}`;
        }
        
        // Dictionary
        let dictIndex = 0;
        for (const [key, response] of Object.entries(leader.dictionary)) {
            const fileName = `audio/${leaderId}_dict_${dictIndex}.mp3`;
            const filePath = path.join(__dirname, fileName);
            console.log(`Generating ${fileName}...`);
            await tts.ttsPromise(response, filePath);
            audioMap[response] = `./${fileName}`;
            dictIndex++;
        }
        
        // Default Responses
        let defaultIndex = 0;
        for (const response of leader.defaultResponses) {
            const fileName = `audio/${leaderId}_default_${defaultIndex}.mp3`;
            const filePath = path.join(__dirname, fileName);
            console.log(`Generating ${fileName}...`);
            await tts.ttsPromise(response, filePath);
            audioMap[response] = `./${fileName}`;
            defaultIndex++;
        }
    }
    
    fs.writeFileSync('audioMap.js', `const audioMap = ${JSON.stringify(audioMap, null, 2)};\n`);
    console.log("All audio generated and audioMap.js created successfully!");
}

generate().catch(console.error);
