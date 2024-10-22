// let reg = /(?<=(\(([a-zA-Z])+)),(?=([a-zA-Z]\)"))/g

// let reg2 = /(?<=(<template>))[\s\S]*(?=(<\/template>))/

// let regrr = /[a-zA-Z]/g

const fs = require('fs');
const filePath = 'D:/workspace/vite-test/src/App.vue';
const regex = /,(?=\S)/g;
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    data.replace(regex,", ")
    console.log(data);

});