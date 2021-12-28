const fs = require('fs');

const writeHTML = (content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', content, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'file created'
            });
            console.log('README generated! Please open the output folder to see your new README.md file')
        });
    });
};

module.exports = writeHTML;