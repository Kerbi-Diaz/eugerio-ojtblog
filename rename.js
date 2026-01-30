const fs = require('fs');
const path = require('path');

const weekFolders = [
    'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5',
    'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10',
    'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15'
];

weekFolders.forEach((week, weekIndex) => {
    const folderPath = path.join(__dirname, 'assets', 'img', 'ojtpics', week);
    
    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath)
            .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
            .slice(0, 6); // Only take first 6 images
        
        console.log(`\n${week}:`);
        files.forEach((file, index) => {
            console.log(`  image${index + 1}: ${file}`);
        });
    }
});